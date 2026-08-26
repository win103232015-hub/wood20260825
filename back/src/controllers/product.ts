import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Product } from '../models/Product';
import { GlobalSetting } from '../models/GlobalSetting';

// 1. 查詢與多條件篩選商品 (支援木材種類與塗漆方式多選過濾)
export const getProducts = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { woodSpecies, coatingMethod, saleType, keyword } = req.query;

  const filter: any = { status: 'approved' }; // 預設僅能查已發布商品

  if (saleType) {
    filter.saleType = saleType;
  }

  if (woodSpecies) {
    const speciesArr = (woodSpecies as string).split(',');
    filter.woodSpecies = { $in: speciesArr };
  }

  if (coatingMethod) {
    const coatingArr = (coatingMethod as string).split(',');
    filter.coatingMethod = { $in: coatingArr };
  }

  if (keyword) {
    filter.title = { $regex: keyword as string, $options: 'i' };
  }

  const products = await Product.find(filter).populate('artisan', 'email artisanProfile').sort({ createdAt: -1 });

  res.json({ count: products.length, products });
});

// 2. 職人上架新作品 (根據無審核模式決定 status: 'pending' 或 'approved')
export const createProduct = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { title, description, price, saleType, stock, customPrepDays, woodSpecies, coatingMethod, images, artisanId } = req.body;

  // 檢查全域「無審核模式」開關
  const setting = await GlobalSetting.findOne({ key: 'global' });
  const initialStatus = setting?.noReviewMode ? 'approved' : 'pending';

  const newProduct = await Product.create({
    title,
    description,
    price,
    saleType,
    stock: saleType === 'UNIQUE' ? 1 : stock || 1,
    customPrepDays,
    woodSpecies: woodSpecies || [],
    coatingMethod: coatingMethod || [],
    images: {
      primary: images?.primary,
      details: images?.details?.slice(0, 3) || [], // 最多 3 張細節圖
    },
    artisan: artisanId,
    status: initialStatus,
  });

  res.status(201).json({
    message: initialStatus === 'approved' ? '作品已發布公開 (無審核模式模式)' : '作品已提交，處於待審核狀態。',
    product: newProduct,
  });
});
