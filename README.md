# Week2 Practice (Next.js App Router)

## 目次
- [概要](#概要)
- [技術スタック](#技術スタック)
- [ローカル実行](#ローカル実行)
- [ページ構成](#ページ構成)
- [チェックコマンド](#チェックコマンド)

## 概要
**Next.js（App Router）+ TypeScript + Tailwind CSS** の最小構成。  
**文字・色・レイアウト**を自分で変え、**型**で安全に保つ練習用。

## 技術スタック
- Next.js：画面の仕組み（家の間取り）
- TypeScript：型のラベル（箱の仕分け）
- Tailwind：見た目のクラス（色シール）

## ローカル実行
```bash
npm install
npm run dev
# http://localhost:3000（または 3001）
```

## ページ構成
- `/`：Hero / Features / Pricing / FAQ / CTA を備えたミニランディングページ
- `/contact`：バリデーション結果を `console.log` に出力する問い合わせフォーム
- `/demo/button`：Button コンポーネントのバリエーションカタログ

## チェックコマンド
CI は以下の順序で実行されます。

```bash
npm run typecheck
npm run lint
npm run build
```
