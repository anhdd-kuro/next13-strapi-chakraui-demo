"use client";
import { fetchStrapi } from "@/setup/strapi";
import { CPosts } from "@/components/CPosts";
import qs from "qs";
import { useEffect, useState } from "react";
import type { Post } from "@/types";

const query = qs.stringify(
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
      const response = await fetchStrapi<Post[]>(`/posts?${query}`);
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
