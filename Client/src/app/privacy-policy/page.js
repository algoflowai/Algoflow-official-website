import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Privacy Policy & Terms | AlgoFlow AI',
	description: 'Privacy Policy and Terms of Service for AlgoFlow AI.',
};

const privacyPolicy = [
	{
		title: '1. Introduction',
		content:
			'Welcome to AlgoFlow AI. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.',
	},
	{
		title: '2. Information Collection',
		content:
			'We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site.',
	},
	{
		title: '3. Use of Information',
		content:
			'We may use the information we collect from you to personalize your experience, to improve our website, to improve customer service, and to send periodic emails.',
	},
	{
		title: '4. Information Protection',
		content:
			'We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information.',
	},
	{
		title: '5. Third-Party Sharing',
		content:
			'We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information.',
	},
	{
		title: '6. Changes to This Policy',
		content:
			'AlgoFlow AI has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site.',
	},
	{
		title: '7. Contact Us',
		content:
			'If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us.',
	},
];

export default function PrivacyPolicy() {
	return (
		<div className="bg-[var(--background)] min-h-screen overflow-x-hidden custom-scrollbar flex flex-col">
			<Navbar />

			<main className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto w-full font-Inter">
				<div className="mb-12">
					<div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] mb-4" />
					<h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
						Privacy Policy & Terms
					</h1>
					<p className="text-[var(--text-secondary)] text-lg">
						Last updated:{' '}
						{new Date().toLocaleDateString('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric',
						})}
					</p>
				</div>

				<div className="space-y-8 bg-[var(--surface)] p-6 md:p-10 rounded-2xl border border-[var(--card-border)] shadow-sm">
					{privacyPolicy.map((section, index) => (
						<section key={index} className="flex flex-col gap-3">
							<h2 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
								{section.title}
							</h2>
							<p className="text-[var(--text-secondary)] leading-relaxed">
								{section.content}
							</p>
						</section>
					))}
				</div>
			</main>

			<Footer />
		</div>
	);
}
