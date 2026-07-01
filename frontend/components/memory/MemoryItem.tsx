import React from "react";

interface MemoryItemProps {
  title: string;
  description: string;
  time?: string;
  type?: "chat" | "preference" | "event";
}

export default function MemoryItem({
  title,
  description,
  time = "Just now",
  type = "chat",
}: MemoryItemProps) {
  return (
    <div className="card flex flex-col gap-2 relative">
      {/* Type Badge */}
      <span
        className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full ${
          type === "chat"
            ? "bg-pink-100 text-primary"
            : type === "preference"
            ? "bg-blue-100 text-blue-600"
            : "bg-green-100 text-green-600"
        }`}
      >
        {type}
      </span>

      {/* Title */}
      <h3 className="font-semibold text-gray-800">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Time */}
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  );
}