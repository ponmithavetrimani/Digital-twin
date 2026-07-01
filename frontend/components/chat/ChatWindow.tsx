"use client";

import { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

interface Message {
  id: number;
  sender: "user" | "bot";
  message: string;
  time: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      message:
        "👋 Hello! I'm your Personal Digital Twin. Ask me anything.",
      time: "10:00 AM",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const getCurrentTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const handleSend = async (text: string) => {
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      message: text,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    // Replace this with Gemini API later
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        message:
          "🤖 I'm currently using a demo response. Once Gemini is connected, I'll reply based on your memories and personality.",
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1800);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] bg-white rounded-3xl shadow-xl overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white p-5">

        <h2 className="text-2xl font-bold">
          🤖 Talk to your Digital Twin
        </h2>

        <p className="text-sm opacity-90 mt-1">
          AI learns from your conversations
        </p>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto bg-[#f8f5f8] p-6">

        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            sender={msg.sender}
            message={msg.message}
            time={msg.time}
          />
        ))}

        {isTyping && (
          <TypingIndicator />
        )}

        <div ref={bottomRef} />

      </div>

      {/* Input */}

      <ChatInput
        onSend={handleSend}
        disabled={isTyping}
      />

    </div>
  );
}