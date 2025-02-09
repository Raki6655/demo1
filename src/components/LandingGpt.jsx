"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Landing() {
	const containerRef = useRef(null);
	const headlineRef = useRef(null);
	const ctaRef = useRef(null);
	const navRef = useRef(null);
	const lineRefs = useRef([]);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	// GSAP Animations
	useGSAP(
		() => {
			// Initial animations
			gsap.from(navRef.current?.children || [], {
				opacity: 0,
				y: -20,
				stagger: 0.2,
				duration: 1,
				ease: "power4.out",
			});

			gsap.from(headlineRef.current?.children || [], {
				opacity: 0,
				y: 40,
				stagger: 0.1,
				duration: 1.2,
				ease: "expo.out",
				delay: 0.5,
			});

			// CTA Animation
			gsap.from(ctaRef.current, {
				scale: 0.8,
				opacity: 0,
				duration: 1.5,
				ease: "elastic.out(1, 0.5)",
				delay: 1.2,
			});

			// Line wave animation
			lineRefs.current.forEach((line, i) => {
				if (!line) return;

				gsap.fromTo(
					line,
					{ strokeDashoffset: 1000 },
					{
						strokeDashoffset: 0,
						duration: 2 + i * 0.2,
						repeat: -1,
						ease: "power1.inOut",
					}
				);

				gsap.to(line, {
					opacity: 0.8,
					repeat: -1,
					yoyo: true,
					duration: 3,
					delay: i * 0.1,
					ease: "sine.inOut",
				});
			});
		},
		{ scope: containerRef }
	);

	return (
		<div
			ref={containerRef}
			className="min-h-screen bg-[#090b21] relative overflow-hidden"
		>
			{/* Navigation remains same */}

			{/* Main Content remains same */}

			{/* Enhanced Glowing Lines Background */}
			<div className="absolute inset-0 pointer-events-none">
				<svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
					{[...Array(20)].map((_, i) => (
						<path
							key={i}
							ref={(el) => (lineRefs.current[i] = el)}
							d={`M${i * 5} 0v100M0 ${i * 5}h100`}
							stroke="url(#lineGradient)"
							strokeWidth="0.8"
							strokeDasharray="1000"
							vectorEffect="non-scaling-stroke"
						/>
					))}
					<defs>
						<linearGradient
							id="lineGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop offset="0%" stopColor="#00c6ff" stopOpacity="0.8" />
							<stop offset="50%" stopColor="#0072ff" stopOpacity="0.8" />
							<stop offset="100%" stopColor="#00c6ff" stopOpacity="0.8" />
						</linearGradient>

						<filter id="glow">
							<feGaussianBlur stdDeviation="2" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>
				</svg>

				{/* Client-side only particles to fix hydration error */}
				{isClient && (
					<div className="absolute inset-0">
						{[...Array(30)].map((_, i) => (
							<div
								key={i}
								className="absolute w-1 h-1 bg-white rounded-full"
								style={{
									top: `${Math.random() * 100}%`,
									left: `${Math.random() * 100}%`,
									animation: `float ${
										5 + Math.random() * 10
									}s infinite ease-in-out`,
								}}
							/>
						))}
					</div>
				)}
			</div>

			{/* Global Styles */}
			<style jsx global>{`
				@keyframes float {
					0% {
						transform: translateY(0) translateX(0);
						opacity: 0.3;
					}
					50% {
						transform: translateY(-20px) translateX(20px);
						opacity: 0.8;
					}
					100% {
						transform: translateY(0) translateX(0);
						opacity: 0.3;
					}
				}

				path {
					filter: url(#glow);
				}
			`}</style>
		</div>
	);
}
