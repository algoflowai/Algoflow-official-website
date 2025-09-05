"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import ContactPopup from "./ContactPopup";
import Link from "next/link";

const backgroundImages = [
  "/images/bgAI.webp",
  "/images/bg1.webp",
  "/images/bg4.webp",
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const trustIndicatorVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Typing animation variants
const typingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const typingLetter = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const controls = useAnimation();

  const [
    { isModalOpen, currentBg, typingComplete, loopCount, animatedText },
    setState,
  ] = useState({
    isModalOpen: false,
    currentBg: 0,
    typingComplete: false,
    loopCount: 0,
    animatedText: "",
  });

  // Helper function to update state
  const updateState = (newState) => {
    setState((prev) => ({ ...prev, ...newState }));
  };

  // Update the state setters throughout the component
  const setIsModalOpen = (value) => updateState({ isModalOpen: value });
  const setCurrentBg = (value) => updateState({ currentBg: value });
  const setTypingComplete = (value) => updateState({ typingComplete: value });
  const setLoopCount = (value) => updateState({ loopCount: value });
  const setAnimatedText = (value) => updateState({ animatedText: value });

  const fullText = "Software—Powered By AlgoFlow AI...";

  // Function to render text with colored "Algo" and "Flow"
  const renderColoredText = (text) => {
    const parts = text.split("AlgoFlow");
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className="text-[#22c55e]">Algo</span>
          <span className="text-white">Flow</span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  useEffect(() => {
    const images = backgroundImages.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    // Ensure images stay loaded
    return () => {
      clearInterval(interval);
      images.forEach((img) => img.remove());
    };
  }, []);

  useEffect(() => {
    controls.start("visible");
    const timer = setTimeout(() => setTypingComplete(true), 3000);
    return () => clearTimeout(timer);
  }, [controls]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // Infinite typing animation for the specific line
  useEffect(() => {
    let timeout;
    const typeWriter = (text, i, fnCallback) => {
      if (i < text.length) {
        setAnimatedText(text.substring(0, i + 1));
        timeout = setTimeout(() => {
          typeWriter(text, i + 1, fnCallback);
        }, 50); // Typing speed
      } else if (typeof fnCallback === "function") {
        timeout = setTimeout(fnCallback, 1500); // Pause before deleting
      }
    };

    const deleteWriter = (text, i, fnCallback) => {
      if (i >= 0) {
        setAnimatedText(text.substring(0, i));
        timeout = setTimeout(() => {
          deleteWriter(text, i - 1, fnCallback);
        }, 30); // Deleting speed
      } else if (typeof fnCallback === "function") {
        timeout = setTimeout(fnCallback, 500); // Pause before typing again
      }
    };

    const startAnimation = (i) => {
      if (i < fullText.length) {
        typeWriter(fullText, 0, () => {
          deleteWriter(fullText, fullText.length, () => {
            setLoopCount((prev) => prev + 1);
            startAnimation(0);
          });
        });
      }
    };

    startAnimation(0);

    return () => {
      clearTimeout(timeout);
    };
  }, [loopCount]);

  // Floating elements animation
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const floatingAnimation2 = {
    y: [10, -10, 10],
    x: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Words that will have typing effect
  const typingWords = [
    "Empowering",
    "Businesses",
    "With Custom AI and Next-Gen Software...",
  ];

  return (
    <>
      {/* Modal - Rendered outside main content with highest z-index */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ContactPopup onClose={() => setIsModalOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat mt-20"
        style={{
          backgroundColor: '#000',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${backgroundImages[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-2 h-2 bg-[#4ed35e] rounded-full"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute top-40 right-20 w-1 h-1 bg-[#3D63EA] rounded-full"
            animate={floatingAnimation2}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#4ed35e] rounded-full"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute bottom-20 right-1/3 w-1 h-1 bg-white rounded-full"
            animate={floatingAnimation2}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 2xl:p-0">
          <div className="flex flex-col items-center justify-center w-full h-full max-w-5xl mx-auto">
            {/* Centered Content Section */}
            <motion.div
              className="flex flex-col justify-center items-center text-center gap-12 w-full px-4 md:px-8 lg:px-12"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {/* Hero Content */}
              <div className="flex flex-col justify-center items-center gap-8 w-full max-w-4xl">
                {/* Main Headline */}
                <motion.div className="space-y-6" variants={titleVariants}>
                  <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white leading-snug tracking-normal">
                    {/* First line with typing effect */}
                    <motion.div
                      className="inline-block"
                      variants={typingContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {typingWords[0].split("").map((char, index) => (
                        <motion.span key={index} variants={typingLetter}>
                          {char}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Business word with special animation */}
                    <motion.span
                      className="font-extrabold bg-[#22c55e] bg-clip-text text-transparent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: typingWords[0].length * 0.08 + 0.5,
                        duration: 0.8,
                        type: "spring",
                      }}
                    >
                      {" Businesses"}
                    </motion.span>

                    <br className="hidden sm:block" />

                    {/* Last line with typing effect */}
                    <motion.div
                      className="inline-block font-medium text-white"
                      variants={typingContainer}
                      initial="hidden"
                      animate="visible"
                      custom={1}
                      style={{ display: "inline-block" }}
                    >
                      {typingWords[2].split("").map((char, index) => (
                        <motion.span
                          key={index}
                          variants={typingLetter}
                          transition={{
                            delay:
                              index * 0.05 + typingWords[0].length * 0.08 + 0.5,
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.div>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.div className="max-w-3xl" variants={fadeInUpVariants}>
                  <p className="text-base md:text-base lg:text-xl font-normal text-gray-200 leading-relaxed tracking-wide">
                    We assemble elite development teams to turn your ideas into
                    scalable, intelligent{" "}
                    <span className="inline-block">
                      {renderColoredText(animatedText)}
                      <motion.span
                        className="inline-block w-1 h-6 bg-white align-middle ml-1"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    </span>
                  </p>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col items-center gap-8"
                variants={fadeInUpVariants}
              >
                {/* Button Group */}
                <div className="flex flex-row items-center gap-3 sm:gap-4 w-full max-w-lg justify-center">
                  <motion.button
                    className="group relative bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-semibold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-out flex-1 sm:flex-none min-w-[140px] sm:min-w-[180px]"
                    onClick={() => setIsModalOpen(true)}
                    variants={buttonVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Connect Now</span>
                  </motion.button>

                  <Link href="/blog" passHref legacyBehavior>
                    <motion.a
                      className="group relative bg-gray-300 border border-white/30 hover:border-white/50 hover:bg-slate-200 text-black font-medium text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 rounded-lg backdrop-blur-sm transition-all duration-200 ease-out flex-1 sm:flex-none min-w-[140px] sm:min-w-[180px] text-center flex items-center justify-center"
                      variants={buttonVariants}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(226, 232, 240, 0.9)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Learn More</span>
                    </motion.a>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-row flex-wrap mt-6 justify-center items-center gap-3 sm:gap-6 lg:gap-8 text-gray-300 text-xs sm:text-sm">
                  {[
                    { color: "#22c55e", text: "AI-Powered Solutions" },
                    { color: "#3D63EA", text: "Elite Development Teams" },
                    { color: "white", text: "Scalable Software" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      custom={index}
                      variants={trustIndicatorVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              variants={scrollIndicatorVariants}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
