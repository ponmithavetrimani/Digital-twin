"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function GlassCard({
  children,
  className,
  hover = true,
  padding = "md",
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        // Base Style
        "rounded-3xl border border-white/40",
        "bg-white/70 backdrop-blur-xl",
        "shadow-xl",

        // Hover Effect
        hover &&
          "transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",

        // Padding
        {
          "p-4": padding === "sm",
          "p-6": padding === "md",
          "p-8": padding === "lg",
        },

        className
      )}
    >
      {children}
    </div>
  );
}