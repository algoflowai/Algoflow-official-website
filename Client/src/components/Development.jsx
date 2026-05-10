"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Discovery & Compliance Audit",
    description:
      "We map your regulatory landscape upfront — GDPR, PCI-DSS, SOC 2, RBI/SEBI guidelines, HIPAA — before writing a single line of code. Risk is identified and mitigated at the source.",
    tag: "Regulatory",
  },
  {
    number: 2,
    title: "Security-First Architecture",
    description:
      "Zero-trust design, end-to-end AES-256 encryption, multi-factor authentication, and strict data isolation. Every system boundary is hardened against OWASP Top 10 vulnerabilities.",
    tag: "Infosec",
  },
  {
    number: 3,
    title: "Agile Sprint Delivery",
    description:
      "Two-week sprints with live demos, transparent backlogs, and daily standups. Stakeholders get full visibility — no surprises, no scope creep, no missed deadlines.",
    tag: "Agile",
  },
  {
    number: 4,
    title: "Data Privacy & Protection",
    description:
      "User data is encrypted at rest and in transit, anonymized where applicable, and governed by consent management. Every data operation generates a tamper-proof audit trail.",
    tag: "Data",
  },
  {
    number: 5,
    title: "Pen Testing & Quality Assurance",
    description:
      "Mandatory penetration testing, OWASP audits, performance load testing, and full UAT cycles before every release. No code ships without passing our security gates.",
    tag: "QA",
  },
  {
    number: 6,
    title: "24/7 Monitoring & SLA Support",
    description:
      "Real-time anomaly detection, automated incident response, 99.9% uptime SLAs, and a dedicated support team for mission-critical fintech, banking, and healthcare systems.",
    tag: "DevOps",
  },
];

export default function Development() {
  return (
    <motion.section
      className="relative py-20 px-4 w-[90%] mx-auto bg-[var(--background)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center mb-14"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex items-center mb-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-16 h-1 bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full" />
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
          Our Development Process
        </h2>
        <p className="text-[var(--text-secondary)] mt-2 text-sm max-w-md mx-auto">
          Enterprise-grade security and compliance baked into every stage — built for fintech, banking, healthcare, and high-stakes industries.
        </p>
      </motion.div>
      <motion.div
        className="relative mt-0"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated line */}
        <motion.div
          className="hidden lg:block absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] z-0"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />

        {/* Trophy icon with animation */}
        <motion.div
          className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10"
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
        >
          <div className="w-10 h-10 bg-white flex items-center justify-center">
            <Image
              src="/icons/Trophy.png"
              alt="Trophy Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`relative flex flex-col items-center ${index % 2 === 0
                ? "lg:row-start-1"
                : "lg:row-start-2 lg:mt-4 lg:ml-16"
                }`}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Connection line */}
              {index !== steps.length && (
                <motion.div
                  className="hidden lg:block absolute w-0.5 bg-gradient-to-b from-[#4ed35e] to-[#1b6f08]"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    [index % 2 === 0 ? "top" : "bottom"]: "100%",
                    height: "2.5rem",
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              )}

              {/* Step card */}
              <motion.div
                className="mt-2 pl-6 pr-6 pb-8 pt-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-sm w-full max-w-xs text-left flex flex-col justify-between card-hover-glow"
                whileHover={{
                  boxShadow: "0 0 30px rgba(34,197,94,0.12), 0 10px 40px rgba(0,0,0,0.08)",
                  borderColor: "#22c55e",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <motion.div
                      className="w-9 h-9 rounded-xl flex items-center justify-center bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="font-bold text-base text-green-600">
                        {step.number < 10 ? `0${step.number}` : step.number}
                      </span>
                    </motion.div>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e" }}>
                      {step.tag}
                    </span>
                  </div>
                  <motion.h4
                    className="font-inter font-bold text-[15px] sm:text-[16px] leading-[22px] text-[var(--text-primary)] mb-2"
                    whileHover={{ color: "#1b6f08" }}
                  >
                    {step.title}
                  </motion.h4>
                  <motion.p
                    className="font-inter text-[13px] leading-[20px] text-[var(--text-secondary)]"
                    whileHover={{ opacity: 1 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
