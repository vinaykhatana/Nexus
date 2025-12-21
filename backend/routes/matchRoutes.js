import express from 'express';
import { getMatches } from '../controllers/matchController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:campaignId', protect, getMatches);

export default router;
