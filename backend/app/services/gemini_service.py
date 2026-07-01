import os

import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise ValueError("❌ GEMINI_API_KEY not found in .env file")

# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)

# Load Gemini Model
model = genai.GenerativeModel("models/gemini-2.5-flash")


def generate_reply(user_message: str, memories: list[str] = None) -> str:
    """
    Generate AI response using Gemini + Retrieved Memories.
    """

    if memories is None:
        memories = []

    memory_context = "\n".join(memories)

    prompt = f"""
You are a Personal Digital Twin AI.

Use the user's memories whenever possible.

User Memories:
{memory_context}

Current User Message:
{user_message}

Reply naturally and personally.
"""

    response = model.generate_content(prompt)

    return response.text


if __name__ == "__main__":

    sample_memories = [
        "My favorite color is blue.",
        "I love coffee.",
        "I enjoy playing cricket."
    ]

    question = "What sport do I like?"

    answer = generate_reply(
        question,
        sample_memories
    )

    print("\n🤖 Gemini Response:\n")
    print(answer)