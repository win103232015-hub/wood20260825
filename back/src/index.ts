import app from './app';
import { connectDB } from './config/db';

const PORT = process.env.PORT || 5000;

// 啟動資料庫連線並監聽通訊埠
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🌲 木工專案後端伺服器已成功連線 MongoDB Atlas 並啟動於 http://localhost:${PORT}`);
  });
});
