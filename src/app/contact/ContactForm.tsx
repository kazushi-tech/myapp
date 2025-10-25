'use client';

import { FormEvent, useMemo, useState } from "react";
import Button from "@/components/Button";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const initialState = { submitted: false, errors: [] as string[] };

export default function ContactForm() {
  const [state, setState] = useState(initialState);

  const helperTextId = useMemo(() => "contact-helper", []);
  const errorListId = useMemo(() => "contact-errors", []);
  const successId = useMemo(() => "contact-success", []);

  const validate = (data: ContactFormData) => {
    const errors: string[] = [];
    if (!data.name.trim()) {
      errors.push("お名前を入力してください。");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push("正しいメールアドレスを入力してください。");
    }
    if (data.message.trim().length < 20) {
      errors.push("お問い合わせ内容は 20 文字以上で入力してください。");
    }
    return errors;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload: ContactFormData = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const errors = validate(payload);
    const isValid = errors.length === 0;

    console.log("contact:submit", { payload, errors, valid: isValid });

    if (!isValid) {
      setState({ submitted: false, errors });
      return;
    }

    setState({ submitted: true, errors: [] });
    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 grid gap-6"
      aria-describedby={[helperTextId, state.errors.length > 0 ? errorListId : null, state.submitted ? successId : null]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-black dark:text-white">
          お名前
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black shadow-sm outline-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-white/15 dark:bg-black/40 dark:text-white"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-black dark:text-white">
          メールアドレス
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black shadow-sm outline-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-white/15 dark:bg-black/40 dark:text-white"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-black dark:text-white">
          お問い合わせ内容
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black shadow-sm outline-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-white/15 dark:bg-black/40 dark:text-white"
        />
        <p id={helperTextId} className="text-xs text-black/50 dark:text-white/50">
          20 文字以上で詳しくご記入ください。
        </p>
      </div>

      {state.errors.length > 0 && (
        <div
          id={errorListId}
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-100"
        >
          <p className="font-semibold">入力内容をご確認ください。</p>
          <ul className="mt-2 space-y-1">
            {state.errors.map((error) => (
              <li key={error}>・{error}</li>
            ))}
          </ul>
        </div>
      )}

      {state.submitted && (
        <p
          id={successId}
          role="status"
          className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100"
        >
          送信が完了しました。console.log をご確認ください。
        </p>
      )}

      <div className="flex items-center justify-end">
        <Button type="submit" variant="primary">
          送信する
        </Button>
      </div>
    </form>
  );
}
