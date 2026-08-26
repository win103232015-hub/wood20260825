import { Schema, model } from 'mongoose';

export interface IUser {
  email: string;
  passwordHash: string;
  role: 'buyer' | 'artisan' | 'admin';
  isFrozen: boolean; // 凍結職人帳號（禁止登入/提領/上架）
  artisanProfile?: {
    brandBio: string;
    portfolioImages: string[];
    applicationStatus: 'pending' | 'approved' | 'rejected';
    experienceYears?: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['buyer', 'artisan', 'admin'], default: 'buyer' },
    isFrozen: { type: Boolean, default: false },
    artisanProfile: {
      brandBio: { type: String },
      portfolioImages: [{ type: String }],
      applicationStatus: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
      experienceYears: { type: Number },
    },
  },
  { timestamps: true }
);

export const User = model<IUser>('User', UserSchema);
