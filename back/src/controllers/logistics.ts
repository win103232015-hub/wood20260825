import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

// 計算大榮貨運 (Kerry TJ) 運費
export const calculateKerryTJFreight = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { weightKg, volumeCuFt } = req.body;

  // 基本運費 + 才數 (Volume) 權重
  const baseFreight = 150;
  const weightFee = (weightKg || 1) * 15;
  const volumeFee = (volumeCuFt || 1) * 30;

  const estimatedFreight = baseFreight + weightFee + volumeFee;

  res.json({
    carrier: '大榮貨運 (Kerry TJ Logistics)',
    estimatedFreight,
    details: { baseFreight, weightFee, volumeFee },
  });
});
