// src/app/page.tsx
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-neonPink via-neonCyan to-neonPurple bg-clip-text text-transparent">
          次世代のサイバーパンクUIで
          <br className="hidden sm:block" />
          あなたのLPを加速する
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          最小差分で既存実装を壊さず、視認性・一貫性・a11y を底上げします。
        </p>

        <div className="mt-10 flex items-center gap-4">
          <Button variant="neon" size="lg">今すぐはじめる</Button>
          <Link
            href="/contact"
            className="rounded-md px-2 py-1 -mx-2 -my-1 outline-none focus:outline-none focus-visible:ring-2 ring-neonCyan ring-offset-2"
          >
            お問い合わせ
            <span className="sr-only">（フォーカスリング対応）</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
