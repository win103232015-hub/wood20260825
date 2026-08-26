# ⚙️ 後端開發規範 (Backend Rules)

本檔案定義 `back` (Node.js + Express + TypeScript + Mongoose + Passport.js) 的開發規範：

## 1. 架構與架構模組
- **架構**：Controller - Service - Model - Router 四層架構。
- **資料庫**：MongoDB + Mongoose ODM。
- **身份驗證**：Passport.js (JWT Strategy) + Cookie-parser 處理 HttpOnly Refresh Token。

## 2. API 介面與功能模組
- **權限與治理**：
  - `/api/users/artisan-apply` (買家申請職人，需上傳品牌簡介與代表作品)。
  - `/api/admin/settings` (全域設定：管理員開啟/切換「作品無審核模式」)。
  - `/api/disputes` (訂單爭議頁面留言板與管理員強制仲裁)。
  - `/api/admin/users/:id/freeze` (單鍵凍結職人登入/提領/上架)。
- **商品與展示**：
  - 商品屬性 `saleType`: `BATCH` (庫存自由), `UNIQUE` (庫存固訂為 1), `CUSTOM` (含手作備貨天數)。
  - 支援 `woodSpecies` (臺灣檜木、黑胡桃木...) 與 `coatingMethod` 多選過濾。
- **交易與金物流**：
  - `/api/orders` (建立訂單阻斷式 API)。
  - `/api/payments/ecpay` (綠界 ECPay 重定向與 Callback 簽章驗證)。
  - `/api/logistics/kerry-tj` (大榮貨運運費計算與單號追蹤)。

## 3. 錯誤處理與驗證
- 所有 Route Controller 必須包裹 `asyncHandler` 集中處理錯誤。
- 使用 Yup / Zod 驗證 `req.body` 與 `req.query`。
