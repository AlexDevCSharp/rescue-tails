// src/types/Post.ts
export type Post = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  createdAt: Date;
  volunteerName: string;
};
