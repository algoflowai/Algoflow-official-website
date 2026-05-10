import CaseStudies from "@/components/CaseStudies";
import React from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Projects & Case Studies — AI & Software Solutions",
  description:
    "Explore AlgoFlow AI's portfolio of successful AI and software projects across DRDO, NTPC, and other industry-leading clients.",
  alternates: { canonical: "https://www.algoflowai.com/projects" },
  openGraph: {
    title: "Projects & Case Studies — AlgoFlow AI",
    description: "Portfolio of successful AI and software development projects.",
    url: "https://www.algoflowai.com/projects",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <Navbar />
      <main className="pt-24">
        <CaseStudies />
      </main>
    </div>
  );
}
