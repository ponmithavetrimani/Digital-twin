from pydantic import BaseModel
from typing import List

class Personality(BaseModel):
    user_id: str
    communication_style: str
    tone: str
    interests: List[str]
    strengths: List[str]
    summary: str

class PersonalityResponse(BaseModel):
    success: bool
    personality: Personality