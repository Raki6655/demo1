"use client";
import PageContainer from "@/components/utils/PageContainer";
import React, { useEffect, useState } from "react";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./tech.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function index() {
	const containerRef = useRef(null);
	const sectionRefs = useRef([]);
	const techIconsRef = useRef([]);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);
	const [particles, setParticles] = useState([]);

	useEffect(() => {
		const generatedParticles = isClient
			? Array.from({ length: 30 }, (_, i) => ({
					id: i,
					top: `${Math.random() * 100}%`,
					left: `${Math.random() * 100}%`,
					duration: `${5 + i}s`,
			  }))
			: [];
		setParticles(generatedParticles);
	}, [isClient]);

	useEffect(() => {
		sectionRefs.current.forEach((section, i) => {
			gsap.to(section, {
				opacity: 1,
				y: 100,
				duration: 1,
				ease: "power4.out",
				scrollTrigger: {
					scrub: true,
					trigger: section,
					start: "top center+=100",
					toggleActions: "play none none reverse",
				},
			});
		});

		// Tech icons animation
		techIconsRef.current.forEach((icon, i) => {
			gsap.to(icon, {
				opacity: 1,
				scale: 0.8,
				y: 0,
				duration: 0.8,
				delay: i * 0.1,
				scrollTrigger: {
					trigger: icon,
					scrub: true,
					start: "top center+=150",
					toggleActions: "play none none reverse",
				},
			});
		});

		// Continuous background animations
		gsap.to(".floating-tech", {
			y: 30,
			duration: 8,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});
	}, []);

	const technologies = [
		{ name: "React", icon: "/techIcons/reactjs.png" },
		{ name: "Next.js", icon: "/techIcons/nextjs.png" },
		{ name: "Node.js", icon: "/techIcons/nodejs.jpeg" },
		{ name: "Three.js", icon: "/techIcons/threejs.png" },
		{ name: "GSAP", icon: "/techIcons/gsap.png" },
		{ name: "Figma", icon: "/techIcons/figma.png" },
		{ name: "Blender", icon: "/techIcons/blender.png" },
		{ name: "WebGL", icon: "/techIcons/webgl.png" },
	];

	return (
		<PageContainer>
			<div
				ref={containerRef}
				className="relative min-h-[200vh] min-w-[100vw] max-w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
			>
				{/* Hero Section */}
				<div className="h-screen flex items-center justify-center relative overflow-hidden">
					<div className="bgImageTech h-[100vh] w-[100vw] absolute "></div>
					<div className="text-center max-w-4xl px-4 relative z-10">
						<h1 className="text-[3.5rem] lg:text-[6rem] font-bold leading-none mb-8">
							<span className=" bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
								Tech & Innovation
							</span>
							<br />
							<span className="text-white text-sm lg:text-xl lg:text-5xl font-medium mt-4">
								Where Creativity Meets Technology
							</span>
						</h1>
					</div>

					{/* Floating Tech Elements */}
					{/* {isClient && (
						<div className="absolute inset-0 pointer-events-none">
							{[...Array(8)].map((_, i) => (
								<img
									key={i}
									src={technologies[i].icon}
									alt=""
									className={`floating-tech absolute w-24 h-24 opacity-10`}
									style={{
										top: `${Math.random() * 100}%`,
										left: `${Math.random() * 100}%`,
										animationDelay: `${i * 2}s`,
									}}
								/>
							))}
						</div>
					)} */}
				</div>

				{/* Content Sections */}
				<div className="container mx-auto px-4 space-y-12 lg:space-y-48 py-12 lg:py-48">
					{/* Our Team */}
					<div
						ref={(el) => sectionRefs.current.push(el)}
						className="grid md:grid-cols-2 gap-16 items-center opacity-0 translate-y-[100px]"
					>
						<div className="space-y-8">
							<h2 className="text-3xl lg:text-5xl font-bold text-white">
								Our Powerhouse Team
							</h2>
							<div className="text-sm lg:text-xl text-white/80 leading-relaxed">
								We're a diverse collective of passionate professionals:
								<ul className="mt-4 space-y-2">
									{[
										"Full-stack Developers",
										"UI/UX Designers",
										"Motion Designers",
										"DevOps Engineers",
										"AI Specialists",
									].map((role, i) => (
										<li key={i} className="flex items-center space-x-3">
											<div className="w-2 h-2 bg-cyan-400 rounded-full" />
											<span>{role}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="relative h-24 lg:h-96">
							<div className="absolute inset-0 bg-[url('/team.jpg')] bg-cover bg-center rounded-3xl shadow-2xl" />
						</div>
					</div>

					{/* Our Tech Stack */}
					<div
						ref={(el) => sectionRefs.current.push(el)}
						className="space-y-16"
					>
						<h2 className="text-3xl lg:text-5xl font-bold text-white text-center">
							Modern Tech Stack
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
							{technologies.map((tech, i) => (
								<div
									key={tech.name}
									ref={(el) => (techIconsRef.current[i] = el)}
									className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all opacity-0 translate-y-[100px]"
								>
									<img
										src={tech.icon}
										alt={tech.name}
										className="w-24 h-24 mx-auto object-contain"
									/>
									<p className="text-center text-white/80 mt-4">{tech.name}</p>
								</div>
							))}
						</div>
					</div>

					{/* Our Philosophy */}
					<div
						ref={(el) => sectionRefs.current.push(el)}
						className="grid md:grid-cols-2 gap-16 items-center opacity-0 translate-y[100px]"
					>
						<div className="space-y-8 my-24 lg:my-0">
							<h2 className="text-3xl lg:text-5xl font-bold text-white">
								Motion & Interaction
							</h2>
							<div className="text-sm lg:text-xl text-white/80 leading-relaxed">
								We believe in creating digital experiences that feel alive. Our
								approach combines:
								<ul className="mt-4 space-y-2">
									{[
										"Micro-interactions",
										"Smooth Transitions",
										"Physics-based Animations",
										"3D Visualizations",
										"Immersive Storytelling",
									].map((item, i) => (
										<li key={i} className="flex items-center space-x-3">
											<div className="w-2 h-2 bg-cyan-400 rounded-full" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="relative h-24 lg:h-96">
							<div className="absolute inset-0 bg-[url('/motion.jpg')] bg-cover bg-center rounded-3xl shadow-2xl" />
						</div>
					</div>
				</div>

				{isClient && (
					<div className="absolute inset-0 pointer-events-none">
						{particles.map((particle, i) => (
							<div
								key={i}
								className="absolute w-1 h-1 bg-white rounded-full"
								style={{
									top: particle.top,
									left: particle.left,
									animation: `float ${particle.duration} infinite`,
								}}
							/>
						))}
					</div>
				)}
			</div>
		</PageContainer>
	);
}
// const index = () => {
// 	return (
// 		<PageContainer>
// 			<div className="">Tech</div>
// 		</PageContainer>
// 	);
// };

// export default index;
