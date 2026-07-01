from fastapi import APIRouter
from app.models import TwinProfile
from memory.qdrant_client import get_personality_summary

router = APIRouter()

@router.get("/{user_id}", response_model=TwinProfile)
async def get_twin(user_id: str):
    summary = await get_personality_summary(user_id)
    return TwinProfile(
        user_id=user_id,
        personality_summary=summary["summary"],
        top_traits=summary["traits"]
    )