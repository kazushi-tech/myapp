// src/components/Navbar.tsx
"use client";

import Link from "next/link";
// ThemeToggle が無いプロジェクトなら下行を削除＆JSXの <ThemeToggle /> も削除してください
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="relative">
        {/* 下線グラデ */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-neonPink via-neonCyan to-neonPurple"
        />
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-semibold focus:outline-none focus-visible:ring-2 ring-offset-2 ring-neonCyan"
            >
              MYAPP
            </Link>

            <Link
              href="/demo/button"
              className="text-sm text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 ring-offset-2 ring-neonCyan"
            >
              /demo/button
            </Link>

            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 ring-offset-2 ring-neonCyan md:hidden"
            >
              /contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* 無ければ削除 */}
            <ThemeToggle />

            {/* CTA: Link をボタン風にスタイリング（neon相当） */}
            <Link
              href="/contact"
              className={[
                "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
                "border border-neonCyan text-neonCyan bg-transparent hover:bg-neonCyan/10",
                "focus:outline-none focus-visible:ring-2 ring-offset-2 ring-neonCyan",
                "px-3 py-1.5 text-sm" // size="sm" 相当
              ].join(" ")}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
