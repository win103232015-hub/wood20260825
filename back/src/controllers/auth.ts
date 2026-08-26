import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'woodwork_jwt_secret_default_key';
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'woodwork_refresh_secret_default_key';

// 1. 註冊
export const register = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: '請提供完整的 Email 與密碼' });
    return;
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400).json({ message: '該 Email 已被註冊' });
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    passwordHash,
    role: 'buyer',
  });

  res.status(201).json({ message: '註冊成功', userId: newUser._id });
});

// 2. 登入 (核發 Access Token 與 HttpOnly Refresh Token)
export const login = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).json({ message: '帳號或密碼錯誤' });
    return;
  }

  if (user.isFrozen) {
    res.status(403).json({ message: '您的職人帳號已被凍結（禁止登入/提領/上架），請聯繫管理員。' });
    return;
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    res.status(401).json({ message: '帳號或密碼錯誤' });
    return;
  }

  // 15 分鐘 Access Token
  const accessToken = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '15m' });

  // 7 天 Refresh Token
  const refreshToken = jwt.sign({ userId: user._id }, REFRESH_SECRET, { expiresIn: '7d' });

  // 設置 HttpOnly Cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    message: '登入成功',
    accessToken,
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
      artisanProfile: user.artisanProfile,
    },
  });
});

// 3. 雙 Token 無感刷新 (Refresh Access Token)
export const refreshToken = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const tokenFromCookie = req.cookies?.refreshToken;
  if (!tokenFromCookie) {
    res.status(401).json({ message: '未提供 Refresh Token' });
    return;
  }

  try {
    const payload = jwt.verify(tokenFromCookie, REFRESH_SECRET) as { userId: string };
    const user = await User.findById(payload.userId);
    if (!user || user.isFrozen) {
      res.status(403).json({ message: '帳號無效或已被凍結' });
      return;
    }

    const newAccessToken = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '15m' });

    res.json({ accessToken: newAccessToken });
  } catch (error) {
    res.clearCookie('refreshToken');
    res.status(401).json({ message: 'Refresh Token 已過期或無效' });
  }
});

// 4. 買家申請轉職人
export const applyArtisan = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { userId, brandBio, portfolioImages, experienceYears } = req.body;

  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({ message: '找不到使用者' });
    return;
  }

  user.artisanProfile = {
    brandBio,
    portfolioImages: portfolioImages || [],
    applicationStatus: 'pending',
    experienceYears: experienceYears || 1,
  };

  await user.save();
  res.json({ message: '職人申請已提交，目前處於待審核佇列。', artisanProfile: user.artisanProfile });
});
