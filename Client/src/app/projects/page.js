import CaseStudies from "@/components/CaseStudies";
import React from "react";
import { Navbar } from "@/components/Navbar";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <CaseStudies />
      </main>
    </div>
  );
}
