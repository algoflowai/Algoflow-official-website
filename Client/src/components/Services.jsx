"use client";

import { motion } from "framer-motion";

const services = [
  {
    image: "/images/appdev.jpg",
    title: "Mobile App Development",
    description:
      "We create intuitive, user-friendly mobile apps that engage your audience and drive results, leveraging the latest technologies.",
  },
  {
    image: "/images/webd.jpg",
    title: "Web Design & Development",
    description:
      "Your website is your number one marketing asset. We design and develop responsive websites that express your brand's identity.",
  },
  {
    image: "/images/rnd.jpg",
    title: "Research & Development",
    description:
      "We push the boundaries of innovation with cutting-edge R&D, transforming ideas into reality through strategic and technical expertise.",
  },
  {
    image: "/images/vlm.png",
    title: "Video Analysis with AI & Computer Vision",
    description:
      "Unlock insights from video data using AI and computer vision, enhancing decision-making, security, and customer experience.",
  },
  {
    image: "/images/wfa.webp",
    title: "Workflow Automation & AI in Industries",
    description:
      "Streamline business operations and increase efficiency with AI-powered automation solutions tailored for your industry.",
  },
  {
    image: "/images/nlp.webp",
    title: "Natural Language Processing & LLMs",
    description:
      "Transform how you interact with data through advanced NLP and large language models (LLMs), enabling smarter decision-making and automation.",
  },
];

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Services() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          className="text-center mb-16"
          style={{
            fontFamily: "Inter",
            fontWeight: 800,
            fontSize: "35px",
            lineHeight: "55px",
            color: "#1A202C",
          }}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Services We Offer
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white border border-gray-200 p-6 h-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4ed35e]/10 to-[#1b6f08]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

              <div className="relative z-10">
                {/* Image with zoom effect */}
                <motion.div
                  className="h-48 overflow-hidden rounded-lg mb-5"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Title with underline animation */}
                <motion.h3
                  className="mb-3 text-xl font-bold text-gray-800 relative inline-block"
                  whileHover={{ color: "#1b6f08" }}
                >
                  {service.title}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h3>

                {/* Description with fade-in effect */}
                <motion.p
                  className="text-gray-600 text-sm leading-relaxed"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
