"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// interface Step {
//   id: number;
//   text: string;
// }

const GettingStarted = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const contentRef = useRef(null);
	const ceoImageRef = useRef(null);

	const contactRef = useRef(null);
	const cardRef = useRef(null);

	const steps = [
		{ id: 1, text: "Share your project idea and goals with us." },
		{
			id: 2,
			text: "We provide a clear, upfront estimate and a detailed quote for the first milestone.",
		},
		{ id: 3, text: "Secure your project with just a 10% deposit." },
		{ id: 4, text: "Our team gets to work, turning your vision into reality." },
		{
			id: 5,
			text: "Once you're thrilled with the results, you pay the remaining 90%.",
		},
		{
			id: 6,
			text: "From there, we’re all set to build a long-term partnership together.",
		},
	];

	useEffect(() => {
		if (!sectionRef.current) return;

		// Create parallax effect for the entire section background
		gsap.fromTo(
			sectionRef.current,
			{
				backgroundPosition: "50% 0%",
			},
			{
				backgroundPosition: "50% 100%",
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "bottom top",
					scrub: 1,
				},
			}
		);

		// Heading parallax
		gsap.fromTo(
			headingRef.current,
			{ y: 0 },
			{
				y: 100,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "bottom top",
					scrub: 0.5,
				},
			}
		);

		// Card reveal animation with initial state set
		gsap.set(cardRef.current, { opacity: 1, y: 0 }); // Ensure visible by default
		gsap.from(cardRef.current, {
			y: 100,
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: cardRef.current,
				start: "top 80%",
				end: "top 20%",
				toggleActions: "play none none reverse",
			},
		});

		// Reveal animations for steps with stagger and initial state
		const stepItems = document.querySelectorAll(".step-item");
		gsap.set(stepItems, { opacity: 1, y: 0 }); // Ensure visible by default
		gsap.from(stepItems, {
			opacity: 0,
			y: 30,
			stagger: 0.15,
			duration: 0.8,
			scrollTrigger: {
				trigger: contentRef.current,
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
		});

		// Card reveal animation with initial state set
		gsap.set(ceoImageRef.current, { opacity: 1, y: 0 }); // Ensure visible by default
		gsap.from(ceoImageRef.current, {
			y: 100,
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: ceoImageRef.current,
				start: "top 80%",
				end: "top 20%",
				toggleActions: "play none none reverse",
			},
		});

		// Text reveal animations with initial state
		const revealElements = document.querySelectorAll(".reveal-text");
		gsap.set(revealElements, { opacity: 1, y: 0 }); // Ensure visible by default
		revealElements.forEach((element) => {
			gsap.from(element, {
				opacity: 0,
				y: 50,
				duration: 1,
				scrollTrigger: {
					trigger: element,
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
			});
		});

		// Floating animation for contact section
		gsap.to(".floating-text", {
			y: -20,
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut",
		});

		// Glowing effect for contact buttons
		gsap.to(".glow-button", {
			boxShadow: "0 0 20px rgba(255,255,255,0.5)",
			duration: 1.5,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<>
			<section
				ref={sectionRef}
				className="bg-[#5000FF] text-white min-h-screen relative overflow-hidden py-24 px-6"
				style={{
					backgroundImage: "linear-gradient(45deg, #5000FF 0%, #7000FF 100%)",
					backgroundSize: "200% 200%",
				}}
			>
				<div className="container mx-auto relative z-10">
					<h2
						ref={headingRef}
						className="text-[5rem] sm:text-[6.5rem] font-normal mb-20 max-w-4xl leading-none reveal-text"
						style={{ fontFamily: "SF Pro Display, sans-serif" }}
					>
						Kick off your project effortlessly — it's never been easier!
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-[0.9fr,auto] gap-16 items-start">
						<div
							ref={cardRef}
							className="bg-white rounded-[2rem] p-10 shadow-2xl transform scale-90"
						>
							<div ref={contentRef}>
								<h3 className="text-[#111] text-[2rem] font-normal mb-12 leading-tight reveal-text">
									Start your project with just a 10% deposit — that’s how
									confident we are in delivering exactly what you need. No risk,
									just results. Here’s how it works:
								</h3>

								<div className="space-y-6">
									{steps.map((step) => (
										<div
											key={step.id}
											className="step-item flex items-start border-b border-gray-200 pb-6"
										>
											<div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-4 text-sm font-medium">
												{step.id}
											</div>
											<p
												className="text-[#333] text-lg pt-1 font-normal"
												style={{ fontFamily: "SF Pro Text, sans-serif" }}
											>
												{step.text}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="flex flex-col items-end space-y-6 lg:w-[300px]">
							<img
								ref={ceoImageRef}
								src="/images/Parker.webp"
								alt="Vitalik Vinnikov"
								className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl"
							/>
							<div className="text-right w-full">
								<h4 className="text-2xl font-bold mb-1 reveal-text">
									Ethan Parker
								</h4>
								<p className="text-sm opacity-90 mb-8 reveal-text">
									Co-founder of TweenLab
								</p>
								<div className="space-y-3">
									<p className="text-left">
										We believe the future belongs to the bold — to those who
										have the courage to challenge the way things have always
										been done. True progress begins when we dare to ask better
										questions, push boundaries, and imagine freely. That's why
										every project at Tweenlab starts with a simple question: 'If
										there were no limits, what would you create?' Because when
										you remove the barriers, you unlock true innovation — and
										that's where the magic begins.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 w-full text-center pb-8 text-white/80">
					<p className="text-lg reveal-text">
						No surprises. No fine print. Just risk-free, quality work that
						speaks for itself.
					</p>
				</div>
			</section>

			<section
				ref={contactRef}
				className="bg-gradient-to-b from-[#5000FF] to-[#2D0090] min-h-screen relative overflow-hidden"
			>
				<div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

				<div className="container mx-auto px-6 py-24 relative z-10">
					<div className="max-w-6xl mx-auto">
						<div className="floating-text text-center mb-24">
							<h2 className="text-[8rem] font-bold text-white mb-8 leading-none reveal-text">
								Let's Build
								<span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
									Something Amazing
								</span>
							</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
							<div className="space-y-8">
								<div className="reveal-text">
									<h3 className="text-2xl font-bold text-white mb-2">
										Ready to Start?
									</h3>
									<p className="text-white/80">
										Drop us a line and let's create something extraordinary
										together.
									</p>
								</div>
								<div className="space-y-4">
									<a
										href="mailto:tweenlab81@gmail.com"
										className="glow-button flex items-center justify-between bg-white/10 hover:bg-white/20 transition-all rounded-xl p-6 group"
									>
										<span className="text-xl text-white">
											tweenlab81@gmail.com
										</span>
										<svg
											className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</a>
									<a
										href="tel:+9779765878107"
										className="glow-button flex items-center justify-between bg-white/10 hover:bg-white/20 transition-all rounded-xl p-6 group"
									>
										<span className="text-xl text-white">Book a Call</span>
										<svg
											className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</a>
								</div>
							</div>

							<div className="space-y-8">
								<div className="reveal-text">
									<h3 className="text-2xl font-bold text-white mb-2">
										Follow Us
									</h3>
									<p className="text-white/80">
										Stay updated with our latest projects and insights.
									</p>
								</div>
								<div className="grid grid-cols-2 gap-4">
									{[
										{
											platform: "FaceBook",
											link: "https://www.facebook.com/p/RTH-Gaming-100064855270608/?locale=zh_CN",
										},
										{
											platform: "Instagram",
											link: "https://www.instagram.com/tween_lab/?locale=zh_CN&hl=zh-tw",
										},

										// { platform: "Telegram", link: "https://www.telegram.org" },
									].map(({ platform, link }) => (
										<Link href={link} key={platform}>
											<button className="bg-white/10 hover:bg-white/20 transition-all text-white py-4 px-6 rounded-xl font-medium">
												{platform}
											</button>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#2D0090] to-transparent"></div>
			</section>
		</>
	);
};

export default GettingStarted;
