import React from "react";

interface PersonalityCardProps {
  name?: string;
  tone?: string;
  description?: string;
}

export default function PersonalityCard({
  name = "Ponmi",
  tone = "Friendly & Thoughtful",
  description = "Your Digital Twin adapts to your communication style and emotional tone.",
}: PersonalityCardProps) {
  return (
    <div className="card flex flex-col gap-3">
      <h2 className="text-xl font-semibold">
        {name} <span className="text-primary">Personality</span>
      </h2>

      <div className="flex items-center gap-2">
        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">
          {tone}
        </span>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}