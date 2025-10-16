// src/components/CounterButton.tsx
'use client';
import { useState } from 'react';

type Props = { onCountChange?: (count: number) => void };

export default function CounterButton({ onCountChange }: Props) {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    const next = count + 1;
    setCount(next);
    onCountChange?.(next);
  };
  return (
    <button
      onClick={handleClick}
      className="rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      押した回数: {count}
    </button>
  );
}
