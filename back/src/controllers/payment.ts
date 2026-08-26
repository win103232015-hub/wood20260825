import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import crypto from 'crypto';

// 產生綠界 CheckMacValue 簽章
const generateCheckMacValue = (params: Record<string, string>, hashKey: string, hashIV: string): string => {
  const sortedKeys = Object.keys(params).sort();
  let rawStr = `HashKey=${hashKey}&` + sortedKeys.map((k) => `${k}=${params[k]}`).join('&') + `&HashIV=${hashIV}`;
  
  // URL Encode 並小寫
  rawStr = encodeURIComponent(rawStr).toLowerCase();
  
  // SHA256 加密轉大寫
  return crypto.createHash('sha256').update(rawStr).digest('hex').toUpperCase();
};

// 1. 建立綠界結帳訂單並回傳 Auto-submit 表單
export const createECPayOrder = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { orderId, totalAmount, itemTitle } = req.body;

  const merchantId = process.env.ECPAY_MERCHANT_ID || '2000132';
  const hashKey = process.env.ECPAY_HASH_KEY || '5294D1603174B161';
  const hashIV = process.env.ECPAY_HASH_IV || 'C7673A5465232B34';
  const actionUrl = process.env.ECPAY_ACTION_URL || 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5';

  const tradeNo = `WOOD${Date.now()}`;
  const nowStr = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').replace(/-/g, '/');

  const baseParams: Record<string, string> = {
    MerchantID: merchantId,
    MerchantTradeNo: tradeNo,
    MerchantTradeDate: nowStr,
    PaymentType: 'aio',
    TotalAmount: String(totalAmount || 100),
    TradeDesc: '木工網站商品購買',
    ItemName: itemTitle || '臺灣檜木手作作品',
    ReturnURL: `${process.env.CLIENT_URL || 'http://localhost:5000'}/api/payments/ecpay/callback`,
    ChoosePayment: 'ALL',
    EncryptType: '1',
  };

  baseParams.CheckMacValue = generateCheckMacValue(baseParams, hashKey, hashIV);

  // 產生 auto-submit 表單 HTML
  const formHtml = `
    <form id="ecpay-form" action="${actionUrl}" method="POST">
      ${Object.keys(baseParams)
        .map((key) => `<input type="hidden" name="${key}" value="${baseParams[key]}" />`)
        .join('')}
    </form>
    <script>document.getElementById("ecpay-form").submit();</script>
  `;

  res.send(formHtml);
});

// 2. 綠界 Server 回呼通知 Callback
export const handleECPayCallback = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  console.log('接獲綠界 Payment Callback:', req.body);
  res.send('1|OK'); // 綠界要求成功需回傳 1|OK
});
