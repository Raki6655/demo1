"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function LandingDeep2() {
	const containerRef = useRef(null);
	const headlineRef = useRef(null);
	const ctaRef = useRef(null);
	const navRef = useRef(null);
	const lineRefs = useRef([]);

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

			// Continuous glow animation for CTA
			const glow = gsap.to(ctaRef.current, {
				backgroundPosition: "200% 0",
				duration: 3,
				ease: "linear",
				repeat: -1,
			});

			// Line animations
			lineRefs.current.forEach((line, i) => {
				gsap.from(line, {
					opacity: 0,
					scaleX: 0,
					duration: 2,
					delay: i * 0.2,
					ease: "power4.out",
				});

				gsap.to(line, {
					opacity: 1,
					repeat: -1,
					yoyo: true,
					duration: 1.5,
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
			className="h-[100vh] w-[100vw] min-h-screen bg-[#090b21] relative overflow-hidden"
		>
			{/* Animated Navigation */}
			<nav
				ref={navRef}
				className="px-8 py-6 fixed w-full top-0 z-50 backdrop-blur-md border-b border-white/10"
			>
				<div className="max-w-7xl mx-auto flex justify-between items-center">
					<span className="text-2xl font-bold text-white">SOLESTYLE</span>
					<div className="space-x-8">
						{["New Arrivals", "Collections", "About"].map((item) => (
							<button
								key={item}
								className="text-white/80 hover:text-white transition-colors duration-300 text-lg"
							>
								{item}
							</button>
						))}
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<div className="h-screen flex items-center px-8">
				<div className="max-w-7xl mx-auto relative z-10">
					<div ref={headlineRef} className="space-y-6">
						<div className="overflow-hidden">
							<h1 className="text-8xl font-bold text-white">Step Into</h1>
						</div>
						<div className="overflow-hidden">
							<h1 className="text-8xl font-bold text-white">Modern Elegance</h1>
						</div>
						<div className="pt-8 overflow-hidden">
							<p className="text-xl text-white/80 max-w-2xl">
								Discover footwear that blends cutting-edge design with
								unparalleled comfort. Crafted for those who refuse to compromise
								on style or performance.
							</p>
						</div>
					</div>

					{/* <button
						ref={ctaRef}
						className="mt-12 px-12 py-4 rounded-full text-lg font-semibold relative overflow-hidden 
            border-2 border-transparent bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#00c6ff] 
            bg-[length:200%_100%] hover:shadow-[0_0_30px_5px_rgba(0,194,255,0.5)] transition-all duration-300"
						style={{
							backgroundClip: "padding-box",
							borderImage: "linear-gradient(45deg, #00c6ff, #0072ff) 1",
							padding: "1rem 3rem",
						}}
					>
						<span className="relative z-10 text-white">Explore Collection</span>
						<div
							className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)] 
              animate-pulse pointer-events-none"
						/>
					</button> */}
				</div>
			</div>

			{/* Enhanced Background Elements */}
			<div className="absolute inset-0 pointer-events-none w-[100vw]">
				{/* Animated SVG Line Patterns */}
				<svg
					className="absolute top-0 left-0 w-full h-full opacity-30"
					viewBox="80 0 60 100"
				>
					{[...Array(50)].map((_, i) => (
						<path
							key={i}
							ref={(el) => (lineRefs.current[i] = el)}
							d={`M${i * 5} 0v100M0 ${i * 5}h100`}
							stroke="url(#lineGradient)"
							strokeWidth="0.5"
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
							<stop offset="0%" stopColor="#00c6ff" />
							<stop offset="50%" stopColor="#0072ff" />
							<stop offset="100%" stopColor="#00c6ff" />
						</linearGradient>
					</defs>
				</svg>

				{/* Floating Particles */}
				<div className="absolute inset-0">
					{[...Array(50)].map((_, i) => (
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
			</div>
			<h1>ggg</h1>

			{/* Global Styles */}
			<style jsx global>{`
				@keyframes float {
					0% {
						transform: translateY(0) translateX(0);
					}
					50% {
						transform: translateY(-20px) translateX(20px);
					}
					100% {
						transform: translateY(0) translateX(0);
					}
				}
			`}</style>
		</div>
	);
}
