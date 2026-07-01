"use client";

import { Bot, Sparkles, Brain } from "lucide-react";

interface TwinAvatarProps {
  name?: string;
  status?: "Learning" | "Online" | "Offline";
  match?: number;
}

export default function TwinAvatar({
  name = "Ponmitha Twin",
  status = "Learning",
  match = 87,
}: TwinAvatarProps) {
  const statusColor =
    status === "Online"
      ? "bg-green-500"
      : status === "Offline"
      ? "bg-gray-400"
      : "bg-yellow-400";

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center">

      {/* Avatar */}

      <div className="relative">

        {/* Glow */}

        <div className="absolute inset-0 rounded-full bg-pink-400 blur-3xl opacity-30 animate-pulse"></div>

        {/* Avatar */}

        <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-pink-600 to-pink-800 flex items-center justify-center shadow-2xl">

          <Bot className="text-white" size={65} />

        </div>

        {/* Status */}

        <span
          className={`absolute bottom-3 right-3 w-5 h-5 rounded-full border-4 border-white ${statusColor}`}
        />

      </div>

      {/* Name */}

      <h2 className="text-3xl font-bold mt-8 text-gray-800">
        {name}
      </h2>

      <p className="text-gray-500 mt-2 flex items-center gap-2">
        <Brain size={16} />
        AI Personality Replica
      </p>

      {/* Match */}

      <div className="mt-8 w-full">

        <div className="flex justify-between text-sm font-medium mb-2">

          <span>Personality Match</span>

          <span className="text-pink-600">
            {match}%
          </span>

        </div>

        <div className="w-full h-3 rounded-full bg-pink-100">

          <div
            className="h-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-700 transition-all duration-700"
            style={{
              width: `${match}%`,
            }}
          />

        </div>

      </div>

      {/* Badge */}

      <div className="mt-8 px-5 py-3 rounded-full bg-pink-100 text-pink-700 font-semibold flex items-center gap-2">

        <Sparkles size={18} />

        {status}

      </div>

      {/* Button */}

      <button className="mt-8 w-full bg-gradient-to-r from-pink-600 to-pink-800 text-white py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
        Open Chat
      </button>

    </div>
  );
}