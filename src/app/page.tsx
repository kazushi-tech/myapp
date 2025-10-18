import ColoredTitle from "@/components/ColoredTitle";
import CounterButton from "@/components/CounterButton";
import Button from "@/components/Button";

export default function Page() {
  return (
    <div className="space-y-6 p-4">
      <section className="space-y-2">
        <ColoredTitle color="brand-600">Tailwind v4 テーマ（brand）テスト</ColoredTitle>
        <p className="text-text/80">
          見出しが <code>text-brand-600</code> の色ならOK。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Button: variant</h2>
        <div className="flex flex-wrap gap-3">
          <Button>solid / md</Button>
          <Button variant="outline">outline / md</Button>
          <Button variant="ghost">ghost / md</Button>
          <Button disabled>disabled</Button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Button: size</h2>
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">sm</Button>
          <Button size="md">md</Button>
          <Button size="lg">lg</Button>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">動作サンプル</h2>
        <CounterButton />
      </section>
    </div>
  );
}
