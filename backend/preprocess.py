import re
import string
import pickle
import nltk
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer

# Download stopwords once
nltk.download('stopwords')
STOPWORDS = set(stopwords.words('english'))

# Clean text function
def clean_text(text):
    # Lowercase
    text = text.lower()
    # Remove punctuation
    text = text.translate(str.maketrans('', '', string.punctuation))
    # Remove numbers
    text = re.sub(r'\d+', '', text)
    # Remove stopwords
    words = text.split()
    filtered_words = [word for word in words if word not in STOPWORDS]
    return " ".join(filtered_words)

# Fit and save vectorizer (used in train_model.py only)
def save_vectorizer(corpus, filename='vectorizer.pkl'):
    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(corpus)
    with open(filename, 'wb') as f:
        pickle.dump(vectorizer, f)
    return X

# Load saved vectorizer and transform new text (used in app.py)
def transform_text(text_list, filename='vectorizer.pkl'):
    with open(filename, 'rb') as f:
        vectorizer = pickle.load(f)
    return vectorizer.transform(text_list)
