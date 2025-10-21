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
                  <Button key={`${variant}-${size}`} variant={variant} size={size}>
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
