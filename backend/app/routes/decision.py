from fastapi import APIRouter

router = APIRouter(
    prefix="/decision",
    tags=["Decision"]
)

@router.post("/")
async def decision(data: dict):

    question = data.get("question")

    return {

        "question": question,

        "answer": "This will later use Gemini + Memory."

    }