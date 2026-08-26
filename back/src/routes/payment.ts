import { Router } from 'express';
import { createECPayOrder, handleECPayCallback } from '../controllers/payment';

const router = Router();

router.post('/ecpay/checkout', createECPayOrder);
router.post('/ecpay/callback', handleECPayCallback);

export default router;
