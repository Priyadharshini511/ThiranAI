# train_model.py

import json
import os
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

# Path to your JSON data
DATA_PATH = "data/DomainInternData.json"

# Load data
with open(DATA_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

X = []
y = []

# Extract features and labels
for category, items in data.items():
    for item in items:
        role = item.get("Internship Title / Role", "")
        skills = " ".join(item.get("Required Skills / Technologies", []))
        text = f"{role} {skills}"
        X.append(text)
        y.append(category)

# Create a pipeline: TF-IDF + Naive Bayes
model = make_pipeline(TfidfVectorizer(), MultinomialNB())

# Train the model
model.fit(X, y)

# Save model to file
os.makedirs("model", exist_ok=True)
with open("model/model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ Model trained and saved to model/model.pkl")
