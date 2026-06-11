import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HelpCenterArticles from '@/components/HelpCenterArticles';
import HelpCenterFAQ from '@/components/HelpCenterFAQ';
import HelpCenterForm from '@/components/HelpCenterForm';

export const metadata = {
	title: 'Help Center — AlgoFlow AI',
	description: 'Find answers to common questions, browse our guides, and contact support.',
	alternates: {
		canonical: 'https://www.algoflowai.com/help-center',
	},
};

export default function HelpCenterPage() {
	return (
		<div className="bg-[var(--background)] min-h-screen overflow-x-hidden custom-scrollbar dark-section">
			<Navbar />

			{/* Hero / Header Section for Help Center */}
			<section className="relative pt-32 pb-16 px-4 md:px-6 overflow-hidden">
				{/* Neural grid background */}
				<div className="absolute inset-0 neural-grid opacity-40 pointer-events-none" />
				
				{/* Gradient Orb */}
				<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
					style={{
						background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)',
					}}
				/>

				<div className="container mx-auto relative z-10 text-center max-w-3xl">
					<div className="ai-badge inline-flex mx-auto mb-6">
						<span className="ai-badge-dot"></span>
						Support
					</div>
					<h1 className="gradient-text-hero text-5xl md:text-6xl font-extrabold mb-6" style={{ fontFamily: 'Inter' }}>
						How can we help you?
					</h1>
					<p className="text-xl text-gray-400">
						Search our knowledge base or reach out to our team directly.
					</p>
				</div>
			</section>

			{/* Articles Section */}
			<HelpCenterArticles />

			{/* FAQ Section */}
			<HelpCenterFAQ />

			{/* Support Form Section */}
			<HelpCenterForm />

			<Footer />
		</div>
	);
}
