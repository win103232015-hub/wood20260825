import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { User } from '../models/User';

// 取得所有職人資料 (包含頭像、品牌故事、資歷)
export const getArtisans = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const artisans = await User.find({ role: 'artisan' }).select('email artisanProfile createdAt');
  res.json({ count: artisans.length, artisans });
});
