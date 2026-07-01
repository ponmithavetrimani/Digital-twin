"use client";

import { Brain, Sparkles, TrendingUp } from "lucide-react";

interface ProgressCardProps {
  progress?: number;
  memories?: number;
  conversations?: number;
}

export default function ProgressCard({
  progress = 87,
  memories = 142,
  conversations = 1248,
}: ProgressCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 via-pink-700 to-purple-700 text-white shadow-2xl p-8">

      {/* Background Glow */}

      <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center">

          <Brain size={34} />

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Personal Digital Twin
          </h2>

          <p className="text-pink-100 mt-1">
            AI learns your communication style & memories.
          </p>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between mb-3">

          <span className="font-medium">
            Personality Match
          </span>

          <span className="font-bold">
            {progress}%
          </span>

        </div>

        <div className="w-full h-4 rounded-full bg-white/20 overflow-hidden">

          <div
            className="h-full rounded-full bg-white transition-all duration-1000"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-5 mt-10">

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">

          <Sparkles className="mb-3" />

          <h3 className="text-3xl font-bold">
            {memories}
          </h3>

          <p className="text-sm text-pink-100">
            Stored Memories
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">

          <TrendingUp className="mb-3" />

          <h3 className="text-3xl font-bold">
            {conversations}
          </h3>

          <p className="text-sm text-pink-100">
            Conversations
          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between">

        <span className="px-4 py-2 rounded-full bg-white/20 text-sm font-medium">

          🟢 Learning Active

        </span>

        <button className="bg-white text-pink-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">

          View Insights

        </button>

      </div>

    </div>
  );
}