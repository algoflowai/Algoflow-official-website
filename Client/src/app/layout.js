import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.algoflowai.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AlgoFlow AI — Custom AI & Software Development Company",
    template: "%s | AlgoFlow AI",
  },
  description:
    "AlgoFlow AI builds cutting-edge AI solutions, mobile apps, web applications, computer vision systems, NLP/LLM integrations, and workflow automation for forward-thinking businesses.",
  keywords: [
    "AI development company",
    "custom software development",
    "machine learning solutions",
    "computer vision AI",
    "NLP LLM integration",
    "workflow automation",
    "mobile app development",
    "web development India",
    "AlgoFlow AI",
    "software company Bangalore",
    "DPIIT startup",
    "AI consulting",
  ],
  authors: [{ name: "AlgoFlow AI", url: BASE_URL }],
  creator: "AlgoFlow AI Private Limited",
  publisher: "AlgoFlow AI Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "AlgoFlow AI",
    title: "AlgoFlow AI — Custom AI & Software Development Company",
    description:
      "We build AI-powered software — mobile apps, web platforms, computer vision, NLP/LLMs, and automation — for businesses that want to lead.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@algoflowai",
    creator: "@algoflowai",
    title: "AlgoFlow AI — Custom AI & Software Development Company",
    description:
      "AI-powered software development: mobile apps, web apps, computer vision, NLP/LLMs, and automation.",
  },
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AlgoFlow AI Private Limited",
  url: BASE_URL,
  logo: `${BASE_URL}/icons/logo.png`,
  description:
    "AlgoFlow AI builds custom AI solutions, mobile apps, web platforms, and automation systems for businesses worldwide.",
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Main, 6th Cross Rd, GM Palya, C V Raman Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560075",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-8960880615",
      contactType: "customer service",
      availableLanguage: "English",
    },
  ],
  email: "info@algoflowai.com",
  sameAs: [
    "https://www.linkedin.com/company/algoflowai",
    "https://twitter.com/algoflowai",
    "https://instagram.com/algoflowai",
    "https://facebook.com/algoflowai",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AlgoFlow AI",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/blog?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#22c55e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-Inter antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
