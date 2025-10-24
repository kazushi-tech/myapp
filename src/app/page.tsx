"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";

const variants = ["primary", "secondary", "outline"] as const;
const sizes = ["sm", "md", "lg"] as const;

const variantLabels: Record<(typeof variants)[number], string> = {
  primary: "Primary",
  secondary: "Secondary",
  outline: "Outline",
};

const sizeLabels: Record<(typeof sizes)[number], string> = {
  sm: "Small",
  md: "Medium",
  lg: "Large",
};

export default function Home() {
  const [loading, setLoading] = useState(false);

  const renderArrowRightIcon = () => (
    <svg
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 10h12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m11 5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <main className="mx-auto max-w-3xl p-8 space-y-6">
      <h1 className="text-2xl font-bold">Home</h1>
      <p className="opacity-80">UIデモはこちらから確認できます。</p>
      <Link
        href="/demo/button"
        className="inline-flex items-center gap-2 rounded-md px-4 py-2 border border-black/10 dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
      >
        Demo / Button へ <span aria-hidden>→</span>
      </Link>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button デモ</h2>
        <p className="text-sm opacity-70">
          新しい variant と size の組み合わせを下記で確認できます。
        </p>
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-black/5 p-4 text-sm dark:border-white/10">
          <label className="inline-flex items-center gap-2 font-medium">
            <input
              type="checkbox"
              checked={loading}
              onChange={(event) => setLoading(event.target.checked)}
              className="h-4 w-4 rounded border border-black/20 text-brand-600 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-white/30"
            />
            Loading を有効化
          </label>
          <Button
            variant="outline"
            onClick={() => setLoading((prev) => !prev)}
            leftIcon={
              loading ? (
                <span className="inline-block h-2 w-2 rounded-full bg-brand-600" />
              ) : (
                <span className="inline-block h-2 w-2 rounded-full bg-brand-200" />
              )
            }
          >
            Toggle loading
          </Button>
        </div>
        <div className="space-y-5 rounded-xl border border-black/5 p-6 dark:border-white/10">
          {variants.map((variant) => (
            <div key={variant} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">
                  {variantLabels[variant]}
                </span>
                <span className="text-xs uppercase tracking-wide opacity-60">
                  variant=&quot;{variant}&quot;
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <Button
                    key={`${variant}-${size}`}
                    variant={variant}
                    size={size}
                    loading={loading}
                    leftIcon={variant === "primary" ? renderArrowRightIcon() : undefined}
                    rightIcon={variant === "primary" ? renderArrowRightIcon() : undefined}
                  >
                    {variantLabels[variant]} · {sizeLabels[size]}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
