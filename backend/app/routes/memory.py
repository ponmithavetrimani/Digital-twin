from fastapi import APIRouter

from app.services.qdrant_service import search_memory

router = APIRouter(
    prefix="/memory",
    tags=["Memory"]
)


@router.get("/{user_id}")
def get_memory(user_id: str):

    memories = search_memory(
        user_id=user_id,
        query="",
        limit=100
    )

    return {
        "count": len(memories),
        "memories": memories
    }