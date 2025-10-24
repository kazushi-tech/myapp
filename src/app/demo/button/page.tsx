'use client';

import type { ComponentProps } from "react";
import Link from "next/link";
import Button from "@/components/Button";

const VARIANTS = ["primary", "secondary", "outline"] as const;
const VARIANT_LABELS: Record<(typeof VARIANTS)[number], string> = {
  primary: "Primary",
  secondary: "Secondary",
  outline: "Outline",
};

const SIZES = ["sm", "md", "lg"] as const;
const SIZE_LABELS: Record<(typeof SIZES)[number], string> = {
  sm: "Small",
  md: "Medium",
  lg: "Large",
};

type Variant = (typeof VARIANTS)[number];
type Size = (typeof SIZES)[number];
type ButtonProps = ComponentProps<typeof Button>;

type CatalogState = {
  key: string;
  label: string;
  description: string;
  accessibilityNotes?: string[];
  getProps: (context: { variant: Variant; size: Size }) => Partial<ButtonProps>;
};

const renderArrowRightIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4 10h12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m11 5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const renderCheckIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const withPrimaryIcons = (variant: Variant): Partial<ButtonProps> =>
  variant === "primary"
    ? {
        leftIcon: renderArrowRightIcon(),
        rightIcon: renderArrowRightIcon(),
      }
    : {};

const STATES: CatalogState[] = [
  {
    key: "default",
    label: "Default",
    description: "標準状態。primary variant には左右アイコンを付与しています。",
    getProps: ({ variant }) => ({
      ...withPrimaryIcons(variant),
    }),
  },
  {
    key: "loading",
    label: "Loading",
    description: "`loading` を有効化するとスピナーと aria-busy が設定されます。",
    accessibilityNotes: [
      'aria-busy="true"',
      "aria-disabled=\"true\"（コンポーネントが自動付与）",
    ],
    getProps: ({ variant }) => ({
      ...withPrimaryIcons(variant),
      loading: true,
    }),
  },
  {
    key: "disabled",
    label: "Disabled",
    description: "`disabled` 属性の例です。",
    accessibilityNotes: ['disabled', 'aria-disabled="true"（コンポーネントが自動付与）'],
    getProps: () => ({
      disabled: true,
    }),
  },
  {
    key: "pressed",
    label: 'Pressed (aria-pressed)',
    description: "トグルボタンの例です。押下中の状態を aria-pressed で表現します。",
    accessibilityNotes: ['aria-pressed="true"'],
    getProps: ({ variant }) => ({
      "aria-pressed": "true",
      leftIcon: variant === "primary" ? renderCheckIcon() : undefined,
    }),
  },
  {
    key: "menuitem",
    label: 'Menu item role',
    description: "ナビゲーション / メニュー項目として扱う例です。",
    accessibilityNotes: ['role="menuitem"', 'aria-haspopup="true"'],
    getProps: () => ({
      role: "menuitem",
      "aria-haspopup": "true",
    }),
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 p-8">
      <nav className="text-sm opacity-80">
        <Link href="/" className="underline">
          Home
        </Link>
        <span className="mx-1">→</span>
        <span>Demo / Button</span>
      </nav>

      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Button カタログ</h1>
        <p className="max-w-3xl text-sm leading-relaxed opacity-80">
          variant × size × state をすべて網羅した早見表です。アクセシビリティ属性
          （role / aria-*）が付与される状態では下記の「Accessibility notes」で確認できます。
        </p>
      </header>

      <div className="space-y-10">
        {STATES.map((state) => (
          <section key={state.key} className="space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-lg font-semibold">{state.label}</h2>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:bg-brand-100/20 dark:text-brand-100">
                  {state.key}
                </span>
              </div>
              <p className="text-sm opacity-70">{state.description}</p>
              {state.accessibilityNotes && state.accessibilityNotes.length > 0 && (
                <div className="rounded-lg bg-black/[0.03] p-3 text-xs font-mono text-black/70 dark:bg-white/[0.05] dark:text-white/70">
                  <p className="mb-1 font-semibold uppercase tracking-wide opacity-80">
                    Accessibility notes
                  </p>
                  <ul className="space-y-1">
                    {state.accessibilityNotes.map((note) => (
                      <li key={note} className="whitespace-pre">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-6 rounded-xl border border-black/5 p-6 dark:border-white/10">
              {VARIANTS.map((variant) => (
                <div key={`${state.key}-${variant}`} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      {VARIANT_LABELS[variant]}
                    </span>
                    <span className="text-xs uppercase tracking-wide opacity-60">
                      variant=&quot;{variant}&quot;
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {SIZES.map((size) => {
                      const stateProps = state.getProps({ variant, size });
                      return (
                        <Button
                          key={`${state.key}-${variant}-${size}`}
                          variant={variant}
                          size={size}
                          {...stateProps}
                        >
                          {state.label} · {VARIANT_LABELS[variant]} · {SIZE_LABELS[size]}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
