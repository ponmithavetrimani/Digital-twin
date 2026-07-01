from fastapi import APIRouter
from app.models import IngestRequest
from app.services.ingest_service import process_and_store

router = APIRouter()

@router.post("/")
async def ingest_data(req: IngestRequest):
    stored = await process_and_store(
        user_id=req.user_id,
        data_type=req.data_type,
        content=req.content
    )
    return {
        "status": "stored",
        "chunks": stored["chunks"],
        "collection": stored["collection"]
    }