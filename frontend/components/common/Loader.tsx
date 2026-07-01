"use client";

import { Bot } from "lucide-react";

interface LoaderProps {
  text?: string;
  fullScreen?: boolean;
}

export default function Loader({
  text = "Loading your Digital Twin...",
  fullScreen = true,
}: LoaderProps) {
  return (
    <div
      className={`${
        fullScreen
          ? "fixed inset-0"
          : "w-full h-full min-h-[300px]"
      } flex items-center justify-center bg-[#f6f3f7] z-50`}
    >
      <div className="flex flex-col items-center">

        {/* Animated Robot */}

        <div className="relative">

          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-600 to-pink-800 flex items-center justify-center shadow-2xl animate-pulse">
            <Bot size={42} className="text-white" />
          </div>

          {/* Ping Effect */}

          <div className="absolute inset-0 rounded-full border-4 border-pink-300 animate-ping"></div>

        </div>

        {/* Text */}

        <h2 className="mt-8 text-2xl font-bold text-gray-800">
          {text}
        </h2>

        <p className="text-gray-500 mt-2">
          Please wait...
        </p>

        {/* Progress Dots */}

        <div className="flex gap-2 mt-6">

          <span className="w-3 h-3 rounded-full bg-pink-600 animate-bounce"></span>

          <span
            className="w-3 h-3 rounded-full bg-pink-500 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>

          <span
            className="w-3 h-3 rounded-full bg-pink-400 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>

        </div>

      </div>
    </div>
  );
}