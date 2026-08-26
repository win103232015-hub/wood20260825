import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Review } from '../models/Review';

// 取得某商品的評價與開箱照
export const getProductReviews = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { productId } = req.params;
  const reviews = await Review.find({ product: productId }).sort({ createdAt: -1 });
  res.json({ count: reviews.length, reviews });
});

// 新增評價與上傳最多 5 張開箱實體照
export const createReview = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { productId, userEmail, rating, comment, unboxingImages } = req.body;

  const newReview = await Review.create({
    product: productId,
    userEmail: userEmail || 'buyer@woodwork.com',
    rating: rating || 5,
    comment,
    unboxingImages: unboxingImages?.slice(0, 5) || [],
  });

  res.status(201).json({ message: '評價與開箱照發布成功！', review: newReview });
});
