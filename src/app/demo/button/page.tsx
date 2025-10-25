// src/app/demo/button/page.tsx
import Button from "@/components/Button";

export default function Page() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Button — neon demo</h1>

      <div className="flex flex-wrap items-center gap-4" aria-label="neon">
        <Button variant="neon" size="sm">Neon / sm</Button>
        <Button variant="neon" size="md">Neon / md</Button>
        <Button variant="neon" size="lg">Neon / lg</Button>
      </div>
    </main>
  );
}
