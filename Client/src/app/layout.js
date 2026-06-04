import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ChatbotWidget from '@/components/ChatbotWidget';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
});

const BASE_URL = 'https://www.algoflowai.com';

export const metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: 'AlgoFlow AI — Custom AI & Software Development Company',
		template: '%s | AlgoFlow AI',
	},
	description:
		'AlgoFlow AI builds cutting-edge AI solutions, mobile apps, web applications, computer vision systems, NLP/LLM integrations, and workflow automation for forward-thinking businesses.',
	keywords: [
		'AI Development Company',
		'AI Software Development Company',
		'Custom AI Solutions',
		'Artificial Intelligence Services',
		'AI Consulting Services',
		'AI Automation Company',
		'Enterprise AI Solutions',
		'AI Application Development',
		'Generative AI Development',
		'AI Product Development',
		'Machine Learning Development',
		'AI Integration Services',
		'AI Agent Development',
		'Agentic AI Solutions',
		'Intelligent Automation Solutions',
		'Large Language Model Development',
		'LLM Development Company',
		'NLP Development Services',
		'AI Chatbot Development',
		'Custom ChatGPT Solutions',
		'RAG Development Services',
		'Conversational AI Development',
		'AI Virtual Assistant Development',
		'Enterprise Chatbot Solutions',
		'Multilingual AI Chatbot',
		'Computer Vision Development',
		'Video Analytics Solutions',
		'AI Video Analysis',
		'Object Detection AI',
		'PPE Detection System',
		'Defect Detection AI',
		'Real-Time Video Analytics',
		'Surveillance AI Solutions',
		'Industrial Computer Vision',
		'Retail Analytics AI',
		'Workflow Automation Services',
		'Business Process Automation',
		'Intelligent Process Automation',
		'AI Workflow Automation',
		'Robotic Process Automation',
		'Enterprise Automation Solutions',
		'Digital Transformation Services',
		'AI-Powered Operations',
		'Healthcare AI Solutions',
		'Medical AI Development',
		'Clinical AI Platform',
		'Healthcare Automation',
		'Remote Patient Monitoring',
		'ABDM Integration Services',
		'ABHA Integration',
		'Hospital Management AI',
		'AI for Healthcare Industry',
		'FinTech AI Solutions',
		'Banking AI Solutions',
		'AI Fraud Detection',
		'AML Monitoring System',
		'KYC Automation',
		'Financial AI Software',
		'Transaction Intelligence Platform',
		'Banking Automation Solutions',
		'AI Risk Management',
		'Software Development Company',
		'Custom Software Development',
		'Web Application Development',
		'Mobile App Development',
		'Enterprise Software Development',
		'SaaS Development Company',
		'Full Stack Development Services',
		'Cloud Application Development',
		'Scalable Software Solutions',
		'AI Development Company India',
		'AI Company Bangalore',
		'Software Development Company Bangalore',
		'AI Consulting Company India',
		'Machine Learning Company India',
		'AI Startup India',
		'Custom Software Development India',
		'Enterprise AI Solutions India',
		'Best AI Development Company in India',
		'Custom AI Software Development Services',
		'Enterprise AI Automation Solutions',
		'AI Chatbot Development Company India',
		'Computer Vision Development Services',
		'Healthcare AI Software Development',
		'FinTech AI Development Company',
		'AI Workflow Automation for Businesses',
		'Custom LLM Development Services',
		'AI Integration for Enterprises',
		'AI-Powered Business Automation',
		'End-to-End AI Product Development',
		'Generative AI Solutions for Enterprises',
		'AI Consulting and Development Services',
		'Machine Learning Solutions for Businesses',
		'AlgoFlow AI',
		'DPIIT startup'
	],
	authors: [{ name: 'AlgoFlow AI', url: BASE_URL }],
	creator: 'AlgoFlow AI Private Limited',
	publisher: 'AlgoFlow AI Private Limited',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: BASE_URL,
	},
	openGraph: {
		type: 'website',
		locale: 'en_IN',
		url: BASE_URL,
		siteName: 'AlgoFlow AI',
		title: 'AlgoFlow AI — Custom AI & Software Development Company',
		description:
			'We build AI-powered software — mobile apps, web platforms, computer vision, NLP/LLMs, and automation — for businesses that want to lead.',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@algoflowai',
		creator: '@algoflowai',
		title: 'AlgoFlow AI — Custom AI & Software Development Company',
		description:
			'AI-powered software development: mobile apps, web apps, computer vision, NLP/LLMs, and automation.',
	},
	category: 'technology',
};

const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'AlgoFlow AI Private Limited',
	url: BASE_URL,
	logo: `${BASE_URL}/icons/logo.png`,
	description:
		'AlgoFlow AI builds custom AI solutions, mobile apps, web platforms, and automation systems for businesses worldwide.',
	foundingDate: '2019',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '4th Main, 6th Cross Rd, GM Palya, C V Raman Nagar',
		addressLocality: 'Bengaluru',
		addressRegion: 'Karnataka',
		postalCode: '560075',
		addressCountry: 'IN',
	},
	contactPoint: [
		{
			'@type': 'ContactPoint',
			telephone: '+91-8960880615',
			contactType: 'customer service',
			availableLanguage: 'English',
		},
	],
	email: 'info@algoflowai.com',
	sameAs: [
		'https://www.linkedin.com/company/algoflowai',
		'https://twitter.com/algoflowai',
		'https://instagram.com/algoflowai',
		'https://facebook.com/algoflowai',
	],
};

const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'AlgoFlow AI',
	url: BASE_URL,
	potentialAction: {
		'@type': 'SearchAction',
		target: {
			'@type': 'EntryPoint',
			urlTemplate: `${BASE_URL}/blog?search={search_term_string}`,
		},
		'query-input': 'required name=search_term_string',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#22c55e" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
				/>
			</head>
			<body className={`${inter.variable} font-Inter antialiased`}>
				<ThemeProvider>{children}</ThemeProvider>
				<Analytics />
				<SpeedInsights />
				<ChatbotWidget />
			</body>
		</html>
	);
}
