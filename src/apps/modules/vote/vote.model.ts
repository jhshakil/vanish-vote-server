import { model, Schema } from 'mongoose';
import { TVote } from './vote.interface';

const voteSchema = new Schema<TVote>({
  pollId: { type: Schema.Types.ObjectId, ref: 'Poll', required: true },
  choice: { type: String, required: true },
  votedAt: { type: Date, default: Date.now },
});

export const Vote = model<TVote>('Vote', voteSchema);
