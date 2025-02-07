// components/landing.tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function LandingPage() {
	const containerRef = useRef < HTMLDivElement > null;
	const headlineRef = useRef < HTMLDivElement > null;
	const ctaRef = useRef < HTMLButtonElement > null;
	const navRef = useRef < HTMLElement > null;

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

			gsap.from(ctaRef.current, {
				scale: 0.8,
				opacity: 0,
				duration: 1.5,
				ease: "elastic.out(1, 0.5)",
				delay: 1.2,
			});

			// CTA hover animation
			ctaRef.current?.addEventListener("mouseenter", () => {
				gsap.to(ctaRef.current, {
					scale: 1.05,
					duration: 0.3,
					ease: "power2.out",
				});
			});

			ctaRef.current?.addEventListener("mouseleave", () => {
				gsap.to(ctaRef.current, {
					scale: 1,
					duration: 0.3,
					ease: "power2.out",
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
							<h1 className="text-8xl font-bold text-white opacity-0 translate-y-20">
								Step Into
							</h1>
						</div>
						<div className="overflow-hidden">
							<h1 className="text-8xl font-bold text-white opacity-0 translate-y-20">
								Modern Elegance
							</h1>
						</div>
						<div className="pt-8 overflow-hidden">
							<p className="text-xl text-white/80 opacity-0 translate-y-20 max-w-2xl">
								Discover footwear that blends cutting-edge design with
								unparalleled comfort. Crafted for those who refuse to compromise
								on style or performance.
							</p>
						</div>
					</div>

					{/* Glowing CTA */}
					<button
						ref={ctaRef}
						className="mt-12 px-12 py-4 bg-white text-[#090b21] rounded-full 
            text-lg font-semibold relative overflow-hidden transform transition-transform
            hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.3)]"
					>
						Explore Collection
						<div
							className="absolute inset-0 border-2 border-white/30 rounded-full 
              animate-pulse pointer-events-none"
						/>
					</button>
				</div>
			</div>

			{/* Animated Background Elements */}
			<div className="absolute inset-0 pointer-events-none">
				{/* SVG Line Patterns */}
				<svg
					className="absolute top-0 left-0 w-full h-full opacity-10"
					viewBox="0 0 100 100"
				>
					<path
						d="M0 50h100M50 0v100"
						stroke="white"
						strokeWidth="0.5"
						vectorEffect="non-scaling-stroke"
					/>
					<path
						d="M0 0l100 100M0 100L100 0"
						stroke="white"
						strokeWidth="0.5"
						vectorEffect="non-scaling-stroke"
					/>
				</svg>

				{/* Floating Shoe Silhouette (Add your actual shoe image) */}
				<div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 mix-blend-lighten">
					<Image
						src="/shoe-silhouette.png"
						alt="Shoe silhouette"
						width={800}
						height={800}
						className="object-contain"
					/>
				</div>
			</div>
		</div>
	);
}
