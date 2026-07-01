"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "@/lib/theme-context";
import BottomNav from "@/components/common/BottomNav";

const memories = [
  {
    title: "Interview preparation",
    date: "Today • 10:30 AM",
    description: "Discussed AI interview questions and digital twin architecture.",
  },
  {
    title: "Favorite music",
    date: "Yesterday",
    description: "User enjoys A.R. Rahman songs while coding.",
  },
  {
    title: "Communication style",
    date: "2 days ago",
    description: "Prefers Tanglish with emojis and friendly responses.",
  },
  {
    title: "Hackathon goal",
    date: "This week",
    description: "Building an AI-powered personal digital twin using Gemini and Qdrant.",
  },
];

export default function MemoryPage() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <div style={{ minHeight: "100vh", background: colors.bg, paddingBottom: "60px" }}>

      {/* Header */}
      <div
        style={{
          background: colors.headerGradient,
          padding: "24px 20px 32px",
          borderBottomLeftRadius: "28px",
          borderBottomRightRadius: "28px",
        }}
      >
        <div
          onClick={() => router.back()}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "18px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ←
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              flexShrink: 0,
            }}
          >
            🧠
          </div>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
              Memory timeline
            </h1>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", margin: "4px 0 0" }}>
              Your AI twin remembers everything important.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* Search */}
        <input
          type="text"
          placeholder="Search memories..."
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px 18px",
            fontSize: "14px",
            borderRadius: "14px",
            border: `1px solid ${colors.border}`,
            background: colors.cardBg,
            color: colors.textPrimary,
            outline: "none",
          }}
        />

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div style={{ background: colors.cardBg, borderRadius: "18px", padding: "18px", boxShadow: colors.shadow }}>
            <p style={{ fontSize: "13px", color: colors.textSecondary, margin: 0 }}>Stored memories</p>
            <p style={{ fontSize: "30px", fontWeight: 700, color: colors.accent, margin: "8px 0 0" }}>142</p>
          </div>
          <div style={{ background: colors.cardBg, borderRadius: "18px", padding: "18px", boxShadow: colors.shadow }}>
            <p style={{ fontSize: "13px", color: colors.textSecondary, margin: 0 }}>Today&apos;s memories</p>
            <p style={{ fontSize: "30px", fontWeight: 700, color: colors.accent, margin: "8px 0 0" }}>8</p>
          </div>
        </div>

        <div style={{ background: colors.cardBg, borderRadius: "18px", padding: "18px", boxShadow: colors.shadow }}>
          <p style={{ fontSize: "13px", color: colors.textSecondary, margin: 0 }}>Learning score</p>
          <p style={{ fontSize: "30px", fontWeight: 700, color: colors.accent, margin: "8px 0 0" }}>87%</p>
        </div>

        {/* Recent memories */}
        <div style={{ marginTop: "8px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: colors.textPrimary, margin: "0 0 14px" }}>
            Recent memories
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {memories.map((m, i) => (
              <div
                key={i}
                style={{
                  background: colors.cardBg,
                  borderRadius: "16px",
                  padding: "16px",
                  display: "flex",
                  gap: "14px",
                  boxShadow: colors.shadow,
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: colors.accentSoft,
                    color: colors.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  ✨
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: colors.textPrimary, margin: 0 }}>
                    {m.title}
                  </p>
                  <p style={{ fontSize: "12px", color: colors.textMuted, margin: "4px 0 6px" }}>
                    {m.date}
                  </p>
                  <p style={{ fontSize: "13px", color: colors.textSecondary, margin: 0, lineHeight: 1.5 }}>
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}