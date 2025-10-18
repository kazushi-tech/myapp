// src/components/ColoredTitle.tsx
import * as React from "react";

type Color =
  | "default"
  | "brand"
  | "brand-50" | "brand-100" | "brand-200" | "brand-300"
  | "brand-400" | "brand-500" | "brand-600" | "brand-700";

type AsTag = "h1" | "h2" | "h3" | "h4" | "p" | "span";

export type ColoredTitleProps = {
  color?: Color;
  as?: AsTag;                 // ← JSX 名前空間を使わない
  className?: string;
  children: React.ReactNode;
};

const colorClass: Record<Color, string> = {
  default: "text-text",
  brand: "text-brand-600",
  "brand-50": "text-brand-50",
  "brand-100": "text-brand-100",
  "brand-200": "text-brand-200",
  "brand-300": "text-brand-300",
  "brand-400": "text-brand-400",
  "brand-500": "text-brand-500",
  "brand-600": "text-brand-600",
  "brand-700": "text-brand-700",
};

export default function ColoredTitle({
  color = "default",
  as = "h2",
  className,
  children,
}: ColoredTitleProps) {
  const Tag = as as React.ElementType; // ← “タグとして使える”型に変換

  return (
    <Tag
      className={[
        "text-2xl font-bold",
        colorClass[color],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
