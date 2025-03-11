import { Vote } from '../vote/vote.model';
import { TPoll } from './poll.interface';
import { Poll } from './poll.model';

const createPoll = async (payload: TPoll) => {
  const result = Poll.create(payload);
  return result;
};

const getAllPoll = async () => {
  try {
    const polls = await Poll.find(); // Fetch all polls

    // Fetch results for each poll
    const pollResults = await Promise.all(
      polls.map(async (poll) => {
        const votes = await Vote.find({ pollId: poll._id });

        // If no votes, return 0% for each option
        if (votes.length === 0) {
          return {
            ...poll.toObject(),
            totalVotes: 0,
            results: poll.options.map((option) => ({ option, percentage: 0 })),
          };
        }

        // Count votes per option
        const voteCount: Record<string, number> = {};
        poll.options.forEach((option) => (voteCount[option] = 0));

        votes.forEach((vote) => {
          if (voteCount[vote.choice] !== undefined) {
            voteCount[vote.choice] += 1;
          }
        });

        const totalVotes = votes.length;
        const results = poll.options.map((option) => ({
          option,
          percentage: ((voteCount[option] || 0) / totalVotes) * 100,
        }));

        return {
          ...poll.toObject(),
          totalVotes,
          results,
        };
      }),
    );

    return pollResults;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch polls');
  }
};

const getSinglePoll = async (id: string) => {
  const result = await Poll.findById({ _id: id });
  return result;
};

const getPollResult = async (id: string) => {
  try {
    const poll = await Poll.findById(id);
    if (!poll) {
      throw new Error('Poll not found');
    }

    const votes = await Vote.find({ pollId: id });

    if (votes.length === 0) {
      return {
        totalVotes: 0,
        results: poll.options.map((option) => ({ option, percentage: 0 })),
      };
    }

    const voteCount: Record<string, number> = {};
    poll.options.forEach((option) => (voteCount[option] = 0));

    votes.forEach((vote) => {
      if (voteCount[vote.choice] !== undefined) {
        voteCount[vote.choice] += 1;
      }
    });

    const totalVotes = votes.length;
    const results = poll.options.map((option) => ({
      option,
      percentage: ((voteCount[option] || 0) / totalVotes) * 100,
    }));

    return { totalVotes, results };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get poll results');
  }
};

export const PollServices = {
  createPoll,
  getAllPoll,
  getSinglePoll,
  getPollResult,
};
