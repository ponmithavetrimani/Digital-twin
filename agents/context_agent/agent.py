class ContextAgent:

    async def run(self, gmail_data, drive_data):

        context = f"""
        Gmail Summary:
        {gmail_data}

        Drive Notes:
        {drive_data}
        """

        return context