import React from "react";

interface MemoryCardProps {
  memoryCount?: number;
  lastUpdated?: string;
  highlight?: string;
}

export default function MemoryCard({
  memoryCount = 1248,
  lastUpdated = "2 min ago",
  highlight = "User prefers concise answers with examples",
}: MemoryCardProps) {
  return (
    <div className="card flex flex-col gap-3">
      <h2 className="text-xl font-semibold">
        Memory <span className="text-primary">Bank</span>
      </h2>

      {/* Stats */}
      <div className="flex justify-between">
        <p className="text-gray-500 text-sm">Total Memories</p>
        <p className="font-bold text-primary">{memoryCount}</p>
      </div>

      <div className="flex justify-between">
        <p className="text-gray-500 text-sm">Last Updated</p>
        <p className="text-sm">{lastUpdated}</p>
      </div>

      {/* Highlight */}
      <div className="bg-gray-50 p-3 rounded-[20px] border border-gray-100">
        <p className="text-xs text-gray-500">Latest Insight</p>
        <p className="text-sm font-medium text-gray-700">
          {highlight}
        </p>
      </div>
    </div>
  );
}