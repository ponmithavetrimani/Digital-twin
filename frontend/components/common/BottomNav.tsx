"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/lib/theme-context";

const navItems = [
  {
    label: "Home",
    href: "/dashboard",
    icon: (active: boolean, color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? color : "none"} stroke={active ? color : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    label: "Chat",
    href: "/chat",
    icon: (active: boolean, color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? color : "none"} stroke={active ? color : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    label: "Memory",
    href: "/memory",
    icon: (active: boolean, color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? color : "none"} stroke={active ? color : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6l-.7 4H9l-.7-4A7 7 0 015 9a7 7 0 017-7z" />
        <line x1="9" y1="21" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    label: "Profile",
    href: "/profile",
    icon: (active: boolean, color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? color : "none"} stroke={active ? color : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: "Settings",
    href: "/settings",
    icon: (active: boolean, color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? color : "none"} stroke={active ? color : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { colors } = useTheme();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: colors.cardBg,
        borderTop: `1px solid ${colors.border}`,
        padding: "10px 8px 14px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: `0 -4px 20px rgba(0,0,0,0.08)`,
        zIndex: 50,
      }}
    >
      {navItems.map((item) => {
        const active = pathname === item.href;

        return (
          <div
            key={item.href}
            onClick={() => router.push(item.href)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              minWidth: "56px",
              position: "relative",
            }}
          >
            {/* Active pill indicator on top */}
            <div
              style={{
                position: "absolute",
                top: "-10px",
                width: active ? "24px" : "0px",
                height: "3px",
                borderRadius: "999px",
                background: colors.accent,
                transition: "width 0.25s ease",
              }}
            />

            {/* Icon container */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: active ? colors.accentSoft : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: active ? colors.accent : colors.textMuted,
                transition: "background 0.2s ease",
              }}
            >
              {item.icon(active, colors.accent)}
            </div>

            {/* Label */}
            <span
              style={{
                fontSize: "11px",
                fontWeight: active ? 600 : 400,
                color: active ? colors.accent : colors.textMuted,
                transition: "color 0.2s ease",
              }}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}