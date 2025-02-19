"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import dynamic from "next/dynamic";

// Dynamically load heavy components
const ShinyButton = dynamic(() => import("./ShinyButton.jsx"), { ssr: false });
const CubeTextAnimation = dynamic(() => import("./text/MovingText.jsx"), {
	ssr: false,
});

// Simplify SVG paths
const BackgroundLines = () => (
	<svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
		<defs>
			<linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" stopColor="#00c6ff" stopOpacity="0.8" />
				<stop offset="50%" stopColor="#0072ff" stopOpacity="0.8" />
				<stop offset="100%" stopColor="#00c6ff" stopOpacity="0.8" />
			</linearGradient>
		</defs>
		{/* Reduced number of paths */}
		{[...Array(8)].map((_, i) => (
			<path
				key={i}
				d={`M${i * 12.5} 0v100M0 ${i * 12.5}h100`}
				stroke="url(#lineGradient)"
				strokeWidth="0.8"
				vectorEffect="non-scaling-stroke"
			/>
		))}
	</svg>
);

export default function LandingDemo() {
	const containerRef = useRef(null);
	const headlineRef = useRef(null);
	const bannerRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	// Mobile detection
	useEffect(() => {
		setIsMobile(window.innerWidth <= 768);
	}, []);

	// Optimized Lenis setup
	useEffect(() => {
		const lenis = new Lenis({
			smooth: true,
			lerp: isMobile ? 0.2 : 0.1, // Smoother on mobile
			touchMultiplier: 2,
		});

		const raf = (time) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};
		requestAnimationFrame(raf);

		return () => lenis.destroy();
	}, [isMobile]);

	// Optimized GSAP animations
	useGSAP(
		() => {
			gsap.registerPlugin(ScrollTrigger);

			// Simplified animations
			gsap.from(headlineRef.current?.children || [], {
				opacity: 0,
				y: 30,
				stagger: 0.1,
				duration: 1.2,
				ease: "power2.out",
				delay: 0.5,
			});

			// Mobile-optimized banner animation
			const bannerAnimation = gsap.to(bannerRef.current, {
				clipPath: isMobile
					? "circle(15% at 50% 75%)"
					: "circle(20% at 80% 50%)",
				duration: 2,
				ease: "power2.out",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "+=100%",
					scrub: true,
					markers: false,
				},
			});

			return () => bannerAnimation.kill();
		},
		{ scope: containerRef, dependencies: [isMobile] }
	);

	return (
		<div
			ref={containerRef}
			className="min-h-screen bg-[#090b21] relative overflow-hidden"
			style={{ willChange: "transform" }} // Promote to own layer
		>
			{/* Optimized Banner */}
			<div
				ref={bannerRef}
				className="banner-img"
				style={{
					backgroundImage: "url('/images/background_banner.png')", // Use WebP format
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>

			<div className="outroTextContent absolute w-full">
				<CubeTextAnimation />
			</div>

			{/* Main Content */}
			<div className="h-screen w-full flex items-start lg:items-center px-2 lg:px-8">
				<div className="max-w-7xl ml-0 lg:ml-[6vw] relative z-10 flex flex-col items-center lg:block">
					<div
						ref={headlineRef}
						className="space-y-4 w-full mt-[10rem] lg:mt-[6rem]"
					>
						{["Elevate Your Style,", "Embrace the", "Extraordinary"].map(
							(text, i) => (
								<div key={i} className="overflow-hidden">
									<h1 className="text-4xl lg:text-8xl font-bold text-white text-center lg:text-start leading-8">
										{text}
									</h1>
								</div>
							)
						)}
						<div className="pt-1 lg:pt-8">
							<p className="text-sm lg:text-xl text-white/80 max-w-2xl text-center lg:text-start">
								A really good website can be the difference between success and
								failure!
							</p>
						</div>
					</div>
					<ShinyButton name={"Explore"} />
				</div>
			</div>

			{/* Optimized Background */}
			<BackgroundLines />

			{/* Performance optimizations */}
			<style jsx global>{`
				/* Promote animated elements to GPU layers */
				.banner-img,
				.outroTextContent {
					transform: translateZ(0);
					backface-visibility: hidden;
				}

				/* Disable animations on mobile */
				@media (max-width: 768px) {
					.svg path {
						animation: none !important;
					}
				}
			`}</style>
		</div>
	);
}
