import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI;
    if (!connStr) {
      console.warn('⚠️ 尚未設定 MONGODB_URI 環境變數，資料庫將暫時使用預設連線或等待提示輸入。');
      return;
    }
    await mongoose.connect(connStr);
    console.log('✅ MongoDB 連線成功');
  } catch (error) {
    console.error('❌ MongoDB 連線失敗:', error);
  }
};
