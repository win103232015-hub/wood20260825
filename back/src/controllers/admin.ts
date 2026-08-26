import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { User } from '../models/User';
import { Product } from '../models/Product';
import { GlobalSetting } from '../models/GlobalSetting';

// 1. 切換全域「無審核模式」開關
export const toggleNoReviewMode = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { enabled } = req.body;
  let setting = await GlobalSetting.findOne({ key: 'global' });
  if (!setting) {
    setting = await GlobalSetting.create({ key: 'global', noReviewMode: enabled });
  } else {
    setting.noReviewMode = enabled;
    await setting.save();
  }

  res.json({
    message: `全域「作品無審核模式」已${enabled ? '開啟 (作品發布將自動公開)' : '關閉 (作品須經過管理員審核)'}`,
    noReviewMode: setting.noReviewMode,
  });
});

// 2. 審核職人轉職申請 (Approve / Reject)
export const reviewArtisanApplication = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { userId, approve } = req.body;
  const user = await User.findById(userId);

  if (!user || !user.artisanProfile) {
    res.status(404).json({ message: '找不到職人申請紀錄' });
    return;
  }

  if (approve) {
    user.role = 'artisan';
    user.artisanProfile.applicationStatus = 'approved';
  } else {
    user.artisanProfile.applicationStatus = 'rejected';
  }

  await user.save();
  res.json({ message: `職人申請已${approve ? '核准轉職' : '駁回'}`, user });
});

// 3. 單鍵凍結職人帳號（禁止登入/提領/上架）
export const toggleFreezeUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { userId, freeze } = req.body;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404).json({ message: '找不到使用者' });
    return;
  }

  user.isFrozen = freeze;
  await user.save();
  res.json({ message: `該帳號已${freeze ? '凍結（禁止登入/提領/上架）' : '解凍'}`, isFrozen: user.isFrozen });
});

// 4. 單鍵下架違規商品
export const unlistProduct = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { productId } = req.params;
  const product = await Product.findById(productId);

  if (!product) {
    res.status(404).json({ message: '找不到商品' });
    return;
  }

  product.status = 'unlisted';
  await product.save();
  res.json({ message: '違規商品已成功單鍵下架', productId: product._id });
});
