from memory.qdrant_client import search_memories

class MemoryAgent:

    async def run(self, user_id: str, query: str):

        memories = search_memories(
            user_id=user_id,
            query=query,
            limit=5
        )

        return {
            "memories": memories
        }