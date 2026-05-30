from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import List, Optional
from services.pdf_generator import generate_resume_pdf
import io

router = APIRouter(prefix="/api/resume", tags=["resume"])

class EducationItem(BaseModel):
    degree: str
    school: str
    year: str
    score: str

class InternshipItem(BaseModel):
    title: str
    company: str
    duration: str
    description: str

class ProjectItem(BaseModel):
    name: str
    tech: str
    description: str

class CertificationItem(BaseModel):
    name: str
    platform: str
    year: str

class ResumeData(BaseModel):
    fullName: str
    email: str
    phone: str
    linkedin: Optional[str] = ""
    github: Optional[str] = ""
    education: List[EducationItem]
    internships: List[InternshipItem]
    projects: List[ProjectItem]
    certifications: List[CertificationItem]
    skills: str
    achievements: str

@router.post("/generate-pdf")
async def generate_pdf(resume_data: ResumeData):
    try:
        pdf_buffer = generate_resume_pdf(resume_data.dict())
        
        return StreamingResponse(
            io.BytesIO(pdf_buffer),
            media_type="application/pdf",
            headers={
                "Content-Disposition": f"attachment; filename={resume_data.fullName.replace(' ', '_')}_Resume.pdf"
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
