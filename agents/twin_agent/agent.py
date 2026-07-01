import google.generativeai as genai

class TwinAgent:

    def __init__(self):

        self.model = genai.GenerativeModel(
            "gemini-2.5-flash"
        )

    async def run(
        self,
        user_query,
        memories,
        style,
        context
    ):

        prompt = f"""
        You are a digital twin.

        User Style:
        {style}

        Memories:
        {memories}

        Context:
        {context}

        User:
        {user_query}
        """

        response = self.model.generate_content(prompt)

        return response.text