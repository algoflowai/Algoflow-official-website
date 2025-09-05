"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const approaches = [
  {
    title: "Engineering-First Mindset",
    description:
      "We prioritize software architecture and clean code from the beginning. Our engineering-first approach ensures that performance, scalability, and maintainability are baked into every project.",
    icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
    color: "bg-black",
  },
  {
    title: "Clear Project Alignment",
    description:
      "We focus on building a shared understanding between product managers, developers, and stakeholders, ensuring everyone is aligned on goals, timelines, and expectations.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "bg-blue-500",
  },
  {
    title: "Proven Technical Expertise",
    description:
      "Our team brings deep knowledge of modern frameworks, cloud platforms, and DevOps practices to deliver robust and reliable software solutions.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "bg-pink-500",
  },
  {
    title: "Security & IP Protection",
    description:
      "We follow industry best practices for security and ensure that intellectual property and data are always protected through strong encryption and NDA policies.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    color: "bg-emerald-500",
  },
  {
    title: "Code Reviews & Best Practices",
    description:
      "All code is peer-reviewed to maintain quality, identify bugs early, and ensure adherence to industry standards and internal best practices.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    color: "bg-orange-500",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Rigorous QA and automated testing pipelines help us catch issues before production, ensuring stable and high-performing releases every time.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "bg-purple-500",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 60, opacity: 0, rotateX: 45, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8,
    },
  },
};

const hoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    rotateX: 5,
    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Reusable components
const Icon = ({ path, className = "w-6 h-6 text-white" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={path}
    />
  </svg>
);

const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full opacity-30 ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.3, 1],
      rotate: [0, 180, 360],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const ScrollIndicator = () => (
  <motion.div
    className="absolute top-8 right-8 w-1 h-20 bg-gradient-to-b from-transparent via-[#4ed35e] to-transparent rounded-full"
    initial={{ scaleY: 0 }}
    whileInView={{ scaleY: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  />
);

const AnimatedBackground = () => (
  <motion.div
    className="absolute inset-0"
    animate={{
      background: [
        "radial-gradient(circle at 20% 20%, rgba(78, 211, 94, 0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 20% 20%, rgba(78, 211, 94, 0.1) 0%, transparent 50%)",
      ],
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
  />
);

const Header = ({ y }) => (
  <motion.div
    className="text-center mb-12 md:mb-16 w-full relative z-10"
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ y }}
  >
    <motion.div
      className="flex items-center justify-center mb-3"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    >
      <motion.div
        className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"
        animate={{
          boxShadow: [
            "0 0 0 rgba(78, 211, 94, 0)",
            "0 0 20px rgba(78, 211, 94, 0.5)",
            "0 0 0 rgba(78, 211, 94, 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>

    <motion.h2
      className="text-2xl md:text-3xl font-bold mb-2 text-black"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      Our Software Development Approach
    </motion.h2>
  </motion.div>
);

const ApproachCard = ({ approach, index }) => (
  <motion.div
    className="bg-white/80 backdrop-blur-sm p-6 md:p-9 border border-[#E7DAED] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    variants={itemVariants}
    whileHover="hover"
  >
    <motion.div className="flex items-start gap-4" variants={hoverVariants}>
      <motion.div
        className={`flex-shrink-0 w-12 h-12 ${approach.color} rounded-lg flex items-center justify-center shadow-lg`}
        whileHover={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon path={approach.icon} />
      </motion.div>

      <div className="flex-1">
        <motion.h3
          className="text-lg md:text-xl font-semibold mb-2 text-black"
          whileHover={{
            color: "#4ed35e",
            x: 5,
            transition: { duration: 0.2 },
          }}
        >
          {approach.title}
        </motion.h3>
        <motion.p
          className="text-gray-600 text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {approach.description}
        </motion.p>
      </div>
    </motion.div>
  </motion.div>
);

const ScrollParticles = ({ scrollYProgress }) => (
  <>
    <motion.div
      className="absolute top-1/2 left-10 w-2 h-2 bg-[#4ed35e] rounded-full"
      style={{
        y: useTransform(scrollYProgress, [0, 1], [0, -100]),
        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
      }}
    />
    <motion.div
      className="absolute top-1/3 right-10 w-3 h-3 bg-blue-500 rounded-full"
      style={{
        y: useTransform(scrollYProgress, [0, 1], [0, 75]),
        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
      }}
    />
  </>
);

export default function DevelopmentApproach() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.95, 1, 1, 0.95]
  );

  return (
    <motion.div
      ref={ref}
      className="relative w-full mx-auto px-4 py-16 md:py-24 sm:px-6 lg:px-8 bg-[#F7F7FA] flex justify-center items-center flex-col font-inter overflow-hidden min-h-screen"
      style={{ opacity, scale }}
    >
      <ScrollIndicator />
      <AnimatedBackground />

      <Header y={y1} />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-4 relative z-10 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
        variants={containerVariants}
        style={{ y: y2 }}
      >
        {approaches.map((approach, index) => (
          <ApproachCard key={index} approach={approach} index={index} />
        ))}
      </motion.div>

      {/* Floating decorative elements */}
      <FloatingOrb className="hidden md:block left-1/4 top-1/3 w-4 h-4 bg-[#4ed35e]" />
      <FloatingOrb
        className="hidden md:block right-1/4 bottom-1/4 w-6 h-6 bg-blue-500"
        delay={0.5}
      />
      <FloatingOrb
        className="hidden md:block left-1/3 bottom-1/3 w-3 h-3 bg-purple-500"
        delay={1}
      />
      <FloatingOrb
        className="hidden md:block right-1/3 top-1/4 w-5 h-5 bg-pink-500"
        delay={1.5}
      />

      <ScrollParticles scrollYProgress={scrollYProgress} />
    </motion.div>
  );
}
