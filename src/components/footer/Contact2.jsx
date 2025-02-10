"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./footer.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactSection2() {
	const containerRef = useRef(null);
	const textRef = useRef(null);
	const pathsRef = useRef([]);

	const [positions, setPositions] = useState([]);

	useEffect(() => {
		const newPositions = [...Array(12)].map((_, i) => ({
			top: `${Math.random() * 100}%`,
			left: `${Math.random() * 100}%`,
			animation: `float ${3 + i}s infinite`,
		}));
		setPositions(newPositions);
	}, []);
	useGSAP(
		() => {
			// Text animation
			gsap.from(textRef.current?.children || [], {
				opacity: 0,
				y: 100,
				stagger: 0.05,
				duration: 1,
				ease: "power4.out",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top center",
				},
			});

			// SVG path animations
			pathsRef.current.forEach((path, i) => {
				const length = path.getTotalLength();
				gsap.fromTo(
					path,
					{ strokeDasharray: length, strokeDashoffset: length },
					{
						strokeDashoffset: 0,
						duration: 2,
						ease: "power4.out",
						scrollTrigger: {
							trigger: path,
							start: "top center",
							end: "bottom center",
						},
					}
				);
			});

			// Continuous background animations
			gsap.to(".floating-line", {
				x: 100,
				duration: 1,
				repeat: -1,
				yoyo: true,
				ease: "none",
			});

			gsap.to(".rotating-shape", {
				rotation: 360,
				duration: 2,
				repeat: -1,
				ease: "none",
			});
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900/80 via-purple-900/50 to-blue-900/80"
		>
			{/* Animated SVG Background */}
			<svg className="absolute inset-0 w-full h-full opacity-20">
				{/* Flowing lines */}
				<path
					ref={(el) => el && pathsRef.current.push(el)}
					className="floating-line"
					d="M0 50 Q 100 10 200 50 T 400 50"
					stroke="url(#lineGradient)"
					fill="none"
					strokeWidth="0.5"
				/>

				{/* Geometric shapes */}
				<path
					ref={(el) => el && pathsRef.current.push(el)}
					className="rotating-shape"
					transform="translate(500 300)"
					d="M 0,-50 50,0 0,50 -50,0 Z"
					stroke="rgba(255,255,255,0.1)"
					fill="none"
					strokeWidth="1"
				/>

				{/* Shining lines */}
				<path
					d="M0 100 L 100 0"
					stroke="url(#shineGradient)"
					strokeWidth="2"
					className="animate-shine"
				/>

				<defs>
					<linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#8B5CF6" />
						<stop offset="100%" stopColor="#3B82F6" />
					</linearGradient>

					<linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="transparent" />
						<stop offset="50%" stopColor="white" />
						<stop offset="100%" stopColor="transparent" />
					</linearGradient>
				</defs>
			</svg>

			{/* Main Content */}
			<div className="relative h-screen flex items-center justify-center">
				<div ref={textRef} className="text-center space-y-12">
					<h1 className="text-[8rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 leading-none">
						Let's Create
						<br />
						<span className="text-white">Something</span>
						<br />
						<span className="text-cyan-400">Amazing</span>
					</h1>

					<div className="relative inline-block group">
						<button className="px-16 py-6 text-3xl font-semibold bg-white/5 backdrop-blur-lg rounded-full border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(96,165,250,0.3)] hover:shadow-[0_0_60px_-10px_rgba(96,165,250,0.5)]">
							<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
								Start Collaborating
							</span>
						</button>

						{/* Hover particles */}
						<div className="absolute inset-0 pointer-events-none">
							{positions.map((pos, i) => (
								<div
									key={i}
									className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
									style={pos}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-blue-900/90 via-purple-900/70 to-transparent pointer-events-none" />

			{/* <style jsx global>{`
				@keyframes float {
					0% {
						transform: translateY(0) translateX(0);
						opacity: 1;
					}
					50% {
						transform: translateY(-40px) translateX(20px);
						opacity: 0.8;
					}
					100% {
						transform: translateY(0) translateX(0);
						opacity: 1;
					}
				}

				@keyframes shine {
					0% {
						transform: translateX(-100%);
					}
					100% {
						transform: translateX(200%);
					}
				}

				.animate-shine {
					animation: shine 3s linear infinite;
					mask-image: linear-gradient(
						60deg,
						rgba(0, 0, 0, 0.2) 25%,
						rgba(0, 0, 0, 0.8) 50%,
						rgba(0, 0, 0, 0.2) 75%
					);
				}
			`}</style> */}
		</section>
	);
}
