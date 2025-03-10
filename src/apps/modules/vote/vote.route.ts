import { Router } from 'express';
import { VoteControllers } from './vote.controller';

const router = Router();

router.get('/', VoteControllers.createVote);

export const VoteRoutes = router;
