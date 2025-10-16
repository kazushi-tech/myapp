"use client";
import * as React from "react";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex items-center justify-center rounded-2xl font-medium transition " +
  "disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-brand/40";

const variants: Record<Variant, string> = {
  solid: "bg-brand text-white hover:bg-brand/90",
  outline: "border border-brand text-brand hover:bg-brand/10",
  ghost: "text-brand hover:bg-brand/10"
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-5 text-lg"
};

export default function Button({
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={[base, variants[variant], sizes[size], className].join(" ")} {...props}>
      {children}
    </button>
  );
}
