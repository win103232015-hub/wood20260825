import { Router } from 'express';
import { calculateKerryTJFreight } from '../controllers/logistics';

const router = Router();

router.post('/kerry-tj/calculate', calculateKerryTJFreight);

export default router;
