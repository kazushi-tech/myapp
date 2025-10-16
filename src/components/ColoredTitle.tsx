// src/components/ColoredTitle.tsx
type Color = 'blue' | 'red' | 'green';

const colorClass: Record<Color, string> = {
  blue: 'text-blue-600',
  red: 'text-red-600',
  green: 'text-green-600',
};

type Props = { text: string; color?: Color };

export default function ColoredTitle({ text, color = 'blue' }: Props) {
  return <h1 className={`text-3xl font-bold ${colorClass[color]}`}>{text}</h1>;
}
