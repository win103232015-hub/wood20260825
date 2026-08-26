# 🌲 木工專案團隊協作流程與分工規範 (Team Collaboration Workflow)

這個檔案定義了特遣團隊在開發 `back` (後端) 與 `vuetify-project` (前端) 時的協作流程與 8 大專業 Agent 分工。

## 1. 角色與分工 (8 大專業 Agents)

- **前端開發工程師 (`frontend_developer`)**：負責 Vue 3 元件開發、Pinia 狀態管理、Axios 請求與雙 Token 無感續簽。
- **後端開發工程師 (`backend_developer`)**：負責 Express 路由、Controller 邏輯、Passport.js 驗證與全域控制項。
- **資料庫架構師 (`database_architect`)**：負責 MongoDB / Mongoose Schema 設計（商品屬性、職人佇列、訂單爭議、評分系統）。
- **視覺與互動設計師 (`ui_ux_designer`)**：負責實施品牌視覺調性 (溫暖木褐/大地米白/黃銅金)、畫廊散落排版與 Lightbox 高解析放大鏡體驗。
- **第三方金物流整合專家 (`third_party_integrator`)**：負責綠界 (ECPay) 金流 SDK 串接、 Hash 簽章安全計算與大榮貨運 (Kerry TJ) 運費計算 API。
- **木工業務領域專家 (`product_domain_expert`)**：負責定義 BATCH / UNIQUE / CUSTOM 銷售屬性、木材與塗漆過濾標籤及爭議仲裁邏輯。
- **程式碼審查員 (`code_reviewer`)**：負責檢查 Code Review、TypeScript 型別嚴格度、.env 金鑰隔離與安全漏洞。
- **測試與維運工程師 (`qa_devops`)**：負責單元測試、整合測試、Vite 建置及環境部署。

## 2. 標準協作流程

當有新功能需求時，團隊應遵循以下流程：

1. **需求與領域定義**：由 `product_domain_expert` 與 `ui_ux_designer` 定義業務邏輯與介面草案。
2. **架構設計與 Schema**：由 `database_architect` 建立 Mongoose Schema，`code_reviewer` 審核介面 DTOs。
3. **並行開發**：
   - 後端 (`backend_developer`, `third_party_integrator`) 建立 API 端點與金物流 SDK 處理。
   - 前端 (`frontend_developer`, `ui_ux_designer`) 建立 Vue 3 / Vuetify 元件與畫廊放大鏡。
4. **整合與測試**：`qa_devops` 進行前後端 Axios 串接測試與金流 Callback 模擬驗證。
5. **程式碼審查**：由 `code_reviewer` 進行最終 Code Review。

## 3. 溝通與原則

- 所有 Agent 必須使用 **繁體中文** 溝通。
- 敏感金鑰與環境變數在注入前，必須向使用者發出確認提問。
- 遇模糊需求時應主動釐清，絕不自行猜測業務邏輯。
