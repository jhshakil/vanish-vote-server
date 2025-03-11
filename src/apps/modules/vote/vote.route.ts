import { Router } from 'express';
import { VoteControllers } from './vote.controller';

const router = Router();

router.post('/', VoteControllers.createVote);

export const VoteRoutes = router;
