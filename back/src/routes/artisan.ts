import { Router } from 'express';
import { getArtisans } from '../controllers/artisan';

const router = Router();

router.get('/', getArtisans);

export default router;
