from app.services.memory_service import extract_memory
from app.services.memory_manager import should_save_memory
from app.services.memory_update_service import update_memory

from app.services.qdrant_service import (
    search_memory,
    save_memory,
)

from app.services.gemini_service import generate_reply


def chat_with_twin(user_id: str, message: str) -> dict:
    """
    Digital Twin Pipeline

    1. Retrieve relevant memories
    2. Generate Gemini response
    3. Extract important memory
    4. Save or update long-term memory
    5. Save conversation history
    """

    # -----------------------------------
    # Step 1: Retrieve memories
    # -----------------------------------
    memories = search_memory(
        user_id=user_id,
        query=message
    )

    # -----------------------------------
    # Step 2: Generate AI reply
    # -----------------------------------
    reply = generate_reply(
        user_message=message,
        memories=memories
    )

    # -----------------------------------
    # Step 3: Extract memory
    # -----------------------------------
    memory = extract_memory(message)

    if memory:

        # -------------------------------
        # SAVE new fact
        # -------------------------------
        if memory["action"] == "SAVE":

            if should_save_memory(
                user_id,
                memory["fact"]
            ):

                save_memory(
                    user_id=user_id,
                    text=memory["fact"],
                    memory_type="fact"
                )

        # -------------------------------
        # UPDATE existing fact
        # -------------------------------
        elif memory["action"] == "UPDATE":

            update_memory(
                user_id=user_id,
                fact=memory["fact"]
            )

    # -----------------------------------
    # Step 4: Save conversation
    # -----------------------------------
    save_memory(
        user_id=user_id,
        text=f"User: {message}",
        memory_type="conversation"
    )

    save_memory(
        user_id=user_id,
        text=f"Assistant: {reply}",
        memory_type="conversation"
    )

    # -----------------------------------
    # Step 5: Return response
    # -----------------------------------
    return {
        "user_id": user_id,
        "message": message,
        "reply": reply,
        "memories_used": memories,
    }


# ---------------------------------------
# Test
# ---------------------------------------

if __name__ == "__main__":

    result = chat_with_twin(
        user_id="user001",
        message="I don't like Cricket anymore."
    )

    print("\n========== DIGITAL TWIN ==========\n")

    print("User:")
    print(result["message"])

    print("\nRetrieved Memories:")
    for memory in result["memories_used"]:
        print("-", memory)

    print("\nTwin Reply:")
    print(result["reply"])