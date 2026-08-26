# 🔒 資安與金鑰架構規範 (Security & Key Management Rules)

在開發前後端功能時，必須嚴格遵守以下安全規範：

## 1. 環境變數隔離與提問機制
- 絕對禁止將 JWT Secrets、Database URI、Cloudinary API Credentials、綠界金流 Key (HashKey/HashIV) 等敏感資訊硬編碼在程式碼中。
- 所有敏感變數必須放入 `.env` 檔案。
- **Agent 操作規範**：開發與討論至相關敏感模組時，系統必須先向使用者發出確認提問，方可進行環境變數建置與寫入。

## 2. 雙 Token 身份驗證與續簽 (Dual Token Architecture)
- **Access Token**：效期 15 分鐘，僅存放於前端記憶體狀態（Pinia Store），絕不寫入 localStorage。
- **Refresh Token**：效期 7 天，設置於 Cookie 中，必須帶有 `httpOnly; Secure; SameSite=Strict` 屬性。
- **Axios 無感續簽**：前端 Response 攔截器捕獲 `401 Unauthorized` 時，自動觸發 `/api/auth/refresh` 靜默刷新 Access Token，並自動重試原失敗請求。

## 3. 密碼與資料庫防護
- 所有使用者密碼必須使用 `bcrypt` 進行 Hash 處理，Salt Rounds 不得低於 10。
- 資料庫操作必須透過 Mongoose ODM 進行，防止 NoSQL Injection 攻擊。
- 禁止將 `req.body` 直接傳入 Mongoose 方法，必須經 Yup / Zod 進行白名單驗證與欄位過濾。

## 4. 前端 XSS 防護
- 禁止直接使用 `v-html` 展示使用者輸入的內容（如商品描述或評價）。若必須使用，必須經 sanitize-html 消毒。
