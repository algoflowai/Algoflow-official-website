import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IconArrowLeft, IconClock, IconShare } from "@tabler/icons-react";
import { blogs } from "../../../data/blogs";
import SharePopup from "../../../components/SharePopup";

// Required for static export with dynamic routes
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

// Calculate reading time
function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(" ").length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.id === Number(params.id));

  if (!blog) {
    return notFound();
  }

  const readingTime = calculateReadingTime(blog.content);
  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="w-full px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors group"
          >
            <IconArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Blog content */}
      <div className="w-full px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          {/* Hero image */}
          <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-2xl mb-8">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Blog metadata - Enhanced */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
              <IconClock className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-gray-800">
                {readingTime} min read
              </span>
            </div>
            <SharePopup blogId={params.id} />
          </div>

          {/* Blog title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 text-center">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            {blog.excerpt}
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto"></div>
        </div>

        {/* Blog content with background/shadow */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            {blog.content.split("\n\n").map((paragraph, index) => (
              <div key={index} className="mb-8">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action section */}
        <div className="max-w-4xl mx-auto mt-16 p-6 md:p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 shadow-lg">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Let's discuss how our AI and software development expertise can
              help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors text-sm md:text-base"
              >
                Get Started
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors text-sm md:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/blog/${relatedBlog.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <IconClock className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">
                        {Math.ceil(relatedBlog.content.split(" ").length / 200)}{" "}
                        min read
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {relatedBlog.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navigation footer */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors group"
            >
              <IconArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Resources
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors group"
            >
              View All Articles
              <IconArrowLeft className="h-4 w-4 ml-2 rotate-180 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
