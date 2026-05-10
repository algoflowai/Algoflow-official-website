import { blogs } from "../data/blogs";

const BASE_URL = "https://www.algoflowai.com";

export default function sitemap() {
    const staticRoutes = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];

    const blogRoutes = blogs.map((blog) => ({
        url: `${BASE_URL}/blog/${blog.id}`,
        lastModified: blog.date ? new Date(blog.date) : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes];
}
