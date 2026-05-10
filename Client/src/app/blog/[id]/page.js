import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IconArrowLeft, IconClock, IconShare } from "@tabler/icons-react";
import { blogs } from "../../../data/blogs";
import SharePopup from "../../../components/SharePopup";
import Navbar from "@/components/Navbar";

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

export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.id === Number(params.id));
  if (!blog) return {};

  const BASE_URL = "https://www.algoflowai.com";
  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: { canonical: `${BASE_URL}/blog/${blog.id}` },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `${BASE_URL}/blog/${blog.id}`,
      type: "article",
      publishedTime: blog.date,
      authors: [`${BASE_URL}`],
      images: [{ url: blog.image, width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.id === Number(params.id));

  if (!blog) {
    return notFound();
  }

  const readingTime = calculateReadingTime(blog.content);
  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <Navbar />
      {/* Navigation Header */}
      <div
        className="sticky top-0 z-40 border-b pt-20"
        style={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(20px)",
          borderColor: "var(--border)",
        }}
      >
        <div className="w-[90%] mx-auto py-3">
          <Link
            href="/"
            className="inline-flex items-center text-green-500 hover:text-green-400 font-medium transition-colors group text-sm"
          >
            <IconArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Blog content */}
      <div className="w-[90%] mx-auto py-10">
        {/* Hero image */}
        <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-2xl mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Meta */}
        <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          >
            <IconClock className="h-4 w-4 text-green-500" />
            {readingTime} min read
          </div>
          <SharePopup blogId={params.id} />
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-center"
          style={{ color: "var(--text-primary)" }}
        >
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p
          className="text-lg md:text-xl leading-relaxed mb-8 text-center max-w-3xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          {blog.excerpt}
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full mx-auto mb-12" />

        {/* Content */}
        <div
          className="rounded-2xl shadow-xl p-8 md:p-12 mb-12 border"
          style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
        >
          <div className="prose prose-lg max-w-none">
            {blog.content.split("\n\n").map((paragraph, index) => (
              <div key={index} className="mb-8">
                <p className="leading-relaxed text-base md:text-lg" style={{ color: "var(--text-secondary)" }}>
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="p-6 md:p-10 rounded-2xl border mb-16 text-center"
          style={{
            background: "rgba(34,197,94,0.05)",
            borderColor: "rgba(34,197,94,0.2)",
          }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Ready to Transform Your Business?
          </h3>
          <p className="mb-6 text-sm md:text-base" style={{ color: "var(--text-secondary)" }}>
            Let's discuss how our AI and software development expertise can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", boxShadow: "0 0 20px rgba(34,197,94,0.3)" }}
            >
              Get Started
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold text-sm border transition-all hover:scale-105"
              style={{ borderColor: "rgba(34,197,94,0.4)", color: "#22c55e" }}
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/blog/${relatedBlog.id}`}
                  className="rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group border"
                  style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <IconClock className="h-3.5 w-3.5 text-green-500" />
                      <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                        {Math.ceil(relatedBlog.content.split(" ").length / 200)} min read
                      </span>
                    </div>
                    <h3
                      className="font-bold text-base mb-2 leading-tight transition-colors group-hover:text-green-500"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                      {relatedBlog.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer nav */}
        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: "var(--border)" }}>
          <Link
            href="/"
            className="inline-flex items-center text-green-500 hover:text-green-400 font-medium transition-colors group text-sm"
          >
            <IconArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Resources
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center text-green-500 hover:text-green-400 font-medium transition-colors group text-sm"
          >
            View All Articles
            <IconArrowLeft className="h-4 w-4 ml-2 rotate-180 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
