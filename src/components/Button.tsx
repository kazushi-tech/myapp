// src/components/Button.tsx
"use client";

import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "neon";
  size?: "sm" | "md" | "lg";
};

const BASE =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors " +
  "focus:outline-none focus-visible:ring-2 ring-offset-2 ring-neonCyan " +
  "disabled:opacity-50 disabled:pointer-events-none";

const SIZES: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-base",
};

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-foreground text-background hover:bg-foreground/90",
  secondary: "bg-muted text-foreground hover:bg-muted/80",
  outline: "border border-border bg-transparent hover:bg-muted/40",
  neon: "border border-neonCyan text-neonCyan hover:bg-neonCyan/10",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", ...props }, ref) => {
    const cls = [BASE, SIZES[size], VARIANTS[variant], className]
      .filter(Boolean)
      .join(" ");
    return <button ref={ref} className={cls} {...props} />;
  }
);
Button.displayName = "Button";

export default Button;
