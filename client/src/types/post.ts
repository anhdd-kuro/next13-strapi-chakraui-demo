import { User } from "./user";

export type Post = {
  id: number;
  attributes: Attributes;
};

export type Attributes = {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: { data: Author };
};

export type Author = {
  id: number;
  attributes: User;
};
