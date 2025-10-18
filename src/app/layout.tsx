// layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import ThemeToggle from "@/components/ThemeToggle"; // ← 追加

export const metadata: Metadata = { title: "myapp" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* beforeInteractiveで最速適用 */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var t = localStorage.getItem('theme');
              var e = document.documentElement;
              if (t) e.dataset.theme = t;
              else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                e.dataset.theme = 'dark';
              } else {
                e.dataset.theme = 'light';
              }
            } catch (e) {}
          `}
        </Script>
      </head>
      <body className="text-text">
        <header className="mx-auto max-w-5xl p-4 flex items-center justify-between">
          <div className="font-semibold">myapp</div>
          <ThemeToggle />
        </header>
        {children}
        <footer className="mx-auto max-w-5xl p-4 text-sm opacity-70">© {new Date().getFullYear()} myapp</footer>
      </body>
    </html>
  );
}
