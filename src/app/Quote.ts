export interface Quote {
  id?: number;
  quote: string;
  author: string;
  publisher: string;
  upvotes: number;
  downvotes: number;
  timeElapsed: Date;
}