// src/components/Button.tsx
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: Variant;
  size?: Size;
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary:
    "bg-brand-50 text-brand-700 border-brand-200 hover:bg-brand-100 dark:bg-brand-100/30 dark:text-brand-100 dark:hover:bg-brand-100/20",
  outline:
    "border-brand-600 text-brand-600 hover:bg-brand-50 dark:text-brand-100 dark:border-brand-100/50 dark:hover:bg-brand-100/10",
};

export default function Button({
  loading = false,
  variant = "primary",
  size = "md",
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = loading || disabled;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg border border-transparent font-medium transition-colors " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 " +
    "disabled:cursor-not-allowed disabled:opacity-60";

  const mergedClassName = [base, sizeClasses[size], variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={mergedClassName}
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
