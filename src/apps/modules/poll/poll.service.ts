import { TPoll } from './poll.interface';
import { Poll } from './poll.model';

const createPoll = async (payload: TPoll) => {
  const result = Poll.create(payload);
  return result;
};

export const PollServices = {
  createPoll,
};
