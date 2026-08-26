---
name: ecpay_and_logistics
description: 綠界 (ECPay) 金流 SDK 對接、HashKey/HashIV 簽章驗證與大榮貨運 (Kerry TJ Logistics) 運費計算 SOP。
---

# 💳 綠界金流與大榮物流串接 SOP (SKILL)

本技能說明如何在木工網站專案中安全串接 ECPay 綠界支付與大榮貨運物流。

## 1. 綠界 (ECPay) 金流對接步驟
1. **環境變數確認**：在 `.env` 中設定 `ECPAY_MERCHANT_ID`, `ECPAY_HASH_KEY`, `ECPAY_HASH_IV`, `ECPAY_ACTION_URL`。Agent 在操作前必須發出詢問確認。
2. **綠界 CheckMacValue 簽章生成**：
   - 將所有 POST 參數依照 A-Z 字典序排序。
   - 前後加上 `HashKey` 與 `HashIV`。
   - 進行 URL encode、轉小寫、SHA256 加密後轉大寫。
3. **訂單建立與 Redirect**：
   - 使用者確認下單後，後端產生綠界 SDK 所需之 HTML auto-submit form。
   - 前端接獲回應後重定向至綠界頁面完成刷卡/轉帳。
4. **Callback (RtnCode) 驗證**：
   - 後端 `/api/payments/ecpay/callback` 接收綠界 Server 端通知。
   - 重新算算 CheckMacValue 比對，若為 `1` 則將訂單狀態改為已付款。

## 2. 大榮貨運 (Kerry TJ) 特殊物流計算
1. **配送選單**：職人提供專車配送 / 面交 / 大榮貨運。
2. **大榮貨運運費邏輯**：
   - 針對大型家具或易碎木製品，依據才數 (Volume) 與重量級別動態計算運費。
   - 發貨後記錄大榮貨運追蹤單號 (Tracking Number)，提供買家於訂單頁面追蹤進度。
