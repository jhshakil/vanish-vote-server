import { Router } from 'express';
import { PollRoutes } from '../modules/poll/poll.route';
import { VoteRoutes } from '../modules/vote/vote.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/poll',
    route: PollRoutes,
  },
  {
    path: '/vote',
    route: VoteRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
