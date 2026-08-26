import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import adminRoutes from './routes/admin';
import productRoutes from './routes/product';
import paymentRoutes from './routes/payment';
import logisticsRoutes from './routes/logistics';
import orderRoutes from './routes/order';
import artisanRoutes from './routes/artisan';
import reviewRoutes from './routes/review';
import disputeRoutes from './routes/dispute';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
  })
);

// 註冊所有 API 路由
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/products', productRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/logistics', logisticsRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/artisans', artisanRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/disputes', disputeRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: '木工網站 API 服務正常運作中' });
});

export default app;
