"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// interface Feature {
//   id: number;
//   text: string;
// }

const FeaturesList = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const leftColumnRef = useRef(null);
	const rightColumnRef = useRef(null);

	const leftFeatures = [
		{
			id: 1,
			text: "Unused hours roll over each month — never lose what you’ve paid for",
		},
		{
			id: 2,
			text: "Personalized account and project management for smoother workflows",
		},
		{
			id: 3,
			text: "Direct access to our senior-level experts on every project",
		},
	];

	const rightFeatures = [
		{
			id: 4,
			text: "Pause or cancel your plan anytime with complete flexibility",
		},
		{
			id: 5,
			text: "Seamless onboarding and training support for your team members",
		},
		{
			id: 6,
			text: "Lightning-fast, same-day responses to keep your project moving",
		},
	];

	useEffect(() => {
		// Heading reveal animation
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

		// Left column features reveal
		const leftFeatureItems =
			leftColumnRef.current.querySelectorAll(".feature-item");
		gsap.set(leftFeatureItems, { opacity: 1, x: 0 });
		gsap.from(leftFeatureItems, {
			opacity: 0,
			x: -50,
			duration: 0.8,
			stagger: 0.2,
			scrollTrigger: {
				trigger: leftColumnRef.current,
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
		});

		// Right column features reveal
		const rightFeatureItems =
			rightColumnRef.current.querySelectorAll(".feature-item");
		gsap.set(rightFeatureItems, { opacity: 1, x: 0 });
		gsap.from(rightFeatureItems, {
			opacity: 0,
			x: 50,
			duration: 0.8,
			stagger: 0.2,
			scrollTrigger: {
				trigger: rightColumnRef.current,
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
		});

		// Number circles reveal and bounce
		const numberCircles = document.querySelectorAll(".number-circle");
		gsap.set(numberCircles, { opacity: 1, scale: 1 });
		gsap.from(numberCircles, {
			opacity: 0,
			scale: 0.5,
			duration: 0.6,
			stagger: 0.1,
			ease: "back.out(1.7)",
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="bg-black text-white py-16 border-t border-[#222222]"
		>
			<div className="container mx-auto px-6">
				<h2 ref={headingRef} className="text-3xl font-medium mb-12">
					Included in every plan
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
					<div ref={leftColumnRef} className="space-y-8">
						{leftFeatures.map((feature) => (
							<div
								key={feature.id}
								className="feature-item flex items-start border-b border-[#222222] pb-6 opacity-0"
							>
								<div className="number-circle flex-shrink-0 w-8 h-8 rounded-full bg-[#5000FF] flex items-center justify-center mr-4 text-white text-sm font-medium">
									{feature.id}
								</div>
								<p className="text-white text-base pt-1.5">{feature.text}</p>
							</div>
						))}
					</div>

					<div ref={rightColumnRef} className="space-y-8">
						{rightFeatures.map((feature) => (
							<div
								key={feature.id}
								className="feature-item flex items-start border-b border-[#222222] pb-6 opacity-0"
							>
								<div className="number-circle flex-shrink-0 w-8 h-8 rounded-full bg-[#5000FF] flex items-center justify-center mr-4 text-white text-sm font-medium">
									{feature.id}
								</div>
								<p className="text-white text-base pt-1.5">{feature.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesList;
