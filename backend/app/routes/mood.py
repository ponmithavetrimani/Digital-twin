from fastapi import APIRouter

router = APIRouter(
    prefix="/mood",
    tags=["Mood"]
)

@router.post("/")
async def detect_mood(data: dict):

    text = data.get("message", "").lower()

    mood = "Neutral"

    if "happy" in text:
        mood = "Happy"

    elif "sad" in text:
        mood = "Sad"

    elif "angry" in text:
        mood = "Angry"

    return {
        "mood": mood
    }