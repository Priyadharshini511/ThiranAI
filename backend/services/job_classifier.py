# services/job_classifier.py
import json
import os
import joblib
from typing import List, Dict
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline

MODEL_PATH = "models/job_classifier.pkl"

class JobDomainClassifier:
    def __init__(self):
        self.pipeline = None
        self.domains = [
            "Software Development",
            "Data Science", 
            "Machine Learning",
            "Cyber Security",
            "UI&UX design",
            "Devops"
        ]

    def train_from_json(self, file_path: str):
        """Train ML model from job_listings.json"""
        texts = []
        labels = []

        with open(file_path, 'r', encoding='utf-8') as f:
            jobs_data = json.load(f)

        for domain, jobs in jobs_data.items():
            for job in jobs:
                text = f"{job['Job Title / Role']} {' '.join(job['Required Skills / Technologies'])}"
                texts.append(text)
                labels.append(domain)

        # Create pipeline
        self.pipeline = Pipeline([
            ("tfidf", TfidfVectorizer()),
            ("clf", LogisticRegression(max_iter=200))
        ])

        self.pipeline.fit(texts, labels)

        os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)
        joblib.dump(self.pipeline, MODEL_PATH)
        return {"message": "Model trained and saved successfully."}

    def load_model(self):
        """Load trained model"""
        if os.path.exists(MODEL_PATH):
            self.pipeline = joblib.load(MODEL_PATH)
            return True
        return False

    def predict(self, job_title: str, skills: List[str]) -> str:
        """Predict domain for a single job"""
        if not self.pipeline:
            raise ValueError("Model not loaded or trained.")
        text = f"{job_title} {' '.join(skills)}"
        return self.pipeline.predict([text])[0]

    def predict_batch(self, jobs: List[Dict]) -> Dict[str, List[Dict]]:
        """Predict domains for multiple jobs"""
        if not self.pipeline:
            raise ValueError("Model not loaded or trained.")

        classified_jobs = {}
        for idx, job in enumerate(jobs):
            predicted_domain = self.predict(job["Job Title / Role"], job["Required Skills / Technologies"])
            if predicted_domain not in classified_jobs:
                classified_jobs[predicted_domain] = []
            classified_jobs[predicted_domain].append({
                "id": f"{predicted_domain}_{len(classified_jobs[predicted_domain])}",
                "title": job["Job Title / Role"],
                "company": job["Company Name"],
                "skills": job["Required Skills / Technologies"],
                "location": job["Location / Work Mode"],
                "salary": job["Salary / Pay Range"],
                "apply_link": job["Apply Link"],
                "domain": predicted_domain
            })
        return classified_jobs
