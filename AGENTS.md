# AGENTS.md — Project scope: 全リポジトリ

## Setup / Scripts
- 依存: `npm ci || npm i`
- 開発: `npm run dev`
- ビルド: `npm run build` / 本番起動: `npm start`（あれば）
- 型チェック: `npm run typecheck`（なければ "tsc --noEmit" で作成）
- Lint: `npm run lint --max-warnings=0`
- Format: `npm run format`（Prettier）

## Code Style
- フォーマッタ: Prettier、Lint: ESLint（fix可能な問題は自動修正）
- React: コンポーネントは PascalCase、hooks は use* で命名
- UI: Tailwind 既存設定を尊重し、不要な CSS 追加は最小限

## Test（存在する場合のみ）
- Jest/Vitest を検出したら `npm test` で実行、カバレッジはレポートのみ（失敗時は停止）

## Safety / 禁止事項
- `.env*` の生成/変更は事前に確認がない限り禁止。秘密情報は出力しない
- 破壊的操作（rm -rf、git 初期化のやり直し等）は禁止
- 可能な限り package.json の script 経由でコマンド実行

## Docs
- 重要な操作は README.md に追記すること
