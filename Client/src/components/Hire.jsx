"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContactPopup from "./ContactPopup";

const Hire = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const baseText = "Get the Best Team to Streamline Your Business ";
  const words = ["Today!", "Efficiently!", "Quickly!", "Perfectly!"];

  useEffect(() => {
    const word = words[wordIndex];
    const timer = setTimeout(
      () => {
        if (!isDeleting && displayText === baseText + word) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && displayText === baseText) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setDisplayText((prev) =>
            isDeleting
              ? prev.slice(0, -1)
              : baseText +
                word.slice(0, displayText.length - baseText.length + 1)
          );
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [displayText, wordIndex, isDeleting]);

  const handleConnectClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Render ContactPopup conditionally */}
      {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}

      <section className="w-full py-16 bg-white font-Inter text-black flex justify-center items-center relative overflow-hidden">
        {/* Background blob */}
        <motion.div
          className="absolute top-[-100px] right-[-150px] w-[300px] h-[300px] bg-gradient-to-tr from-pink-300 to-orange-200 opacity-40 blur-3xl rounded-full"
          animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main container */}
        <motion.div
          className="relative z-10 w-[95%] max-w-[1230px] bg-gray-100 rounded-2xl border border-[#E7DAED] p-6 md:p-10 lg:p-20 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.8,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
        >
          {/* Text */}
          <div className="w-full lg:w-[60%] text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              {displayText}
              <span className="text-pink-500 ml-1 animate-pulse">|</span>
            </h1>
          </div>

          {/* Button */}
          <motion.div className="w-full lg:w-auto flex justify-center lg:justify-end relative">
            <motion.div
              className="absolute w-[280px] h-[65px] bg-gradient-to-r from-pink-400 to-orange-300 blur-xl rounded-full opacity-30"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <motion.button
              onClick={handleConnectClick} // Add click handler
              className="relative w-full sm:w-[262px] h-[57px] bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-[8px] shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              Connect With Us Now
            </motion.button>
          </motion.div>

          {/* Decorative image - hidden on mobile */}
          <motion.img
            src="/icons/Group 40.png"
            alt="Decorative Icon"
            className="absolute bottom-[-20px] right-[-20px] w-32 sm:w-40 lg:w-48 opacity-90 pointer-events-none hidden md:block"
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hire;
