# semantic_search.py

import json
from sentence_transformers import SentenceTransformer, util

# Load the model once at startup
model = SentenceTransformer('all-MiniLM-L6-v2')

# Load and preprocess the course data
with open("courses.json", "r", encoding="utf-8") as file:
    courses = json.load(file)

course_texts = [
    f"{course['course_name']} {course['domain']} {course['provider']} {course.get('description', '')}"
    for course in courses
]
course_embeddings = model.encode(course_texts, convert_to_tensor=True)

def search_courses(query: str, top_n: int = 5):
    query_embedding = model.encode(query, convert_to_tensor=True)
    cosine_scores = util.cos_sim(query_embedding, course_embeddings)[0]
    top_results = cosine_scores.argsort(descending=True)[:top_n]
    return [courses[int(idx)] for idx in top_results]
