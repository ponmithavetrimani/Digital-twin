"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/lib/theme-context";
import BottomNav from "@/components/common/BottomNav";
type Message = {
  id: number;
  sender: "twin" | "user";
  text: string;
};

export default function ChatPage() {
  const router = useRouter();
  const { colors } = useTheme();

  const [userName, setUserName] = useState("there");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");

    const name =
      storedName?.trim() ||
      storedEmail?.split("@")[0] ||
      "there";

    setUserName(name);

    setMessages([
      {
        id: 1,
        sender: "twin",
        text: `👋 Hi ${name}! I'm your digital twin. Ask me anything.`,
      },
    ]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const message = input;

    // Firebase UID stored during login
    const uid = localStorage.getItem("userUID");

    if (!uid) {
      alert("User not logged in.");
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:8000/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: uid,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Backend Error");
      }

      const data = await response.json();

      const twinMessage: Message = {
        id: Date.now() + 1,
        sender: "twin",
        text: data.reply,
      };

      setMessages((prev) => [...prev, twinMessage]);
    } catch (error) {
      console.error(error);

      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: "twin",
        text: "⚠️ Unable to connect to the AI backend.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.bg,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: colors.headerGradient,
          padding: "16px 56px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          onClick={() => router.back()}
          style={{
            position: "absolute",
            left: "16px",
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
          }}
        >
          ←
        </div>

        <h1
          style={{
            fontSize: "17px",
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
          }}
        >
          Talk to your twin
        </h1>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflowY: "auto",
        }}
      >
        {messages.map((m) =>
          m.sender === "twin" ? (
            <div
              key={m.id}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: colors.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                🤖
              </div>

              <div
                style={{
                  background: colors.cardBg,
                  color: colors.textPrimary,
                  padding: "12px 16px",
                  borderRadius: "16px",
                  borderTopLeftRadius: "4px",
                  fontSize: "14px",
                  lineHeight: 1.5,
                  maxWidth: "78%",
                  boxShadow: colors.shadow,
                }}
              >
                {m.text}
              </div>
            </div>
          ) : (
            <div
              key={m.id}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  background: colors.accent,
                  color: "#ffffff",
                  padding: "12px 16px",
                  borderRadius: "16px",
                  borderTopRightRadius: "4px",
                  fontSize: "14px",
                  lineHeight: 1.5,
                  maxWidth: "78%",
                }}
              >
                {m.text}
              </div>
            </div>
          )
        )}
      </div>

      {/* Input */}
      <div
        style={{
          padding: "16px 20px",
          background: colors.cardBg,
          borderTop: `1px solid ${colors.border}`,
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          style={{
            flex: 1,
            padding: "14px 18px",
            fontSize: "14px",
            borderRadius: "999px",
            border: `1px solid ${colors.border}`,
            background: colors.bg,
            color: colors.textPrimary,
            outline: "none",
          }}
        />

        <button
          onClick={handleSend}
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            background: colors.accent,
            color: "#ffffff",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}