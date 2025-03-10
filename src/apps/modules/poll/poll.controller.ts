import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PollServices } from './poll.service';

const createPoll = catchAsync(async (req, res) => {
  const result = await PollServices.createPoll();

  sendResponse(res, {
    message: 'Poll Create successfully',
    data: result,
  });
});

export const PollControllers = {
  createPoll,
};
