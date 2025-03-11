import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PollServices } from './poll.service';

const createPoll = catchAsync(async (req, res) => {
  const result = await PollServices.createPoll(req.body);

  sendResponse(res, {
    message: 'Poll Create Successfully',
    data: result,
  });
});

const getAllPoll = catchAsync(async (req, res) => {
  const result = await PollServices.getAllPoll();

  sendResponse(res, {
    message: 'Get Poll Successfully',
    data: result,
  });
});

const getSinglePoll = catchAsync(async (req, res) => {
  const result = await PollServices.getSinglePoll(req.params.id);

  sendResponse(res, {
    message: 'Get Poll Successfully',
    data: result,
  });
});

const getPollResult = catchAsync(async (req, res) => {
  const result = await PollServices.getPollResult(req.params.id);

  sendResponse(res, {
    message: 'Get Result Successfully',
    data: result,
  });
});

export const PollControllers = {
  createPoll,
  getAllPoll,
  getSinglePoll,
  getPollResult,
};
