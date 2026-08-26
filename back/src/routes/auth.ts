import { Router } from 'express';
import { register, login, refreshToken, applyArtisan } from '../controllers/auth';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refreshToken);
router.post('/artisan-apply', applyArtisan);

export default router;
