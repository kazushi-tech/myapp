// src/components/Button.tsx
import type { ButtonHTMLAttributes } from "react";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: Variant;
  size?: Size;
};

export default function Button({
  loading = false,
  variant = "solid",
  size = "md",
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = loading || disabled;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors " +
    "disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeClass =
    size === "sm"
      ? "px-3 py-1.5 text-sm"
      : size === "lg"
      ? "px-5 py-3 text-base"
      : "px-4 py-2 text-sm";

  const variantClass =
    variant === "outline"
      ? "border border-brand-600 text-brand-600 hover:bg-brand-50"
      : variant === "ghost"
      ? "text-brand-600 hover:bg-brand-50"
      : "bg-brand-600 text-white hover:bg-brand-700";

  return (
    <button
      {...props}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={[base, sizeClass, variantClass, className].join(" ")}
    >
      {loading && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          role="img"
          aria-label="読み込み中"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            opacity="0.25"
          />
          <path
            d="M22 12a10 10 0 0 1-10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      )}
      <span>{children}</span>
    </button>
  );
}
