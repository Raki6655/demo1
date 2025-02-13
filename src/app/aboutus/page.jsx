"use client";
import PageContainer from "@/components/utils/PageContainer";
import React, { useEffect, useState } from "react";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function index() {
	const containerRef = useRef(null);
	const sectionRefs = useRef([]);
	const [particles, setParticles] = useState([]);

	useEffect(() => {
		const generatedParticles = Array.from({ length: 30 }, (_, i) => ({
			id: i,
			top: `${Math.random() * 100}%`,
			left: `${Math.random() * 100}%`,
			duration: `${5 + i}s`,
		}));
		setParticles(generatedParticles);
	}, []);
	console.log(sectionRefs);
	useEffect(() => {
		// Refresh ScrollTrigger after all elements are mounted
		ScrollTrigger.refresh();

		// Add this cleanup function
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	useEffect(() => {
		sectionRefs.current.forEach((section, i) => {
			gsap.to(section, {
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power4.out",
				scrollTrigger: {
					trigger: section,
					scrub: true,
					start: "top bottom-=100", // Triggers when top of element hits bottom of viewport
					end: "bottom center", // Ends when bottom of element hits center of viewport
					// toggleActions: "play none none reverse",
				},
			});
		});

		// Floating illustrations
		gsap.to(".floating-illustration", {
			y: 30,
			duration: 3,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});
	}, []);

	return (
		<PageContainer>
			{" "}
			<div
				ref={containerRef}
				className="relative min-h-[200vh] min-w-[100vw] bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 "
			>
				{/* Hero Section */}
				<div className="h-screen flex items-center justify-center relative overflow-hidden">
					<div className="text-center max-w-4xl px-4 relative">
						{/* Gradient Background Block */}
						<div className="absolute -inset-8 bg-gradient-to-r from-cyan-300/20 to-blue-400/20 blur-3xl rounded-full z-0" />

						{/* Text Container */}
						<div className="relative z-10">
							<h1 className="text-[4rem] lg:text-[6rem] font-bold leading-none mb-8">
								<span className="text-white bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400  relative mb-6">
									Crafting Digital
									{/* Glow Effect */}
									<span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 blur-2xl opacity-30 -z-10" />
								</span>
								<br />
								<span className="text-[3rem] lg:text-5[rem] text-white bg-gradient-to-r from-white/10 to-white/5 bg-clip-text text-transparent mt-10">
									Experiences
								</span>
							</h1>
							<p className="text-md lg:text-2xl text-white/80 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 inline-block mt-10">
								Since 2023, we've been transforming ideas into impactful digital
								solutions
							</p>
						</div>
					</div>

					{/* Floating Illustrations */}
					<div className="absolute inset-0 pointer-events-none">
						<svg className="floating-illustration absolute top-1/4 left-1/4 w-64 h-64 opacity-30">
							<circle
								cx="128"
								cy="128"
								r="120"
								stroke="#00c6ff"
								strokeWidth="4"
								fill="none"
							/>
						</svg>
						<svg className="floating-illustration absolute top-1/3 right-1/4 w-48 h-48 opacity-30">
							<rect
								x="24"
								y="24"
								width="192"
								height="192"
								stroke="#00ff88"
								strokeWidth="4"
								fill="none"
							/>
						</svg>
					</div>
				</div>

				{/* About Sections */}
				<div className="container mx-auto px-4 space-y-12 lg:space-y-48 py-12 lg:py-48">
					{/* Our Story */}
					<div
						ref={(el) => sectionRefs.current.push(el)}
						className="grid md:grid-cols-2 gap-16 items-center opacity-0 translate-y-[100px] "
					>
						<div className="space-y-8  translate-y-[100px]">
							<h2 className="text-3xl lg:text-5xl font-bold text-white">
								Our Story
							</h2>
							<p className="text-sm lg:text-xl text-white/80 leading-relaxed">
								Founded in 2023, we started as a small team of passionate
								creators. Today, we've grown into a full-service digital agency,
								delivering innovative solutions to clients worldwide. Our
								journey has been marked by continuous learning, creative
								exploration, and a commitment to excellence.
							</p>
						</div>
						<div className="relative h-24 lg:h-96">
							<div className="absolute inset-0 bg-[url('/about1.jpg')] bg-cover bg-center rounded-3xl shadow-2xl" />
						</div>
					</div>

					{/* Services */}
					<div
						ref={(el) => sectionRefs.current.push(el)}
						className="grid md:grid-cols-2 gap-16 items-center opacity-0 translate-y-[100px] "
					>
						<div className="relative h-24 lg:h-96 order-2 md:order-1">
							<div className="absolute inset-0 bg-[url('/services.jpg')] bg-cover bg-center rounded-3xl shadow-2xl" />
						</div>
						<div className="space-y-8 order-1 md:order-2">
							<h2 className="text-3xl lg:text-5xl font-bold text-white">
								Our Expertise
							</h2>
							<div className="grid grid-cols-2 gap-6 lg:gap-4">
								{[
									"Web Development",
									"App Creation",
									"UI/UX Design",
									"Video Editing",
									"Motion Graphics",
									"Brand Strategy",
								].map((service, i) => (
									<div
										key={i}
										className="p-2 lg:p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all flex items-center justify-center"
									>
										<h3 className="text-md lg:text-xl font-semibold text-white">
											{service}
										</h3>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Philosophy */}
					<div
						ref={(el) => sectionRefs.current.push(el)}
						className="grid md:grid-cols-2 gap-16 items-center opacity-0 translate-y-[100px]"
					>
						<div className="space-y-8">
							<h2 className="text-3xl lg:text-5xl font-bold text-white">
								Our Philosophy
							</h2>
							<p className="text-sm lg:text-xl text-white/80 leading-relaxed">
								We believe in creating digital experiences that not only look
								stunning but also deliver real value. Our approach combines
								cutting-edge technology with human-centered design, ensuring
								every solution we create is both innovative and impactful.
							</p>
							<div className="flex gap-4 ">
								<button className="text-sm lg:text-xl px-4 lg:px-8 py-2 lg:py-4 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-white hover:bg-cyan-400/20 transition-all">
									Meet Our Team
								</button>
								<button className="text-sm lg:text-xl px-4 lg:px-8 py-2 lg:py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all">
									View Portfolio
								</button>
							</div>
						</div>
						<div className="relative h-24 lg:h-96">
							<div className="absolute inset-0 bg-[url('/philosophy.jpg')] bg-cover bg-center rounded-3xl shadow-2xl" />
						</div>
					</div>
				</div>

				{/* Floating Particles */}
				<div className="absolute inset-0 pointer-events-none">
					{particles.map((particle) => (
						<div
							key={particle.id}
							className="absolute w-1 h-1 bg-white rounded-full"
							style={{
								top: particle.top,
								left: particle.left,
								animation: `floatt ${particle.duration} infinite`,
							}}
						/>
					))}
				</div>

				{/* <style jsx global>{`
					@keyframes float {
						0% {
							transform: translateY(0) translateX(0);
							opacity: 1;
						}
						50% {
							transform: translateY(-20px) translateX(10px);
							opacity: 0.8;
						}
						100% {
							transform: translateY(0) translateX(0);
							opacity: 1;
						}
					}
				`}</style> */}
			</div>
		</PageContainer>
	);
}
