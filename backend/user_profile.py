# # #user_profile.py
# # from fastapi import APIRouter, Depends
# # from models import UserProfile
# # from dependencies import get_current_user
# # from database import db

# # profile_router = APIRouter()
# # user_profiles_collection = db["user_profiles"]

# # @profile_router.post("/profile")
# # async def update_profile(data: UserProfile, user: str = Depends(get_current_user)):
# #     await user_profiles_collection.update_one(
# #         {"email": user},
# #         {
# #             "$set": {
# #                 "email": user,
# #                 "username": data.username,
# #                 "college": data.college,
# #                 "department": data.department,
# #                 "year": data.year,
# #             }
# #         },
# #         upsert=True
# #     )
# #     return {"message": "Profile updated successfully"}

# from fastapi import APIRouter, Depends, HTTPException
# from models import UserProfile
# from dependencies import get_current_user
# from database import db

# profile_router = APIRouter()
# user_profiles_collection = db["user_profiles"]
# users_collection = db["users"]  # If you want to pull username/email from users collection

# # ✅ POST: Update profile
# @profile_router.post("/profile")
# async def update_profile(data: UserProfile, user: str = Depends(get_current_user)):
#     await user_profiles_collection.update_one(
#         {"email": user},
#         {
#             "$set": {
#                 "email": user,
#                 "username": data.username,
#                 "college": data.college,
#                 "department": data.department,
#                 "year": data.year,
#             }
#         },
#         upsert=True
#     )
#     return {"message": "Profile updated successfully"}


# @profile_router.get("/profile", response_model=UserProfile)
# async def get_profile(user_email: str = Depends(get_current_user)):
#     profile = await user_profiles_collection.find_one({"email": user_email})

#     if not profile:
#         raise HTTPException(status_code=404, detail="Profile not found")

#     return {
#         "username": profile["username"],
#         "email": profile["email"],
#         "college": profile["college"],
#         "department": profile["department"],
#         "year": profile["year"]
#     }

#user_profile.py
from fastapi import APIRouter, Depends, HTTPException
from models import UserProfile
from dependencies import get_current_user
from database import db

profile_router = APIRouter()
user_profiles_collection = db["user_profiles"]

@profile_router.post("/profile", tags=["Profile"])
async def update_profile(data: UserProfile, user: dict = Depends(get_current_user)):
    if not data.username or not data.college:
        raise HTTPException(status_code=400, detail="Incomplete profile data")

    await user_profiles_collection.update_one(
        {"email": user["email"]},
        {
            "$set": {
                "email": user["email"],
                "username": data.username,
                "college": data.college,
                "department": data.department,
                "year": data.year,
            }
        },
        upsert=True
    )
    return {"message": "Profile updated successfully"}

@profile_router.get("/profile", response_model=UserProfile, tags=["Profile"])
async def get_profile(user: dict = Depends(get_current_user)):
    profile = await user_profiles_collection.find_one({"email": user["email"]})

    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")

    # Combine stored profile with current user info
    return {
        "username": profile.get("username", user["username"]),
        "email": profile.get("email", user["email"]),
        "college": profile.get("college", ""),
        "department": profile.get("department", ""),
        "year": profile.get("year", ""),
    }


# from fastapi import APIRouter, Depends, HTTPException
# from models import UserProfile
# from dependencies import get_current_user
# from database import db

# profile_router = APIRouter()
# user_profiles_collection = db["user_profiles"]

# @profile_router.post("/profile", tags=["Profile"])
# async def update_profile(data: UserProfile, user: str = Depends(get_current_user)):
#     if not data.username or not data.college:
#         raise HTTPException(status_code=400, detail="Incomplete profile data")

#     await user_profiles_collection.update_one(
#         {"email": user},
#         {
#             "$set": {
#                 "email": user,
#                 "username": data.username,
#                 "college": data.college,
#                 "department": data.department,
#                 "year": data.year,
#             }
#         },
#         upsert=True
#     )
#     return {"message": "Profile updated successfully"}

# @profile_router.get("/profile", response_model=UserProfile, tags=["Profile"])
# async def get_profile(user_email: str = Depends(get_current_user)):
#     profile = await user_profiles_collection.find_one({"email": user_email})

#     if not profile:
#         raise HTTPException(status_code=404, detail="Profile not found")

#     return UserProfile(**profile)
