import { Router } from 'express';
import { createOrder, getOrders } from '../controllers/order';

const router = Router();

router.post('/', createOrder);
router.get('/', getOrders);

export default router;
