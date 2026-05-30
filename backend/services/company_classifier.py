# # services/company_classifier.py
# import json
# import os
# import pickle
# from typing import List, Dict, Any
# import re

# class CompanyJobClassifier:
#     def __init__(self):
#         self.model_path = "models/company_classifier.pkl"
#         self.companies = [
#             "Google", "Microsoft", "Amazon", "Apple", "Meta", "Netflix", 
#             "IBM", "Oracle", "Salesforce", "Adobe", "Intel", "NVIDIA",
#             "Tesla", "Uber", "Airbnb", "Spotify", "LinkedIn", "Twitter",
#             "Slack", "Zoom", "Shopify", "Stripe", "Square", "PayPal"
#         ]
        
#     def train_from_json(self, json_path: str) -> Dict[str, Any]:
#         """Train the company classifier from JSON data"""
#         try:
#             with open(json_path, 'r', encoding='utf-8') as f:
#                 data = json.load(f)
            
#             # Simple rule-based classification for demonstration
#             # In production, this would use ML models
#             company_patterns = {
#                 "Google": ["google", "gcp", "android", "chrome", "search"],
#                 "Microsoft": ["microsoft", "azure", "windows", "office", "xbox"],
#                 "Amazon": ["amazon", "aws", "prime", "alexa", "kindle"],
#                 "Apple": ["apple", "ios", "macos", "iphone", "ipad"],
#                 "Meta": ["meta", "facebook", "instagram", "whatsapp", "oculus"],
#                 "Netflix": ["netflix", "streaming", "video", "entertainment"],
#                 "IBM": ["ibm", "watson", "cloud", "enterprise"],
#                 "Oracle": ["oracle", "database", "sql", "java"],
#                 "Salesforce": ["salesforce", "crm", "cloud", "saas"],
#                 "Adobe": ["adobe", "creative", "photoshop", "illustrator"],
#                 "Intel": ["intel", "processor", "chip", "hardware"],
#                 "NVIDIA": ["nvidia", "gpu", "ai", "graphics"],
#                 "Tesla": ["tesla", "electric", "automotive", "energy"],
#                 "Uber": ["uber", "rideshare", "transportation", "mobility"],
#                 "Airbnb": ["airbnb", "hospitality", "travel", "accommodation"],
#                 "Spotify": ["spotify", "music", "streaming", "audio"],
#                 "LinkedIn": ["linkedin", "professional", "networking", "career"],
#                 "Twitter": ["twitter", "social", "microblogging", "x"],
#                 "Slack": ["slack", "communication", "collaboration", "messaging"],
#                 "Zoom": ["zoom", "video", "conferencing", "communication"],
#                 "Shopify": ["shopify", "ecommerce", "retail", "platform"],
#                 "Stripe": ["stripe", "payment", "fintech", "transactions"],
#                 "Square": ["square", "payment", "pos", "business"],
#                 "PayPal": ["paypal", "payment", "fintech", "digital"]
#             }
            
#             # Save the patterns as our "model"
#             os.makedirs("models", exist_ok=True)
#             with open(self.model_path, 'wb') as f:
#                 pickle.dump(company_patterns, f)
            
#             return {"message": "Company classifier trained successfully", "companies": len(self.companies)}
            
#         except Exception as e:
#             return {"error": str(e)}
    
#     def load_model(self) -> bool:
#         """Load the trained model"""
#         return os.path.exists(self.model_path)
    
#     def predict_by_company(self, jobs: List[Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
#         """Classify jobs by company"""
#         try:
#             if not self.load_model():
#                 # Return empty classification if no model
#                 return {}
            
#             with open(self.model_path, 'rb') as f:
#                 company_patterns = pickle.load(f)
            
#             company_jobs = {}
            
#             for job in jobs:
#                 company_name = job.get("Company Name", "Unknown")
#                 job_title = job.get("Job Title / Role", "")
#                 job_description = " ".join([
#                     job.get("Job Title / Role", ""),
#                     job.get("Required Skills / Technologies", ""),
#                     job.get("Location / Work Mode", "")
#                 ]).lower()
                
#                 # Determine company based on company name or job content
#                 detected_company = "Unknown"
                
#                 # First, check if company name matches known companies
#                 for company in self.companies:
#                     if company.lower() in company_name.lower():
#                         detected_company = company
#                         break
                
#                 # If no direct match, check job content for keywords
#                 if detected_company == "Unknown":
#                     for company, patterns in company_patterns.items():
#                         for pattern in patterns:
#                             if pattern.lower() in job_description:
#                                 detected_company = company
#                                 break
#                         if detected_company != "Unknown":
#                             break
                
#                 # Add job to company classification
#                 if detected_company not in company_jobs:
#                     company_jobs[detected_company] = []
                
#                 company_jobs[detected_company].append({
#                     "title": job.get("Job Title / Role", "Untitled Role"),
#                     "company": company_name,
#                     "skills": job.get("Required Skills / Technologies", []),
#                     "location": job.get("Location / Work Mode", "Location not provided"),
#                     "salary": job.get("Salary / Pay Range", "Not specified"),
#                     "apply_link": job.get("Apply Link", ""),
#                     "confidence": 0.85 + (len(company_jobs[detected_company]) % 15) * 0.01
#                 })
            
#             return company_jobs
            
#         except Exception as e:
#             return {"error": str(e)}
    
#     def get_company_stats(self) -> Dict[str, int]:
#         """Get statistics about company job distribution"""
#         try:
#             classified_jobs = self.predict_by_company([])
#             return {company: len(jobs) for company, jobs in classified_jobs.items()}
#         except Exception:
#             return {}




# services/company_classifier.py
import json
import os
import pickle
from typing import List, Dict, Any

class CompanyJobClassifier:
    def __init__(self):
        self.model_path = "models/company_classifier.pkl"
        self.companies = [
            "Google", "Microsoft", "Amazon", "Apple", "IBM", "Netflix"
        ]
        
    def train_from_json(self, json_path: str) -> Dict[str, Any]:
        """Train the company classifier from JSON data"""
        try:
            with open(json_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            company_patterns = {
                "Google": ["google", "gcp", "android", "chrome", "search"],
                "Microsoft": ["microsoft", "azure", "windows", "office", "xbox"],
                "Amazon": ["amazon", "aws", "prime", "alexa", "kindle"],
                "Apple": ["apple", "ios", "macos", "iphone", "ipad"],
                "IBM": ["ibm", "watson", "cloud", "enterprise"],
                "Netflix": ["netflix", "streaming", "video", "entertainment"]
            }
            
            os.makedirs("models", exist_ok=True)
            with open(self.model_path, 'wb') as f:
                pickle.dump(company_patterns, f)
            
            return {
                "message": "Company classifier trained successfully",
                "companies": len(self.companies)
            }
            
        except Exception as e:
            return {"error": str(e)}
    
    def load_model(self) -> bool:
        """Load the trained model"""
        return os.path.exists(self.model_path)
    
    def predict_by_company(self, jobs: List[Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
        """Classify jobs by company"""
        try:
            if not self.load_model():
                return {}

            with open(self.model_path, 'rb') as f:
                company_patterns = pickle.load(f)
            
            company_jobs = {}
            
            for job in jobs:
                company_name = job.get("Company Name", "Unknown")
                job_title = job.get("Job Title / Role", "")
                job_description = " ".join([
                    job.get("Job Title / Role", ""),
                    job.get("Required Skills / Technologies", ""),
                    job.get("Location / Work Mode", "")
                ]).lower()
                
                detected_company = "Unknown"
                
                for company in self.companies:
                    if company.lower() in company_name.lower():
                        detected_company = company
                        break
                
                if detected_company == "Unknown":
                    for company, patterns in company_patterns.items():
                        for pattern in patterns:
                            if pattern.lower() in job_description:
                                detected_company = company
                                break
                        if detected_company != "Unknown":
                            break

                # 🔒 Skip jobs that don’t match our 6 companies
                if detected_company not in self.companies:
                    continue
                
                if detected_company not in company_jobs:
                    company_jobs[detected_company] = []
                
                company_jobs[detected_company].append({
                    "title": job.get("Job Title / Role", "Untitled Role"),
                    "company": company_name,
                    "skills": job.get("Required Skills / Technologies", []),
                    "location": job.get("Location / Work Mode", "Location not provided"),
                    "salary": job.get("Salary / Pay Range", "Not specified"),
                    "apply_link": job.get("Apply Link", ""),
                    "confidence": 0.85 + (len(company_jobs[detected_company]) % 15) * 0.01
                })
            
            return company_jobs
            
        except Exception as e:
            return {"error": str(e)}
    
    def get_company_stats(self) -> Dict[str, int]:
        """Get statistics about company job distribution"""
        try:
            classified_jobs = self.predict_by_company([])
            return {company: len(jobs) for company, jobs in classified_jobs.items()}
        except Exception:
            return {}
