'use client';

import { motion } from 'framer-motion';

const articles = [
	{
		title: 'Getting Started with AlgoFlow AI',
		description: 'Learn the basics of our platform and how to integrate our AI solutions into your workflow.',
		category: 'Getting Started',
		link: '#'
	},
	{
		title: 'Understanding Billing & Subscriptions',
		description: 'Detailed information about our pricing models, invoicing, and how to manage your subscription.',
		category: 'Billing',
		link: '#'
	},
	{
		title: 'API Documentation & Integration',
		description: 'Technical guides on connecting your application with our API endpoints securely.',
		category: 'Technical',
		link: '#'
	},
	{
		title: 'Managing Your Account Settings',
		description: 'How to update your profile, change passwords, and manage team access.',
		category: 'Account',
		link: '#'
	},
	{
		title: 'Computer Vision Setup Guide',
		description: 'Step-by-step instructions to configure our video analysis and computer vision tools.',
		category: 'Technical',
		link: '#'
	},
	{
		title: 'Troubleshooting Common Errors',
		description: 'A comprehensive list of common error codes and how to resolve them quickly.',
		category: 'Troubleshooting',
		link: '#'
	}
];

export default function HelpCenterArticles() {
	return (
		<section className="py-16 px-4 md:px-6 relative z-10">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					className="text-center mb-12"
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h3 className="text-3xl font-bold text-white mb-4">Articles & Guides</h3>
					<p className="text-gray-400">Browse our documentation to find the answers you need.</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{articles.map((article, index) => (
						<motion.a
							key={index}
							href={article.link}
							className="glass-card rounded-2xl p-6 border border-white/5 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden flex flex-col"
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
							<div className="mb-4">
								<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
									{article.category}
								</span>
							</div>
							<h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
								{article.title}
							</h4>
							<p className="text-sm text-gray-400 flex-grow">
								{article.description}
							</p>
							<div className="mt-4 text-green-400 text-sm font-semibold flex items-center">
								Read More
								<svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}
