# routers/predict.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import pickle

router = APIRouter()

# Load domain model
with open("model/model.pkl", "rb") as f:
    domain_model = pickle.load(f)

# Load company model
with open("model/company_model.pkl", "rb") as f:
    company_model = pickle.load(f)

# Request schema
class InternshipData(BaseModel):
    Internship_Title_or_Role: str
    Required_Skills_or_Technologies: list[str]

@router.get("/")
def home():
    return {"message": "🚀 Internship Classification API is running!"}

@router.post("/predict-domain")
def predict_domain(data: InternshipData):
    role = data.Internship_Title_or_Role
    skills = data.Required_Skills_or_Technologies

    if not role and not skills:
        raise HTTPException(status_code=400, detail="Missing required fields.")

    input_text = f"{role} {' '.join(skills)}"
    prediction = domain_model.predict([input_text])[0]
    return {"predicted_domain": prediction}

@router.post("/predict-company")
def predict_company(data: InternshipData):
    role = data.Internship_Title_or_Role
    skills = data.Required_Skills_or_Technologies

    if not role and not skills:
        raise HTTPException(status_code=400, detail="Missing required fields.")

    input_text = f"{role} {' '.join(skills)}"
    prediction = company_model.predict([input_text])[0]
    return {"predicted_company": prediction}
