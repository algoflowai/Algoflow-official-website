"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const domains = [
    {
        id: "voice",
        title: "Voice & Chatbots",
        subtitle: "Conversational AI Agents",
        description:
            "Autonomous voice agents and chatbots that understand intent, handle multi-turn conversations, and resolve queries end-to-end — no human handoff needed.",
        gradient: "from-violet-500 to-purple-600",
        glowColor: "rgba(139,92,246,0.25)",
        borderColor: "rgba(139,92,246,0.3)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
                <line x1="8" x2="16" y1="22" y2="22" />
            </svg>
        ),
        capabilities: ["Natural Language Understanding", "Voice-to-Action Execution", "Context Memory"],
    },
    {
        id: "banking",
        title: "Banking",
        subtitle: "Intelligent Banking Agents",
        description:
            "AI agents that autonomously handle KYC verification, fraud detection, loan pre-approvals, and customer support — operating 24/7 with full audit trails.",
        gradient: "from-blue-500 to-cyan-500",
        glowColor: "rgba(59,130,246,0.25)",
        borderColor: "rgba(59,130,246,0.3)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
        ),
        capabilities: ["KYC & Compliance Automation", "Fraud Pattern Detection", "Loan Processing Agent"],
    },
    {
        id: "finance",
        title: "Finance",
        subtitle: "Autonomous Finance Agents",
        description:
            "Agents that monitor portfolios, execute rule-based trades, generate reports, and alert on anomalies — delivering institutional-grade intelligence at scale.",
        gradient: "from-emerald-500 to-green-500",
        glowColor: "rgba(16,185,129,0.25)",
        borderColor: "rgba(16,185,129,0.3)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ),
        capabilities: ["Portfolio Monitoring", "Anomaly & Risk Alerts", "Automated Reporting"],
    },
    {
        id: "airlines",
        title: "Airlines & Travel",
        subtitle: "Flight Booking Agents",
        description:
            "End-to-end travel agents that search, compare, book flights and hotels, handle cancellations, and manage itineraries — all through natural conversation.",
        gradient: "from-sky-500 to-blue-400",
        glowColor: "rgba(14,165,233,0.25)",
        borderColor: "rgba(14,165,233,0.3)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4c-1 0-1.5.5-3.5 2.5L11 8 4.2 6.2c-.5-.1-1 .1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.1z" />
            </svg>
        ),
        capabilities: ["Multi-airline Search & Compare", "Auto Itinerary Management", "Rebooking & Cancellation"],
    },
    {
        id: "healthcare",
        title: "Healthcare",
        subtitle: "Patient Care Agents",
        description:
            "AI agents that handle appointment scheduling, symptom triage, medication reminders, and post-discharge follow-up — improving outcomes and reducing care gaps.",
        gradient: "from-rose-500 to-pink-500",
        glowColor: "rgba(244,63,94,0.25)",
        borderColor: "rgba(244,63,94,0.3)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        capabilities: ["Symptom Triage & Routing", "Appointment Scheduling", "Medication Reminders"],
    },
    {
        id: "realestate",
        title: "Real Estate",
        subtitle: "Property Intelligence Agents",
        description:
            "Agents that qualify leads, match buyers to listings, schedule site visits, answer property queries, and automate follow-ups — accelerating the sales cycle.",
        gradient: "from-amber-500 to-orange-500",
        glowColor: "rgba(245,158,11,0.25)",
        borderColor: "rgba(245,158,11,0.3)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        capabilities: ["Lead Qualification Agent", "Smart Property Matching", "Site Visit Automation"],
    },
];

const workflowSteps = [
    {
        step: "01",
        label: "Perceive",
        desc: "Agent receives input — voice, text, API event, or sensor data",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="3" />
                <path d="M3 12s3.6-7 9-7 9 7 9 7-3.6 7-9 7-9-7-9-7z" />
            </svg>
        ),
        color: "from-violet-500 to-purple-500",
    },
    {
        step: "02",
        label: "Reason",
        desc: "LLM-powered brain plans the best sequence of actions to take",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
        color: "from-blue-500 to-cyan-500",
    },
    {
        step: "03",
        label: "Act",
        desc: "Calls tools, APIs, databases, or external services autonomously",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        color: "from-emerald-500 to-green-400",
    },
    {
        step: "04",
        label: "Observe",
        desc: "Reviews tool outputs, handles errors, adapts its plan in real time",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 .49-4.5" />
            </svg>
        ),
        color: "from-amber-500 to-orange-400",
    },
    {
        step: "05",
        label: "Respond",
        desc: "Delivers structured output, triggers next workflow, or escalates",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="22 2 11 13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
        ),
        color: "from-rose-500 to-pink-500",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 90, damping: 14 },
    },
};

export default function AgenticAI() {
    const [activeCard, setActiveCard] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{ background: "var(--dark-bg, #050d1a)" }}
        >
            {/* Background grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Ambient glow orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none" style={{ background: "radial-gradient(circle, #22c55e, transparent 70%)" }} />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }} />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border text-xs font-semibold tracking-widest uppercase"
                        style={{
                            background: "rgba(34,197,94,0.1)",
                            borderColor: "rgba(34,197,94,0.3)",
                            color: "#4ade80",
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Next-Gen AI Technology
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                        Agentic{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: "linear-gradient(135deg, #22c55e, #4ade80, #86efac)" }}
                        >
                            AI
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We build autonomous AI agents that <span className="text-green-400 font-medium">perceive, reason, act, and learn</span> — operating across industries with superhuman speed and precision.
                    </p>
                </motion.div>

                {/* ── Workflow Section ── */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    <div className="text-center mb-10">
                        <span className="text-sm font-semibold tracking-widest uppercase text-green-400">
                            How Agentic AI Works
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                            The Autonomous Agent Loop
                        </h3>
                    </div>

                    {/* Workflow steps */}
                    <div className="relative flex flex-col md:flex-row items-stretch gap-0">
                        {/* Connecting line — desktop */}
                        <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px]"
                            style={{ background: "linear-gradient(90deg, rgba(34,197,94,0) 0%, rgba(34,197,94,0.5) 20%, rgba(34,197,94,0.5) 80%, rgba(34,197,94,0) 100%)" }}
                        />

                        {workflowSteps.map((step, i) => (
                            <motion.div
                                key={step.step}
                                className="flex-1 flex flex-col items-center text-center px-3 py-2 relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                            >
                                {/* Step circle */}
                                <div
                                    className={`relative z-10 w-[88px] h-[88px] rounded-full flex flex-col items-center justify-center mb-4 border-2`}
                                    style={{
                                        background: "rgba(5,13,26,0.9)",
                                        borderColor: "rgba(34,197,94,0.4)",
                                        boxShadow: "0 0 24px rgba(34,197,94,0.15)",
                                    }}
                                >
                                    <div className={`bg-gradient-to-br ${step.color} rounded-full p-2 mb-1 text-white`}>
                                        {step.icon}
                                    </div>
                                    <span className="text-[10px] font-bold text-green-400 tracking-widest">{step.step}</span>
                                </div>

                                {/* Arrow between steps — mobile */}
                                {i < workflowSteps.length - 1 && (
                                    <div className="md:hidden flex justify-center my-1">
                                        <svg className="w-4 h-4 text-green-500 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}

                                <h4 className="text-white font-bold text-base mb-1">{step.label}</h4>
                                <p className="text-gray-400 text-xs leading-relaxed max-w-[160px]">{step.desc}</p>

                                {/* Desktop arrow */}
                                {i < workflowSteps.length - 1 && (
                                    <div className="hidden md:flex absolute top-[44px] -right-3 z-20 items-center justify-center">
                                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Feedback loop label */}
                    <motion.div
                        className="flex justify-center mt-8"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <div
                            className="flex items-center gap-3 px-5 py-2 rounded-full text-xs font-medium border"
                            style={{
                                background: "rgba(34,197,94,0.06)",
                                borderColor: "rgba(34,197,94,0.2)",
                                color: "#86efac",
                            }}
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-4.5" />
                            </svg>
                            Continuous feedback loop — agent improves with every interaction
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── Domain Cards ── */}
                <div className="mb-10 text-center">
                    <span className="text-sm font-semibold tracking-widest uppercase text-green-400">
                        Industry Applications
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                        We're Building AI Agents For
                    </h3>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {domains.map((domain) => (
                        <motion.div
                            key={domain.id}
                            variants={itemVariants}
                            className="relative rounded-2xl p-6 cursor-pointer group transition-all duration-300"
                            style={{
                                background: activeCard === domain.id
                                    ? "rgba(13,24,41,0.95)"
                                    : "rgba(10,18,34,0.7)",
                                border: `1px solid ${activeCard === domain.id ? domain.borderColor : "rgba(255,255,255,0.06)"}`,
                                boxShadow: activeCard === domain.id ? `0 0 40px ${domain.glowColor}` : "none",
                            }}
                            onMouseEnter={() => setActiveCard(domain.id)}
                            onMouseLeave={() => setActiveCard(null)}
                            whileHover={{ y: -6 }}
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${domain.gradient} text-white shadow-lg`}
                                >
                                    {domain.icon}
                                </div>
                                <span
                                    className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border"
                                    style={{
                                        background: `${domain.glowColor}`,
                                        borderColor: domain.borderColor,
                                        color: "#d1fae5",
                                    }}
                                >
                                    Agent
                                </span>
                            </div>

                            <h4 className="text-white font-bold text-lg mb-0.5">{domain.title}</h4>
                            <p className="text-green-400 text-xs font-medium mb-3">{domain.subtitle}</p>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5">{domain.description}</p>

                            {/* Capabilities */}
                            <ul className="space-y-1.5">
                                {domain.capabilities.map((cap) => (
                                    <li key={cap} className="flex items-center gap-2 text-xs text-gray-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                                        {cap}
                                    </li>
                                ))}
                            </ul>

                            {/* Hover glow overlay */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at 30% 30%, ${domain.glowColor}, transparent 70%)`,
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <p className="text-gray-400 text-base mb-6 max-w-xl mx-auto">
                        Ready to deploy an AI agent for your industry? Let's build it together.
                    </p>
                    <a
                        href="#hire"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                        style={{
                            background: "linear-gradient(135deg, #22c55e, #16a34a)",
                            boxShadow: "0 0 30px rgba(34,197,94,0.35)",
                        }}
                    >
                        Build Your AI Agent
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
