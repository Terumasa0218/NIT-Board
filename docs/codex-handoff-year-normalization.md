# NIT-Board 正規化タスク（学年+departmentId導入）- Codex実装指示

## プロジェクト概要
名工大生向け掲示板Webアプリ（Vite + React + TypeScript + Firebase）。
「学科 → 学年(1..4) → トピック → 掲示板」で探せる状態にするのが目標。

## 現状の問題（実コードベース確認済み・2026-02-12時点）

### 実装されていないもの
- Board型/Firestoreに `departmentId` と `year` フィールドがない
- BoardsPageのFirestoreクエリに学科フィルタがない（topicIdのみ）
- yearセレクタUI自体が存在しない
- CreateBoardPageに学科/学年の選択UIがない

### 壊れているもの
- TopicsPage → BoardsPage の導線: `department` vs `dept` パラメータ不一致
- TopicsPageのDEPARTMENT_NAMES（旧ID: mechanical, electrical等）が constants/departments.ts（新ID: life-science-chemistry, electrical-mechanical等）と不一致
- CreateBoardModal: TODO状態で偽ID生成（`'new-board-' + Date.now()`）
- TOPICS定義が3箇所で分裂: `graduate` vs `graduate-exam`, `events` の有無

### TOPICS定義の分裂状況

| ファイル | graduate系ID | events有無 | 共有定数使用 |
|---|---|---|---|
| `constants/departments.ts` (正) | `graduate-exam` | なし | - |
| `TopicsPage.tsx` | `graduate` | なし | 未使用 |
| `CreateBoardPage.tsx` | `graduate-exam` | `events` あり | 未使用 |
| `CreateBoardModal.tsx` | `graduate` | なし | 未使用 |

## 変更対象ファイルと作業内容

### 1. `src/types/index.ts` — Board interface拡張
```typescript
// Board interface に以下を追加（既存フィールドは変更しない）
departmentId?: string   // optional（レガシー互換: 既存docにはない）
year?: number           // 1..4, optional（レガシー互換）
```
- `yearCreated`（西暦）は既存のまま温存。`year`（学年1..4）とは別概念。

### 2. `src/repositories/boardsRepository.ts` — クエリ拡張
- `ListBoardsOptions` に `departmentId?: string` と `year?: number` を追加
- `listBoards()` 内で departmentId/year が指定されたら `where` 追加
- `toBoard()` で `departmentId` と `year` を読み取り（欠損時は undefined）
- `createBoard()` の input に `departmentId?: string` と `year?: number` を追加、Firestoreに保存
- **legacy fallback**: 新規関数 `listBoardsWithLegacyFallback()` を追加
  - primary: `universityId + departmentId + year + topicId` でクエリ
  - fallback: `universityId + topicId` でクエリ（departmentId/year欠損の旧データ用）
  - 2結果をmerge + id重複をdedupeして返す
  - いずれのクエリもTimestamp/counter欠損でクラッシュしないように `toBoard()` の null耐性を維持

### 3. `src/pages/BoardsPage.tsx` — yearセレクタ追加
- URL: `/boards?dept=...&year=2&topic=...` を正とする
- `searchParams.get('year')` を読み取り、1..4以外は補正（デフォルト1）してURLを書き換え
- yearセレクタUI（1年/2年/3年/4年ボタンまたはselect）をdeptセレクタとtopicボタンの間に配置
- Fetch処理を `listBoardsByTopic()` から `listBoardsWithLegacyFallback()` に差し替え
  - 引数: universityId, departmentId, year, topicId

### 4. `src/pages/CreateBoardPage.tsx` — 学科・学年の必須化
- TOPICS配列をローカル定義から `import { TOPICS } from '@/constants/departments'` に変更
- departmentId選択UI追加（DEPARTMENTSからselect、ユーザープロフィールのdeptをデフォルト値に）
- year選択UI追加（1/2/3/4 select、必須）
- 未選択時は作成ブロック+理由表示
- `createBoard()` 呼び出しに `departmentId` と `year` を追加
- topicIdは `TOPICS` の canonical IDを使用

### 5. `src/pages/TopicsPage.tsx` — 整合性修正
- ローカルTOPICSとDEPARTMENT_NAMESを削除
- `import { TOPICS, DEPARTMENTS } from '@/constants/departments'` に統一
- `searchParams.get('department')` → `searchParams.get('dept')` に修正
- `/boards` 遷移時のパラメータを `dept` に統一

### 6. `src/components/CreateBoardModal.tsx` — 修正方針
まずGrepで `CreateBoardModal` のimport/使用箇所を確認し:
- 使われていなければファイル削除
- 使われていれば CreateBoardPageと同じcreateBoard()ロジックに差し替え（departmentId/year必須化）

### 7. `firestore.indexes.json` — 複合インデックス追加
```json
{
  "collectionGroup": "boards",
  "queryScope": "COLLECTION",
  "fields": [
    { "fieldPath": "universityId", "mode": "ASCENDING" },
    { "fieldPath": "departmentId", "mode": "ASCENDING" },
    { "fieldPath": "year", "mode": "ASCENDING" },
    { "fieldPath": "topicId", "mode": "ASCENDING" },
    { "fieldPath": "createdAt", "mode": "DESCENDING" }
  ]
}
```
- 既存インデックスは残す（他クエリが使っている）

### 8. `src/constants/departments.ts` — 変更なし（確認のみ）
- TOPICS定義はここが正。他ファイルのハードコードを全てここへのimportに置換する。

## 守るべき制約

1. **既存データを壊さない**: departmentId/year は optional。欠損docでクラッシュしない。
2. **yearCreated と year を混同しない**: yearCreated=西暦(2026等), year=学年(1..4)。
3. **topicId canonical化**: `graduate` → `graduate-exam` のaliasマッピングが必要な場合は `constants/departments.ts` にhelperを追加。
4. **TOPICSのsingle source of truth**: `constants/departments.ts` 以外にハードコードしない。
5. **auth/profile/firebase周りを触らない**: 今回のスコープ外。
6. **ビルド成功を維持**: 各ステップで `npm run build` が通ること。

## 検証チェックリスト（完了条件）
- [ ] `npm run build` 成功
- [ ] BoardsPage: `/boards?dept=computer-science&year=2&topic=assignments` が正しく表示される
- [ ] BoardsPage: year未指定/不正値（0, 5, abc）はデフォルト値に補正されURLが書き換わる
- [ ] BoardsPage: departmentId/year欠損のlegacy boardsも表示される（fallbackクエリ）
- [ ] CreateBoardPage: departmentId未選択・year未選択では作成不可+理由表示
- [ ] CreateBoardPage: 保存されたFirestore docに universityId, departmentId, year, topicId(canonical) が入っている
- [ ] TopicsPage: `/topics?dept=computer-science` からboardsへの遷移が`dept`パラメータで動作
- [ ] firestore.indexes.json に5フィールド複合インデックスが追加されている
- [ ] TOPICS定義が `constants/departments.ts` のみに存在（他ファイルにハードコードなし）
- [ ] CreateBoardModalが削除済み、または正規のcreateBoard()を使用
- [ ] diff に auth/profile/firebase初期化ファイルへの変更がない
