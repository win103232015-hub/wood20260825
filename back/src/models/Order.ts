import { Schema, model, Types } from 'mongoose';

export interface IOrder {
  orderNo: string;
  buyerEmail: string;
  product: Types.ObjectId;
  productTitle: string;
  quantity: number;
  totalPrice: number;
  shippingOption: '專車配送' | '面交' | '大榮貨運';
  shippingNote?: string;
  status: 'pending_payment' | 'paid' | 'shipped' | 'completed';
  createdAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    orderNo: { type: String, required: true, unique: true },
    buyerEmail: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    productTitle: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    totalPrice: { type: Number, required: true },
    shippingOption: { type: String, enum: ['專車配送', '面交', '大榮貨運'], default: '大榮貨運' },
    shippingNote: { type: String },
    status: { type: String, enum: ['pending_payment', 'paid', 'shipped', 'completed'], default: 'paid' },
  },
  { timestamps: true }
);

export const Order = model<IOrder>('Order', OrderSchema);
