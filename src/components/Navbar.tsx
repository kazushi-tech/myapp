'use client';

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "#features", label: "特徴" },
  { href: "#pricing", label: "料金" },
  { href: "#faq", label: "FAQ" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/demo/button", label: "Button Demo" },
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-black/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:text-brand-100"
        >
          launchmate
        </Link>
        <nav aria-label="主要ナビゲーション" className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-black/70 transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:text-white/70 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="#cta"
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            無料で始める
          </Link>
        </div>
      </div>
    </header>
  );
}
