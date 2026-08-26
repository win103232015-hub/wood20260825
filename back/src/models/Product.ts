import { Schema, model, Types } from 'mongoose';

export type SaleType = 'BATCH' | 'UNIQUE' | 'CUSTOM';
export type WoodSpecies = '臺灣檜木' | '黑胡桃木' | '柚木' | '櫸木' | '白橡木' | '其他';
export type CoatingMethod = '天然護木油' | '木蠟油' | '生漆/推光漆' | '無塗裝';

export interface IProduct {
  title: string;
  description: string;
  price: number;
  saleType: SaleType;
  stock: number; // UNIQUE 硬性維護為 1
  customPrepDays?: number; // CUSTOM 專用：手作備貨期天數
  woodSpecies: WoodSpecies[];
  coatingMethod: CoatingMethod[];
  images: {
    primary: string; // 正面主圖 x1
    details: string[]; // 散落細節圖 最多 3 張
  };
  artisan: Types.ObjectId; // 關聯職人
  status: 'pending' | 'approved' | 'unlisted'; // 管理員待審 / 已發布 / 違規下架
  isWeeklyFeatured?: boolean; // 當週主打標籤
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    saleType: { type: String, enum: ['BATCH', 'UNIQUE', 'CUSTOM'], required: true },
    stock: {
      type: Number,
      required: true,
      default: function (this: IProduct) {
        return this.saleType === 'UNIQUE' ? 1 : 10;
      },
    },
    customPrepDays: { type: Number },
    woodSpecies: [{ type: String }],
    coatingMethod: [{ type: String }],
    images: {
      primary: { type: String, required: true },
      details: [{ type: String }],
    },
    artisan: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'approved', 'unlisted'], default: 'pending' },
    isWeeklyFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// 限制 UNIQUE 庫存硬性為 1
ProductSchema.pre('save', function (next) {
  if (this.saleType === 'UNIQUE') {
    this.stock = 1;
  }
  next();
});

export const Product = model<IProduct>('Product', ProductSchema);
