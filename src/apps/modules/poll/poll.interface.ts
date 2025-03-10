export type TPoll = {
  question: string;
  options: string[];
  expiresAt: Date;
  isPrivate: boolean;
  resultsVisible: boolean;
  createdAt: Date;
};
