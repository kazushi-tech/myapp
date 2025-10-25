import Link from "next/link";

const footerNav = [
  { href: "#features", label: "特徴" },
  { href: "#pricing", label: "料金" },
  { href: "#faq", label: "FAQ" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/demo/button", label: "Button Demo" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-black dark:text-white">launchmate</p>
          <p className="mt-2 max-w-md text-sm text-black/70 dark:text-white/70">
            プロダクトのローンチを支援するモダンなランディングページテンプレート。レスポンシブかつ
            アクセシブルに構築されています。
          </p>
        </div>
        <nav aria-label="フッターナビゲーション" className="flex flex-wrap gap-4 text-sm font-medium">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black/70 transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:text-white/70 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-black/5 px-6 py-6 text-center text-xs text-black/50 dark:border-white/10 dark:text-white/50">
        © {new Date().getFullYear()} launchmate. All rights reserved.
      </div>
    </footer>
  );
}
