from pydantic import BaseModel, EmailStr
from typing import Optional

class User(BaseModel):
    id: str
    name: str
    email: EmailStr
    photo_url: Optional[str] = None

class UserCreate(BaseModel):
    name: str
    email: EmailStr

class UserResponse(BaseModel):
    success: bool
    user: User