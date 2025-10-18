import Link from "next/link";

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
    </main>
  );
}
