# from fastapi import APIRouter, UploadFile, File, HTTPException, Request
# from fastapi.responses import JSONResponse

# router = APIRouter(prefix="/pdf", tags=["PDF"])

# # In-memory storage (you can replace with DB or persistent cache)
# uploaded_files = {}

# @router.post("/upload")
# async def upload_pdf(file: UploadFile = File(...)):
#     if not file.filename.endswith('.pdf'):
#         raise HTTPException(status_code=400, detail="Only PDF files are supported")

#     contents = await file.read()
#     uploaded_files[file.filename] = contents

#     # Simulate PDF processing logic here
#     return {
#         "filename": file.filename,
#         "message": f"Document '{file.filename}' processed successfully!"
#     }


# @router.post("/ask")
# async def ask_question(request: Request):
#     data = await request.json()
#     question = data.get("question")

#     if not uploaded_files:
#         raise HTTPException(status_code=400, detail="No PDF uploaded")

#     # Simulate answer
#     return {
#         "answer": f"Answer to your question: '{question}' based on uploaded PDF.",
#         "sources": [
#             {"content": "Example source content from PDF page 1"},
#             {"content": "Reference from another page..."}
#         ]
#     }

from fastapi import APIRouter, UploadFile, File, HTTPException, Request, Depends
from fastapi.responses import JSONResponse
from jwt_handler import oauth2_scheme
from dependencies import get_current_user
import os
import shutil
from typing import Dict

router = APIRouter(
    prefix="/pdf",
    tags=["PDF Handler"]
)

UPLOAD_DIR = "uploaded_pdfs"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# In-memory store (can be replaced with DB or persistent cache)
user_uploaded_pdfs: Dict[str, bytes] = {}

@router.post("/upload")
async def upload_pdf(
    file: UploadFile = File(...),
    user: str = Depends(get_current_user)
):
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are supported")

    contents = await file.read()
    filename = f"{user}__{file.filename}"
    filepath = os.path.join(UPLOAD_DIR, filename)

    # Save file to disk
    with open(filepath, "wb") as f:
        f.write(contents)

    # Store content in memory (for QnA)
    user_uploaded_pdfs[user] = contents

    return {
        "filename": file.filename,
        "message": f"PDF uploaded successfully by user {user}."
    }


@router.post("/ask")
async def ask_question(
    request: Request,
    user: str = Depends(get_current_user)
):
    data = await request.json()
    question = data.get("question")

    if not question:
        raise HTTPException(status_code=400, detail="Question is required.")

    if user not in user_uploaded_pdfs:
        raise HTTPException(status_code=404, detail="No PDF found for this user.")

    # Simulate answer (replace with real model/langchain)
    answer = f"Simulated answer to '{question}' based on uploaded PDF content for user {user}."

    return {
        "answer": answer,
        "sources": [
            {"content": "Example extracted content from PDF"},
            {"content": "Another piece of content..."}
        ]
    }
