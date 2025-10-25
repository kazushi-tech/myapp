// src/app/layout.tsx
import type { ReactNode } from "react";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className="dev">

      <body className={`${orbitron.variable} min-h-screen bg-background antialiased cp-bg`}>
        {children}
      </body>
    </html>
  );
}
