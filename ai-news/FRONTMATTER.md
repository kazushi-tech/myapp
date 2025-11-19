# AI News Articles Frontmatter Spec

AI News の記事ノート（`ai-news/articles/*.md`）で使う frontmatter の仕様。

## 対象

- パス: `ai-news/articles/YYYY-MM-DD--host--slug.md`
- kind: `"summary"` の記事ノート

## 必須プロパティ（パイプライン前提）

| key       | 型       | 用途 / 参照箇所                                         |
|----------|----------|----------------------------------------------------------|
| `title`  | string   | 記事タイトル。daily / weekly / sources の表示に使用      |
| `url`    | string   | 元記事URL。Gemini 要約（doctor:tldr）の contextURL など |
| `host`   | string   | ドメイン。sources インデックスや grouping に使用        |
| `created`| date     | 記事日付。日次 / 週次のグループ分けに使用               |
| `date`   | date     | Obsidian / Dataview での表示用（`created` と同じ値）    |
| `kind`   | string   | `"summary"` 固定。doctor 系スクリプトのフィルタ条件     |
| `tldr`   | string   | 要約テキスト。TL;DR ブロック / daily / sources で参照   |

※ `created` / `date` / `host` は、ファイル名 `YYYY-MM-DD--host--slug.md` からも推定可能だが、  
　frontmatter にも明示的に持っておく。

## 推奨プロパティ（あると便利だが、パイプラインは依存しない）

| key         | 型       | 用途                                             |
|------------|----------|--------------------------------------------------|
| `source_url` | string | `url` と同じ値。Dataview で「引用元」列に使う     |
| `source`   | string   | 媒体名・サイト名など（任意）                     |
| `model`    | string   | 要約に使ったモデル名（例: `gemini-2.5-flash`）   |
| `tags`     | string[] | Obsidian 内でのタグ管理用（例: `ai-news`, `manual`） |

## ポリシー

- **最小前提**は「必須プロパティ」が揃っていること。
- 新規記事テンプレート（自動 / manual）は必須プロパティをすべて持つ。
- `doctor:props` スクリプトで、過去記事の frontmatter をこの仕様に寄せる。
- 将来的に frontmatter をダイエットする場合も、上記必須セットは維持する。
