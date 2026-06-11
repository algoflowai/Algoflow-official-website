'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
	{
		question: "What is AlgoFlow AI and what services do you provide?",
		answer: "AlgoFlow AI is a custom AI solutions and software development company. We specialize in building AI-powered software, mobile apps, web platforms, computer vision solutions, NLP/LLMs, and intelligent workflow automation tailored for your business needs."
	},
	{
		question: "How can AI integration benefit my business?",
		answer: "Integrating AI can streamline operations, automate repetitive tasks, enhance decision-making with predictive analytics, improve customer experiences through intelligent chatbots, and ultimately drive growth by unlocking new efficiencies and insights from your data."
	},
	{
		question: "Do you build custom AI solutions from scratch?",
		answer: "Yes, we build custom AI solutions tailored to your specific requirements. Our team of experts works closely with you from research and development to deployment, ensuring that the final product perfectly aligns with your business goals and integrates seamlessly into your existing workflows."
	}
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="relative py-24 px-4 md:px-6 dark-section overflow-hidden">
			{/* Neural grid background */}
			<div className="absolute inset-0 neural-grid opacity-40 pointer-events-none" />

			{/* Gradient orbs */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<motion.div
					className="absolute top-0 right-1/4 w-80 h-80 rounded-full"
					style={{
						background:
							'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
					}}
					animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
					transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
				/>
			</div>

			<div className="container mx-auto relative z-10 max-w-3xl">
				<motion.div
					className="text-center mb-16"
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
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
						Have Questions?
					</div>
					<h2
						className="gradient-text-hero text-4xl md:text-5xl font-extrabold mt-3"
						style={{ fontFamily: 'Inter' }}
					>
						Frequently Asked Questions
					</h2>
					<p className="text-gray-400 mt-3 max-w-xl mx-auto text-base">
						Find answers to common questions about our AI solutions and development services.
					</p>
				</motion.div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className="glass-card rounded-2xl overflow-hidden border border-white/5 relative group"
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
								style={{
									background:
										'linear-gradient(135deg, rgba(34,197,94,0.05) 0%, transparent 60%)',
								}}
							/>
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none relative z-10"
							>
								<span className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
									{faq.question}
								</span>
								<span className={`text-green-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="m6 9 6 6 6-6"/>
									</svg>
								</span>
							</button>
							
							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: 'easeInOut' }}
										className="relative z-10"
									>
										<div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
											{faq.answer}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
