# routes/job_classification.py
from fastapi import FastAPI, HTTPException
import json
from services.job_classifier import JobDomainClassifier

app = FastAPI()
classifier = JobDomainClassifier()

@app.post("/api/train")
def train_model():
    try:
        return classifier.train_from_json("data/job_listings.json")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/jobs/classified")
def get_classified_jobs():
    try:
        if not classifier.load_model():
            raise HTTPException(status_code=400, detail="Model not trained yet. Call /api/train first.")

        with open("data/job_listings.json", 'r', encoding='utf-8') as f:
            jobs_data = json.load(f)

        all_jobs = []
        for domain_jobs in jobs_data.values():
            all_jobs.extend(domain_jobs)

        return classifier.predict_batch(all_jobs)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/jobs/domain/{domain}")
def get_jobs_by_domain(domain: str):
    try:
        if not classifier.load_model():
            raise HTTPException(status_code=400, detail="Model not trained yet. Call /api/train first.")

        with open("data/job_listings.json", 'r', encoding='utf-8') as f:
            jobs_data = json.load(f)

        all_jobs = []
        for domain_jobs in jobs_data.values():
            all_jobs.extend(domain_jobs)

        classified_jobs = classifier.predict_batch(all_jobs)
        return classified_jobs.get(domain, [])
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
