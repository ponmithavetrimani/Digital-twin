"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/lib/theme-context";
import BottomNav from "@/components/common/BottomNav";
export default function DashboardPage() {
  const router = useRouter();
  const { colors } = useTheme();
  const [userName, setUserName] = useState("there");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedName && storedName.trim()) {
      setUserName(storedName);
    } else if (storedEmail) {
      setUserName(storedEmail.split("@")[0]);
    }
  }, []);

  const initial = userName.charAt(0).toUpperCase();

  return (
    <div style={{ minHeight: "100vh", background: colors.bg, paddingBottom: "90px" }}>

      {/* Top bar */}
      <div
        style={{
          background: colors.cardBg,
          padding: "24px 24px 28px",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h1 style={{ fontSize: "26px", fontWeight: 700, margin: 0, color: colors.textPrimary }}>
            Hi, {userName} 👋
          </h1>
          <p style={{ fontSize: "14px", color: colors.textSecondary, marginTop: "6px", marginBottom: 0 }}>
            Welcome to your personal digital twin
          </p>
        </div>

        <div
          onClick={() => router.push("/profile")}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: colors.accent,
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          {initial}
        </div>
      </div>

      {/* Page content */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* Twin card */}
        <div
          style={{
            background: colors.cardBg,
            borderRadius: "20px",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: colors.shadow,
          }}
        >
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "50%",
              background: "linear-gradient(to bottom right, #db2777, #831843)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              marginBottom: "18px",
            }}
          >
            🤖
          </div>

          <h2 style={{ fontSize: "20px", fontWeight: 700, margin: 0, color: colors.textPrimary }}>
            {userName}&apos;s Twin
          </h2>
          <p style={{ fontSize: "13px", color: colors.textSecondary, marginTop: "4px", marginBottom: "20px" }}>
            AI personality replica
          </p>

          <button
            onClick={() => router.push("/chat")}
            style={{
              width: "100%",
              background: colors.accent,
              color: "#ffffff",
              padding: "13px 0",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Open chat
          </button>
        </div>

        {/* Personality match card */}
        <div
          style={{
            background: colors.headerGradient,
            borderRadius: "20px",
            padding: "24px",
            color: "#ffffff",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: 700, margin: 0 }}>
            Personal digital twin
          </h3>
          <p style={{ fontSize: "13px", marginTop: "8px", marginBottom: "20px", opacity: 0.9 }}>
            Learns communication style, preferences, context and behavioural patterns.
          </p>

          <div
            style={{
              width: "100%",
              height: "8px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.25)",
              overflow: "hidden",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "87%", height: "100%", borderRadius: "999px", background: "#ffffff" }} />
          </div>
          <p style={{ fontSize: "13px", fontWeight: 600, margin: 0 }}>
            87% personality match
          </p>
        </div>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <StatCard colors={colors} label="Communication" value="95%" sub="Tanglish + emoji 😄" />
          <StatCard colors={colors} label="Preferences" value="142" sub="Stored memories" />
          <StatCard colors={colors} label="Behaviour" value="78%" sub="Pattern accuracy" />
          <StatCard colors={colors} label="Conversations" value="34" sub="This month" />
        </div>
      </div>

      {/* Bottom nav */}
      <BottomNav />

    </div>
  );
}

function StatCard({ colors, label, value, sub }: { colors: any; label: string; value: string; sub: string }) {
  return (
    <div style={{ background: colors.cardBg, borderRadius: "20px", padding: "20px", boxShadow: colors.shadow }}>
      <p style={{ fontSize: "13px", fontWeight: 600, color: colors.textSecondary, margin: 0 }}>{label}</p>
      <p style={{ fontSize: "32px", fontWeight: 700, color: colors.accent, margin: "8px 0 4px" }}>{value}</p>
      <p style={{ fontSize: "12px", color: colors.textMuted, margin: 0 }}>{sub}</p>
    </div>
  );
}