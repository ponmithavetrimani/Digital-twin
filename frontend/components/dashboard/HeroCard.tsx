import React from "react";

interface HeroCardProps {
  name?: string;
}

export default function HeroCard({ name = "Ponmi" }: HeroCardProps) {
  return (
    <div className="card flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">
        Welcome back, <span className="text-primary">{name}</span> 👋
      </h1>

      <p className="text-gray-600 text-sm">
        Your Digital Twin is learning, remembering, and evolving with you.
      </p>

      <button className="bg-primary text-white px-5 py-2 rounded-[25px] w-fit mt-2">
        Talk to your Twin
      </button>
    </div>
  );
}