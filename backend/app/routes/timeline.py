from fastapi import APIRouter

router = APIRouter(
    prefix="/timeline",
    tags=["Timeline"]
)

timeline = [
    {
        "year": 2024,
        "event": "Started AI & DS"
    },
    {
        "year": 2025,
        "event": "First Hackathon"
    }
]

@router.get("/")
async def get_timeline():

    return timeline