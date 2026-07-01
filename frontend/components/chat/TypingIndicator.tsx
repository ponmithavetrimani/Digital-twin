"use client";

import { Bot } from "lucide-react";

interface TypingIndicatorProps {
  text?: string;
}

export default function TypingIndicator({
  text = "Digital Twin is typing...",
}: TypingIndicatorProps) {
  return (
    <div className="flex justify-start mb-5">

      <div className="flex items-end gap-3">

        {/* AI Avatar */}

        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-600 to-pink-800 flex items-center justify-center shadow-lg">
          <Bot size={20} className="text-white" />
        </div>

        {/* Typing Bubble */}

        <div className="bg-white border border-pink-100 rounded-3xl rounded-bl-md px-5 py-4 shadow-lg">

          <div className="flex gap-2 items-center">

            <span
              className="w-3 h-3 rounded-full bg-pink-500 animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></span>

            <span
              className="w-3 h-3 rounded-full bg-pink-500 animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></span>

            <span
              className="w-3 h-3 rounded-full bg-pink-500 animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></span>

          </div>

          <p className="text-xs text-gray-500 mt-3">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}