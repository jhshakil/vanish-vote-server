import { Router } from 'express';
import { PollControllers } from './poll.controller';

const router = Router();

router.post('/', PollControllers.createPoll);

export const PollRoutes = router;
