"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/lib/theme-context"; // adjust path to wherever you save theme-context.tsx
import BottomNav from "@/components/common/BottomNav";
export default function SettingsPage() {
  const router = useRouter();
  const { darkMode, toggleDarkMode, colors } = useTheme();
  const [pushEnabled, setPushEnabled] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    router.push("/login");
  };

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

        <h1 style={{ fontSize: "26px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
          Settings
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", margin: "6px 0 0" }}>
          Manage your digital twin preferences
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "28px" }}>

        {/* Appearance */}
        <Section title="Appearance" colors={colors}>
          <Row
            icon="🌙"
            title="Dark mode"
            subtitle="Enable dark theme"
            colors={colors}
            rightContent={<ToggleSwitch checked={darkMode} onChange={toggleDarkMode} colors={colors} />}
          />
        </Section>

        {/* Notifications */}
        <Section title="Notifications" colors={colors}>
          <Row
            icon="🔔"
            title="Push notifications"
            subtitle="Receive AI updates"
            colors={colors}
            rightContent={<ToggleSwitch checked={pushEnabled} onChange={() => setPushEnabled(!pushEnabled)} colors={colors} />}
          />
        </Section>

        {/* Connected Services */}
        <Section title="Connected services" colors={colors}>
          <Row icon="✉️" title="Gmail" subtitle="Connected" status="Active" colors={colors} />
          <Row icon="📁" title="Google Drive" subtitle="Connected" status="Active" colors={colors} divider />
        </Section>

        {/* Logout */}
        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            background: "#dc2626",
            color: "#ffffff",
            padding: "15px 0",
            borderRadius: "16px",
            fontSize: "15px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <span>↪</span> Logout
        </button>

      </div>
    </div>
  );
}

function Section({ title, children, colors }: { title: string; children: React.ReactNode; colors: any }) {
  return (
    <div>
      <h2 style={{ fontSize: "16px", fontWeight: 700, color: colors.textPrimary, margin: "0 0 12px" }}>
        {title}
      </h2>
      <div
        style={{
          background: colors.cardBg,
          borderRadius: "18px",
          boxShadow: colors.shadow,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Row({
  icon,
  title,
  subtitle,
  status,
  rightContent,
  onClick,
  divider,
  colors,
}: {
  icon: string;
  title: string;
  subtitle: string;
  status?: string;
  rightContent?: React.ReactNode;
  onClick?: () => void;
  divider?: boolean;
  colors: any;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "16px 18px",
        borderTop: divider ? `1px solid ${colors.border}` : "none",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "12px",
          background: colors.accentSoft,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: "15px", fontWeight: 600, color: colors.textPrimary, margin: 0 }}>{title}</p>
        <p style={{ fontSize: "12px", color: colors.textMuted, margin: "2px 0 0" }}>{subtitle}</p>
      </div>

      {rightContent ? (
        rightContent
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
          {status && (
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#16a34a" }}>{status}</span>
          )}
          {onClick && <span style={{ color: colors.textMuted, fontSize: "18px" }}>›</span>}
        </div>
      )}
    </div>
  );
}

function ToggleSwitch({ checked, onChange, colors }: { checked: boolean; onChange: () => void; colors: any }) {
  return (
    <div
      onClick={onChange}
      style={{
        width: "46px",
        height: "26px",
        borderRadius: "999px",
        background: checked ? colors.accent : "#d1d5db",
        position: "relative",
        cursor: "pointer",
        flexShrink: 0,
        transition: "background 0.2s",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "#ffffff",
          position: "absolute",
          top: "3px",
          left: checked ? "23px" : "3px",
          transition: "left 0.2s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}