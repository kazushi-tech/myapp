// src/components/Button.tsx
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "neon";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
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
  // ← Step3: neon 追加
  neon: "border border-neonCyan text-neonCyan bg-transparent hover:bg-neonCyan/10",
};

export default function Button({
  loading = false,
  variant = "primary",
  size = "md",
  className = "",
  children,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const isDisabled = loading || disabled;

  const base =
    [
      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
      "border border-transparent", // 各variantで上書き
      "focus:outline-none focus-visible:ring-2 ring-offset-2 ring-neonCyan",
      "disabled:cursor-not-allowed disabled:opacity-60 data-[loading=true]:cursor-progress",
    ].join(" ");

  const mergedClassName = [base, sizeClasses[size], variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  const computedLeftIcon = loading ? (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" role="img" aria-label="読み込み中">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.25" />
      <path d="M22 12a10 10 0 0 1-10 10" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  ) : (
    leftIcon
  );

  return (
    <button
      {...props}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      data-loading={loading ? "true" : undefined}
      className={mergedClassName}
    >
      {computedLeftIcon && (
        <span className="inline-flex items-center" aria-hidden={loading ? undefined : true}>
          {computedLeftIcon}
        </span>
      )}
      <span>{children}</span>
      {!loading && rightIcon && (
        <span className="inline-flex items-center" aria-hidden>
          {rightIcon}
        </span>
      )}
    </button>
  );
}
