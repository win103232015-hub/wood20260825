import { Router } from 'express';
import { getProductReviews, createReview } from '../controllers/review';

const router = Router();

router.get('/product/:productId', getProductReviews);
router.post('/', createReview);

export default router;
