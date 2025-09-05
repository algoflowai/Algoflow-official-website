"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

const logos = [
    { id: 1, src: '/icons/logo1.png', alt: 'Logo 1' },
    { id: 2, src: '/icons/logo2.png', alt: 'Logo 2' },
    { id: 3, src: '/icons/logo5.png', alt: 'Logo 3' },
    { id: 4, src: '/icons/logo5.png', alt: 'Logo 4' },
    { id: 5, src: '/icons/logo9.png', alt: 'Logo 5' },
    { id: 6, src: '/icons/logo5.png', alt: 'Logo 6' },
];

export default function AboutUs() {
    return (
        <>
            <motion.section 
                className="flex flex-col md:flex-row items-center md:justify-center justify-between gap-7 p-8 bg-white font-Inter mt-20"
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
                        className="text-2xl md:text-[35px] font-normal mb-4 text-black leading-[1.5]"
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
                        className="mb-4 text-gray-600"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        At Algoflow AI, we are passionate about creating intelligent solutions that help businesses thrive in an increasingly digital world. With a strong foundation in AI services, software development, and consulting, we specialize in crafting innovative, scalable products designed to address real-world challenges.
                    </motion.p>
                    
                    <motion.a 
                        href="#" 
                        className="text-green-600 font-medium flex items-center gap-2"
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
                            className="object-cover"
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
                            <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center">
                                    <div className="w-12 h-12 bg-[#4ed35e] rounded-full flex items-center justify-center">
                                        <svg 
                                            width="24" 
                                            height="24" 
                                            viewBox="0 0 24 24" 
                                            fill="white" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Logo Marquee Section */}
            {/*
            <motion.div 
                className="py-8 bg-gray-50 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div 
                    className="flex items-center justify-center gap-12"
                    animate={{
                        x: ["0%", "-100%"],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <motion.div 
                            key={`${logo.id}-${index}`}
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Image 
                                src={logo.src} 
                                alt={logo.alt} 
                                width={120} 
                                height={60} 
                                className="object-contain h-12 opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            */}
        </>
    );
}