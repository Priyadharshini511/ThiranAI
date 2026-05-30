# routes/company_classification.py
from fastapi import FastAPI, HTTPException
import json
from services.company_classifier import CompanyJobClassifier

app = FastAPI()
classifier = CompanyJobClassifier()

@app.post("/api/companies/train")
def train_company_model():
    """Train the company classification model"""
    try:
        return classifier.train_from_json("data/job_listings.json")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/companies/ml-classified")
def get_company_classified_jobs():
    """Get all jobs classified by company using ML model"""
    try:
        if not classifier.load_model():
            raise HTTPException(status_code=400, detail="Model not trained yet. Call /api/companies/train first.")

        with open("data/job_listings.json", 'r', encoding='utf-8') as f:
            jobs_data = json.load(f)

        all_jobs = []
        for domain_jobs in jobs_data.values():
            all_jobs.extend(domain_jobs)

        return classifier.predict_by_company(all_jobs)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/companies/{company}")
def get_jobs_by_company(company: str):
    """Get jobs for a specific company"""
    try:
        if not classifier.load_model():
            raise HTTPException(status_code=400, detail="Model not trained yet. Call /api/companies/train first.")

        with open("data/job_listings.json", 'r', encoding='utf-8') as f:
            jobs_data = json.load(f)

        all_jobs = []
        for domain_jobs in jobs_data.values():
            all_jobs.extend(domain_jobs)

        classified_jobs = classifier.predict_by_company(all_jobs)
        return classified_jobs.get(company, [])
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
