export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-[var(--brand)]">
          はじめてのNext.js（色を変えたよ）
        </h1>
        <p className="text-base text-gray-600">
          Next.js（骨組み）＋ TypeScript（安全ベルト）＋ Tailwind（服）で作っています。
        </p>
      </div>
    </main>
  );
}
