import React from "react";
import { Helmet } from "react-helmet";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Indie Games to Try in 2025",
    excerpt:
      "Discover the most exciting indie games this year, hand-picked for gamers who love creativity and challenge.",
    date: "Oct 20, 2025",
  },
  {
    id: 2,
    title: "How to Improve Your FPS Skills",
    excerpt:
      "Step-by-step guide to sharpen your aim, reaction time, and strategy in popular FPS games.",
    date: "Oct 18, 2025",
  },
  {
    id: 3,
    title: "Upcoming Game Releases You Can’t Miss",
    excerpt:
      "Check out the most anticipated games coming this year, including RPGs, shooters, and more.",
    date: "Oct 15, 2025",
  },
  {
    id: 4,
    title: "Best Strategies for Multiplayer Games",
    excerpt:
      "Learn how to coordinate with your team and dominate multiplayer arenas across genres.",
    date: "Oct 12, 2025",
  },
  {
    id: 5,
    title: "Gaming Gear Essentials for Pro Gamers",
    excerpt:
      "From mice to headsets, check out the gear that can level up your gaming experience.",
    date: "Oct 10, 2025",
  },
  {
    id: 6,
    title: "How Storytelling Shapes Modern RPGs",
    excerpt:
      "Dive into narrative-driven games and how storylines can enhance player immersion.",
    date: "Oct 8, 2025",
  },
  {
    id: 7,
    title: "Top 10 Mobile Games of the Year",
    excerpt:
      "A curated list of addictive mobile games you can enjoy anytime, anywhere.",
    date: "Oct 5, 2025",
  },
  {
    id: 8,
    title: "The Rise of eSports in 2025",
    excerpt:
      "Explore how competitive gaming is growing and which tournaments you shouldn’t miss.",
    date: "Oct 2, 2025",
  },
  {
    id: 9,
    title: "Tips to Optimize Your PC for Gaming",
    excerpt:
      "Maximize FPS, reduce lag, and improve performance with these practical PC optimization tips.",
    date: "Sep 30, 2025",
  },
  {
    id: 10,
    title: "Virtual Reality Gaming: What’s Next?",
    excerpt:
      "A look at how VR is transforming gaming and which titles are leading the charge.",
    date: "Sep 28, 2025",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-16 px-5">
      <Helmet>
        <title>Blog - GameHub</title>
      </Helmet>

      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
          GameHub Blog
        </h2>
        <p className="mt-3 text-gray-700 text-lg">
          Latest news, reviews, and tips for gamers around the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-purple-500 mb-2 hover:text-purple-700 transition">
              {post.title}
            </h3>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <a
              href="https://blogs.nvidia.com/blog/category/gaming/"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 text-white font-medium hover:opacity-90 transition"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;