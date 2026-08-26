import { Schema, model, Types } from 'mongoose';

export interface IReview {
  product: Types.ObjectId;
  userEmail: string;
  rating: number; // 1-5 星
  comment: string;
  unboxingImages: string[]; // 最多 5 張開箱照
  createdAt: Date;
}

const ReviewSchema = new Schema<IReview>(
  {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    userEmail: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    unboxingImages: [{ type: String }],
  },
  { timestamps: true }
);

export const Review = model<IReview>('Review', ReviewSchema);
