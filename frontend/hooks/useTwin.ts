"use client";

import { useTwin as useTwinContext } from "@/context/TwinContext";

export function useTwin() {
  const { status, setStatus, personality, setPersonality } =
    useTwinContext();

  const think = () => setStatus("thinking");
  const active = () => setStatus("active");
  const idle = () => setStatus("idle");

  return {
    status,
    personality,
    setPersonality,
    think,
    active,
    idle,
  };
}