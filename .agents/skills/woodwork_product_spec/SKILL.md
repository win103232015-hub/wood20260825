---
name: woodwork_product_spec
description: 木工作品銷售屬性 (BATCH, UNIQUE, CUSTOM)、木材與塗漆過濾器、畫廊散落圖片與 Lightbox 放大鏡實作 SOP。
---

# 🪵 木工商品規格與畫廊放大鏡 SOP (SKILL)

本技能說明木工網站專屬之商品資料結構、過濾器邏輯與 UI 畫廊放大體驗。

## 1. 銷售屬性 (Sale Attributes) 邏輯
- `BATCH` (量產商品)：
  - Schema: `stock` 欄位可自由設定數量。
- `UNIQUE` (獨一無二孤品)：
  - Schema: `stock` 預設硬性固定為 `1`，無法手動增加。售出後自動下架。
- `CUSTOM` (客製化訂做)：
  - Schema: 需填寫 `customPrepDays` (備貨天數備註) 與 `customOptions` (客製需求選單/欄位)。

## 2. 搜尋與多條件過濾 (Search & Filters)
- **木材種類 (`woodSpecies`)**：
  - 支援多選：`臺灣檜木` | `黑胡桃木` | `柚木` | `櫸木` | `白橡木` | `其他`。
- **塗漆方式 (`coatingMethod`)**：
  - 支援多選：`天然護木油` | `木蠟油` | `生漆/推光漆` | `無塗裝`。

## 3. 畫廊佈局與 Lightbox 放大鏡元件 (`ProductGallery.vue`)
- **主圖與散落細節圖**：
  - `images.primary`: 正面主要大圖 $\times 1$。
  - `images.details`: 縮小版細節圖 (上限 3 張)，採用 `position: relative` 與斜向傾斜呈現散落質感。
- **Lightbox 放大鏡**：
  - 點擊圖片觸發全螢幕視窗。
  - 鼠標帶有放大鏡效果 (Zoom Lens Component)，拉近顯示 250% 原圖木頭紋理與磨砂細節。
