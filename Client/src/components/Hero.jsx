"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import ContactPopup from "./ContactPopup";
import Link from "next/link";

// ─── COMPLETE HERO REWRITE — modern dark canvas, no background images ───

const ROTATING_WORDS = ["Fintech", "Healthcare", "Manufacturing", "Banking", "Airlines", "Real Estate", "Oil & Gas"];
const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Expert Engineers" },
  { value: "100%", label: "Client Satisfaction" },
];
const TRUST_BADGES = ["GDPR Compliant", "SOC 2 Certified", "ABDM Integrated", "PCI-DSS Aware"];
const NODES = [
  { x: 10, y: 20 }, { x: 30, y: 10 }, { x: 50, y: 25 }, { x: 70, y: 8 }, { x: 90, y: 20 },
  { x: 15, y: 50 }, { x: 35, y: 65 }, { x: 55, y: 45 }, { x: 75, y: 60 }, { x: 88, y: 40 },
  { x: 5, y: 80 }, { x: 25, y: 75 }, { x: 45, y: 85 }, { x: 65, y: 78 }, { x: 85, y: 85 },
];
const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
  [5, 6], [6, 7], [7, 8], [8, 9], [5, 10], [6, 11], [7, 12], [8, 13], [9, 14],
  [10, 11], [11, 12], [12, 13], [13, 14], [2, 6], [7, 3], [6, 12],
];
const CARDS = [
  { img: "/images/wfa.webp", title: "Agentic AI", desc: "Autonomous agents for voice, banking & healthcare", col: "139,92,246", href: "/agentic-ai" },
  { img: "/images/vision.jpeg", title: "Computer Vision", desc: "Real-time detection, PPE compliance, defect checks", col: "59,130,246", href: "/#services" },
  { img: "/images/nlp.webp", title: "LLMs & NLP", desc: "Custom language models, RAG pipelines, chatbots", col: "34,197,94", href: "/#services" },
  { img: "/images/aiAutomation.png", title: "Smart Factory", desc: "Predictive maintenance, quality AI, dark factory", col: "245,158,11", href: "/industries/manufacturing" },
  { img: "/images/caseStudy1.jpeg", title: "Healthcare AI", desc: "ABDM / ABHA integration, clinical AI, remote care", col: "236,72,153", href: "/industries/healthcare" },
  { img: "/images/secureapp.jpeg", title: "FinTech & Banking", desc: "Fraud detection, KYC, AML, transaction intelligence", col: "20,184,166", href: "/#agentic-ai" },
];

// placeholder — not used after rewrite but kept so old imports don't break
const backgroundImages = [""];

export default function Hero() {
  const controls = useAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    controls.start("visible");
    const wi = setInterval(() => setWordIndex(i => (i + 1) % ROTATING_WORDS.length), 2200);
    const pi = setInterval(() => setPulse(p => (p + 1) % NODES.length), 400);
    return () => { clearInterval(wi); clearInterval(pi); };
  }, [controls]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ContactPopup onClose={() => setIsModalOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#020b14 0%,#040f1e 40%,#050d1a 70%,#020b14 100%)", paddingTop: "82px" }}
      >
        {/* ── Neural network SVG background ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {EDGES.map(([a, b], i) => (
              <motion.line key={i}
                x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y}
                stroke="url(#lg1)" strokeWidth="0.12"
                animate={{ opacity: [0.15, 0.55, 0.15] }}
                transition={{ duration: 3 + (i % 5), delay: i * 0.09, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
            {NODES.map((n, i) => (
              <motion.circle key={i} cx={n.x} cy={n.y} r={i === pulse ? 1 : 0.55}
                fill={i === pulse ? "#22c55e" : "#1d5c34"}
                animate={{ r: i === pulse ? [0.55, 1.1, 0.55] : 0.55, opacity: i === pulse ? [1, 0.5, 1] : 0.35 }}
                transition={{ duration: 0.8 }}
              />
            ))}
          </svg>
          {/* Orbs */}
          <motion.div className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(34,197,94,0.07) 0%,transparent 65%)" }}
            animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 11, repeat: Infinity }} />
          <motion.div className="absolute -bottom-60 -right-60 w-[800px] h-[800px] rounded-full"
            style={{ background: "radial-gradient(circle,rgba(59,130,246,0.06) 0%,transparent 65%)" }}
            animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 14, repeat: Infinity }} />
          {/* Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(34,197,94,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,197,94,0.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 w-[90%] mx-auto py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <motion.div className="flex flex-col gap-7"
              initial="hidden" animate={controls}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}>

              {/* Live badge */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
                  style={{ background: "rgba(34,197,94,0.08)", borderColor: "rgba(34,197,94,0.25)", color: "#4ade80" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  AI-Powered Software Company · Est. 2019
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] tracking-tight text-white">
                  Building AI That<br />
                  <span className="text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(90deg,#22c55e,#4ade80,#86efac)" }}>
                    Transforms
                  </span>{" Business"}
                </h1>
                <div className="flex items-center gap-3 mt-3 h-10">
                  <span className="text-lg text-gray-400 font-light">for</span>
                  <div className="relative overflow-hidden flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.span key={wordIndex} className="text-2xl font-bold" style={{ color: "#22c55e" }}
                        initial={{ y: 26, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -26, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeOut" }}>
                        {ROTATING_WORDS[wordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                We engineer production-grade AI — from <strong className="text-white">computer vision</strong> and <strong className="text-white">LLMs</strong> to <strong className="text-white">agentic workflows</strong> — delivering measurable impact for fintech, healthcare, manufacturing, and beyond.
              </motion.p>

              {/* Trust badges */}
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex flex-wrap gap-2">
                {TRUST_BADGES.map(b => (
                  <span key={b} className="text-xs px-2.5 py-1 rounded-md font-medium"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8" }}>
                    {b}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-col sm:flex-row gap-3 items-start">
                <motion.button onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white"
                  style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)", boxShadow: "0 0 28px rgba(34,197,94,0.3)" }}
                  whileHover={{ scale: 1.04, boxShadow: "0 0 48px rgba(34,197,94,0.5)" }} whileTap={{ scale: 0.97 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.72 6.72l.82-.82a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  Get Free Consultation
                </motion.button>
                <Link href="/projects">
                  <motion.div className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold border cursor-pointer"
                    style={{ borderColor: "rgba(255,255,255,0.14)", color: "#e2e8f0", background: "rgba(255,255,255,0.04)" }}
                    whileHover={{ borderColor: "rgba(34,197,94,0.4)", color: "#fff", background: "rgba(34,197,94,0.07)" }}
                    whileTap={{ scale: 0.97 }}>
                    View Our Work
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Contact quick links */}
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="flex items-center gap-3 text-sm text-gray-500 flex-wrap">
                <a href="tel:+917452833648" className="hover:text-green-400 transition-colors flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.72 6.72l.82-.82a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span className="text-green-400 font-semibold">+91-7452833648</span>
                </a>
                <span className="opacity-30">·</span>
                <a href="mailto:info@algoflowai.com" className="hover:text-green-400 transition-colors">info@algoflowai.com</a>
              </motion.div>
            </motion.div>

            {/* Right — capability cards grid */}
            <motion.div className="hidden lg:grid grid-cols-2 gap-3"
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}>
              {CARDS.map((c, i) => (
                <Link href={c.href} key={c.title}>
                  <motion.div className="p-4 rounded-2xl border cursor-pointer group"
                    style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.06)" }}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + i * 0.08 }}
                    whileHover={{ background: `rgba(${c.col},0.08)`, borderColor: `rgba(${c.col},0.3)`, y: -3 }}>
                    <div className="relative h-24 rounded-xl overflow-hidden mb-3">
                      <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,11,20,0.65) 0%, transparent 60%)" }} />
                    </div>
                    <div className="font-bold text-sm text-white mb-1">{c.title}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{c.desc}</div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div className="mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}>
            {STATS.map(s => (
              <motion.div key={s.label} className="text-center" whileHover={{ scale: 1.06 }}>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg,#22c55e,#86efac)" }}>{s.value}</div>
                <div className="text-xs text-gray-400 mt-1 font-medium tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
          animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] text-gray-600 tracking-widest uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-green-500/40 to-transparent" />
          </div>
        </motion.div>
      </section>
    </>
  );
}
