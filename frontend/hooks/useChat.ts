"use client";

import { useState } from "react";
import { useChat as useChatContext } from "@/context/ChatContext";
import { generateTwinReply } from "@/services/gemini";
import { searchMemory, storeMemory } from "@/services/qdrant";

export function useChat() {
  const { messages, addMessage } = useChatContext();
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    addMessage({ role: "user", content: text });
    setLoading(true);

    try {
      // 1. search memory
      const memories = await searchMemory(text);

      // 2. get AI response
      const reply = await generateTwinReply(text, memories);

      // 3. store memory
      await storeMemory({
        text,
        reply,
        timestamp: new Date().toISOString(),
      });

      // 4. update UI
      addMessage({ role: "ai", content: reply.answer });
    } catch (err) {
      addMessage({
        role: "ai",
        content: "Something went wrong in Twin brain.",
      });
    }

    setLoading(false);
  };

  return {
    messages,
    sendMessage,
    loading,
  };
}