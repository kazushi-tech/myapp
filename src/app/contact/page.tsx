import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "Launchmate へのお問い合わせフォーム。最短 3 日で公開するミニランディングについてご相談ください。",
};

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 items-center justify-center bg-gradient-to-b from-brand-50/40 via-white to-white px-6 py-24 dark:from-brand-100/10 dark:via-black dark:to-black"
    >
      <div className="w-full max-w-2xl rounded-3xl border border-black/5 bg-white p-10 shadow-xl dark:border-white/10 dark:bg-black/40">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">お問い合わせ</h1>
          <p className="text-sm text-black/70 dark:text-white/70">
            ご入力内容は送信せず、検証として console に出力されます。ご相談内容を確認した担当者より 1 営業日以内に折り返します。
          </p>
        </header>
        <ContactForm />
      </div>
    </main>
  );
}
