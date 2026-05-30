#models.py
from pydantic import BaseModel, EmailStr
from typing import List
from datetime import date

class UserSignup(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str


class Task(BaseModel):
    task_name: str
    deadline: date
    
class UserProfile(BaseModel):
    username: str
    college: str
    department: str
    year: str
    