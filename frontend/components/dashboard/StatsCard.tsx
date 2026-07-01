"use client";

import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: ReactNode;
  color?: "pink" | "blue" | "green" | "purple";
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  color = "pink",
}: StatsCardProps) {
  const colors = {
    pink: {
      bg: "bg-pink-50",
      icon: "bg-pink-600",
      text: "text-pink-700",
    },
    blue: {
      bg: "bg-blue-50",
      icon: "bg-blue-600",
      text: "text-blue-700",
    },
    green: {
      bg: "bg-green-50",
      icon: "bg-green-600",
      text: "text-green-700",
    },
    purple: {
      bg: "bg-purple-50",
      icon: "bg-purple-600",
      text: "text-purple-700",
    },
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${colors[color].bg}
      border border-white shadow-xl p-6 transition-all duration-300
      hover:-translate-y-2 hover:shadow-2xl`}
    >
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/40 blur-2xl"></div>

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl ${colors[color].icon}
        flex items-center justify-center text-white shadow-lg`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-5 text-lg font-semibold text-gray-700">
        {title}
      </h3>

      {/* Value */}
      <h1
        className={`text-4xl font-extrabold mt-2 ${colors[color].text}`}
      >
        {value}
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 mt-2">
        {subtitle}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-green-600 font-medium">
          ↑ Updated
        </span>

        <ArrowUpRight
          size={20}
          className={colors[color].text}
        />
      </div>
    </div>
  );
}