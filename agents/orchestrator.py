from agents.memory_agent import MemoryAgent
from agents.personality_agent import PersonalityAgent
from agents.mood_agent import MoodAgent
from agents.decision_agent import DecisionAgent
from agents.timeline_agent import TimelineAgent
from agents.twin_agent import TwinAgent


class Orchestrator:

    def __init__(self):
        self.memory = MemoryAgent()
        self.personality = PersonalityAgent()
        self.mood = MoodAgent()
        self.decision = DecisionAgent()
        self.timeline = TimelineAgent()
        self.twin = TwinAgent()

    def process(self, message: str):

        memories = self.memory.retrieve(message)

        personality = self.personality.analyze(message)

        mood = self.mood.detect(message)

        reply = self.twin.reply(
            message,
            memories,
            personality,
            mood
        )

        return {
            "reply": reply,
            "mood": mood,
            "personality": personality
        }