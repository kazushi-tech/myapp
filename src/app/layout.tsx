// src/app/layout.tsx （全置き換え）
import type { Metadata } from "next";
import Link from "next/link"; // ← 追加
import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js App Router + Tailwind v4 sample",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-theme="dark">
      <body className="min-h-dvh bg-surface text-text antialiased">
        <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <div className="font-bold">
              <span className="text-brand">myapp</span>
            </div>
            <nav className="text-sm text-gray-600">
              {/* 内部リンクは Link を使う */}
              <Link href="/" className="hover:underline">Home</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} myapp
          </div>
        </footer>
      </body>
    </html>
  );
}
