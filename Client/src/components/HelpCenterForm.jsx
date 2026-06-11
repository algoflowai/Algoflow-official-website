'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HelpCenterForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		issueType: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// Simulate network request
		setTimeout(() => {
			toast.success('Your message has been received! Our support team will contact you shortly.', {
				duration: 5000,
				position: 'top-center',
				style: {
					background: '#10B981',
					color: '#fff',
					fontWeight: 'bold',
					borderRadius: '10px',
					padding: '16px',
					fontSize: '16px',
					marginTop: '20px',
				},
			});

			setFormData({
				name: '',
				email: '',
				company: '',
				issueType: '',
				message: '',
			});
			setLoading(false);
		}, 1500);
	};

	const inputStyles = {
		background: 'rgba(255,255,255,0.03)',
		border: '1px solid rgba(255,255,255,0.1)',
		color: '#f1f5f9',
	};

	return (
		<section className="py-16 px-4 md:px-6 relative z-10" id="support">
			<Toaster />
			<div className="container mx-auto max-w-2xl">
				<motion.div
					className="glass-card rounded-2xl shadow-2xl p-8 relative overflow-hidden"
					style={{
						background: 'rgba(6,13,27,0.7)',
						border: '1px solid rgba(34,197,94,0.2)',
						boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,197,94,0.1)',
					}}
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{/* Gradient accent top */}
					<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#22c55e] to-transparent opacity-50"></div>
					
					<div className="text-center mb-8">
						<div
							className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
							style={{
								background: 'linear-gradient(135deg, #22c55e, #16a34a)',
								boxShadow: '0 0 20px rgba(34,197,94,0.3)',
							}}
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
								<path d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" />
							</svg>
						</div>
						<h3 className="text-2xl font-bold text-white mb-2">Still need help?</h3>
						<p className="text-gray-400 text-sm">
							Fill out the form below and our dedicated support team will get back to you.
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-4 text-left">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Name *</label>
								<input
									type="text"
									name="name"
									className="w-full p-3 rounded-xl text-sm outline-none transition-all"
									style={inputStyles}
									placeholder="John Doe"
									value={formData.name}
									onChange={handleChange}
									required
									onFocus={(e) => (e.target.style.border = '1px solid rgba(34,197,94,0.6)')}
									onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.1)')}
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Email *</label>
								<input
									type="email"
									name="email"
									className="w-full p-3 rounded-xl text-sm outline-none transition-all"
									style={inputStyles}
									placeholder="john@example.com"
									value={formData.email}
									onChange={handleChange}
									required
									onFocus={(e) => (e.target.style.border = '1px solid rgba(34,197,94,0.6)')}
									onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.1)')}
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Company Name</label>
								<input
									type="text"
									name="company"
									className="w-full p-3 rounded-xl text-sm outline-none transition-all"
									style={inputStyles}
									placeholder="Optional"
									value={formData.company}
									onChange={handleChange}
									onFocus={(e) => (e.target.style.border = '1px solid rgba(34,197,94,0.6)')}
									onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.1)')}
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Issue Type</label>
								<select
									name="issueType"
									className="w-full p-3 rounded-xl text-sm outline-none transition-all appearance-none"
									style={{ ...inputStyles, cursor: 'pointer' }}
									value={formData.issueType}
									onChange={handleChange}
									onFocus={(e) => (e.target.style.border = '1px solid rgba(34,197,94,0.6)')}
									onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.1)')}
								>
									<option value="" disabled style={{ color: '#000' }}>Select an issue</option>
									<option value="Bug" style={{ color: '#000' }}>Bug Report</option>
									<option value="Billing" style={{ color: '#000' }}>Billing Inquiry</option>
									<option value="Feature Request" style={{ color: '#000' }}>Feature Request</option>
									<option value="Technical" style={{ color: '#000' }}>Technical Support</option>
									<option value="Other" style={{ color: '#000' }}>Other</option>
								</select>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Message *</label>
							<textarea
								name="message"
								className="w-full p-3 rounded-xl text-sm outline-none transition-all resize-y min-h-[120px]"
								style={inputStyles}
								placeholder="Please describe your issue in detail..."
								value={formData.message}
								onChange={handleChange}
								required
								onFocus={(e) => (e.target.style.border = '1px solid rgba(34,197,94,0.6)')}
								onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.1)')}
							/>
						</div>

						<div className="pt-2">
							<button
								type="submit"
								disabled={loading}
								className="w-full text-white px-4 py-4 rounded-xl font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
								style={{
									background: 'linear-gradient(135deg, #22c55e, #16a34a)',
									boxShadow: '0 0 20px rgba(34,197,94,0.25)',
								}}
							>
								{loading ? (
									<>
										<Loader2 className="animate-spin h-5 w-5" />
										Submitting...
									</>
								) : (
									'Submit Request'
								)}
							</button>
						</div>
					</form>
				</motion.div>
			</div>
		</section>
	);
}
