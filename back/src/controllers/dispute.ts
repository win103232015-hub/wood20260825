import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Dispute } from '../models/Dispute';

// 取得所有爭議列表
export const getDisputes = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const disputes = await Dispute.find().sort({ createdAt: -1 });
  res.json({ count: disputes.length, disputes });
});

// 發起爭議
export const createDispute = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { orderNo, userEmail, reason, initialMessage } = req.body;

  const newDispute = await Dispute.create({
    orderNo,
    userEmail: userEmail || 'buyer@woodwork.com',
    reason,
    status: 'open',
    messages: [
      {
        sender: userEmail || '買家',
        role: 'buyer',
        content: initialMessage || reason,
      },
    ],
  });

  res.status(201).json({ message: '訂單爭議已發起，客服與職人將介入協調。', dispute: newDispute });
});

// 新增爭議留言 / 管理員介入仲裁
export const addDisputeMessage = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { disputeId } = req.params;
  const { sender, role, content, resolve } = req.body;

  const dispute = await Dispute.findById(disputeId);
  if (!dispute) {
    res.status(404).json({ message: '找不到爭議紀錄' });
    return;
  }

  dispute.messages.push({
    sender: sender || '系統',
    role: role || 'admin',
    content,
    createdAt: new Date(),
  });

  if (resolve) {
    dispute.status = 'resolved';
  } else if (role === 'admin') {
    dispute.status = 'arbitrating';
  }

  await dispute.save();
  res.json({ message: '留言已發送', dispute });
});
