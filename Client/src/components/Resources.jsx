"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { blogs } from "../data/blogs";

export default function FeaturedResources() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardHover = {
    y: -5,
    boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  };

  const imageHover = {
    scale: 1.03,
    transition: { duration: 0.4 },
  };

  const arrowHover = {
    x: 5,
    transition: { type: "spring", stiffness: 400 },
  };

  return (
    <motion.section
      className="container mx-auto px-4 py-16 font-Inter"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          className="flex justify-center mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] rounded-full" />
        </motion.div>

        <motion.h2
          className="text-2xl md:text-3xl font-medium text-gray-800 mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Featured
        </motion.h2>
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Resources
        </motion.h1>
      </div>

      {/* Resources carousel */}
      <div className="relative">
        <motion.div
          className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory px-4 -mx-4 scrollbar-hide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          {blogs.map((resource) => (
            <motion.div
              key={resource.id}
              className="flex-shrink-0 w-[300px] snap-start bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden border border-gray-100 transition-all"
              variants={item}
              whileHover={cardHover}
            >
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={imageHover}
              >
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover"
                  priority={resource.id <= 2} // Only prioritize first 2 images
                />
              </motion.div>

              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-lg text-gray-900 leading-tight">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {resource.excerpt}
                </p>
                <Link href={`/blog/${resource.id}`}>
                  <motion.div
                    className="inline-flex items-center text-green-600 font-medium text-sm gap-1 group cursor-pointer"
                    whileHover={arrowHover}
                  >
                    Read more
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute left-10 top-1/4 w-4 h-4 rounded-full bg-green-500 opacity-10"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.section>
  );
}
