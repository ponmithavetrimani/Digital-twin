"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase"; // adjust path to your firebase config file

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please enter email and password");
      return;
    }

    // TODO: replace with your actual email/password auth call
    localStorage.setItem("userEmail", email);
    router.push("/dashboard");
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("userUID", user.uid);
      localStorage.setItem("userEmail", user.email || "");
      localStorage.setItem("userName", user.displayName || "");

      router.push("/dashboard");
    } catch (error) {
      console.error("Google sign-in failed:", error);
      alert("Google sign-in was cancelled or failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f5f8",
        padding: "16px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          maxWidth: "420px",
          borderRadius: "28px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
          padding: "56px 48px",
        }}
      >
        {/* Avatar */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "50%",
              background: "linear-gradient(to bottom right, #db2777, #831843)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              boxShadow: "0 8px 20px rgba(190,24,93,0.35)",
            }}
          >
            🤖
          </div>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 600,
            textAlign: "center",
            color: "#111827",
            marginTop: "32px",
            marginBottom: "0",
          }}
        >
          Welcome back
        </h1>

        <p
          style={{
            fontSize: "14px",
            textAlign: "center",
            color: "#6b7280",
            marginTop: "10px",
            marginBottom: "0",
          }}
        >
          Log in to your Personal Digital Twin
        </p>

        {/* Google login */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            border: "1px solid #d1d5db",
            borderRadius: "14px",
            padding: "15px 0",
            fontSize: "14px",
            fontWeight: 500,
            color: "#374151",
            background: "#ffffff",
            cursor: "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.67-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {loading ? "Opening Google sign-in..." : "Continue with Google"}
        </button>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "32px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }} />
          <span style={{ fontSize: "12px", color: "#9ca3af" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }} />
        </div>

        {/* Email */}
        <div style={{ marginTop: "32px" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#1f2937",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px 16px",
              fontSize: "14px",
              borderRadius: "14px",
              border: "1px solid #d1d5db",
              outline: "none",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginTop: "20px" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#1f2937",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px 16px",
              fontSize: "14px",
              borderRadius: "14px",
              border: "1px solid #d1d5db",
              outline: "none",
            }}
          />
        </div>

        {/* Continue button */}
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            marginTop: "32px",
            background: "#be185d",
            color: "#ffffff",
            padding: "15px 0",
            borderRadius: "999px",
            fontSize: "15px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </main>
  );
}