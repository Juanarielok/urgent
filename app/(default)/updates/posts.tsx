import React from "react";
import PostsList from "./posts-list";
import PostsSidebar from "./posts-sidebar";

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

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const categories = ["News", "Admin", "General", "Improvements", "Legal"];
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>("News");

  return (
    <section>
      <div className="pb-12 md:pb-20">
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="md:flex md:justify-between">
              {/* Sidebar */}
              <PostsSidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />

              {/* Posts */}
              <PostsList posts={posts} selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
