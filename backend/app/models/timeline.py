from pydantic import BaseModel
from typing import Literal, List

class TimelineEvent(BaseModel):
    id: str
    user_id: str
    title: str
    description: str
    event_type: Literal["chat", "memory", "decision", "mood"]
    timestamp: str

class TimelineResponse(BaseModel):
    success: bool
    events: List[TimelineEvent]