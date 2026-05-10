"use client";

import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LOCATIONS = [
    { name: "India", coordinates: [78.96, 20.59], label: "Headquarters" },
    { name: "UAE", coordinates: [53.85, 23.42], label: "Middle East Hub" },
    { name: "United Kingdom", coordinates: [-3.44, 55.38], label: "Europe Office" },
    { name: "USA", coordinates: [-95.71, 37.09], label: "North America" },
    { name: "Malaysia", coordinates: [109.7, 4.21], label: "Southeast Asia" },
    { name: "Indonesia", coordinates: [113.92, -0.79], label: "APAC" },
];

const STATS = [
    { value: "6+", label: "Countries Served" },
    { value: "50+", label: "Global Clients" },
    { value: "4", label: "Continents" },
    { value: "24/7", label: "Global Support" },
];

export default function GlobalPresence() {
    return (
        <section className="py-20 relative overflow-hidden" style={{ background: "var(--background)" }}>
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
                    style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }} />
            </div>

            <div className="w-[90%] mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4"
                        style={{ background: "rgba(34,197,94,0.1)", borderColor: "rgba(34,197,94,0.3)", color: "#22c55e" }}>
                        Global Reach
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
                        Clients Trust Us <span className="text-green-500">Worldwide</span>
                    </h2>
                    <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                        From India's national digital missions to the UAE's smart city projects, UK enterprises, and Silicon Valley startups — AlgoFlow AI delivers across borders, time zones, and industries.
                    </p>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {STATS.map((s) => (
                        <div key={s.label} className="text-center py-5 rounded-2xl border"
                            style={{ background: "rgba(34,197,94,0.05)", borderColor: "rgba(34,197,94,0.15)" }}>
                            <div className="text-2xl sm:text-3xl font-extrabold text-green-500 mb-1">{s.value}</div>
                            <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>{s.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Map */}
                <motion.div
                    className="relative rounded-3xl overflow-hidden border"
                    style={{ borderColor: "rgba(34,197,94,0.12)", background: "rgba(5,13,26,0.6)" }}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    <ComposableMap
                        projection="geoMercator"
                        projectionConfig={{ scale: 140, center: [20, 10] }}
                        style={{ width: "100%", height: "auto" }}
                        viewBox="0 0 800 400"
                    >
                        <defs>
                            <clipPath id="logoClip">
                                <circle cx={0} cy={0} r={8} />
                            </clipPath>
                        </defs>
                        <Geographies geography={GEO_URL}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="rgba(34,197,94,0.08)"
                                        stroke="rgba(34,197,94,0.18)"
                                        strokeWidth={0.5}
                                        style={{
                                            default: { outline: "none" },
                                            hover: { fill: "rgba(34,197,94,0.18)", outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                ))
                            }
                        </Geographies>

                        {LOCATIONS.map((loc, i) => (
                            <Marker key={loc.name} coordinates={loc.coordinates}>
                                {/* Pulse ring */}
                                <circle r={14} fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.3)" strokeWidth={1}>
                                    <animate attributeName="r" values="12;20;12" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                                </circle>
                                {/* Logo badge */}
                                <circle r={11} fill="#0d1829" stroke="#22c55e" strokeWidth={1.5} />
                                <image
                                    href="/images/algoflow_logo.png"
                                    x={-8}
                                    y={-8}
                                    width={16}
                                    height={16}
                                    clipPath="url(#logoClip)"
                                />
                                {/* Label */}
                                <text
                                    textAnchor="middle"
                                    y={20}
                                    fontSize={7}
                                    fontWeight="600"
                                    fill="rgba(255,255,255,0.75)"
                                    style={{ fontFamily: "Inter, sans-serif" }}
                                >
                                    {loc.name}
                                </text>
                            </Marker>
                        ))}
                    </ComposableMap>

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl"
                        style={{ background: "rgba(5,13,26,0.85)", border: "1px solid rgba(34,197,94,0.2)", backdropFilter: "blur(8px)" }}>
                        <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0"
                            style={{ background: "#0d1829", border: "1.5px solid #22c55e" }}>
                            <img src="/images/algoflow_logo.png" alt="AlgoFlow AI" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[10px] font-medium" style={{ color: "var(--text-secondary)" }}>AlgoFlow AI Presence</span>
                    </div>
                </motion.div>

                {/* Location pills */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mt-8"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {LOCATIONS.map((loc) => (
                        <div key={loc.name}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
                            style={{ background: "rgba(34,197,94,0.06)", borderColor: "rgba(34,197,94,0.2)", color: "var(--text-secondary)" }}>
                            <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0"
                                style={{ background: "#0d1829", border: "1px solid #22c55e" }}>
                                <img src="/images/algoflow_logo.png" alt="AlgoFlow AI" className="w-full h-full object-contain" />
                            </span>
                            <span>{loc.name}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e" }}>
                                {loc.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
