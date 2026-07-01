from fastapi import APIRouter

router = APIRouter(
    prefix="/personality",
    tags=["Personality"]
)

@router.get("/")
async def personality():

    return {

        "language": "Tanglish",

        "emoji": True,

        "tone": "Friendly",

        "learning": True

    }