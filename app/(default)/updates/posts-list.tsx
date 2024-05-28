import React, { useState } from "react";

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

interface PostsListProps {
  posts: Post[];
  selectedCategory: string;
}

const splitContent = (content: string, previewLength: number) => {
  if (content.length <= previewLength)
    return { preview: content, fullContent: content };
  const preview = content.substring(0, previewLength) + "...";
  const fullContent = content;
  return { preview, fullContent };
};

const PostsList: React.FC<PostsListProps> = ({ posts, selectedCategory }) => {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedPosts((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredPosts = sortedPosts.filter(
    (post) => post.category === selectedCategory
  );

  const previewLength = 100;

  return (
    <div className="md:grow -my-5 space-y-4">
      {filteredPosts.map((post) => {
        const { preview, fullContent } = splitContent(
          post.content,
          previewLength
        );
        const isExpanded = expandedPosts.includes(post.id);

        return (
          <article
            key={post.id} // Ensure each post has a unique key
            className="relative pl-12 pr-4 sm:pl-28 py-5 group before:absolute before:left-8 sm:before:left-24 before:right-0 before:inset-y-0 before:bg-gradient-to-tr before:from-white/70 before:to-white/50 before:dark:bg-gradient-to-b before:dark:from-gray-700/50 before:dark:to-gray-700/40 before:rounded-lg before:shadow before:shadow-black/5 before:-z-10 even:before:opacity-50"
          >
            <header className="flex flex-col sm:flex-row items-start mb-2 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[calc(100%+1rem)] before:pl-px before:bg-indigo-300/50 dark:before:bg-indigo-300/15 sm:before:ml-[4.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-400 after:rounded-full sm:after:ml-[4.5rem] after:-translate-x-1/2 after:translate-y-2">
              <time className="sm:absolute left-0 inline-flex items-center justify-center text-xs font-medium w-14 h-6 mb-3 sm:mb-0 text-white bg-indigo-400 rounded-lg">
                {post.date}
              </time>
              <h2 className="font-inter-tight text-lg leading-6 font-semibold text-gray-800 dark:text-gray-200">
                {post.title}
              </h2>
            </header>
            <div
              className={`collapsible ${
                isExpanded ? "expanded" : "collapsed"
              } mb-4`}
            >
              <p className="text-gray-600 dark:text-gray-500">
                {isExpanded ? fullContent : preview}
              </p>
              {isExpanded && post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="my-4 w-full rounded-lg shadow-lg"
                />
              )}
            </div>
            <button
              onClick={() => toggleExpand(post.id)}
              className="text-indigo-500 hover:underline"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
            <footer className="flex items-center space-x-3 mt-4">
              <img
                className="shrink-0 rounded-full"
                src={post.authorImage}
                width={32}
                height={32}
                alt={post.author}
              />
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {post.author}
              </div>
            </footer>
          </article>
        );
      })}
    </div>
  );
};

export default PostsList;
