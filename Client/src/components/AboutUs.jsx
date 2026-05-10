"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "5+", label: "Years of Excellence" },
    { value: "30+", label: "Expert Engineers" },
    { value: "10+", label: "Industries Served" },
];

export default function AboutUs() {
    return (
        <>
            <motion.section
                className="flex flex-col md:flex-row items-center md:justify-center justify-between gap-7 p-8 bg-[var(--background)] font-Inter mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="md:w-[535px] md:h-[420px] mb-8 md:mb-0 flex gap-8 flex-col">
                    <motion.div
                        className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />

                    <motion.h2
                        className="text-2xl md:text-[35px] font-normal mb-4 text-[var(--text-primary)] leading-[1.5]"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Why Leading Companies Trust Us to Develop Software<br className='hidden md:block' />
                        <motion.span
                            className="font-bold leading-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="mb-4 text-[var(--text-secondary)]"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        At Algoflow AI, we are passionate about creating intelligent solutions that help businesses thrive in an increasingly digital world. With a strong foundation in AI services, software development, and consulting, we specialize in crafting innovative, scalable products designed to address real-world challenges.
                    </motion.p>

                    <motion.a
                        href="#"
                        className="text-green-600 font-medium flex items-center gap-2 group w-fit"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ x: 5 }}
                    >
                        See More Information
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <IconArrowRight className="w-5 h-5 text-green-600" />
                        </motion.span>
                    </motion.a>
                </div>

                <motion.div
                    className="md:w-1/2 flex justify-center relative"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="md:w-[601px] md:h-[460px] flex items-center justify-center relative">
                        <Image
                            src="/images/Abou-us-Video.png"
                            alt="About Algoflow AI Company Video"
                            width={601}
                            height={460}
                            className="object-cover rounded-2xl"
                        />
                        {/* Subtle glow border */}
                        <div className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{ boxShadow: 'inset 0 0 0 1px rgba(34,197,94,0.15), 0 20px 60px rgba(0,0,0,0.08)' }}
                        />
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                                    <motion.div
                                        className="w-12 h-12 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center pulse-glow-anim"
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="white"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Stats Row */}
            <motion.div
                className="bg-[var(--surface)] border-y border-[var(--border)] py-10 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="stat-card text-center p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm hover:shadow-md hover:border-green-400 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -4 }}
                        >
                            <div className="text-3xl md:text-4xl font-extrabold gradient-text leading-tight">{stat.value}</div>
                            <div className="text-gray-500 text-sm mt-1 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
