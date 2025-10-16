// src/app/page.tsx
import ColoredTitle from '../components/ColoredTitle';
import CounterButton from '../components/CounterButton';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-2xl px-6 py-12">
        <ColoredTitle text="TypeScript練習中!" color="red" />
        <p className="mt-2 text-sm text-gray-600">文字・色・レイアウトを安全に変更します。</p>

        <div className="mt-6">
          {/* onCountChange を渡さない（省略OK） */}
          <CounterButton />
        </div>
      </section>
    </main>
  );
}
