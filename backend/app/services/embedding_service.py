from sentence_transformers import SentenceTransformer

# Load embedding model only once
model = SentenceTransformer("all-MiniLM-L6-v2")


def generate_embedding(text: str) -> list[float]:
    """
    Convert text into a 384-dimensional embedding vector.
    """

    embedding = model.encode(text)

    return embedding.tolist()


if __name__ == "__main__":

    sample = "I love Artificial Intelligence and Cricket."

    vector = generate_embedding(sample)

    print("Text:", sample)
    print("Vector Length:", len(vector))
    print("First 10 Values:", vector[:10])