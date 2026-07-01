from app.services.qdrant_service import client, COLLECTION_NAME


def get_dashboard_stats(user_id: str):

    points, _ = client.scroll(
        collection_name=COLLECTION_NAME,
        with_payload=True,
        limit=1000,
    )

    memories = []

    for point in points:

        payload = point.payload

        if payload["user_id"] == user_id:
            memories.append(payload)

    total_memories = len(memories)

    facts = len(
        [m for m in memories if m["type"] == "fact"]
    )

    conversations = len(
        [m for m in memories if m["type"] == "conversation"]
    )

    return {
        "total_memories": total_memories,
        "facts": facts,
        "conversations": conversations,
    }