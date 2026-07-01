from fastapi import APIRouter
from pydantic import BaseModel

from app.services.twin_service import chat_with_twin

router = APIRouter(prefix="/chat", tags=["Chat"])


class ChatRequest(BaseModel):
    user_id: str
    message: str


@router.post("/")
def chat(request: ChatRequest):
    result = chat_with_twin(
        user_id=request.user_id,
        message=request.message,
    )

    return {
        "reply": result["reply"],
        "memories": result["memories_used"],
    }