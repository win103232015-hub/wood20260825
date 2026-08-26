import { Router } from 'express';
import { getDisputes, createDispute, addDisputeMessage } from '../controllers/dispute';

const router = Router();

router.get('/', getDisputes);
router.post('/', createDispute);
router.post('/:disputeId/messages', addDisputeMessage);

export default router;
