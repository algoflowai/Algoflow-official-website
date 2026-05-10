"use client";

import { motion } from "framer-motion";

const services = [
  {
    image: "/images/appdev.jpg",
    title: "Mobile App Development",
    description:
      "We create intuitive, user-friendly mobile apps that engage your audience and drive results, leveraging the latest technologies.",
    icon: null,
  },
  {
    image: "/images/webd.jpg",
    title: "Web Design & Development",
    description:
      "Your website is your number one marketing asset. We design and develop responsive websites that express your brand's identity.",
    icon: null,
  },
  {
    image: "/images/rnd.jpg",
    title: "Research & Development",
    description:
      "We push the boundaries of innovation with cutting-edge R&D, transforming ideas into reality through strategic and technical expertise.",
    icon: null,
  },
  {
    image: "/images/vlm.png",
    title: "Video Analysis with AI & Computer Vision",
    description:
      "Unlock insights from video data using AI and computer vision, enhancing decision-making, security, and customer experience.",
    icon: null,
  },
  {
    image: "/images/wfa.webp",
    title: "Workflow Automation & AI in Industries",
    description:
      "Streamline business operations and increase efficiency with AI-powered automation solutions tailored for your industry.",
    icon: null,
  },
  {
    image: "/images/nlp.webp",
    title: "Natural Language Processing & LLMs",
    description:
      "Transform how you interact with data through advanced NLP and large language models (LLMs), enabling smarter decision-making and automation.",
    icon: null,
  },
];

const cardVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.9,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export default function Services() {
  return (
    <section className="relative py-24 px-4 md:px-6 dark-section overflow-hidden">
      {/* Neural grid background */}
      <div className="absolute inset-0 neural-grid opacity-40 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(61,99,234,0.07) 0%, transparent 70%)' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-full" />
          </motion.div>
          <div className="ai-badge inline-flex mx-auto mb-4">
            <span className="ai-badge-dot"></span>
            What We Build
          </div>
          <h2
            className="gradient-text-hero text-4xl md:text-5xl font-extrabold mt-3"
            style={{ fontFamily: "Inter" }}
          >
            Services We Offer
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-base">
            Cutting-edge AI and software solutions engineered for the future
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative glass-card rounded-2xl overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 0 40px rgba(34,197,94,0.15), 0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Number badge */}
              <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <span className="text-green-400 text-xs font-bold">0{index + 1}</span>
              </div>

              {/* Gradient border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.05) 0%, transparent 60%)' }}
              />

              <div className="relative z-10">
                {/* Image with overlay */}
                <motion.div
                  className="h-48 overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent opacity-80" />
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3
                    className="mb-3 text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300"
                  >
                    {service.title}
                  </motion.h3>

                  {/* Animated underline */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-[#22c55e] to-transparent rounded-full mb-3"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  />

                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
