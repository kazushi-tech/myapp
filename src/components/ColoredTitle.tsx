import * as React from "react";

type ColoredTitleProps = {
  children: React.ReactNode;
  /** "brand" を渡すと text-brand に */
  color?: "brand" | "default";
  className?: string;
};

export default function ColoredTitle({
  children,
  color = "default",
  className = "",
}: ColoredTitleProps) {
  const colorClass = color === "brand" ? "text-brand" : "";
  return (
    <h1 className={`text-3xl font-bold tracking-tight ${colorClass} ${className}`}>
      {children}
    </h1>
  );
}
