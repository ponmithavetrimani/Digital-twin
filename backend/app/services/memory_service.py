from app.services.gemini_service import model


def extract_memory(message: str):
    """
    Extract long-term memory from a user message.

    Returns:
        None -> Ignore
        dict -> {
            action: SAVE / UPDATE
            fact: ...
        }
    """

    prompt = f"""
You are a Digital Twin Memory Manager.

Determine whether this message should be stored.

Possible actions:

SAVE
UPDATE
IGNORE

Examples

I love coffee.

SAVE
I love coffee.

----------------

My favourite colour is blue.

SAVE
Favourite colour is blue.

----------------

I don't like cricket anymore.

UPDATE
I don't like cricket anymore.

----------------

Hello

IGNORE

----------------

How are you?

IGNORE

Reply ONLY like this:

SAVE: fact

or

UPDATE: fact

or

IGNORE

Message:

{message}
"""

    response = model.generate_content(prompt)

    answer = response.text.strip()

    if answer.startswith("SAVE:"):
        return {
            "action": "SAVE",
            "fact": answer.replace("SAVE:", "").strip()
        }

    if answer.startswith("UPDATE:"):
        return {
            "action": "UPDATE",
            "fact": answer.replace("UPDATE:", "").strip()
        }

    return None