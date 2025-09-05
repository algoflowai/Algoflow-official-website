import Image from "next/image";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Bishops Pharmacy Portal (UK)",
    description:
      "Developed a comprehensive digital healthcare system with integrated Customer and Admin portals. The platform enables vaccine scheduling, service bookings, and automated reminders for patients, while providing staff with robust tools for inventory management, scheduling, and patient records. This digital transformation reduced manual tasks by 60% and significantly improved service accessibility through self-service features.",
    image: "/images/bishops.png",
  },
  {
    id: 2,
    title: "TurboTreats - Restaurant MS",
    description:
      "An AI-powered restaurant management system that revolutionizes dining operations. Features include seamless online ordering, real-time table tracking, smart inventory management, and AI-driven food prep timing. The system reduced food waste by 32% and increased customer satisfaction by 28% through improved service efficiency and digital experience.",
    image: "/images/turbotreats.png",
  },
  {
    id: 3,
    title: "Oil India - Analytics Dashboard",
    description:
      "A comprehensive real-time analytics platform built for Oil India. The system provides advanced project tracking, inventory monitoring with smart alerts, and township maintenance oversight. This centralized data platform enables leadership to track KPIs, analyze trends, and make data-driven decisions across multiple departments and sites.",
    image: "/images/iocl.png",
  },
  {
    id: 4,
    title: "Parkey - Smart Parking Solution",
    description:
      "Revolutionizing parking management with AI-driven automation. Our comprehensive solution features Automated Number Plate Recognition (ANPR) for seamless entry/exit, secure OTP/QR authentication, live parking availability mapping, and detailed employee monitoring. The system includes an advanced Admin Web Panel for real-time analytics, payment tracking, and user management, making parking operations efficient and user-friendly.",
    image: "/images/parkk.png",
  },
  {
    id: 5,
    title: "NTPC - AI Safety Compliance",
    description:
      "Deployed an advanced AI surveillance system for workplace safety at NTPC. The system actively monitors PPE compliance, detects unconscious personnel, prevents unauthorized zone access, and ensures safety protocols during height work. This intelligent monitoring solution has significantly enhanced workplace safety through real-time detection and instant alerts.",
    image: "/images/ntpc.png",
  },
  {
    id: 6,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "/images/caseStudy1.jpeg",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 px-4 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] rounded-full" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2">
            Our Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]">
              Projects
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base mt-2">
            Real-world success stories powered by AlgoFlow AI.
          </p>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="flex flex-col bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-t-3xl"
                  priority={study.id === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-4">
                  {study.description}
                </p>
                <div className="mt-auto flex justify-start">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] text-white text-sm font-semibold shadow hover:scale-105 transition-transform"
                  >
                    Explore More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Link */}
        <div className="mt-14">
          <a
            href="#"
            className="inline-flex items-center px-5 py-2 rounded-full border border-black bg-white text-black text-base font-medium shadow-sm hover:bg-black hover:text-white transition-colors duration-200"
          >
            Read more case studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
