"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ContactPopup from "../../../components/ContactPopup";
import Link from "next/link";

const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const SMART_FACTORY = [
    {
        img: "/images/aiAutomation.png",
        title: "Autonomous Production",
        desc: "AI-guided robotic systems manage assembly lines autonomously — adjusting speed, rerouting defective units, and coordinating multi-arm workflows without human intervention.",
        stats: "35% throughput increase",
        color: "#3b82f6",
    },
    {
        img: "/images/vision.jpeg",
        title: "Vision-Based Quality Control",
        desc: "Computer vision cameras inspect 100% of production output in real time — detecting surface defects, dimensional deviations, and assembly errors at line speed.",
        stats: "99.2% defect detection rate",
        color: "#22c55e",
    },
    {
        img: "/images/resources4.png",
        title: "Smart Inventory & Warehouse",
        desc: "AI-driven demand forecasting, automated reorder triggers, and robotic picking systems. Integration with ERP/WMS for zero-stockout warehouse management.",
        stats: "30% inventory cost reduction",
        color: "#f59e0b",
    },
    {
        img: "/images/caseStudy2.jpeg",
        title: "Predictive Maintenance",
        desc: "IoT sensor fusion and ML models predict equipment failures 72+ hours in advance. Digital twins simulate degradation patterns, cutting unplanned downtime dramatically.",
        stats: "40% less downtime",
        color: "#8b5cf6",
    },
];

const DARK_FACTORY = [
    {
        img: "/images/aiAutomation.png",
        title: "Self-Operating Production",
        desc: "Lights-off manufacturing where AI orchestrates every step — raw material intake, processing, assembly, and packaging — without human operators on the floor.",
        color: "#22c55e",
    },
    {
        img: "/images/vision.jpeg",
        title: "Intelligent Quality Control",
        desc: "Multi-spectral vision and AI models perform 100% inline inspection. Feedback loops auto-adjust process parameters when drift is detected.",
        color: "#3b82f6",
    },
    {
        img: "/images/wfa.webp",
        title: "Autonomous Supply Flow",
        desc: "AGVs, conveyor AI, and supply chain agents coordinate material flow end-to-end — from supplier API triggers to finished goods dispatch.",
        color: "#f59e0b",
    },
    {
        img: "/images/caseStudy3.jpeg",
        title: "Predictive & Self-Healing Systems",
        desc: "Equipment self-diagnoses, orders spare parts, schedules maintenance windows, and reroutes production tasks autonomously when a line goes down.",
        color: "#8b5cf6",
    },
];

const OIL_GAS = [
    {
        img: "/images/caseStudy2.jpeg",
        title: "Pipeline Integrity Monitoring",
        desc: "Continuous sensor data fusion across thousands of pipeline kilometers — detecting leaks, pressure anomalies, and corrosion before they become incidents.",
        tag: "IIoT + Edge AI",
    },
    {
        img: "/images/aiAutomation.png",
        title: "Predictive Equipment Maintenance",
        desc: "ML models on compressor, pump, and turbine data predict component failure with 48–72 hour lead time, enabling planned maintenance over emergency shutdowns.",
        tag: "Predictive AI",
    },
    {
        img: "/images/vision.jpeg",
        title: "HSE & Safety Compliance",
        desc: "Computer vision for PPE detection, confined-space monitoring, and permit-to-work validation. AI-driven incident reporting and OSHA/ISO 45001 compliance dashboards.",
        tag: "Computer Vision",
    },
    {
        img: "/images/vlm.png",
        title: "Digital Twin Operations",
        desc: "Virtual replicas of wells, refineries, or offshore platforms. Simulate operational scenarios, test process changes, and optimize production without physical risk.",
        tag: "Digital Twin",
    },
    {
        img: "/images/nlp.webp",
        title: "Production Optimization",
        desc: "AI models for reservoir simulation, well performance forecasting, and production scheduling — maximizing yield while minimizing energy and operating costs.",
        tag: "Optimization AI",
    },
    {
        img: "/images/wfa.webp",
        title: "Cloud-Edge SCADA Integration",
        desc: "Hybrid cloud-edge architectures integrating with existing SCADA, DCS, and historian systems (OSIsoft PI, Ignition, Wonderware) — no rip-and-replace required.",
        tag: "SCADA / OT",
    },
];

const CASE_STUDIES = [
    {
        company: "NTPC (National Thermal Power Corporation)",
        industry: "Power / Energy",
        result: "95% reduction in safety incidents",
        desc: "Deployed AI-powered PPE compliance monitoring across NTPC plant floors. Computer vision cameras track helmet, vest, and glove compliance in real time — triggering alerts for violations instantly.",
    },
    {
        company: "Escorts Group",
        industry: "Railway / Industrial",
        result: "Zero missed defects",
        desc: "End-to-end IoT-driven quality management for railway component manufacturing. AI vision systems inspect brake components and coupling assemblies with 100% coverage at production speed.",
    },
    {
        company: "Smarter Energies",
        industry: "Energy / Utilities",
        result: "40% less downtime · 25% cost reduction",
        desc: "Predictive maintenance AI monitoring 200+ industrial assets. ML models analyze vibration, temperature, and pressure data to predict failures 48 hours in advance — enabling planned interventions.",
    },
    {
        company: "Mahindra",
        industry: "Automotive Manufacturing",
        result: "Driver safety AI deployed",
        desc: "In-vehicle AI system for driver behavior monitoring — detecting fatigue, distraction, and harsh driving patterns in real time for fleet safety and insurance optimization.",
    },
];

const TECH_STACK = [
    { category: "Vision AI", items: ["YOLOv8", "OpenCV", "TensorRT", "NVIDIA Jetson"] },
    { category: "IoT & Edge", items: ["MQTT", "OPC-UA", "AWS IoT", "Azure IoT Edge"] },
    { category: "Digital Twin", items: ["Unity 3D", "NVIDIA Omniverse", "Azure DT", "DTDL"] },
    { category: "Data Platform", items: ["Apache Kafka", "InfluxDB", "Spark", "Databricks"] },
    { category: "Integration", items: ["SCADA", "SAP PM", "OSIsoft PI", "Ignition"] },
    { category: "MLOps", items: ["MLflow", "Kubeflow", "Evidently AI", "Weights & Biases"] },
];

export default function ManufacturingPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div style={{ background: "#020b14", minHeight: "100vh" }}>
            <Navbar />
            {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}

            {/* Hero */}
            <section className="relative overflow-hidden" style={{ paddingTop: "82px" }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: "linear-gradient(rgba(34,197,94,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(34,197,94,0.02) 1px,transparent 1px)",
                    backgroundSize: "60px 60px"
                }} />
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle,rgba(245,158,11,0.07) 0%,transparent 65%)" }} />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle,rgba(34,197,94,0.06) 0%,transparent 65%)" }} />

                <div className="w-[90%] mx-auto py-24 lg:py-32 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border mb-6"
                                    style={{ background: "rgba(245,158,11,0.1)", borderColor: "rgba(245,158,11,0.3)", color: "#fbbf24" }}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                    Industry 4.0 · Smart Factory · Oil & Gas
                                </span>
                            </motion.div>
                            <motion.h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-[1.1] tracking-tight"
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                                AI for Manufacturing{" "}
                                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#f59e0b,#fbbf24,#fde68a)" }}>
                                    & Industry 4.0
                                </span>
                            </motion.h1>
                            <motion.p className="text-lg text-gray-300 mt-5 leading-relaxed"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                From smart factories to fully autonomous dark factories — we bring AI-driven quality control, predictive maintenance, and intelligent production to manufacturing and energy industries.
                            </motion.p>
                            <motion.div className="flex flex-col sm:flex-row gap-3 mt-8"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                <motion.button onClick={() => setIsModalOpen(true)}
                                    className="px-7 py-3.5 rounded-xl font-bold text-white"
                                    style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)", boxShadow: "0 0 28px rgba(245,158,11,0.25)" }}
                                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                                    Get Industry Assessment
                                </motion.button>
                                <Link href="/projects">
                                    <motion.div className="px-7 py-3.5 rounded-xl font-semibold text-gray-300 border cursor-pointer"
                                        style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
                                        whileHover={{ borderColor: "rgba(245,158,11,0.4)", color: "#fff" }}>
                                        View Case Studies
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </div>
                        {/* Stats */}
                        <motion.div className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                            {[
                                { v: "40%", l: "Downtime Reduction", c: "#f59e0b" },
                                { v: "25%", l: "Cost Savings", c: "#22c55e" },
                                { v: "99.2%", l: "Defect Detection", c: "#3b82f6" },
                                { v: "72h+", l: "Failure Prediction Lead Time", c: "#8b5cf6" },
                            ].map((s, i) => (
                                <motion.div key={s.l} className="p-5 rounded-2xl border text-center"
                                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                                    whileHover={{ scale: 1.04, borderColor: `${s.c}40` }}>
                                    <div className="text-3xl font-extrabold text-transparent bg-clip-text"
                                        style={{ backgroundImage: `linear-gradient(135deg,${s.c},${s.c}cc)` }}>{s.v}</div>
                                    <div className="text-xs text-gray-400 mt-1 leading-tight">{s.l}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Smart Factory */}
            <section className="w-[90%] mx-auto py-20">
                <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4"
                        style={{ background: "rgba(34,197,94,0.08)", borderColor: "rgba(34,197,94,0.25)", color: "#4ade80" }}>
                        Smart Factory
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">AI-Powered Smart Factory</h2>
                    <p className="text-gray-400 mt-3 max-w-2xl">
                        A production environment where machines, data, and intelligence work seamlessly together — increasing output, reducing waste, and improving quality automatically.
                    </p>
                </motion.div>
                <div className="grid sm:grid-cols-2 gap-6">
                    {SMART_FACTORY.map((s, i) => (
                        <motion.div key={s.title}
                            className="p-6 rounded-2xl border flex gap-5"
                            style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ borderColor: `${s.color}40`, y: -3 }}>
                            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 flex-wrap mb-2">
                                    <h3 className="font-bold text-white text-base">{s.title}</h3>
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${s.color}18`, color: s.color }}>{s.stats}</span>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Dark Factory */}
            <section style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-[90%] mx-auto py-20">
                    <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4"
                            style={{ background: "rgba(139,92,246,0.1)", borderColor: "rgba(139,92,246,0.3)", color: "#a78bfa" }}>
                            Dark Factory
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The Dark Factory</h2>
                        <p className="text-gray-400 mt-3 max-w-2xl">
                            A fully autonomous, lights-off production facility where AI runs every process — from intake to dispatch — with zero human operators on the floor.
                        </p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {DARK_FACTORY.map((d, i) => (
                            <motion.div key={d.title}
                                className="p-5 rounded-2xl border"
                                style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ borderColor: `${d.color}40`, y: -4 }}>
                                <div className="relative h-24 rounded-xl overflow-hidden mb-3">
                                    <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,11,20,0.5) 0%, transparent 60%)" }} />
                                </div>
                                <h3 className="font-bold text-white text-sm mb-2">{d.title}</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">{d.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-8 p-6 rounded-2xl border text-center"
                        style={{ background: "rgba(139,92,246,0.06)", borderColor: "rgba(139,92,246,0.2)" }}>
                        <p className="text-sm text-gray-300 max-w-2xl mx-auto">
                            <span className="font-bold text-white">The Dark Factory</span> represents the future of manufacturing — a self-operating, self-healing production system where AI handles everything from supply chain signals to finished goods, 24/7, without breaks.
                        </p>
                    </div>
                </div>
            </section>

            {/* Oil & Gas */}
            <section className="w-[90%] mx-auto py-20">
                <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4"
                        style={{ background: "rgba(20,184,166,0.1)", borderColor: "rgba(20,184,166,0.3)", color: "#2dd4bf" }}>
                        Oil & Gas
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">AI for Oil & Gas Operations</h2>
                    <p className="text-gray-400 mt-3 max-w-2xl">
                        Production optimization, pipeline safety, regulatory compliance, and operational intelligence — built for the unique demands of upstream, midstream, and downstream operations.
                    </p>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {OIL_GAS.map((o, i) => (
                        <motion.div key={o.title}
                            className="p-5 rounded-2xl border"
                            style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            whileHover={{ borderColor: "rgba(20,184,166,0.35)", y: -3 }}>
                            <div className="flex items-start justify-between mb-3">
                                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0"><img src={o.img} alt={o.title} className="w-full h-full object-cover" /></div>
                                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(20,184,166,0.1)", color: "#2dd4bf", border: "1px solid rgba(20,184,166,0.25)" }}>{o.tag}</span>
                            </div>
                            <h3 className="font-bold text-white text-sm mb-2">{o.title}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">{o.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Case Studies */}
            <section style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-[90%] mx-auto py-20">
                    <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Industry Case Studies</h2>
                        <p className="text-gray-400 mt-3">Delivered for India's top industrial enterprises.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {CASE_STUDIES.map((cs, i) => (
                            <motion.div key={cs.company}
                                className="p-6 rounded-2xl border"
                                style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}>
                                <div className="text-xs text-amber-400 font-semibold mb-1">{cs.industry}</div>
                                <h3 className="text-lg font-bold text-white mb-1">{cs.company}</h3>
                                <div className="text-xl font-extrabold text-transparent bg-clip-text mb-3"
                                    style={{ backgroundImage: "linear-gradient(135deg,#f59e0b,#fde68a)" }}>{cs.result}</div>
                                <p className="text-sm text-gray-400 leading-relaxed">{cs.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="w-[90%] mx-auto py-20">
                <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Technology Stack</h2>
                    <p className="text-gray-400 mt-3">Proven industrial-grade tools for OT/IT convergence.</p>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {TECH_STACK.map((t, i) => (
                        <motion.div key={t.category}
                            className="p-5 rounded-xl border"
                            style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}>
                            <div className="text-xs font-bold text-amber-400 mb-3 uppercase tracking-wider">{t.category}</div>
                            <div className="flex flex-wrap gap-1.5">
                                {t.items.map(item => (
                                    <span key={item} className="text-xs px-2 py-0.5 rounded-md text-gray-300"
                                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Transform Your Operations with AI</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Whether you're building your first smart factory or moving towards a fully autonomous dark factory — our engineers have done it before, at scale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <motion.button onClick={() => setIsModalOpen(true)}
                            className="px-8 py-3.5 rounded-xl font-bold text-white"
                            style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)", boxShadow: "0 0 28px rgba(245,158,11,0.25)" }}
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            Start Your AI Journey
                        </motion.button>
                        <a href="mailto:info@algoflowai.com">
                            <motion.div className="px-8 py-3.5 rounded-xl font-semibold text-gray-300 border"
                                style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
                                whileHover={{ borderColor: "rgba(245,158,11,0.4)", color: "#fff" }}>
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
