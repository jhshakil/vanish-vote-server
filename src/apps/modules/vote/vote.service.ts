import { TVote } from './vote.interface';
import { Vote } from './vote.model';

const createVote = async (payload: TVote) => {
  const result = Vote.create(payload);
  return result;
};

export const VoteServices = {
  createVote,
};
