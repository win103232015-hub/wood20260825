import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { User } from './models/User';
import { Product } from './models/Product';
import { GlobalSetting } from './models/GlobalSetting';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const seedDatabase = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error('找不到 MONGODB_URI 環境變數！');
    }

    console.log('🔄 正在連線至您的 MongoDB Atlas 進行職人照片與資料寫入...');
    await mongoose.connect(MONGODB_URI);

    await User.deleteMany({});
    await Product.deleteMany({});
    await GlobalSetting.deleteMany({});

    await GlobalSetting.create({ key: 'global', noReviewMode: true });

    const adminPasswordHash = await bcrypt.hash('admin123456', 10);
    await User.create({
      email: 'admin@woodwork.com',
      passwordHash: adminPasswordHash,
      role: 'admin',
    });

    const commonPasswordHash = await bcrypt.hash('artisan123456', 10);

    // 三位職人包含模擬真人頭像照片
    const artisan1 = await User.create({
      email: 'chen.artisan@woodwork.com',
      passwordHash: commonPasswordHash,
      role: 'artisan',
      artisanProfile: {
        brandBio: '【陳國華 師傅 ｜ 臺灣檜木手作坊】傳承三代木藝技術，專精台灣檜木舊料重生，保留芬多精原香。',
        portfolioImages: [
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300', // 職人陳師傅大頭照
          'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1000'
        ],
        applicationStatus: 'approved',
        experienceYears: 32,
      },
    });

    const artisan2 = await User.create({
      email: 'lin.artisan@woodwork.com',
      passwordHash: commonPasswordHash,
      role: 'artisan',
      artisanProfile: {
        brandBio: '【林哲遠 匠人 ｜ 黑胡桃與極簡家具】極致推光漆工藝與黑胡桃深沉色澤，專注當代現代家具。',
        portfolioImages: [
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300', // 職人林匠人大頭照
          'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000'
        ],
        applicationStatus: 'approved',
        experienceYears: 18,
      },
    });

    const artisan3 = await User.create({
      email: 'wu.artisan@woodwork.com',
      passwordHash: commonPasswordHash,
      role: 'artisan',
      artisanProfile: {
        brandBio: '【吳美玲 木師 ｜ 原生木器與天然油裝】堅持使用德國食品級天然護木油，呈現櫸木與白橡木最原始溫潤觸感。',
        portfolioImages: [
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300', // 職人吳木師大頭照
          'https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=1000'
        ],
        applicationStatus: 'approved',
        experienceYears: 12,
      },
    });

    const productsData = [
      {
        artisan: artisan1._id,
        title: '臺灣檜木老料雕花茶盤 (UNIQUE 獨一無二)',
        description: '取用 50 年老屋檜木樑柱手工雕琢，木理細緻，隨茶湯溫熱散發濃郁芬多精。',
        price: 15800,
        saleType: 'UNIQUE',
        stock: 1,
        woodSpecies: ['臺灣檜木'],
        coatingMethod: ['無塗裝'],
        images: {
          primary: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1000',
          details: [
            'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600',
            'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600',
          ],
        },
        status: 'approved',
        isWeeklyFeatured: true,
      },
      {
        artisan: artisan1._id,
        title: '檜木手工線香盒 (磁吸式上蓋)',
        description: '內襯防火棉，手作質感散發陣陣自然香氣。',
        price: 2480,
        saleType: 'BATCH',
        stock: 15,
        woodSpecies: ['臺灣檜木'],
        coatingMethod: ['天然護木油'],
        images: { primary: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000', details: [] },
        status: 'approved',
      },
      {
        artisan: artisan1._id,
        title: '檜木手工高腳點盤',
        description: '優雅的高腳比例線條，呈現日系工藝精髓。',
        price: 3600,
        saleType: 'BATCH',
        stock: 8,
        woodSpecies: ['臺灣檜木'],
        coatingMethod: ['木蠟油'],
        images: { primary: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=1000', details: [] },
        status: 'approved',
      },
      {
        artisan: artisan1._id,
        title: '臺灣檜木沉香印章收納盒 (UNIQUE 孤品)',
        description: '全榫卯結構，古典典雅。',
        price: 4200,
        saleType: 'UNIQUE',
        stock: 1,
        woodSpecies: ['臺灣檜木'],
        coatingMethod: ['生漆/推光漆'],
        images: { primary: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000', details: [] },
        status: 'approved',
      },
      {
        artisan: artisan1._id,
        title: '客製化檜木手作原木招牌 (CUSTOM 訂製)',
        description: '自訂品牌名稱與文字，備貨期約 14 天。',
        price: 8800,
        saleType: 'CUSTOM',
        stock: 99,
        customPrepDays: 14,
        woodSpecies: ['臺灣檜木'],
        coatingMethod: ['天然護木油'],
        images: { primary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000', details: [] },
        status: 'approved',
      },

      {
        artisan: artisan2._id,
        title: '北美黑胡桃木長條原木邊桌 (UNIQUE 孤品)',
        description: '高貴黑胡桃木紋搭配黃銅邊腳，極簡奢華質感。',
        price: 28000,
        saleType: 'UNIQUE',
        stock: 1,
        woodSpecies: ['黑胡桃木'],
        coatingMethod: ['木蠟油'],
        images: {
          primary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000',
          details: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600'],
        },
        status: 'approved',
        isWeeklyFeatured: true,
      },
      {
        artisan: artisan2._id,
        title: '黑胡桃木黃銅面紙盒',
        description: '圓潤倒角打磨，磁吸式底部。',
        price: 1980,
        saleType: 'BATCH',
        stock: 20,
        woodSpecies: ['黑胡桃木'],
        coatingMethod: ['天然護木油'],
        images: { primary: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000', details: [] },
        status: 'approved',
      },
      {
        artisan: artisan2._id,
        title: '黑胡桃木手作咖啡濾紙架',
        description: '為手沖咖啡愛好者量身打造之桌上美學。',
        price: 1680,
        saleType: 'BATCH',
        stock: 12,
        woodSpecies: ['黑胡桃木'],
        coatingMethod: ['無塗裝'],
        images: { primary: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000', details: [] },
        status: 'approved',
      },
      {
        artisan: artisan2._id,
        title: '黑胡桃木多功能手錶名片置物盤',
        description: '金屬質感與黑胡桃木完美融和。',
        price: 2350,
        saleType: 'BATCH',
        stock: 10,
        woodSpecies: ['黑胡桃木'],
        coatingMethod: ['天然護木油'],
        images: { primary: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1000', details: [] },
        status: 'approved',
      },
      {
        artisan: artisan2._id,
        title: '客製化黑胡桃木全實木書桌 (CUSTOM 訂製)',
        description: '客製長度與抽屜配置，備貨期約 21 天。',
        price: 36000,
        saleType: 'CUSTOM',
        stock: 99,
        customPrepDays: 21,
        woodSpecies: ['黑胡桃木'],
        coatingMethod: ['生漆/推光漆'],
        images: { primary: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=1000', details: [] },
        status: 'approved',
      },

      {
        artisan: artisan3._id,
        title: '歐洲白橡木麵包切板 (BATCH 熱銷)',
        description: '無接縫實木一體成型，邊緣優雅弧線，食品級護木油塗裝。',
        price: 1850,
        saleType: 'BATCH',
        stock: 25,
        woodSpecies: ['白橡木'],
        coatingMethod: ['天然護木油'],
        images: {
          primary: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=1000',
          details: ['https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600'],
        },
        status: 'approved',
        isWeeklyFeatured: true,
      },
      {
        artisan: artisan3._id,
        title: '德國櫸木多功能餐盤組 (3入)',
        description: '質地堅硬抗磨損，適合盛裝甜點與乾貨。',
        price: 2200,
        saleType: 'BATCH',
        stock: 18,
        woodSpecies: ['櫸木'],
        coatingMethod: ['木蠟油'],
        images: { primary: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000', details: [] },
        status: 'approved',
      },
      {
        artisan: artisan3._id,
        title: '柚木天然木紋花器托盤 (UNIQUE 孤品)',
        description: '保有柚木獨特油脂與抗水特性。',
        price: 3200,
        saleType: 'UNIQUE',
        stock: 1,
        woodSpecies: ['柚木'],
        coatingMethod: ['天然護木油'],
        images: { primary: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1000', details: [] },
        status: 'approved',
      },
      {
        artisan: artisan3._id,
        title: '白橡木倒角手工名片盒',
        description: '極致輕巧，隨身攜帶展現美學。',
        price: 1200,
        saleType: 'BATCH',
        stock: 30,
        woodSpecies: ['白橡木'],
        coatingMethod: ['無塗裝'],
        images: { primary: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000', details: [] },
        status: 'approved',
      },
      {
        artisan: artisan3._id,
        title: '客製化櫸木兒童手作玩具組 (CUSTOM 訂製)',
        description: '全圓角安全防護，純天然木蠟油塗裝。',
        price: 4500,
        saleType: 'CUSTOM',
        stock: 99,
        customPrepDays: 10,
        woodSpecies: ['櫸木'],
        coatingMethod: ['木蠟油'],
        images: { primary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000', details: [] },
        status: 'approved',
      },
    ];

    await Product.insertMany(productsData);
    console.log('✅ 成功更新 3 位特聘職人真實照片與作品！');
    process.exit(0);
  } catch (err) {
    console.error('❌ 種子資料寫入失敗:', err);
    process.exit(1);
  }
};

seedDatabase();
