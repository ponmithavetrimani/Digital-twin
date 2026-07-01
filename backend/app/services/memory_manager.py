from app.services.qdrant_service import search_memory


def should_save_memory(user_id: str, fact: str) -> bool:
    """
    Check whether a fact already exists.
    """

    memories = search_memory(user_id, fact, limit=3)

    fact_lower = fact.lower().strip()

    for memory in memories:
        if memory.lower().strip() == fact_lower:
            return False

    return True