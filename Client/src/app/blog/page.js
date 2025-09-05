import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconClock } from "@tabler/icons-react";
import { blogs } from "../../data/blogs";

export default function BlogListing() {
  // Get the first blog (ID 1) for featured section
  const featuredBlog = blogs.find((blog) => blog.id === 1);
  // Get remaining blogs (excluding ID 1)
  const remainingBlogs = blogs.filter((blog) => blog.id !== 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="w-full px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors group"
          >
            <IconArrowRight className="h-4 w-4 mr-2 rotate-180 transition-transform group-hover:translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="w-full px-4 py-8 pb-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] rounded-full mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Blogs
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest insights on AI, software development, and
            technology trends
          </p>
        </div>
        {/* Featured Blog */}
        {featuredBlog && (
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Featured Article
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <IconClock className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-600">
                      {Math.ceil(featuredBlog.content.split(" ").length / 200)}{" "}
                      min read
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featuredBlog.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors group"
                  >
                    Read Full Article
                    <IconArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Remaining Blogs - Horizontal Scroll */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Articles
          </h2>
          <div className="overflow-x-auto scrollbar-hide pb-6">
            <div className="flex gap-6 min-w-max px-2">
              {remainingBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex-shrink-0 w-80"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <IconClock className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">
                        {Math.ceil(blog.content.split(" ").length / 200)} min
                        read
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
