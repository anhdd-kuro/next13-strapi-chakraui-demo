"use client";
import { CCard } from "../CCard";
import { FC } from "react";
import { ListItem, List } from "@chakra-ui/react";

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
};

export type CPostsProps = { posts: Post[] };

export const CPosts: FC<CPostsProps> = ({ posts }) => {
  return (
    <List columnGap={20} display="flex">
      {posts?.map((post) => (
        <ListItem key={post.id} flexBasis="300">
          <CCard author={post.author} content={post.content} title={post.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default CPosts;
