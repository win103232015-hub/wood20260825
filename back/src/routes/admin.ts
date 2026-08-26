import { Router } from 'express';
import { toggleNoReviewMode, reviewArtisanApplication, toggleFreezeUser, unlistProduct } from '../controllers/admin';

const router = Router();

router.post('/toggle-no-review', toggleNoReviewMode);
router.post('/review-artisan', reviewArtisanApplication);
router.post('/freeze-user', toggleFreezeUser);
router.put('/products/:productId/unlist', unlistProduct);

export default router;
