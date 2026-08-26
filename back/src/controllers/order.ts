import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Order } from '../models/Order';

// 1. 建立訂單 (下單防呆點擊確認後呼叫)
export const createOrder = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { buyerEmail, productId, productTitle, quantity, totalPrice, shippingOption, shippingNote } = req.body;

  const orderNo = `ORD${Date.now()}`;
  const newOrder = await Order.create({
    orderNo,
    buyerEmail: buyerEmail || 'guest@woodwork.com',
    product: productId,
    productTitle,
    quantity: quantity || 1,
    totalPrice,
    shippingOption: shippingOption || '大榮貨運',
    shippingNote,
    status: 'paid',
  });

  res.status(201).json({ message: '訂單建立成功，已寫入資料庫！', order: newOrder });
});

// 2. 查詢所有訂單
export const getOrders = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json({ count: orders.length, orders });
});
