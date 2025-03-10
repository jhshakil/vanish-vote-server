import { Schema } from 'mongoose';

export type TVote = {
  pollId: Schema.Types.ObjectId;
  choice: string;
  votedAt: Date;
};
