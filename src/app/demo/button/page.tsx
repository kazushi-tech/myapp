'use client';

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

const VARIANTS = ["primary", "secondary", "outline"] as const;
const VARIANT_LABELS: Record<(typeof VARIANTS)[number], string> = {
  primary: "Primary",
  secondary: "Secondary",
  outline: "Outline",
};
const SIZES = ["sm", "md", "lg"] as const;
const SIZE_LABELS: Record<(typeof SIZES)[number], string> = {
  sm: "Small",
  md: "Medium",
  lg: "Large",
};

export default function Page() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="mx-auto max-w-5xl p-8 space-y-8">
      <nav className="text-sm opacity-80">
        <Link href="/" className="underline">Home</Link>
        <span className="mx-1">→</span>
        <span>Demo / Button</span>
      </nav>

      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Button Demo</h1>
        <p className="opacity-80">loading / variant / size の確認用ページ</p>
      </header>

      <div className="flex items-center gap-3">
        <Button onClick={() => setLoading(v => !v)}>
          Toggle loading: {loading ? "ON" : "OFF"}
        </Button>
        <Button disabled>disabled</Button>
      </div>

      {VARIANTS.map(v => (
        <section key={v} className="space-y-2">
          <h2 className="font-semibold">{VARIANT_LABELS[v]}</h2>
          <div className="flex flex-wrap gap-3">
            {SIZES.map(s => (
              <Button key={s} variant={v} size={s} loading={loading}>
                {VARIANT_LABELS[v]} · {SIZE_LABELS[s]}
              </Button>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
