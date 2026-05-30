import re
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def preprocess(text):
    return re.sub(r"[^a-zA-Z\s]", "", text.lower())

def match_resume_with_jd(resume_text, job_description):
    resume_clean = preprocess(resume_text)
    jd_clean = preprocess(job_description)

    vectorizer = CountVectorizer().fit_transform([resume_clean, jd_clean])
    vectors = vectorizer.toarray()
    similarity = cosine_similarity([vectors[0]], [vectors[1]])[0][0]

    matched_keywords = list(set(jd_clean.split()) & set(resume_clean.split()))
    return round(similarity * 100, 2), matched_keywords
