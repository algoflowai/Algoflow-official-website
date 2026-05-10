export const dynamic = "force-static";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
        ],
        sitemap: "https://www.algoflowai.com/sitemap.xml",
        host: "https://www.algoflowai.com",
    };
}
