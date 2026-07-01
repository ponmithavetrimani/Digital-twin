import React from "react";
import MemoryItem from "./MemoryItem";

interface Memory {
  id: number;
  title: string;
  description: string;
  time: string;
  type: "chat" | "preference" | "event";
}

interface TimelineProps {
  memories?: Memory[];
}

export default function Timeline({
  memories = [
    {
      id: 1,
      title: "User asked about exam stress",
      description:
        "Twin responded with calming techniques and study plan suggestions.",
      time: "2 min ago",
      type: "chat",
    },
    {
      id: 2,
      title: "Preference updated",
      description: "User prefers concise answers with examples.",
      time: "1 hour ago",
      type: "preference",
    },
    {
      id: 3,
      title: "Important event detected",
      description: "User mentioned upcoming project deadline.",
      time: "Yesterday",
      type: "event",
    },
  ],
}: TimelineProps) {
  return (
    <div className="card flex flex-col gap-4">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold">
          Memory <span className="text-primary">Timeline</span>
        </h2>
        <p className="text-sm text-gray-500">
          Your Digital Twin remembers everything important
        </p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-4 border-l-2 border-gray-200 pl-4">
        {memories.map((memory) => (
          <div key={memory.id} className="relative">
            {/* Dot */}
            <div className="absolute -left-[10px] top-3 w-3 h-3 bg-primary rounded-full" />

            <MemoryItem
              title={memory.title}
              description={memory.description}
              time={memory.time}
              type={memory.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
}