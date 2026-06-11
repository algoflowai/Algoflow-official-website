'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
	{
		question: "How do I reset my password?",
		answer: "To reset your password, go to the login page and click on 'Forgot Password'. Enter the email address associated with your account, and we will send you a secure link to reset your password. If you don't receive the email within a few minutes, please check your spam folder."
	},
	{
		question: "How does billing work?",
		answer: "We offer flexible billing cycles based on your subscription plan. You can choose to be billed monthly or annually. Invoices are generated on the first day of your billing cycle. You can view your payment history, download invoices, and manage payment methods in your Account Settings under the 'Billing' tab."
	},
	{
		question: "How do I contact support?",
		answer: "You can reach our support team by filling out the contact form below, or by emailing us directly at support@algoflowai.com. For enterprise customers, priority support is available via your dedicated account manager or through our 24/7 hotline."
	},
	{
		question: "Can I upgrade or downgrade my plan at any time?",
		answer: "Yes, you can upgrade or downgrade your subscription at any time from your dashboard. When upgrading, changes take effect immediately and you will be charged a prorated amount. Downgrades will take effect at the start of your next billing cycle."
	}
];

export default function HelpCenterFAQ() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="py-16 px-4 md:px-6 relative z-10">
			<div className="container mx-auto max-w-3xl">
				<motion.div
					className="text-center mb-12"
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h3 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h3>
					<p className="text-gray-400">Quick answers to questions we get asked the most.</p>
				</motion.div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className="glass-card rounded-2xl overflow-hidden border border-white/5 relative group"
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
								style={{
									background: 'linear-gradient(135deg, rgba(34,197,94,0.05) 0%, transparent 60%)',
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
