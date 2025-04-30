"use client";
import FeaturesList from "@/components/FeaturesList";
import GettingStarted from "@/components/GettingStarted";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// interface PricingOption {
//   title: string;
//   price: string;
//   isPopular?: boolean;
//   description: string;
//   hours: string;
//   hourlyRate: string;
//   monthlyHours: number;
//   ctaText: string;
// }

// Individual pricing card component for better organization
const PricingCard = (props) => {
	const cardRef = useRef(null);
	const isPurple = props.title === "Cruise speed";

	return (
		<div
			ref={cardRef}
			className={`${
				isPurple ? "bg-[#5000FF]" : "bg-white"
			} flex flex-col h-full relative pricing-card opacity-0 translate-y-8`}
		>
			{props.isPopular && (
				<div className="popular-badge absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#5000FF] text-white text-xs px-4 py-1 rounded-full whitespace-nowrap font-medium opacity-0 scale-50">
					Best offer!
				</div>
			)}

			<div className="p-6 flex flex-col h-full">
				<h3
					className={`text-2xl font-medium mb-3 card-title opacity-0 ${
						isPurple ? "text-white" : "text-black"
					}`}
				>
					{props.title}
				</h3>

				<div className="mb-6">
					<span
						className={`price-tag inline-block ${
							isPurple ? "bg-[#6D30FF] text-white" : "bg-[#F2F2F2] text-black"
						} rounded-full px-4 py-1.5 text-sm font-medium opacity-0`}
					>
						{props.price}
					</span>
				</div>

				<p
					className={`text-sm leading-relaxed mb-8 flex-grow card-description opacity-0 ${
						isPurple ? "text-white" : "text-black"
					}`}
				>
					{props.description}
				</p>

				<div
					className={`border-t ${
						isPurple ? "border-[#6D30FF]" : "border-[#E5E5E5]"
					} pt-4 mb-3`}
				>
					<p
						className={`text-sm card-hours opacity-0 ${
							isPurple ? "text-white" : "text-black"
						}`}
					>
						{props.hours}
					</p>
				</div>

				<div className="mb-6">
					<p
						className={`text-sm card-rate opacity-0 ${
							isPurple ? "text-white" : "text-black"
						}`}
					>
						{props.hourlyRate}
					</p>
				</div>

				<div className="mb-6">
					<p
						className={`text-[2.5rem] font-bold leading-tight card-monthly opacity-0 ${
							isPurple ? "text-white" : "text-black"
						}`}
					>
						{props.monthlyHours}h
					</p>
					<p className={`text-sm ${isPurple ? "text-white" : "text-black"}`}>
						monthly
					</p>
				</div>

				<button
					className={`w-full py-3 font-medium uppercase tracking-wide card-button opacity-0 ${
						isPurple ? "bg-white text-[#5000FF]" : "bg-[#5000FF] text-white"
					}`}
				>
					{props.ctaText}
				</button>
			</div>
		</div>
	);
};

const PricingCards = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);

	const pricingOptions = [
		{
			title: "Support",
			price: "$600 / mo",
			description:
				"Working on a smaller project or need ongoing help at a flexible pace? Our Support option keeps your projects moving smoothly, efficiently, and stress-free month after month.",
			hours: "~1-3 hours / day",
			hourlyRate: "$10 / hour",
			monthlyHours: 50,
			ctaText: "HIRE US",
		},
		{
			title: "Cruise speed",
			price: "$1000 / mo",
			isPopular: true,
			description:
				"Prefer a steady, reliable workflow? Cruise speed is perfect for ongoing work with consistent progress and more relaxed deadlines — the sweet spot for long-term success.",
			hours: "~3-5 hours / day",
			hourlyRate: "$12 / hour",
			monthlyHours: 80,
			ctaText: "HIRE US",
		},
		{
			title: "Full steam ahead!",
			price: "$1500 / mo",
			description:
				"Big goals and tight timelines? Full Steam Ahead gives you dedicated developers working relentlessly to bring your vision to life — faster and with precision.",
			hours: "~6 hours / day",
			hourlyRate: "$20 / hour",
			monthlyHours: 124,
			ctaText: "HIRE US",
		},
		{
			title: "I need it tomorrow! 🤯",
			price: "$3500 / mo",
			description:
				"Deadlines breathing down your neck? This option puts a full team in motion — working around the clock to deliver results at lightning speed, no matter how crazy the timeline.",
			hours: "~10 hours / day",
			hourlyRate: "$35 / hour",
			monthlyHours: 220,
			ctaText: "HIRE US",
		},
	];

	useEffect(() => {
		// Heading animation
		gsap.set(headingRef.current, { opacity: 1, y: 0 });
		gsap.from(headingRef.current, {
			opacity: 0,
			y: 50,
			duration: 1,
			scrollTrigger: {
				trigger: headingRef.current,
				start: "top 85%",
				toggleActions: "play none none reverse",
			},
		});

		// Cards stagger animation
		const cards = document.querySelectorAll(".pricing-card");
		gsap.set(cards, { opacity: 1, y: 0 });
		gsap.from(cards, {
			opacity: 0,
			y: 100,
			duration: 1,
			stagger: 0.1,
			ease: "power3.out",
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 70%",
				toggleActions: "play none none reverse",
			},
		});

		// Card content animations
		cards.forEach((card) => {
			// Popular badge animation
			const badge = card.querySelector(".popular-badge");
			if (badge) {
				gsap.set(badge, { opacity: 1, scale: 1 });
				gsap.from(badge, {
					opacity: 0,
					scale: 0.5,
					duration: 0.6,
					delay: 0.3,
					ease: "back.out(1.7)",
				});
			}

			// Card content stagger
			const elements = card.querySelectorAll(
				".card-title, .price-tag, .card-description, .card-hours, .card-rate, .card-monthly, .card-button"
			);
			gsap.set(elements, { opacity: 1, y: 0 });
			gsap.from(elements, {
				opacity: 0,
				y: 20,
				duration: 0.8,
				stagger: 0.1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: card,
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
			});
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section ref={sectionRef} className="bg-black text-white py-24">
			<div className="container mx-auto px-6">
				<h2
					ref={headingRef}
					className="text-6xl font-bold mb-20 max-w-4xl leading-tight opacity-0"
				>
					Get custom website support and development —<br />
					all at a simple flat rate!
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{pricingOptions.map((option, index) => (
						<PricingCard key={index} {...option} />
					))}
				</div>
			</div>
			<FeaturesList />
			<GettingStarted />
		</section>
	);
};

export default PricingCards;
