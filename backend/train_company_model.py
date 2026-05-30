import json
import os
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

# Path to your new JSON data
DATA_PATH = "data/CompanyInternData.json"

# Load data
with open(DATA_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

X = []
y = []

# Extract features and labels
for company, items in data.items():
    for item in items:
        role = item.get("Internship Title / Role", "")
        skills = " ".join(item.get("Required Skills / Technologies", []))
        text = f"{role} {skills}"
        X.append(text)
        y.append(company)  # label is the company name

# Create a pipeline: TF-IDF + Naive Bayes
model = make_pipeline(TfidfVectorizer(), MultinomialNB())

# Train the model
model.fit(X, y)

# Save model to file
os.makedirs("model", exist_ok=True)
with open("model/company_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ Company model trained and saved to model/company_model.pkl")
