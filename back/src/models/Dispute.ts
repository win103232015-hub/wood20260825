import { Schema, model, Types } from 'mongoose';

export interface IDispute {
  orderNo: string;
  userEmail: string;
  reason: string;
  status: 'open' | 'arbitrating' | 'resolved';
  messages: Array<{
    sender: string;
    role: 'buyer' | 'artisan' | 'admin';
    content: string;
    createdAt: Date;
  }>;
  createdAt: Date;
}

const DisputeSchema = new Schema<IDispute>(
  {
    orderNo: { type: String, required: true },
    userEmail: { type: String, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ['open', 'arbitrating', 'resolved'], default: 'open' },
    messages: [
      {
        sender: { type: String, required: true },
        role: { type: String, enum: ['buyer', 'artisan', 'admin'], required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export const Dispute = model<IDispute>('Dispute', DisputeSchema);
