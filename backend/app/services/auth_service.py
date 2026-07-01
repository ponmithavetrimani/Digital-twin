from agents.orchestrator import run_twin_pipeline
from memory.qdrant_client import search_memories

async def get_twin_reply(user_id: str, message: str):
    # Step 1: relevant memories fetch
    memories = await search_memories(
        user_id=user_id,
        query=message,
        top_k=5
    )

    # Step 2: agents run — style + twin
    result = await run_twin_pipeline(
        user_id=user_id,
        message=message,
        memories=memories
    )

    return {
        "reply": result["response"],
        "confidence": result["confidence"],
        "memories_used": len(memories)
    }