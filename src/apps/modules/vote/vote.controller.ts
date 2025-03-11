import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { VoteServices } from './vote.service';

const createVote = catchAsync(async (req, res) => {
  const result = await VoteServices.createVote(req.body);

  sendResponse(res, {
    message: 'Vote Create successfully',
    data: result,
  });
});

export const VoteControllers = {
  createVote,
};
