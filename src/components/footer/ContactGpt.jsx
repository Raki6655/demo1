"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./footer.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactGpt() {
	const containerRef = useRef(null);
	const textRef = useRef(null);
	const particlesRef = useRef([]);
	const [positions, setPositions] = useState([]);

	useEffect(() => {
		const newPositions = [...Array(20)].map(() => ({
			top: `${Math.random() * 100}%`,
			left: `${Math.random() * 100}%`,
			animationDelay: `${Math.random() * 2}s`,
		}));
		setPositions(newPositions);
	}, []);

	useGSAP(
		() => {
			gsap.from(textRef.current?.children || [], {
				opacity: 0,
				y: 100,
				stagger: 0.08,
				duration: 1.2,
				ease: "power4.out",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 75%",
				},
			});

			gsap.to(particlesRef.current, {
				y: "+=20",
				duration: 2,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white flex items-center justify-center px-6"
		>
			{/* Floating Particles */}
			<div className="absolute inset-0 pointer-events-none">
				{positions.map((pos, i) => (
					<div
						key={i}
						ref={(el) => (particlesRef.current[i] = el)}
						className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 animate-pulse"
						style={{
							top: pos.top,
							left: pos.left,
							animationDelay: pos.animationDelay,
						}}
					/>
				))}
			</div>

			{/* Main Content */}
			<div ref={textRef} className="text-center space-y-12 max-w-2xl">
				<h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 leading-tight">
					Let’s Create <br /> <span className="text-white">Something</span>{" "}
					<br />
					<span className="text-cyan-400">Amazing</span>
				</h1>

				<div className="relative inline-block group">
					<button className="px-14 py-5 text-2xl font-semibold bg-white/10 backdrop-blur-lg rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50 relative overflow-hidden">
						<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent relative z-10">
							Start Collaborating
						</span>
						<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-10 transition-opacity duration-300 group-hover:opacity-30" />
					</button>
				</div>
			</div>

			{/* Footer Gradient */}
			<div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-t from-blue-900 via-purple-900 to-transparent pointer-events-none" />
		</section>
	);
}
