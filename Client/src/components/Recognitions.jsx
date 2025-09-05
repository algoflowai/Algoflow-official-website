"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const technologies = [
  {
    name: "MCA",
    image: "/images/mca.png",
    description: "Ministry of Corporate Affairs Registered",
  },
  {
    name: "DPIIT",
    image: "/images/dpiit.png",
    description: "Department for Promotion of Industry and Internal Trade",
  },
  {
    name: "GEM",
    image: "/images/gem.webp",
    description: "Government e-Marketplace Verified Seller",
  },
  {
    name: "MSME",
    image: "/images/mame2.png",
    description: "Micro, Small & Medium Enterprises Registered",
  },
];

export default function Recognitions() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <motion.section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center mb-3"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>
          </motion.div>
          <motion.h3
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We’re Recognized By
          </motion.h3>
          <motion.p
            className="text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Trusted by Government Bodies and Industry Leaders
          </motion.p>
        </motion.div>

        {/* Animated Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="h-48 perspective-1000"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
                animate={{ rotateY: hoveredCard === index ? 180 : 0 }}
              >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-md flex items-center justify-center p-6">
                  <div className="relative w-full h-24">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#4ed35e] to-[#1b6f08] rounded-xl shadow-lg rotate-y-180 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">
                      {tech.name}
                    </h4>
                    <p className="text-white/90 text-sm">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#4ed35e] rounded-full opacity-70"
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-[#3D63EA] rounded-full opacity-70"
          animate={{
            y: [15, -15, 15],
            x: [5, -5, 5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </motion.section>
  );
}
