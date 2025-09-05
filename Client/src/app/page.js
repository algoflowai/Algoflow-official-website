import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import TeamSection from "@/components/Team-Section";
import DevelopmentApproach from "@/components/Devapproach";
import Footer from "@/components/Footer";
import Hire from "@/components/Hire";
import FeaturedResources from "@/components/Resources";
import TechStack from "@/components/TechStack";
import Development from "@/components/Development";
import AboutUs from "@/components/AboutUs";
import Recognitions from "@/components/Recognitions";


export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden custom-scrollbar">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="development">
        <Development />
      </section>
   

      <section id="clients">
        <Clients />
      </section>
      {/* <section id="testimonials">
        <Testimonials />
      </section> */}
      {/* <section id="team">
        <TeamSection />
      </section>
      <section id="tech-stack">
        <TechStack />
      </section> */}

      <section id="recognitions">
        <Recognitions />
      </section>


      <section id="development-approach">
        <DevelopmentApproach />
      </section>
      <section id="resources">
        <FeaturedResources />
      </section>
      <section id="hire">
        <Hire />
      </section>
      <Footer />
    </div>
  );
}
