class MoodAgent:

    def detect(self, text):

        text = text.lower()

        if "happy" in text:
            return "Happy"

        if "sad" in text:
            return "Sad"

        if "angry" in text:
            return "Angry"

        return "Neutral"