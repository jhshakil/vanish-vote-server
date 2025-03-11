import { model, Schema } from 'mongoose';
import { TPoll } from './poll.interface';

const pollSchema = new Schema<TPoll>({
  question: { type: String, required: true },
  options: { type: [String], required: true, default: ['Yes', 'No'] },
  expiresAt: { type: Date, required: true },
  resultsVisible: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Poll = model<TPoll>('Poll', pollSchema);
