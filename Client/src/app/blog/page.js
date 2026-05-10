import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconClock } from "@tabler/icons-react";
import { blogs } from "../../data/blogs";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Blog — AI Insights & Software Development Articles",
  description:
    "Explore AlgoFlow AI's blog for expert articles on AI, machine learning, software development, computer vision, NLP, and technology trends.",
  alternates: { canonical: "https://www.algoflowai.com/blog" },
  openGraph: {
    title: "Blog — AlgoFlow AI",
    description: "Expert articles on AI, machine learning, and software development.",
    url: "https://www.algoflowai.com/blog",
    type: "website",
  },
};

export default function BlogListing() {
  const featuredBlog = blogs.find((blog) => blog.id === 1);
  const remainingBlogs = blogs.filter((blog) => blog.id !== 1);

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <Navbar />

      {/* Header bar */}
      <div className="pt-24 border-b" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="w-[90%] mx-auto py-4">
          <Link
            href="/"
            className="inline-flex items-center text-green-500 hover:text-green-400 font-medium transition-colors group text-sm"
          >
            <IconArrowRight className="h-4 w-4 mr-2 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="w-[90%] mx-auto py-12 pb-20">
        {/* Page Title */}
        <div className="text-center mb-14">
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] rounded-full mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            Our Blogs
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Explore our latest insights on AI, software development, and technology trends
          </p>
        </div>

        {/* Featured Blog */}
        {featuredBlog && (
          <div className="mb-16">
            <h2 className="text-xl font-bold mb-6 text-center" style={{ color: "var(--text-primary)" }}>
              Featured Article
            </h2>
            <div
              className="rounded-2xl shadow-xl overflow-hidden border"
              style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full min-h-[260px]">
                    <Image
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <IconClock className="h-4 w-4 text-green-500" />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {Math.ceil(featuredBlog.content.split(" ").length / 200)} min read
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
                    {featuredBlog.title}
                  </h3>
                  <p className="mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {featuredBlog.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featuredBlog.id}`}
                    className="inline-flex items-center text-green-500 hover:text-green-400 font-semibold transition-colors group"
                  >
                    Read Full Article
                    <IconArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* More Articles */}
        <div>
          <h2 className="text-xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>
            More Articles
          </h2>
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-6 min-w-max px-1">
              {remainingBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.id}`}
                  className="rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group flex-shrink-0 w-80 flex flex-col border"
                  style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <IconClock className="h-4 w-4 text-green-500" />
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        {Math.ceil(blog.content.split(" ").length / 200)} min read
                      </span>
                    </div>
                    <h3
                      className="font-bold text-lg mb-3 leading-tight transition-colors group-hover:text-green-500"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {blog.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {blog.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
