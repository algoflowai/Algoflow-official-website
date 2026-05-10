import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import AgenticAI from "@/components/AgenticAI";
import TeamSection from "@/components/Team-Section";
import GlobalPresence from "@/components/GlobalPresence";
import Footer from "@/components/Footer";
import Hire from "@/components/Hire";
import FeaturedResources from "@/components/Resources";
import TechStack from "@/components/TechStack";
import Development from "@/components/Development";
import AboutUs from "@/components/AboutUs";
import Recognitions from "@/components/Recognitions";

export const metadata = {
  title: "AlgoFlow AI — Custom AI & Software Development Company",
  description:
    "AlgoFlow AI builds AI-powered software for businesses — mobile apps, web platforms, computer vision, NLP/LLMs, and intelligent workflow automation.",
  alternates: {
    canonical: "https://www.algoflowai.com",
  },
};

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AlgoFlow AI Services",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Mobile App Development" },
    { "@type": "ListItem", position: 2, name: "Web Design & Development" },
    { "@type": "ListItem", position: 3, name: "Research & Development" },
    { "@type": "ListItem", position: 4, name: "Video Analysis with AI & Computer Vision" },
    { "@type": "ListItem", position: 5, name: "Workflow Automation & AI in Industries" },
    { "@type": "ListItem", position: 6, name: "Natural Language Processing & LLMs" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <div className="bg-[var(--background)] min-h-screen overflow-x-hidden custom-scrollbar">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="agentic-ai">
          <AgenticAI />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="development">
          <Development />
        </section>
        <section id="services">
          <Services />
        </section>

        <section id="clients">
          <Clients />
        </section>

        <section id="recognitions">
          <Recognitions />
        </section>

        <section id="global-presence">
          <GlobalPresence />
        </section>
        <section id="resources">
          <FeaturedResources />
        </section>
        <section id="hire">
          <Hire />
        </section>
        <Footer />
      </div>
    </>
  );
}
