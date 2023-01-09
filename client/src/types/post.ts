import { User } from "./user";

export interface Post {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: { data: Author };
}

export interface Author {
  id: number;
  attributes: User;
}
