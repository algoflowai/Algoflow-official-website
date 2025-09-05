"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Assemble The Right Team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    number: 2,
    title: "Sprint Planning",
    description:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    number: 3,
    title: "Tech Architecture",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
  },
  {
    number: 4,
    title: "Standups & Weekly Demos",
    description:
      "Standups, weekly demos, and weekly releases make sure everyone is on the same page and can raise their concerns.",
  },
  {
    number: 5,
    title: "Code Reviews",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
  },
  {
    number: 6,
    title: "Iterative Delivery",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

export default function Development() {
  return (
    <motion.section
      className="py-16 px-4 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Our Development Process
      </h2>
      <motion.div
        className="relative mt-0"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated line */}
        <motion.div
          className="hidden lg:block absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] z-0"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />

        {/* Trophy icon with animation */}
        <motion.div
          className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10"
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
        >
          <div className="w-10 h-10 bg-white flex items-center justify-center">
            <Image
              src="/icons/Trophy.png"
              alt="Trophy Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`relative flex flex-col items-center ${
                index % 2 === 0
                  ? "lg:row-start-1"
                  : "lg:row-start-2 lg:mt-4 lg:ml-16"
              }`}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Connection line */}
              {index !== steps.length && (
                <motion.div
                  className="hidden lg:block absolute w-0.5 bg-gradient-to-b from-[#4ed35e] to-[#1b6f08]"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    [index % 2 === 0 ? "top" : "bottom"]: "100%",
                    height: "2.5rem",
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              )}

              {/* Step card */}
              <motion.div
                className="mt-2 pl-6 pr-6 pb-12 pt-6 rounded-2xl border border-gray-200 bg-white shadow-lg w-full max-w-xs text-left flex flex-col justify-between h-52"
                whileHover={{
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  borderColor: "#4ed35e",
                }}
              >
                <div className="flex items-center mb-3">
                  <motion.div
                    className="w-10 h-10 flex items-center justify-center mr-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="font-bold text-xl text-transparent bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] bg-clip-text">
                      #{step.number}
                    </span>
                  </motion.div>
                  <motion.h4
                    className="font-inter font-bold text-[16px] sm:text-[18px] leading-[22px] text-gray-800"
                    whileHover={{ color: "#1b6f08" }}
                  >
                    {step.title}
                  </motion.h4>
                </div>
                <motion.p
                  className="font-inter text-[14px] leading-[20px] text-gray-500"
                  whileHover={{ opacity: 1 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
