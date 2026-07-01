"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeColors = {
  bg: string;
  cardBg: string;
  headerGradient: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  accent: string;
  accentSoft: string;
  shadow: string;
};

const lightColors: ThemeColors = {
  bg: "#f3f1f4",
  cardBg: "#ffffff",
  headerGradient: "linear-gradient(to right, #831843, #be185d)",
  textPrimary: "#111827",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  border: "#f3f4f6",
  accent: "#be185d",
  accentSoft: "#fce7f3",
  shadow: "0 4px 16px rgba(0,0,0,0.05)",
};

const darkColors: ThemeColors = {
  bg: "#121014",
  cardBg: "#1e1b22",
  headerGradient: "linear-gradient(to right, #5c0f33, #831843)",
  textPrimary: "#f3f4f6",
  textSecondary: "#9ca3af",
  textMuted: "#6b7280",
  border: "#2a2730",
  accent: "#f472b6",
  accentSoft: "#3a1f2c",
  shadow: "0 4px 16px rgba(0,0,0,0.4)",
};

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  colors: ThemeColors;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") setDarkMode(true);
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("darkMode", String(next));
  };

  const colors = darkMode ? darkColors : lightColors;

  // avoids a light-mode flash before localStorage is read
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside a ThemeProvider");
  return ctx;
}