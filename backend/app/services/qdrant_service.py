import uuid
from datetime import datetime

from qdrant_client import QdrantClient
from qdrant_client.models import (
    Distance,
    VectorParams,
    PointStruct,
)

from app.services.embedding_service import generate_embedding

# Connect to Qdrant
client = QdrantClient(url="http://localhost:6333")

COLLECTION_NAME = "digital_twin_memory"


def create_collection():
    """
    Create the Qdrant collection if it doesn't already exist.
    """

    collections = client.get_collections().collections

    exists = any(
        c.name == COLLECTION_NAME
        for c in collections
    )

    if not exists:
        client.create_collection(
            collection_name=COLLECTION_NAME,
            vectors_config=VectorParams(
                size=384,
                distance=Distance.COSINE,
            ),
        )

        print("✅ Collection Created")

    else:
        print("✅ Collection Already Exists")


def save_memory(
    user_id: str,
    text: str,
    memory_type: str = "conversation"
):
    """
    Save a memory into Qdrant.
    """

    vector = generate_embedding(text)

    client.upsert(
        collection_name=COLLECTION_NAME,
        points=[
            PointStruct(
                id=str(uuid.uuid4()),
                vector=vector,
                payload={
                    "user_id": user_id,
                    "text": text,
                    "type": memory_type,
                    "timestamp": datetime.now().isoformat()
                },
            )
        ],
    )

    print(f"✅ {memory_type.capitalize()} Saved")


def search_memory(
    user_id: str,
    query: str,
    limit: int = 5
):
    """
    Search similar memories.
    """

    query_vector = generate_embedding(query)

    results = client.search(
        collection_name=COLLECTION_NAME,
        query_vector=query_vector,
        limit=limit,
    )

    memories = []

    for result in results:

        payload = result.payload

        if payload["user_id"] == user_id:
            memories.append(payload["text"])

    return memories


# -----------------------------
# Test the service
# -----------------------------
if __name__ == "__main__":

    create_collection()

    # Store sample memories
    save_memory(
        "user001",
        "I love Coffee.",
        "fact"
    )

    save_memory(
        "user001",
        "My favourite color is Blue.",
        "fact"
    )

    save_memory(
        "user001",
        "I love Cricket.",
        "fact"
    )

    print("\nSearching...\n")

    memories = search_memory(
        "user001",
        "Which sport do I like?"
    )

    print("Retrieved Memories:")

    for memory in memories:
        print("-", memory)