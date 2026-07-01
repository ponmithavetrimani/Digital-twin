"use client";

import React, { createContext, useContext, useState } from "react";

interface TwinContextType {
  status: "active" | "thinking" | "idle";
  setStatus: (s: "active" | "thinking" | "idle") => void;
  personality: string;
  setPersonality: (p: string) => void;
}

const TwinContext = createContext<TwinContextType | null>(null);

export function TwinProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<
    "active" | "thinking" | "idle"
  >("active");

  const [personality, setPersonality] = useState(
    "Friendly & Thoughtful"
  );

  return (
    <TwinContext.Provider
      value={{ status, setStatus, personality, setPersonality }}
    >
      {children}
    </TwinContext.Provider>
  );
}

export const useTwin = () => {
  const ctx = useContext(TwinContext);
  if (!ctx) throw new Error("useTwin must be used inside TwinProvider");
  return ctx;
};