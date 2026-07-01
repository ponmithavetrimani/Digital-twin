from app.services.qdrant_service import (
    search_memory,
    save_memory,
)


def update_memory(user_id: str, fact: str):
    """
    Simple version:
    Store updated fact.

    Later we'll delete the old one.
    """

    save_memory(
        user_id=user_id,
        text=fact,
        memory_type="fact"
    )