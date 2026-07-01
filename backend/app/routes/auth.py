from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr
from app.services.auth_service import (
    register_user,
    login_user,
    get_user_profile,
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


# -------------------------
# Request Models
# -------------------------

class RegisterRequest(BaseModel):
    name: str
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


# -------------------------
# Register
# -------------------------

@router.post("/register")
async def register(request: RegisterRequest):
    """
    Register a new user.
    """

    try:
        user = register_user(
            request.name,
            request.email,
            request.password,
        )

        return {
            "success": True,
            "message": "User registered successfully",
            "data": user,
        }

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
        )


# -------------------------
# Login
# -------------------------

@router.post("/login")
async def login(request: LoginRequest):
    """
    Login user.
    """

    try:

        token = login_user(
            request.email,
            request.password,
        )

        return {
            "success": True,
            "token": token,
        }

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(e),
        )


# -------------------------
# User Profile
# -------------------------

@router.get("/profile/{user_id}")
async def profile(user_id: str):

    try:

        profile = get_user_profile(user_id)

        return {
            "success": True,
            "data": profile,
        }

    except Exception as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


# -------------------------
# Health Check
# -------------------------

@router.get("/health")
async def health():

    return {
        "status": "ok",
        "service": "Authentication API",
    }