import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Card from "@/components/Card";

type Plan = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  perks: readonly string[];
  badge?: string;
};

const features = [
  {
    title: "コピー＆セクションライブラリ",
    description: "Hero、特徴紹介、料金表、FAQ など、15 種類のセクションをすぐに呼び出して差し替えるだけ。Tailwind のユーティリティで柔軟に調整できます。",
    icon: <IconSparkles />,
  },
  {
    title: "リアルタイムプレビュー",
    description: "App Router をベースに、下書きの状態でもプレビュー URL を即共有。ドラフトと公開の差分も視覚的に追えます。",
    icon: <IconGauge />,
  },
  {
    title: "アクセシビリティ最優先",
    description: "ARIA ランドマーク、フォーカスリング、コントラストを最初から設計。ダークモードやキーボード操作にも完全対応しています。",
    icon: <IconShield />,
  },
] as const;

const plans: Plan[] = [
  {
    name: "Starter",
    price: "¥4,980",
    cadence: "月額",
    description: "個人・スモールチームに最適。LP の高速立ち上げを支援します。",
    badge: "人気",
    perks: ["Hero + 10 セクション", "Analytics 連携テンプレ", "メールサポート (24時間以内)"],
  },
  {
    name: "Growth",
    price: "¥9,800",
    cadence: "月額",
    description: "スケール中のスタートアップ向け。最適化と自動化を強化。",
    perks: [
      "A/B テストセクション",
      "CMS & フォーム自動連携",
      "カスタムコンポーネント相談 (月2回)",
    ],
  },
  {
    name: "Enterprise",
    price: "お見積り",
    description: "セキュリティ要件や多言語展開など、個別要望に合わせて構成します。",
    perks: ["専任オンボーディング", "SLA 99.9%", "アクセシビリティ監査"],
  },
] as const;

const faqs = [
  {
    question: "導入までの期間はどれくらいですか？",
    answer:
      "Starter プランであれば、初期セットアップを含めて平均 3 営業日で公開まで完了します。Growth 以上では初回の要件ヒアリングを経て 1 週間前後で本番導入が可能です。",
  },
  {
    question: "既存のデザインシステムと統合できますか？",
    answer:
      "はい。Tailwind のカスタムテーマと css variables を利用しているため、既存のトークンへ置き換えるだけで統一感のあるUIに仕上げられます。",
  },
  {
    question: "CMS やヘッドレスサービスとの連携は？",
    answer:
      "Contentful、Sanity、MicroCMS など主要なヘッドレス CMS と実績があります。Growth プラン以上で標準サポートとなります。",
  },
  {
    question: "サポート体制を教えてください。",
    answer:
      "メールサポートに加え、Enterprise プランでは専用 Slack と週次ステータスミーティングにも対応しています。",
  },
] as const;

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <section
        id="hero"
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden border-b border-black/5 bg-gradient-to-br from-brand-50 via-white to-brand-100/40 dark:border-white/10 dark:from-brand-100/10 dark:via-black dark:to-black"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-24 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600 shadow-sm dark:border-brand-100/20 dark:bg-black/60 dark:text-brand-100">
              新機能: Launchmate 1.2 リリース
            </div>
            <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
              リリース前の「伝わらない」をゼロにするミニランディングページ。
            </h1>
            <p className="text-lg leading-relaxed text-black/70 dark:text-white/70">
              Launchmate は、プロダクトの価値訴求に必要なセクションをすべて備えた Next.js テンプレートです。
              初期設定からアクセシビリティ対応、フォーム計測までを最速で整えます。
            </p>
            <div className="flex flex-wrap items-center gap-4" aria-label="主要アクション">
              <form action="/contact">
                {/* Step3: CTA を neon に */}
                <Button type="submit" variant="neon" size="lg">
                  デモを依頼する
                </Button>
              </form>
              <Link
                href="/demo/button"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 underline decoration-brand-200 decoration-2 underline-offset-4 transition hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-neonCyan dark:text-brand-100"
              >
                UI コンポーネントを確認
                <span aria-hidden>→</span>
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3" aria-label="指標">
              <div>
                <dt className="text-sm font-medium text-black/60 dark:text-white/60">実装時間の短縮</dt>
                <dd className="text-2xl font-semibold text-black dark:text-white">-68%</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-black/60 dark:text-white/60">A/B テスト成功率</dt>
                <dd className="text-2xl font-semibold text-black dark:text-white">+32%</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-black/60 dark:text-white/60">サポート満足度</dt>
                <dd className="text-2xl font-semibold text-black dark:text-white">4.9/5</dd>
              </div>
            </dl>
          </div>
          <div className="relative flex w-full max-w-lg flex-col gap-4 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-xl backdrop-blur dark:border-white/10 dark:bg-black/40">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-100/20 dark:text-brand-100">
                <IconLightning />
              </span>
              <div>
                <p className="text-sm font-semibold text-black/70 dark:text-white/70">パーソナライズ要約</p>
                <p className="text-xs text-black/50 dark:text-white/50">あなたのプロダクトに合わせた推奨構成</p>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/40 p-4 text-sm text-brand-700 dark:border-brand-100/40 dark:bg-brand-100/10 dark:text-brand-100">
              <p className="font-semibold">Launchmate が提案:</p>
              <ul className="mt-2 space-y-1">
                <li>• Hero に「即時予約ボタン」を追加</li>
                <li>• 成功事例セクションを 2→3 社に拡張</li>
                <li>• CTA 前に「よくある質問」を配置し離脱を抑制</li>
              </ul>
            </div>
            <p className="text-xs text-black/50 dark:text-white/50">
              * 初回診断レポートは 5 分で生成。Growth プラン以上で自動最適化ルールを提供します。
            </p>
          </div>
        </div>
      </section>

      <Section
        id="features"
        heading="最初からそろう、成果に直結するコンポーネント"
        description="Launchmate は、プロダクトに合わせて差し替えるだけで使えるセクションを提供し、ブランド体験と開発スピードの両方を支えます。"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </Section>

      <Section
        id="pricing"
        heading="チームのフェーズに合わせた柔軟な料金設計"
        description="月次課金でいつでもアップグレード可能。14 日間のトライアルで全機能を確認できます。"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} title={plan.name} description={plan.description} badge={plan.badge} icon={<IconPlan />}>
              <p className="text-4xl font-bold text-black dark:text-white">
                {plan.price}
                {plan.cadence && (
                  <span className="ml-2 text-base font-medium text-black/60 dark:text-white/60">/{plan.cadence}</span>
                )}
              </p>
              <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-500 dark:bg-brand-100" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <form action="/contact">
                {/* Pricing CTA も neon に統一（任意だが推奨） */}
                <Button type="submit" variant="neon" className="w-full">
                  担当者に相談する
                </Button>
              </form>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="faq"
        heading="よくある質問"
        description="導入前によくいただく質問をまとめました。その他の疑問はお気軽にお問い合わせください。"
      >
        <dl className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-black/40">
              <dt className="text-lg font-semibold text-black dark:text-white">{faq.question}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-black/70 dark:text-white/70">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        id="cta"
        heading="最短 3 日で、伝わるランディングページを公開しませんか？"
        description="要件ヒアリングから初回リリース、計測設定までを伴走します。まずは無料相談で現在の課題をお聞かせください。"
      >
        <div className="mx-auto max-w-3xl rounded-3xl border border-brand-200 bg-brand-50/60 p-10 text-center shadow-lg dark:border-brand-100/30 dark:bg-brand-100/10">
          <div className="mx-auto flex max-w-2xl flex-col gap-6">
            <p className="text-base text-black/70 dark:text-white/70">
              コンタクトフォームは 1 分で完了。簡単なヒアリング後、貴社向けの導入ロードマップと試作品を共有します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <form action="/contact">
                <Button type="submit" size="lg">
                  無料相談を予約
                </Button>
              </form>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-brand-300 px-5 py-3 text-sm font-semibold text-brand-600 transition hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-neonCyan dark:border-brand-100/30 dark:text-brand-100 dark:hover:bg-brand-100/20"
              >
                機能一覧を確認
              </Link>
            </div>
            <p className="text-xs uppercase tracking-wide text-black/50 dark:text-white/50">
              14 日間のトライアル終了後も、自動で課金は行われません。
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

function IconSparkles() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">
      <path d="M12 3 13.2 7.8 18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3ZM6 15l.6 2.4L9 18l-2.4.6L6 21l-.6-2.4L3 18l2.4-.6L6 15Zm12-8 1.2 2.4L21 10l-1.8.6L18 13l-.6-2.4L15 10l2.4-.6L18 7Z" fill="currentColor" />
    </svg>
  );
}

function IconGauge() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">
      <path d="M12 4a8 8 0 1 0 5.657 13.657 8 8 0 0 0-5.657-13.657Zm0 2a6 6 0 0 1 5.996 6.229l-1.19-.828a1 1 0 0 0-1.28.138l-2.907 2.907a2 2 0 1 1-2.828-2.828l2.906-2.907a1 1 0 0 0 .139-1.279l-.828-1.19A5.983 5.983 0 0 1 12 6Z" fill="currentColor" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">
      <path d="M12 3 4 6v6c0 4.755 3.994 8.716 8 9 4.006-.284 8-4.245 8-9V6l-8-3Zm0 2.236 6 2.25V12c0 3.55-2.997 6.84-6 7.086C9.002 18.84 6 15.55 6 12V7.486l6-2.25Zm0 3.264a3 3 0 0 0-3 3c0 1.657 1.343 3 3 3a3 3 0 1 0 0-6Z" fill="currentColor" />
    </svg>
  );
}

function IconLightning() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">
      <path d="M13 2 5 13h5v9l8-11h-5L13 2Z" fill="currentColor" />
    </svg>
  );
}

function IconPlan() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">
      <path d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a1 1 0 0 1-1.447.894L12 17.118l-6.553 2.776A1 1 0 0 1 4 19V5Zm3-1a1 1 0 0 0-1 1v12.382l5.553-2.352a1 1 0 0 1 .894 0L18 17.382V5a1 1 0 0 0-1-1H7Zm1 4h8v2H8V8Zm0 4h8v2H8v-2Z" fill="currentColor" />
    </svg>
  );
}
