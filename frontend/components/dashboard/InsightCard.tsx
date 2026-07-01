import React from "react";

interface InsightCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: "up" | "down" | "neutral";
}

export default function InsightCard({
  title,
  value,
  description,
  trend = "neutral",
}: InsightCardProps) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-500">{title}</h3>

        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            trend === "up"
              ? "bg-green-100 text-green-600"
              : trend === "down"
              ? "bg-red-100 text-red-500"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {trend === "up"
            ? "↑ Rising"
            : trend === "down"
            ? "↓ Dropping"
            : "Stable"}
        </span>
      </div>

      <h2 className="text-2xl font-bold text-primary">{value}</h2>

      {description && (
        <p className="text-xs text-gray-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}