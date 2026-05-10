"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactPopup from "../../components/ContactPopup";
import Link from "next/link";


const WORKFLOW = [
    { step: "01", label: "Perceive", img: "/images/vision.jpeg", desc: "Agents ingest data from voice, text, APIs, IoT sensors, and databases in real time — building a live model of their environment.", color: "#3b82f6" },
    { step: "02", label: "Reason", img: "/images/nlp.webp", desc: "LLM-based reasoning chains (CoT, ReAct, Tree-of-Thought) evaluate context, goals, and constraints to choose optimal actions.", color: "#8b5cf6" },
    { step: "03", label: "Plan", img: "/images/aiAutomation.png", desc: "Multi-step task planning breaks complex goals into sub-tasks, handles dependency graphs, and orchestrates tool calls.", color: "#f59e0b" },
    { step: "04", label: "Act", img: "/images/wfa.webp", desc: "Agents call APIs, write code, execute SQL, send communications, or control RPA bots — fully autonomously.", color: "#22c55e" },
    { step: "05", label: "Observe", img: "/images/resources2.png", desc: "Outcomes and feedback are captured, errors detected, and loops corrected — closing the continuous improvement cycle.", color: "#14b8a6" },
    { step: "06", label: "Respond", img: "/images/resources1.png", desc: "Structured outputs, reports, alerts, or natural language responses are delivered to humans or downstream systems.", color: "#ec4899" },
];

const DOMAINS = [
    {
        img: "/images/wfa.webp",
        title: "Voice AI & IVR",
        highlight: "1,000+ simultaneous queries",
        desc: "Intelligent voice agents for customer service, banking helpdesks, and healthcare triage. Built for Svarn AI — handling 1,000+ concurrent calls with human-quality responses.",
        tags: ["Twilio", "NLP", "STT/TTS", "VXML"],
        color: "#8b5cf6",
    },
    {
        img: "/images/secureapp.jpeg",
        title: "Banking & FinTech",
        highlight: "Fraud detection in <200ms",
        desc: "Autonomous agents for KYC onboarding, AML monitoring, transaction anomaly detection, credit scoring, and regulatory reporting — PCI-DSS compliant.",
        tags: ["KYC/AML", "PCI-DSS", "Real-time", "SEBI/RBI"],
        color: "#3b82f6",
    },
    {
        img: "/images/caseStudy1.jpeg",
        title: "Healthcare & Hospitals",
        highlight: "40% OPD reduction",
        desc: "Clinical AI agents for patient routing, symptom triage, prescription assistance, OPD/IPD management, and ABDM/ABHA integration — deployed at Sahai hospitals.",
        tags: ["ABDM", "FHIR", "HL7", "HIPAA"],
        color: "#ec4899",
    },
    {
        img: "/images/bg3.jpg",
        title: "Airlines & Travel",
        highlight: "Automated disruption handling",
        desc: "Passenger re-booking agents, flight disruption automation, dynamic pricing assistants, and loyalty program management without human intervention.",
        tags: ["GDS Integration", "NLP", "24/7 Ops"],
        color: "#f59e0b",
    },
    {
        img: "/images/resources3.png",
        title: "Real Estate",
        highlight: "Lead-to-close automation",
        desc: "Property recommendation agents, document processing, legal due-diligence summarization, and buyer/seller matching via conversational AI.",
        tags: ["Document AI", "CRM Integration", "RAG"],
        color: "#22c55e",
    },
    {
        img: "/images/aiAutomation.png",
        title: "Manufacturing",
        highlight: "40% less downtime",
        desc: "Factory agents monitoring production lines, triggering predictive maintenance, managing inventory reorders, and coordinating supply chain — proven with Smarter Energies.",
        tags: ["IoT", "Digital Twin", "SCADA", "OPC-UA"],
        color: "#14b8a6",
    },
];

const CAPABILITIES = [
    { title: "Multi-Agent Orchestration", desc: "Hierarchical agent networks where coordinator agents delegate to specialist sub-agents for complex enterprise workflows." },
    { title: "RAG-Powered Knowledge", desc: "Retrieval-Augmented Generation with private vector stores, keeping agents grounded in your company's data and policies." },
    { title: "Tool Use & API Calling", desc: "Agents autonomously call REST APIs, query databases, use code interpreters, and integrate with ERP/CRM systems." },
    { title: "Human-in-the-Loop", desc: "Configurable escalation paths — agents hand off to humans when confidence is low or stakes are high, with full audit trails." },
    { title: "Memory & Context", desc: "Short-term (session) and long-term (vector DB) memory enable agents to learn from interactions and maintain context." },
    { title: "Security & Compliance", desc: "Role-based access, PII masking, SOC 2 controls, GDPR-compliant data handling, and full audit logging baked in." },
];

const CASE_STUDIES = [
    {
        company: "Svarn AI",
        industry: "Telecom / IVR",
        result: "1,000+ simultaneous queries",
        desc: "Built a voice AI agent platform handling over 1,000 concurrent customer calls with sub-second response time, replacing a 50-person call center team for routine queries.",
    },
    {
        company: "Sahai Hospitals",
        industry: "Healthcare",
        result: "40% OPD reduction",
        desc: "Deployed a clinical AI agent for patient triage, symptom routing, and prescription assistance — reducing OPD queue times by 40% and cutting administrative load by 60%.",
    },
    {
        company: "Smarter Energies",
        industry: "Energy / Manufacturing",
        result: "40% less downtime",
        desc: "Industrial AI agents monitoring 200+ equipment sensors for predictive failure detection — achieving 40% reduction in unplanned downtime and 25% cost savings.",
    },
];

const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function AgenticAIPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div style={{ background: "#020b14", minHeight: "100vh" }}>
            <Navbar />
            {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}

            {/* Hero */}
            <section className="relative overflow-hidden" style={{ paddingTop: "82px" }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: "linear-gradient(rgba(34,197,94,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,197,94,0.025) 1px,transparent 1px)",
                    backgroundSize: "60px 60px"
                }} />
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle,rgba(139,92,246,0.08) 0%,transparent 65%)" }} />
                <div className="w-[90%] mx-auto py-24 lg:py-32 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border mb-6"
                            style={{ background: "rgba(139,92,246,0.1)", borderColor: "rgba(139,92,246,0.3)", color: "#a78bfa" }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                            Autonomous AI Agents
                        </span>
                    </motion.div>
                    <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        AI That Works{" "}
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#8b5cf6,#a78bfa,#c4b5fd)" }}>
                            Autonomously
                        </span>
                        <br />for Your Business
                    </motion.h1>
                    <motion.p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        Agentic AI systems that perceive context, reason through complexity, and take real actions — from banking transactions to hospital triage to factory floor management.
                    </motion.p>
                    <motion.div className="flex flex-col sm:flex-row gap-3 justify-center mt-10"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <motion.button onClick={() => setIsModalOpen(true)}
                            className="px-8 py-3.5 rounded-xl font-bold text-white text-base"
                            style={{ background: "linear-gradient(135deg,#8b5cf6,#7c3aed)", boxShadow: "0 0 30px rgba(139,92,246,0.3)" }}
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            Deploy an Agent
                        </motion.button>
                        <Link href="/#agentic-ai">
                            <motion.div className="px-8 py-3.5 rounded-xl font-semibold text-gray-300 text-base border cursor-pointer"
                                style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
                                whileHover={{ borderColor: "rgba(139,92,246,0.4)", color: "#fff" }}>
                                See Live Demo
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="w-[90%] mx-auto py-20">
                <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The Agent Loop</h2>
                    <p className="text-gray-400 mt-3 max-w-xl mx-auto">A six-phase autonomous reasoning and action cycle that powers every AlgoFlow AI agent.</p>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {WORKFLOW.map((w, i) => (
                        <motion.div key={w.step}
                            className="p-6 rounded-2xl border"
                            style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.06)" }}
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            whileHover={{ borderColor: `${w.color}40`, background: `rgba(${w.color === "#3b82f6" ? "59,130,246" : w.color === "#8b5cf6" ? "139,92,246" : w.color === "#f59e0b" ? "245,158,11" : w.color === "#22c55e" ? "34,197,94" : w.color === "#14b8a6" ? "20,184,166" : "236,72,153"},0.06)` }}>
                            <div className="relative h-20 rounded-xl overflow-hidden mb-4">
                                <img src={w.img} alt={w.label} className="w-full h-full object-cover" />
                                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(2,11,20,0.75) 0%, transparent 70%)" }} />
                                <span className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${w.color}25`, color: w.color, backdropFilter: "blur(4px)" }}>{w.step}</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{w.label}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{w.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Domain Applications */}
            <section style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-[90%] mx-auto py-20">
                    <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Industry Applications</h2>
                        <p className="text-gray-400 mt-3 max-w-xl mx-auto">Purpose-built agentic systems for the industries where speed, accuracy, and compliance matter most.</p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {DOMAINS.map((d, i) => (
                            <motion.div key={d.title}
                                className="p-6 rounded-2xl border flex flex-col gap-4"
                                style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ borderColor: `${d.color}40`, y: -4 }}>
                                <div className="relative h-28 rounded-xl overflow-hidden">
                                    <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,11,20,0.65) 0%, transparent 60%)" }} />
                                    <span className="absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full" style={{ background: `${d.color}20`, color: d.color, border: `1px solid ${d.color}30`, backdropFilter: "blur(4px)" }}>{d.highlight}</span>
                                </div>
                                <h3 className="text-base font-bold text-white">{d.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed flex-1">{d.desc}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {d.tags.map(t => (
                                        <span key={t} className="text-xs px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", color: "#64748b" }}>{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="w-[90%] mx-auto py-20">
                <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Platform Capabilities</h2>
                    <p className="text-gray-400 mt-3">Enterprise-grade infrastructure powering every agent we build.</p>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {CAPABILITIES.map((c, i) => (
                        <motion.div key={c.title}
                            className="p-5 rounded-xl border"
                            style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}>
                            <div className="w-2 h-2 rounded-full bg-violet-400 mb-3" />
                            <h3 className="text-sm font-bold text-white mb-2">{c.title}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Case Studies */}
            <section style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-[90%] mx-auto py-20">
                    <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Proven in Production</h2>
                        <p className="text-gray-400 mt-3">Real outcomes from real deployments.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {CASE_STUDIES.map((cs, i) => (
                            <motion.div key={cs.company}
                                className="p-6 rounded-2xl border"
                                style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}>
                                <div className="text-xs text-violet-400 font-semibold mb-1">{cs.industry}</div>
                                <h3 className="text-base font-bold text-white mb-1">{cs.company}</h3>
                                <div className="text-2xl font-extrabold text-transparent bg-clip-text mb-3"
                                    style={{ backgroundImage: "linear-gradient(135deg,#8b5cf6,#c4b5fd)" }}>{cs.result}</div>
                                <p className="text-sm text-gray-400 leading-relaxed">{cs.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Deploy Your First Agent?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">We design, build, and operate production-grade agentic systems. From proof-of-concept in 2 weeks to full enterprise rollout.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <motion.button onClick={() => setIsModalOpen(true)}
                            className="px-8 py-3.5 rounded-xl font-bold text-white"
                            style={{ background: "linear-gradient(135deg,#8b5cf6,#7c3aed)", boxShadow: "0 0 30px rgba(139,92,246,0.3)" }}
                            whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(139,92,246,0.5)" }} whileTap={{ scale: 0.97 }}>
                            Start Building Now
                        </motion.button>
                        <a href="mailto:info@algoflowai.com">
                            <motion.div className="px-8 py-3.5 rounded-xl font-semibold text-gray-300 border"
                                style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
                                whileHover={{ borderColor: "rgba(139,92,246,0.4)", color: "#fff" }}>
                                info@algoflowai.com
                            </motion.div>
                        </a>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
