"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
	{
		title: "Neon Nexus Dashboard",
		image: "/projects/dash.png",
		desc: "Real-time analytics platform with AI insights",
		tech: ["React", "Three.js", "WebGL"],
		link: "#",
	},
	{
		title: "Cyber Market",
		image: "/projects/market.png",
		desc: "NFT marketplace with 3D visualization",
		tech: ["Next.js", "Solidity", "GraphQL"],
		link: "#",
	},
	{
		title: "Quantum Stream",
		image: "/projects/stream.png",
		desc: "Low-latency video streaming service",
		tech: ["WebRTC", "Node.js", "Redis"],
		link: "#",
	},
	// Add 3 more projects
];

export default function ProjectsSection() {
	const containerRef = useRef(null);
	const cardsRef = useRef([]);

	useGSAP(
		() => {
			// Card animations
			cardsRef.current.forEach((card, i) => {
				gsap.from(card, {
					scrollTrigger: {
						trigger: card,
						start: "top center+=100",
						toggleActions: "play none none reverse",
					},
					x: i % 2 === 0 ? -100 : 100,
					opacity: 0,
					rotateY: 30,
					duration: 1,
					ease: "power4.out",
					delay: i * 0.2,
				});

				// Hover animation
				gsap.to(card, {
					rotateY: 5,
					rotateX: 5,
					duration: 0.5,
					ease: "power2.out",
					paused: true,
					overwrite: "auto",
					onStart: () => gsap.to(card, { zIndex: 10 }),
					onReverseComplete: () => gsap.to(card, { zIndex: 1 }),
				});

				card?.addEventListener("mouseenter", () =>
					gsap.to(card, { scale: 1.05 })
				);
				card?.addEventListener("mouseleave", () => gsap.to(card, { scale: 1 }));
			});

			// Background elements animation
			gsap.to(".grid-pattern", {
				opacity: 0.1,
				duration: 5,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});
		},
		{ scope: containerRef }
	);

	return (
		<div
			ref={containerRef}
			className="relative py-24 bg-[#0a0c1a] overflow-hidden"
		>
			{/* Animated Background */}
			<div className="absolute inset-0 pointer-events-none">
				<svg className="grid-pattern opacity-20" width="100%" height="100%">
					<pattern
						id="smallGrid"
						width="40"
						height="40"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M 40 0 L 0 0 0 40"
							fill="none"
							stroke="#00ff88"
							strokeWidth="1"
						/>
					</pattern>
					<rect width="100%" height="100%" fill="url(#smallGrid)" />
				</svg>

				{[...Array(12)].map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-[#00c6ff] rounded-full"
						style={{
							top: `${Math.floor(Math.random() * 100)}%`,
							left: `${Math.floor(Math.random() * 100)}%`,
							animation: `float ${6 + i}s infinite linear`,
						}}
					/>
				))}
			</div>

			{/* Section Heading */}
			<h2
				className="text-[120px] font-bold text-center mb-24 text-transparent 
        bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#00ff88]"
			>
				DIGITAL ARSENAL
			</h2>

			{/* Project Cards */}
			<div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, i) => (
					<div
						key={project.title}
						ref={(el) => el && (cardsRef.current[i] = el)}
						className="relative h-[500px] bg-black/30 backdrop-blur-lg rounded-2xl 
                     border-2 border-white/10 hover:border-[#00ff88]/50 transition-all
                     overflow-hidden group"
					>
						{/* Image Container */}
						<div className="relative h-3/4 overflow-hidden">
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover grayscale group-hover:grayscale-0 transition-all"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
						</div>

						{/* Content */}
						<div className="p-6 relative">
							<h3 className="text-2xl font-bold text-white mb-2">
								{project.title}
							</h3>
							<p className="text-white/80 mb-4">{project.desc}</p>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 text-sm bg-white/5 rounded-full text-[#00ff88]"
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						{/* Hover Overlay */}
						<div
							className="absolute inset-0 bg-gradient-to-br from-[#00c6ff]/10 to-[#00ff88]/10 
              opacity-0 group-hover:opacity-100 transition-opacity"
						/>

						{/* Shine Effect */}
						<div
							className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 
              to-transparent opacity-0 group-hover:opacity-30 animate-shinee"
						/>
					</div>
				))}
			</div>

			{/* Floating Tech Tags */}
			<div className="absolute top-1/2 left-8 -translate-y-1/2 space-y-4 rotate-90">
				{["REACT", "WEB3", "AI/ML", "BLOCKCHAIN"].map((tag, i) => (
					<span
						key={tag}
						className="block text-2xl font-bold text-white/10 hover:text-white/30 
              transition-all cursor-default"
					>
						{tag}
					</span>
				))}
			</div>

			{/* <style jsx global>{`
				@keyframes float {
					0% {
						transform: translateY(0) translateX(0);
					}
					50% {
						transform: translateY(-20px) translateX(10px);
					}
					100% {
						transform: translateY(0) translateX(0);
					}
				}
				@keyframes shine {
					0% {
						transform: translateX(-100%) skewX(-20deg);
					}
					100% {
						transform: translateX(200%) skewX(-20deg);
					}
				}
				.animate-shine {
					animation: shine 3s infinite linear;
				}
			`}</style> */}
		</div>
	);
}
