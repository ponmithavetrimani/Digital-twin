from memory.embedder import embed_text
from memory.qdrant_client import store_vectors

async def process_and_store(
    user_id: str, data_type: str, content: str
):
    # Step 1: chunk the content
    chunks = chunk_text(content, size=300)

    # Step 2: embed each chunk
    vectors = [await embed_text(c) for c in chunks]

    # Step 3: store in Qdrant
    collection = f"{data_type}__{user_id}"
    await store_vectors(collection, chunks, vectors)

    return {"chunks": len(chunks), "collection": collection}

def chunk_text(text: str, size: int = 300):
    words = text.split()
    return [" ".join(words[i:i+size])
            for i in range(0, len(words), size)]