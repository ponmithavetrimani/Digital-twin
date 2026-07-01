from pydantic import BaseModel
from typing import Optional, List, Literal

class Memory(BaseModel):
    id: str
    user_id: str
    text: str
    category: Literal["chat", "preference", "event"]
    timestamp: str
    embedding: Optional[List[float]] = None

class MemorySearchRequest(BaseModel):
    user_id: str
    query: str

class MemorySearchResponse(BaseModel):
    success: bool
    memories: List[Memory]