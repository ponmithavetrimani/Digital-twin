import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme-context";

export const metadata: Metadata = {
  title: "Digital Twin AI",
  description: "Personal Digital Twin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}