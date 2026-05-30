
# auth.py
from passlib.context import CryptContext
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from database import db
from datetime import datetime
from jwt_handler import create_access_token  # ✅ If using JWT

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
users_collection = db["users"]

# ✅ Define this BEFORE using it
def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(password: str, hashed: str):
    return pwd_context.verify(password, hashed)

# ✅ Signup
async def signup_user(username: str, email: str, password: str):
    existing_user = await users_collection.find_one({"email": email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    user_doc = {
        "username": username,
        "email": email,
        "password": hash_password(password),
        "created_at": datetime.utcnow()
    }

    await users_collection.insert_one(user_doc)
    return {"message": "Signup successful"}

# ✅ Login
async def login_user(email: str, password: str):
    user = await users_collection.find_one({"email": email})
    if not user or not verify_password(password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token(data={"sub": user["email"]})
    return {
        "message": "Login successful",
        "access_token": token,
        "username": user["username"]
    }
