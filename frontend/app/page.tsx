"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f5f8",
        padding: "16px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: "96px",
          height: "96px",
          borderRadius: "50%",
          background: "linear-gradient(to bottom right, #db2777, #831843)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "42px",
          boxShadow: "0 12px 28px rgba(190,24,93,0.3)",
          marginBottom: "36px",
        }}
      >
        🤖
      </div>

      {/* Heading */}
      <h1
        style={{
          fontSize: "44px",
          fontWeight: 700,
          color: "#be185d",
          textAlign: "center",
          margin: 0,
          letterSpacing: "-0.5px",
        }}
      >
        Digital Twin AI
      </h1>

      {/* Subheading */}
      <p
        style={{
          fontSize: "17px",
          color: "#6b7280",
          textAlign: "center",
          marginTop: "16px",
          marginBottom: "0",
        }}
      >
        Build your own AI personality replica
      </p>

      {/* CTA button */}
      <button
        onClick={() => router.push("/login")}
        style={{
          marginTop: "40px",
          background: "#be185d",
          color: "#ffffff",
          padding: "14px 40px",
          borderRadius: "999px",
          fontSize: "16px",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          whiteSpace: "nowrap",
          boxShadow: "0 8px 20px rgba(190,24,93,0.25)",
        }}
      >
        Get started
      </button>
    </main>
  );
}