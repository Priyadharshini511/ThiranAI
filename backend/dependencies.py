# dependencies.py
from fastapi import Depends, HTTPException, status
from jwt_handler import decode_access_token, oauth2_scheme

async def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = decode_access_token(token)
    email: str = payload.get("sub")
    if email is None:
        raise HTTPException(status_code=401, detail="Could not validate credentials")
    return email

# # dependencies.py
# from fastapi import Depends, HTTPException
# from jwt_handler import decode_access_token, oauth2_scheme
# from database import db

# users_collection = db["users"]

# async def get_current_user(token: str = Depends(oauth2_scheme)):
#     payload = decode_access_token(token)
#     email: str = payload.get("sub")

#     if email is None:
#         raise HTTPException(status_code=401, detail="Could not validate credentials")

#     user = await users_collection.find_one({"email": email}, {"_id": 0, "username": 1, "email": 1})
#     if user is None:
#         raise HTTPException(status_code=404, detail="User not found")

#     return user  # Now returns a dictionary with 'username' and 'email'
