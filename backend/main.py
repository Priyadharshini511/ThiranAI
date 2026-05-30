#main.py
from fastapi import FastAPI, Depends, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Query
from models import UserSignup, UserLogin
from fastapi.responses import FileResponse,StreamingResponse
from auth import signup_user, login_user
from dependencies import get_current_user  # 👈
from jwt_handler import oauth2_scheme
import shutil
import json
import os
import mimetypes
from models import Task
from datetime import datetime
from database import db  
from fastapi import HTTPException
from datetime import timedelta
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import pandas as pd
from semantic_search import search_courses
from user_profile import profile_router
from routers import predict
from pdf_handler import router as pdf_router
# Import routes
from routers.mocktest_routes import router as mocktest_router
from model.ats_checker import match_resume_with_jd
from utils.extract_text import extract_text_from_pdf
from routers.resume_routes import router as resume_router
from email_utils import send_contact_email

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


tasks_collection = db["tasks"]
user_profiles_collection = db["user_profiles"]
app.include_router(profile_router)
app.include_router(predict.router)
app.include_router(pdf_router)
app.include_router(mocktest_router)
app.include_router(resume_router)
@app.post("/signup")
async def signup(user: UserSignup):
    return await signup_user(user.username, user.email, user.password)

@app.post("/login")
async def login(user: UserLogin):
    return await login_user(user.email, user.password)

# ✅ Protected route example
@app.get("/protected")
async def protected_route(user: str = Depends(get_current_user)):
    return {"message": f"Welcome {user}, you're authorized!"}

UPLOAD_DIR = "uploaded_notes"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/upload-note/")
async def upload_note(
    file: UploadFile = File(...),
    user: str = Depends(get_current_user)  # 👈 get current user from token
):
    file_location = f"{UPLOAD_DIR}/{user}__{file.filename}"  # 👈 use email as ID
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return {"message": "File uploaded successfully", "filename": file.filename}


@app.get("/user-notes/")
def get_user_notes(user: str = Depends(get_current_user)):
    user_files = [
        f for f in os.listdir(UPLOAD_DIR)
        if f.startswith(f"{user}__")
    ]
    return {"files": user_files}

@app.get("/download-note/")
def download_note(filename: str):
    filepath = os.path.join(UPLOAD_DIR, filename)
    if os.path.exists(filepath):
        return FileResponse(path=filepath, filename=filename.split("__", 1)[-1])
    return {"error": "File not found"}

@app.get("/view-note")
def view_note(filename: str):
    filepath = os.path.join(UPLOAD_DIR, filename)
    if os.path.exists(filepath):
        mime_type, _ = mimetypes.guess_type(filepath)
        if not mime_type:
            mime_type = "application/octet-stream"
        
        return StreamingResponse(
            open(filepath, "rb"),
            media_type=mime_type,
            headers={
                "Content-Disposition": f'inline; filename="{filename.split("__", 1)[-1]}"'
            }
        )
    return {"error": "File not found"}

@app.delete("/delete-note")
def delete_note(
    filename: str = Query(...),
    user: str = Depends(get_current_user)
):
    filepath = os.path.join(UPLOAD_DIR, filename)
    
    # 🔐 Prevent deleting others' files
    if not filename.startswith(f"{user}__"):
        return {"error": "Unauthorized access"}

    if os.path.exists(filepath):
        os.remove(filepath)
        return {"message": "File deleted successfully"}
    
    return {"error": "File not found"}

@app.post("/add-task")
async def add_task(task: Task, user: str = Depends(get_current_user)):
    task_data = {
        "email": user,
        "task_name": task.task_name,
        "deadline": str(task.deadline),
        "created_at": datetime.utcnow(),
    }
    await tasks_collection.insert_one(task_data)
    return {"message": "Task added successfully"}

@app.get("/get-tasks")
async def get_tasks(user: str = Depends(get_current_user)):
    tasks_cursor = tasks_collection.find({"email": user})
    tasks = await tasks_cursor.to_list(length=100)

    # Convert ObjectId to str
    for task in tasks:
        task["_id"] = str(task["_id"])  # 🔥 this line is critical

    return {"tasks": tasks}

@app.get("/notifications")
async def get_upcoming_deadlines(user: str = Depends(get_current_user)):
    try:
        today = datetime.utcnow().date()
        day_after = today + timedelta(days=2)

        tasks_cursor = tasks_collection.find({
            "email": user,
            "deadline": {
                "$gte": today.isoformat(),
                "$lte": day_after.isoformat()
            }
        })

        tasks = await tasks_cursor.to_list(length=100)

        for task in tasks:
            task["_id"] = str(task["_id"])

        return {"count": len(tasks), "tasks": tasks}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.get("/search-courses")
async def search_courses_endpoint(q: str = Query(..., min_length=1), top_n: int = 5):
    try:
        results = search_courses(q, top_n)
        return {"results": results}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


#roshhhh


# Job Classification Endpoints
@app.get("/api/jobs/domains")
async def get_job_domains():
    """Get all available job domains"""
    return {
        "domains": [
            "Software Development",
            "Data Science", 
            "Machine Learning",
            "Cyber Security",
            "UI&UX design",
            "Devops"
        ]
    }

@app.get("/api/jobs/classified")
async def get_classified_jobs():
    """Get all jobs classified by ML model"""
    try:
        with open("data/job_listings.json", 'r', encoding='utf-8') as f:
            jobs_data = json.load(f)
        
        # Simple classification based on original domains
        classified_jobs = {}
        
        for domain, jobs in jobs_data.items():
            # Map original domains to standardized ones
            domain_mapping = {
                "Fullstack": "Software Development",
                "Data Science": "Data Science",
                "Machine Learning": "Machine Learning",
                "Cyber Security": "Cyber Security",
                "UI&UX design": "UI&UX design",
                "Devops": "Devops"
            }
            
            standardized_domain = domain_mapping.get(domain, "Software Development")
            
            if standardized_domain not in classified_jobs:
                classified_jobs[standardized_domain] = []
            
            for job in jobs:
                classified_jobs[standardized_domain].append({
                    "id": f"{standardized_domain}_{len(classified_jobs[standardized_domain])}",
                    "title": job["Job Title / Role"],
                    "company": job["Company Name"],
                    "skills": job["Required Skills / Technologies"],
                    "location": job["Location / Work Mode"],
                    "salary": job["Salary / Pay Range"],
                    "apply_link": job["Apply Link"],
                    "domain": standardized_domain
                })
        
        return classified_jobs
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/jobs/domain/{domain}")
async def get_jobs_by_domain(domain: str):
    """Get jobs for a specific domain"""
    try:
        all_jobs = await get_classified_jobs()
        return {domain: all_jobs.get(domain, [])}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/jobs/stats")
async def get_job_stats():
    """Get statistics about job distribution"""
    try:
        classified_jobs = await get_classified_jobs()
        stats = {domain: len(jobs) for domain, jobs in classified_jobs.items()}
        return stats
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Company-based Job Endpoints
@app.get("/api/companies")
async def get_companies():
    """Get list of all companies with job counts"""
    try:
        classified_jobs = await get_classified_jobs()
        company_jobs = {}
        
        # Group jobs by company
        for domain, jobs in classified_jobs.items():
            for job in jobs:
                company = job.get("company", "Unknown")
                if company not in company_jobs:
                    company_jobs[company] = []
                company_jobs[company].append(job)
        
        # Return companies with job counts
        return {
            "companies": list(company_jobs.keys()),
            "company_jobs": company_jobs
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/companies/ml-classified")
async def get_company_classified_jobs():
    """Get all jobs classified by company using ML model"""
    try:
        classified_jobs = await get_classified_jobs()
        company_jobs = {}
        
        # Group jobs by company
        for domain, jobs in classified_jobs.items():
            for job in jobs:
                company = job.get("company", "Unknown")
                if company not in company_jobs:
                    company_jobs[company] = []
                
                # Add confidence score and additional metadata
                company_jobs[company].append({
                    "id": f"{company}_{len(company_jobs[company])}",
                    "title": job.get("title", "Untitled Role"),
                    "company": company,
                    "skills": job.get("skills", []),
                    "location": job.get("location", "Location not provided"),
                    "salary": job.get("salary", "Not specified"),
                    "apply_link": job.get("apply_link", ""),
                    "confidence": 0.85 + (len(company_jobs[company]) % 15) * 0.01  # Simulated confidence
                })
        
        return company_jobs
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/companies/{company}")
async def get_jobs_by_company(company: str):
    """Get jobs for a specific company"""
    try:
        company_jobs = await get_company_classified_jobs()
        return {company: company_jobs.get(company, [])}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/companies/stats")
async def get_company_stats():
    """Get statistics about company job distribution"""
    try:
        company_jobs = await get_company_classified_jobs()
        stats = {company: len(jobs) for company, jobs in company_jobs.items()}
        return stats
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/check-match/")
async def check_match(resume: UploadFile = File(...), job_description: str = Form(...)):
    contents = await resume.read()
    resume_text = extract_text_from_pdf(contents)
    match_score, matched_keywords = match_resume_with_jd(resume_text, job_description)
    return {
        "score": match_score,
        "matched_keywords": matched_keywords
    }

# ---------- Route: Contact Form Email Sender ----------
@app.post("/contact")
async def contact_form(name: str = Form(...), email: str = Form(...), message: str = Form(...)):
    success = send_contact_email(name, email, message)
    return {"success": success}