class StyleAgent:

    async def run(self, profile_data):

        personality = profile_data.get("personality", "")
        tone = profile_data.get("tone", "")

        style_context = f"""
        Personality: {personality}

        Tone:
        {tone}
        """

        return style_context