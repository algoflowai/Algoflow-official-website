"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    id: 1,
    src: "/images/drdo.avif",
    alt: "DRDO Logo",
    name: "DRDO",
    since: "2019",
  },
  {
    id: 2,
    src: "/images/ntpc.svg",
    alt: "NTPC Logo",
    name: "NTPC",
    since: "2020",
  },
  {
    id: 3,
    src: "/images/parkey.png",
    alt: "Parkkey Logo",
    name: "Parkkey India",
    since: "2021",
  },
  {
    id: 4,
    src: "/images/idylll2.webp",
    alt: "Idylll Logo",
    name: "Idylll Restaurants",
    since: "2020",
  },
  {
    id: 5,
    src: "/images/turbo.png",
    alt: "TurboTreats Logo",
    name: "TurboTreats RMS",
    since: "2022",
  },
  {
    id: 6,
    src: "/images/bishop.png",
    alt: "Bishops Logo",
    name: "Bishops Waltham",
    since: "2021",
  },
];

export default function Clients() {
  return (
    <motion.section
      className="w-full bg-white font-Inter text-black py-20 px-6 md:px-10 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with animation */}
        <motion.div
          className="text-center mb-14"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] rounded-full" />
          </motion.div>
          <motion.h3
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We Are Working With
          </motion.h3>
          <motion.p
            className="text-gray-500 max-w-xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Trusted by industry leaders and innovative organizations worldwide
          </motion.p>
        </motion.div>

        {/* Animated grid container */}
        <motion.div
          className="max-w-6xl mx-auto bg-gradient-to-br from-[#F9FAFB] to-[#F0FDF4] border border-[#E5E7EB] rounded-3xl p-8 md:p-10 shadow-xl"
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                className="relative group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Main card */}
                <motion.div
                  className="bg-white h-48 rounded-2xl flex flex-col items-center justify-center shadow-sm border border-gray-200 p-6 relative overflow-hidden hover:border-[#4ed35e] transition-colors"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Verified badge with handshake icon */}
                  <motion.div
                    className="absolute top-3 right-3 bg-gray-100 p-2 rounded-full z-10 flex items-center justify-center shadow-md border border-gray-200"
                    initial={{ scale: 0, rotate: -30 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    title={`Partner since ${logo.since}`}
                  >
                    <Image
                      src="/icons/handshake.png"
                      alt="Handshake"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Gradient overlay on hover */}
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-[#4ed35e]/5 to-[#1b6f08]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Logo with subtle float animation */}
                  <motion.div
                    className="flex-grow flex items-center justify-center w-full"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                      style={{
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                      }}
                    />
                  </motion.div>

                  {/* Client info */}
                  <div className="mt-4 text-center">
                    <motion.p
                      className="text-base font-bold text-gray-800 relative inline-block"
                      whileHover={{ color: "#1b6f08" }}
                    >
                      {logo.name}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.p>
                    <motion.p
                      className="text-xs text-gray-500 mt-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      Since {logo.since}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating background elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-4 h-4 bg-[#4ed35e] rounded-full opacity-10"
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-6 h-6 bg-[#3D63EA] rounded-full opacity-10"
          animate={{
            y: [15, -15, 15],
            x: [5, -5, 5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    </motion.section>
  );
}