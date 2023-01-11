"use client";
import { fetchStrapi } from "@/setup/strapi";
import { CPosts } from "@/components/CPosts";
import { useEffect, useState } from "react";
import type { Post } from "@/types";

const getPosts = () =>
  fetchStrapi<Post[]>(
    `/posts`,
    {
      populate: {
        author: {
          fields: ["username"],
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );

export default function Home() {
  // const posts = await fetchStrapi<Post[]>(`/posts?${query}`);

  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    (async () => {
      const response = await getPosts();
      setPosts(response);
    })();
  }, []);

  return (
    <main>
      <CPosts
        posts={posts.map((p) => ({
          id: `${p.id}`,
          ...p.attributes,
          author: p.attributes?.author?.data?.attributes?.username,
        }))}
      />
    </main>
  );
}
