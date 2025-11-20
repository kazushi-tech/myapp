---
title: X Clips 一覧
kind: x-clip-index
---

# X Clips 一覧

> [!info]
> - Xは「ニュース発見用チャネル」、ここは「残したいツイートだけを整理する保管庫」。
> - 基本ルール  
>   - クリップ先: `ai-news/x-clips/`  
>   - プロパティ: `title`, `url`, `domain`, `created`, `kind: x-clip` を必須にする  
>   - 本文には最低限「TL;DR / 抽出テキスト / 自分のメモ」を残す

---

## 最近のクリップ 50件

```dataview
TABLE
  created AS "日付",
  file.link AS "ノート",
  url AS "元ツイート",
  domain AS "ドメイン"
FROM "ai-news/x-clips"
WHERE kind = "x-clip"
SORT created DESC
LIMIT 50
`````