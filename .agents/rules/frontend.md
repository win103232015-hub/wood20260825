# 💻 前端開發規範 (Frontend Rules)

本檔案定義 `vuetify-project` (Vue 3 + Vuetify 3 + Pinia + Vite) 的開發規範：

## 1. 架構與技術棧
- **框架**：Vue 3 (Composition API `<script setup lang="ts">`).
- **UI 元件庫**：Vuetify 3 (自訂色調 Theme: 主色 `#8B4513`, 輔助色 `#FDFBF7`, 點綴色 `#D4AF37`, 中性色 `#2B2B2B`).
- **狀態管理**：Pinia Stores (`auth.ts`, `product.ts`, `cart.ts`, `artisan.ts`).
- **HTTP 工具**：Axios 實例 (`src/api/axios.ts`)，配置 Response 攔截器處理 401 無感續簽。

## 2. 元件模組化要求
- **`ProductGallery.vue`**：主要正面圖 + 散落細節圖 (最多 3 張) + Lightbox 圖片高解析放大鏡。
- **`OrderConfirmDialog.vue`**：`v-dialog` 購買防呆對話框（含作品名稱、總金額、數量、運送備註警示與阻斷式發送按鈕）。
- **`ProductFilterBar.vue`**：木材種類 (檜木/黑胡桃木/柚木等) 與塗漆方式 (護木油/生漆/無塗裝) 多選膠囊列。
- **`ReviewSection.vue`**：1-5 黃銅金星等評分與最多 5 張開箱實體照 Photo Grid。

## 3. 程式碼品質與型別
- 所有 API 回傳資料與組件 Props 必須定義明確的 TypeScript Interface (DTO)。
- 避免使用 `any` 型別。
