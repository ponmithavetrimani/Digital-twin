"use client";

import { Bot, User } from "lucide-react";

interface ChatBubbleProps {
  message: string;
  sender: "user" | "bot";
  time?: string;
}

export default function ChatBubble({
  message,
  sender,
  time,
}: ChatBubbleProps) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-5`}
    >
      <div
        className={`flex items-end gap-3 max-w-[80%] ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}

        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg ${
            isUser
              ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
              : "bg-gradient-to-r from-pink-600 to-pink-800 text-white"
          }`}
        >
          {isUser ? (
            <User size={20} />
          ) : (
            <Bot size={20} />
          )}
        </div>

        {/* Bubble */}

        <div
          className={`rounded-3xl px-5 py-4 shadow-lg ${
            isUser
              ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-br-md"
              : "bg-white text-gray-800 rounded-bl-md border border-pink-100"
          }`}
        >
          <p className="leading-7 whitespace-pre-wrap">
            {message}
          </p>

          {time && (
            <p
              className={`text-xs mt-3 ${
                isUser
                  ? "text-blue-100"
                  : "text-gray-400"
              }`}
            >
              {time}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}