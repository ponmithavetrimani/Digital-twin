"use client";

import { useState } from "react";
import { SendHorizontal, Mic, Smile } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({
  onSend,
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message.trim());
    setMessage("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="sticky bottom-0 bg-white border-t border-pink-100 p-4 shadow-lg">

      <div className="flex items-center gap-3">

        {/* Emoji */}

        <button
          className="w-12 h-12 rounded-full bg-pink-50 hover:bg-pink-100 transition flex items-center justify-center"
        >
          <Smile
            size={22}
            className="text-pink-600"
          />
        </button>

        {/* Input */}

        <input
          type="text"
          value={message}
          disabled={disabled}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Message your Digital Twin..."
          className="flex-1 rounded-full border border-pink-200 bg-pink-50 px-5 py-3 outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Voice */}

        <button
          className="w-12 h-12 rounded-full bg-pink-50 hover:bg-pink-100 transition flex items-center justify-center"
        >
          <Mic
            size={22}
            className="text-pink-600"
          />
        </button>

        {/* Send */}

        <button
          disabled={disabled}
          onClick={handleSend}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-pink-800 hover:scale-105 transition flex items-center justify-center disabled:opacity-50"
        >
          <SendHorizontal
            size={20}
            className="text-white"
          />
        </button>

      </div>

    </div>
  );
}