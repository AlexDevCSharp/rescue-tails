// src/data/posts.ts
import type { Post } from "../types/Post";

export const mockPosts: Post[] = [
  {
    id: "1",
    title: "Urgent help needed",
    description: "Puppy found in Kyiv needs medical treatment...",
    tags: ["Medical", "Urgent"],
    imageUrl: "https://placekitten.com/400/300",
    createdAt: "2025-07-10",
    volunteerName: "Anna Ivanova",
  },
  {
    id: "2",
    title: "Food needed for cats",
    description: "Volunteer in Kharkiv needs cat food donations.",
    tags: ["Food needed"],
    imageUrl: "https://placekitten.com/401/301",
    createdAt: "2025-07-12",
    volunteerName: "Oleh Petrenko",
  },
  {
    id: "3",
    title: "Looking for home",
    description: "Adopt a sweet kitten named Masha.",
    tags: ["Adopt"],
    imageUrl: "https://placekitten.com/402/302",
    createdAt: "2025-07-13",
    volunteerName: "Yulia Bondar",
  },
];
