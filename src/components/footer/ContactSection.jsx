"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
	const [email, setEmail] = useState("");
	const textRef = useRef(null);
	const svgRef = useRef(null);
	const footerRef = useRef(null);

	useGSAP(() => {
		// Text animation
		gsap.from(textRef.current?.children || [], {
			opacity: 0,
			y: 40,
			stagger: 0.1,
			duration: 0.1,
			scrollTrigger: {
				trigger: textRef.current,
				start: "top center",
			},
		});

		// SVG line animation
		const paths = svgRef.current?.querySelectorAll("path");
		paths?.forEach((path) => {
			const length = path.getTotalLength();
			gsap.set(path, {
				strokeDasharray: length,
				strokeDashoffset: length,
			});

			gsap.to(path, {
				strokeDashoffset: 0,
				duration: 2,
				ease: "power4.out",
				scrollTrigger: {
					trigger: path,
					start: "top center",
				},
			});
		});

		// Footer animation
		gsap.from(footerRef.current?.children || [], {
			opacity: 0,
			y: 40,
			stagger: 0.1,
			duration: 1,
			scrollTrigger: {
				trigger: footerRef.current,
				start: "top center",
			},
		});
	});
	const sendEmail = async () => {
		if (email.length <= 0) return;
		try {
			const response = await fetch(
				"http://localhost:4000/message/send-message",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email: email }),
				}
			);

			if (!response.ok) {
				throw new Error("Something went wrong. Please try again.");
			}

			const data = await response.json();
			console.log("API Response:", data);

			setIsSubmitted(true);
		} catch (err) {}
	};

	return (
		<>
			<section className="footerSection min-h-screen w-full max-w-full relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-x-hidden">
				{/* Animated SVG Background */}
				<svg ref={svgRef} className="absolute inset-0 w-full h-full opacity-10">
					<path
						d="M0 50 Q 100 10 200 50 T 400 50"
						stroke="#ffffff"
						fill="none"
						strokeWidth="1"
					/>
					<path
						d="M50 0 Q 150 80 250 0 T 450 0"
						stroke="#ffffff"
						fill="none"
						strokeWidth="1"
					/>
					<path
						d="M100 100 Q 200 50 300 100 T 500 100"
						stroke="#ffffff"
						fill="none"
						strokeWidth="1"
					/>
				</svg>

				<div className="container mx-auto px-4 h-[130vh] flex items-center justify-center ">
					<div
						ref={textRef}
						className="text-center space-y-8 relative z-10 px-10 lg:px-0"
					>
						<h2 className="text-[3.5rem] lg:text-[8rem] font-bold text-white mb-8 px-2">
							{`Let's Create`.split("").map((char, i) => (
								<span
									key={i}
									className="spanText inline-block hover:text-cyan-300 transition-all"
								>
									{char}
								</span>
							))}
						</h2>

						<div className="relative group mailBox">
							<input
								required={true}
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Your email address"
								className="text-md lg:text-2xl px-8 py-4 bg-transparent border-2 border-white/30 rounded-full
                         text-white placeholder-white/50 focus:outline-none focus:border-cyan-400
                         transition-all w-72 lg:w-96 text-center"
							/>
							<button
								className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                transition-opacity"
								onClick={sendEmail}
							>
								<svg
									className="w-8 h-8 text-cyan-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</button>
						</div>
						<div className="flex flex-col items-center w-full">
							<p className="endText text-lg font-semibold lg:text-lg text-white/80 mt-2 w-full">
								Drop your email and we will get back to you.
							</p>
							<p className="endText text-sm lg:text-2xl text-white/80 mt-6 px-10">
								Let's build something amazing together ✨
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer Section */}
			{/* <div
				ref={footerRef}
				className="min-h-[50vh] bg-gradient-to-br from-blue-900 to-indigo-900 relative"
			>
				<div className="container mx-auto px-4 py-24 grid md:grid-cols-4 gap-8">
					{footerLinks.map((column, i) => (
						<div key={i} className="space-y-4">
							<h3 className="text-xl font-bold text-cyan-400 mb-4">
								{column.title}
							</h3>
							<ul className="space-y-2">
								{column.links.map((link, j) => (
									<li key={j}>
										<a
											href={link.url}
											className="text-white/80 hover:text-cyan-300 transition-colors"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

		
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent)]" />
				<div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light" />
			</div> */}
		</>
	);
}

const footerLinks = [
	{
		title: "Explore",
		links: [
			{ label: "Our Work", url: "#" },
			{ label: "Case Studies", url: "#" },
			{ label: "Blog", url: "#" },
			{ label: "Careers", url: "#" },
		],
	},
	{
		title: "Services",
		links: [
			{ label: "Web Development", url: "#" },
			{ label: "Mobile Apps", url: "#" },
			{ label: "Cloud Solutions", url: "#" },
			{ label: "AI Integration", url: "#" },
		],
	},
	{
		title: "Connect",
		links: [
			{ label: "Contact Us", url: "#" },
			{ label: "Twitter", url: "#" },
			{ label: "LinkedIn", url: "#" },
			{ label: "GitHub", url: "#" },
		],
	},
	{
		title: "Legal",
		links: [
			{ label: "Privacy Policy", url: "#" },
			{ label: "Terms of Service", url: "#" },
			{ label: "Cookie Settings", url: "#" },
			{ label: "Security", url: "#" },
		],
	},
];
