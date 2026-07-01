"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/lib/theme-context";
import BottomNav from "@/components/common/BottomNav";
export default function ProfilePage() {
  const router = useRouter();
  const { colors } = useTheme();
  const [userName, setUserName] = useState("there");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedEmail) setUserEmail(storedEmail);

    if (storedName && storedName.trim()) {
      setUserName(storedName);
    } else if (storedEmail) {
      setUserName(storedEmail.split("@")[0]);
    }
  }, []);

  const insights = [
    { label: "Personality match", value: "87%" },
    { label: "Stored memories", value: "142" },
    { label: "Communication score", value: "95%" },
    { label: "Decision accuracy", value: "89%" },
  ];

  const info = [
    { icon: "✉️", label: "Email", value: userEmail || "Not set" },
    { icon: "💬", label: "Communication", value: "Tanglish + emoji 😄" },
    { icon: "♥️", label: "Personality", value: "Friendly • helpful • creative" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: colors.bg, paddingBottom: "70px" }}>

      {/* Header */}
      <div
        style={{
          background: colors.headerGradient,
          padding: "24px 20px 32px",
          borderBottomLeftRadius: "28px",
          borderBottomRightRadius: "28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            alignSelf: "flex-start",
            marginBottom: "20px",
          }}
        >
          ←
        </div>

        <div
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            fontWeight: 700,
            color: colors.accent,
            marginBottom: "16px",
          }}
        >
          {userName.charAt(0).toUpperCase()}
        </div>

        <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
          {userName}
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", margin: "6px 0 0" }}>
          AI digital twin owner
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* Personal info */}
        <div style={{ background: colors.cardBg, borderRadius: "20px", padding: "20px", boxShadow: colors.shadow }}>
          <h2 style={{ fontSize: "17px", fontWeight: 700, color: colors.textPrimary, margin: "0 0 16px" }}>
            Personal information
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {info.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: colors.accentSoft || "#fce7f3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "17px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: "12px", color: colors.textMuted, margin: 0 }}>{item.label}</p>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: colors.textPrimary, margin: "2px 0 0" }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI twin insights */}
        <div style={{ background: colors.cardBg, borderRadius: "20px", padding: "20px", boxShadow: colors.shadow }}>
          <h2 style={{ fontSize: "17px", fontWeight: 700, color: colors.textPrimary, margin: "0 0 8px" }}>
            AI twin insights
          </h2>

          <div>
            {insights.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 0",
                  borderTop: i === 0 ? "none" : `1px solid ${colors.border || "#e5e7eb"}`,
                }}
              >
                <p style={{ fontSize: "13px", color: colors.textMuted, margin: 0 }}>{item.label}</p>
                <p style={{ fontSize: "26px", fontWeight: 700, color: colors.accent, margin: "6px 0 0" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Navigation - ADD THIS */}
      <BottomNav />
    </div>
  );
}