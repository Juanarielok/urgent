"use client";

import React, { useState, useEffect } from "react";
import getAllPosts from "@/lib/getAllPosts";
import PageHeader from "@/components/page-header";
import Cta from "@/components/cta";
import Posts from "@/app/(default)/updates/posts";

interface Post {
  id: number;
  date: string;
  title: string;
  content: string;
  author: string;
  authorImage: string;
  category: string;
  imageUrl?: string;
}

export default function Updates() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = getAllPosts((newPosts: Post[]) => {
      setPosts(newPosts);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error fetching posts</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              title="News & Updates"
              description="Rank and score updates and feature requests so you know you're working on the most impactful things."
            >
              What's New
            </PageHeader>
          </div>
        </div>
      </section>

      <Posts posts={posts} />
      <Cta />
    </>
  );
}
