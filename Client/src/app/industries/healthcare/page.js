"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ContactPopup from "../../../components/ContactPopup";
import Link from "next/link";

const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

// ─── ABDM MODULES ─────────────────────────────────────────────────────────────

const ABDM_MODULES = [
    {
        id: "M1",
        title: "M1 — Health ID & ABHA",
        subtitle: "Ayushman Bharat Health Account",
        img: "/images/resources1.png",
        color: "#22c55e",
        points: [
            "14-digit unique health identifier for every Indian citizen",
            "Linked to Aadhaar, mobile, or driving license",
            "Acts as a universal patient identity across all hospitals, labs, and pharmacies",
            "Enables consent-based health record sharing across providers",
            "AlgoFlow integrates ABHA creation, linking, and verification APIs into hospital/clinic workflows",
        ],
        tech: ["NHA ABHA APIs", "Aadhaar e-KYC", "OTP Verification", "OAuth2"],
    },
    {
        id: "M2",
        title: "M2 — HIU / HIP Integration",
        subtitle: "Health Information Exchange",
        img: "/images/resources2.png",
        color: "#3b82f6",
        points: [
            "HIP (Health Information Provider): Hospitals, labs, pharmacies that generate records",
            "HIU (Health Information User): Entities requesting patient records (with consent)",
            "Consent Manager: Patient controls who sees what, for how long",
            "FHIR R4 standard for structured health data exchange",
            "AlgoFlow builds HIP connectors for HMS/EMR systems and HIU modules for insurers, researchers, and referring doctors",
            "Consent artefacts: time-bound, revocable, purpose-specific data access grants",
        ],
        tech: ["FHIR R4", "ABDM Gateway", "NDHM Sandbox", "X.509 Certificates"],
    },
    {
        id: "M3",
        title: "M3 — HPR & HFR",
        subtitle: "Healthcare Professionals & Facility Registry",
        img: "/images/resources3.png",
        color: "#8b5cf6",
        points: [
            "HPRID: Unique ID for every doctor, nurse, allied health professional in India",
            "HFR: Unique registration for every hospital, clinic, lab, and pharmacy",
            "Enables verified provider directories for patient discovery and referrals",
            "AlgoFlow integrates HPR/HFR verification into telemedicine and appointment systems",
            "Auto-populates prescriptions with verified physician credentials",
        ],
        tech: ["NMC API", "HFR Registry API", "DigiLocker", "NHA Sandbox"],
    },
];

const PHR_FEATURES = [
    {
        img: "/images/resources4.png",
        title: "Longitudinal Patient Records",
        desc: "Lifetime health record owned by the patient — aggregating discharge summaries, prescriptions, lab reports, and imaging from all providers.",
    },
    {
        img: "/images/secureapp.jpeg",
        title: "Patient-Controlled Consent",
        desc: "Fine-grained consent framework: patients grant purpose-specific, time-bound access. Full audit trail of every access event.",
    },
    {
        img: "/images/nlp.webp",
        title: "FHIR-Based Interoperability",
        desc: "HL7 FHIR R4 resources for structured data. Supports MedicationRequest, DiagnosticReport, Observation, AllergyIntolerance, and Encounter resources.",
    },
    {
        img: "/images/appdev.jpg",
        title: "PHR App Integration",
        desc: "Integration with ABDM-certified PHR apps (Eka Care, Bajaj Health, ABHA app). Patients manage their records from mobile.",
    },
];

const CLINICAL_AI = [
    {
        img: "/images/caseStudy1.jpeg",
        title: "Symptom-Based Patient Routing",
        desc: "NLP models analyze patient-reported symptoms and route to appropriate specialists, departments, or urgency levels — reducing triage time from 15 min to under 2 min.",
        result: "75% faster triage",
        color: "#ec4899",
    },
    {
        img: "/images/resources5.png",
        title: "AI-Assisted Prescriptions",
        desc: "Clinical AI suggests evidence-based treatments, flags drug interactions, checks allergy contraindications, and auto-populates ABDM-compliant prescription formats.",
        result: "60% reduction in errors",
        color: "#3b82f6",
    },
    {
        img: "/images/caseStudy2.jpeg",
        title: "OPD / IPD Management",
        desc: "Intelligent appointment scheduling, bed allocation, discharge prediction, and waitlist optimization for outpatient and inpatient services.",
        result: "40% OPD reduction",
        color: "#22c55e",
    },
    {
        img: "/images/nlp.webp",
        title: "Clinical Analytics Dashboard",
        desc: "Real-time hospital KPIs: bed occupancy, average LOS, readmission rates, revenue per specialty — with AI-driven alerts and anomaly detection.",
        result: "Live insights 24/7",
        color: "#f59e0b",
    },
    {
        img: "/images/vision.jpeg",
        title: "Radiology & Pathology AI",
        desc: "Computer vision models for X-ray, CT, MRI interpretation — screening for pneumonia, fractures, tumor markers. Auto-generates preliminary radiologist reports.",
        result: "15× faster reads",
        color: "#8b5cf6",
    },
    {
        img: "/images/caseStudy3.jpeg",
        title: "Remote Patient Monitoring",
        desc: "IoT health device integration (oximeters, glucometers, BP monitors, ECG patches) with AI-driven alerts for abnormal readings and automated care escalation.",
        result: "30% fewer readmissions",
        color: "#14b8a6",
    },
];

const ASWRA_FEATURES = [
    "Continuous 24/7 vital monitoring via wearable ring — SpO2, heart rate, HRV, temperature, sleep quality",
    "AI algorithms detecting early warning signs 60–70% earlier than traditional check-ups",
    "ABDM-integrated: readings sync automatically to patient's PHR with ABHA consent",
    "Chronic disease management for diabetes, hypertension, cardiac conditions",
    "Real-time alerts to physicians and family caregivers when readings breach thresholds",
    "Population health analytics — aggregated, de-identified data for hospital management",
];

const CASE_STUDIES = [
    {
        company: "Sahai Hospitals",
        industry: "Multi-specialty Hospital",
        result: "40% OPD reduction · AI prescriptions live",
        desc: "Full clinical AI deployment across Sahai hospital network: patient triage agents, AI prescription assistance, ABDM/ABHA integration, and OPD workflow optimization. Reduced average OPD wait time from 45 minutes to under 12 minutes.",
        tags: ["ABDM", "Clinical AI", "OPD Automation"],
    },
    {
        company: "ASWRA Dubai",
        industry: "Digital Health / Wearables",
        result: "60–70% earlier disease detection",
        desc: "AI-powered health ring platform for continuous vital monitoring. AlgoFlow built the AI inference layer, anomaly detection algorithms, and the ABDM-compatible PHR sync pipeline. Deployed across UAE with plans for India rollout.",
        tags: ["Wearables", "Remote Monitoring", "PHR Integration"],
    },
    {
        company: "Bishops Pharmacy UK",
        industry: "Pharmacy / MedTech",
        result: "Automated dispensing & compliance",
        desc: "AI-driven pharmacy management system with prescription validation, drug interaction checking, inventory optimization, and UK NHS API integration. Reduced dispensing errors by 85%.",
        tags: ["Pharmacy AI", "NHS Integration", "Compliance"],
    },
];

const COMPLIANCE = [
    { name: "ABDM / NHA Compliant", desc: "Full alignment with Ayushman Bharat Digital Mission architecture and National Health Authority APIs" },
    { name: "HIPAA Ready", desc: "US healthcare data privacy standards — PHI encryption, access controls, BAA compliance" },
    { name: "HL7 FHIR R4", desc: "International standard for electronic health record interoperability" },
    { name: "DPDP Act 2023", desc: "India's Digital Personal Data Protection Act compliance for patient data" },
    { name: "ISO 27001", desc: "Information security management for clinical data systems" },
    { name: "Telemedicine Guidelines", desc: "MCI telemedicine practice guidelines compliance for remote consultation platforms" },
];

export default function HealthcarePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeModule, setActiveModule] = useState("M1");

    return (
        <div style={{ background: "#020b14", minHeight: "100vh" }}>
            <Navbar />
            {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}

            {/* Hero */}
            <section className="relative overflow-hidden" style={{ paddingTop: "82px" }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: "linear-gradient(rgba(236,72,153,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(236,72,153,0.02) 1px,transparent 1px)",
                    backgroundSize: "60px 60px"
                }} />
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle,rgba(236,72,153,0.07) 0%,transparent 65%)" }} />
                <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle,rgba(34,197,94,0.05) 0%,transparent 65%)" }} />

                <div className="w-[90%] mx-auto py-24 lg:py-32 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border mb-6"
                                    style={{ background: "rgba(236,72,153,0.1)", borderColor: "rgba(236,72,153,0.3)", color: "#f472b6" }}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                                    Healthcare AI · ABDM · Digital Health
                                </span>
                            </motion.div>
                            <motion.h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-[1.1] tracking-tight"
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                                AI for Healthcare{" "}
                                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#ec4899,#f472b6,#fbcfe8)" }}>
                                    & ABDM
                                </span>
                                {" "}Integration
                            </motion.h1>
                            <motion.p className="text-lg text-gray-300 mt-5 leading-relaxed"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                Clinical AI systems, ABDM-compliant health record infrastructure, and intelligent hospital management — built on India's national digital health mission standards (M1, M2, M3) with FHIR-based PHR integration.
                            </motion.p>
                            <motion.div className="flex flex-col sm:flex-row gap-3 mt-8"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                <motion.button onClick={() => setIsModalOpen(true)}
                                    className="px-7 py-3.5 rounded-xl font-bold text-white"
                                    style={{ background: "linear-gradient(135deg,#ec4899,#db2777)", boxShadow: "0 0 28px rgba(236,72,153,0.25)" }}
                                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                                    Get Healthcare AI Assessment
                                </motion.button>
                                <Link href="/projects">
                                    <motion.div className="px-7 py-3.5 rounded-xl font-semibold text-gray-300 border cursor-pointer"
                                        style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
                                        whileHover={{ borderColor: "rgba(236,72,153,0.4)", color: "#fff" }}>
                                        View Case Studies
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Stats */}
                        <motion.div className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                            {[
                                { v: "40%", l: "OPD Wait Reduction", c: "#ec4899" },
                                { v: "60–70%", l: "Earlier Disease Detection", c: "#22c55e" },
                                { v: "85%", l: "Fewer Dispensing Errors", c: "#3b82f6" },
                                { v: "ABDM", l: "Certified Integration", c: "#8b5cf6" },
                            ].map((s, i) => (
                                <motion.div key={s.l} className="p-5 rounded-2xl border text-center"
                                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                                    whileHover={{ scale: 1.04, borderColor: `${s.c}40` }}>
                                    <div className="text-2xl font-extrabold text-transparent bg-clip-text"
                                        style={{ backgroundImage: `linear-gradient(135deg,${s.c},${s.c}cc)` }}>{s.v}</div>
                                    <div className="text-xs text-gray-400 mt-1 leading-tight">{s.l}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ABDM Modules */}
            <section className="w-[90%] mx-auto py-20">
                <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4"
                        style={{ background: "rgba(34,197,94,0.08)", borderColor: "rgba(34,197,94,0.25)", color: "#4ade80" }}>
                        Ayushman Bharat Digital Mission
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">ABDM Integration — M1, M2, M3</h2>
                    <p className="text-gray-400 mt-3 max-w-2xl">
                        India's national digital health ecosystem, built on three foundational pillars. AlgoFlow has deep expertise in integrating healthcare software with all three ABDM modules.
                    </p>
                </motion.div>

                {/* Module tabs */}
                <div className="flex gap-3 mb-8 flex-wrap">
                    {ABDM_MODULES.map(m => (
                        <button key={m.id}
                            onClick={() => setActiveModule(m.id)}
                            className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all border"
                            style={{
                                background: activeModule === m.id ? `${m.color}18` : "rgba(255,255,255,0.025)",
                                borderColor: activeModule === m.id ? `${m.color}50` : "rgba(255,255,255,0.07)",
                                color: activeModule === m.id ? m.color : "#94a3b8",
                            }}>
                            {m.id}
                        </button>
                    ))}
                </div>

                {ABDM_MODULES.filter(m => m.id === activeModule).map(m => (
                    <motion.div key={m.id}
                        className="p-8 rounded-2xl border"
                        style={{ background: `${m.color}08`, borderColor: `${m.color}25` }}
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}>
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                                <img src={m.img} alt={m.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-extrabold text-white mb-1">{m.title}</h3>
                                <div className="text-sm font-medium mb-4" style={{ color: m.color }}>{m.subtitle}</div>
                                <ul className="space-y-2 mb-6">
                                    {m.points.map((p, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: m.color }} />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {m.tech.map(t => (
                                        <span key={t} className="text-xs px-2.5 py-1 rounded-md font-medium"
                                            style={{ background: `${m.color}15`, color: m.color, border: `1px solid ${m.color}30` }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* PHR Section */}
            <section style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-[90%] mx-auto py-20">
                    <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4"
                            style={{ background: "rgba(59,130,246,0.1)", borderColor: "rgba(59,130,246,0.3)", color: "#60a5fa" }}>
                            Personal Health Records
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">PHR — Patient Health Records</h2>
                        <p className="text-gray-400 mt-3 max-w-2xl">
                            Longitudinal, patient-owned health records built on FHIR R4 — the standard powering interoperability between India's 500,000+ health facilities.
                        </p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {PHR_FEATURES.map((f, i) => (
                            <motion.div key={f.title}
                                className="p-6 rounded-2xl border flex gap-4"
                                style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ borderColor: "rgba(59,130,246,0.35)" }}>
                                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={f.img} alt={f.title} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                                    <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clinical AI */}
            <section className="w-[90%] mx-auto py-20">
                <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Clinical AI Capabilities</h2>
                    <p className="text-gray-400 mt-3 max-w-2xl">End-to-end AI for the clinical and operational layers of modern hospitals.</p>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {CLINICAL_AI.map((c, i) => (
                        <motion.div key={c.title}
                            className="p-6 rounded-2xl border"
                            style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            whileHover={{ borderColor: `${c.color}40`, y: -3 }}>
                            <div className="relative h-24 rounded-xl overflow-hidden mb-3">
                                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,11,20,0.6) 0%, transparent 60%)" }} />
                                <span className="absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${c.color}20`, color: c.color, border: `1px solid ${c.color}30`, backdropFilter: "blur(4px)" }}>{c.result}</span>
                            </div>
                            <h3 className="font-bold text-white text-sm mb-2">{c.title}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ASWRA Section */}
            <section style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-[90%] mx-auto py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-6"
                                style={{ background: "rgba(20,184,166,0.1)", borderColor: "rgba(20,184,166,0.3)", color: "#2dd4bf" }}>
                                Case Study · ASWRA Dubai
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                                AI Health Ring — Remote Vital Monitoring
                            </h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                AlgoFlow built the complete AI platform for ASWRA's health ring — a wearable that continuously monitors vitals and uses AI to detect disease indicators 60–70% earlier than traditional clinical check-ups.
                            </p>
                            <ul className="space-y-3">
                                {ASWRA_FEATURES.map((f, i) => (
                                    <motion.li key={i} className="flex items-start gap-2.5 text-sm text-gray-300"
                                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                        transition={{ delay: i * 0.07 }}>
                                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 bg-teal-400" />
                                        {f}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            {[
                                { img: "/images/resources1.png", title: "Health Ring", desc: "Continuous SpO2, HR, HRV, temperature monitoring" },
                                { img: "/images/aiAutomation.png", title: "AI Inference", desc: "On-device + cloud ML for anomaly detection" },
                                { img: "/images/nlp.webp", title: "ABDM Sync", desc: "FHIR-based PHR record sync with ABHA consent" },
                                { img: "/images/appdev.jpg", title: "Care App", desc: "Patient + physician dashboard with real-time alerts" },
                            ].map((c, i) => (
                                <motion.div key={c.title}
                                    className="p-4 rounded-2xl border"
                                    style={{ background: "rgba(20,184,166,0.05)", borderColor: "rgba(20,184,166,0.2)" }}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}>
                                    <div className="relative h-16 rounded-xl overflow-hidden mb-2">
                                        <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,11,20,0.5) 0%, transparent 60%)" }} />
                                    </div>
                                    <div className="text-sm font-bold text-white mb-1">{c.title}</div>
                                    <div className="text-xs text-gray-400 leading-relaxed">{c.desc}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="w-[90%] mx-auto py-20">
                <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Healthcare Deployments</h2>
                    <p className="text-gray-400 mt-3">Proven clinical AI from hospital floors to pharmacy counters.</p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-6">
                    {CASE_STUDIES.map((cs, i) => (
                        <motion.div key={cs.company}
                            className="p-6 rounded-2xl border flex flex-col"
                            style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}>
                            <div className="text-xs text-pink-400 font-semibold mb-1">{cs.industry}</div>
                            <h3 className="text-base font-bold text-white mb-1">{cs.company}</h3>
                            <div className="text-lg font-extrabold text-transparent bg-clip-text mb-3"
                                style={{ backgroundImage: "linear-gradient(135deg,#ec4899,#fbcfe8)" }}>{cs.result}</div>
                            <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">{cs.desc}</p>
                            <div className="flex flex-wrap gap-1.5">
                                {cs.tags.map(t => (
                                    <span key={t} className="text-xs px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", color: "#64748b" }}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Compliance */}
            <section style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-[90%] mx-auto py-20">
                    <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Compliance & Standards</h2>
                        <p className="text-gray-400 mt-3">Healthcare data demands the highest bar — we meet it.</p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {COMPLIANCE.map((c, i) => (
                            <motion.div key={c.name}
                                className="p-4 rounded-xl border flex gap-3"
                                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}>
                                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-1" />
                                <div>
                                    <div className="text-sm font-bold text-white">{c.name}</div>
                                    <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">{c.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Build the Future of Healthcare AI</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        From ABDM integration to full clinical AI deployment — our healthcare engineers bring deep domain expertise and regulatory know-how to every project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <motion.button onClick={() => setIsModalOpen(true)}
                            className="px-8 py-3.5 rounded-xl font-bold text-white"
                            style={{ background: "linear-gradient(135deg,#ec4899,#db2777)", boxShadow: "0 0 28px rgba(236,72,153,0.25)" }}
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            Talk to a Healthcare AI Expert
                        </motion.button>
                        <a href="mailto:info@algoflowai.com">
                            <motion.div className="px-8 py-3.5 rounded-xl font-semibold text-gray-300 border"
                                style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
                                whileHover={{ borderColor: "rgba(236,72,153,0.4)", color: "#fff" }}>
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
