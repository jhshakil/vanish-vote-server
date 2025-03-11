import { Router } from 'express';
import { PollControllers } from './poll.controller';

const router = Router();

router.post('/', PollControllers.createPoll);
router.get('/', PollControllers.getAllPoll);
router.get('/:id', PollControllers.getSinglePoll);
router.get('/result/:id', PollControllers.getPollResult);

export const PollRoutes = router;
