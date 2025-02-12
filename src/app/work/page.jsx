"use client";
import PageContainer from "@/components/utils/PageContainer";
import React from "react";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function index() {
	const containerRef = useRef(null);
	const [isClient, setIsClient] = useState(false);
	const images = [
		"/images/background_banner.png",
		"/work/2.jpg",
		"/work/3.jpg",
		"/work/4.jpg",
		"/work/5.jpg",
		"/work/6.jpg",
		"/work/7.jpg",
		"/work/8.jpg",
		"/work/9.jpg",
		"/work/10.jpg",
		"/work/11.jpg",
		"/work/12.jpg",
		"/work/13.jpg",
		"/work/14.jpg",
		"/work/15.jpg",
	];

	useEffect(() => {
		setIsClient(true);
	}, []);

	useGSAP(
		() => {
			// Image animations
			gsap.utils.toArray(".work-image").forEach((image, i) => {
				gsap.from(image, {
					opacity: 0,
					y: 100,
					scale: 0.8,
					duration: 1,
					delay: i * 0.1,
					scrollTrigger: {
						trigger: image,
						start: "top center+=100",
						toggleActions: "play none none reverse",
					},
				});
			});

			// Text animation
			gsap.from(".hero-text", {
				opacity: 0,
				y: 50,
				duration: 1,
				ease: "power4.out",
			});
		},
		{ scope: containerRef }
	);

	return (
		<div
			ref={containerRef}
			className="relative min-h-screen bg-gradient-to-b from-gray-950 to-gray-900"
		>
			{/* Hero Section */}
			<div className="h-screen flex items-center justify-center">
				<div className="text-center max-w-4xl px-4">
					<h1 className="hero-text text-[6rem] font-bold  bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 leading-none mb-8">
						Our Portfolio
					</h1>
					<p className="hero-text text-2xl text-white/80">
						Showcasing our best work that transformed businesses
					</p>
				</div>
			</div>

			{/* Gallery Grid */}
			{isClient && (
				<div className="container mx-auto px-4 py-24">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{images.map((src, i) => (
							<div
								key={i}
								className={`work-image relative overflow-hidden rounded-lg aspect-[${
									Math.random() * 0.5 + 0.75
								}]`}
								style={{
									gridRow: `span ${Math.floor(Math.random() * 2) + 1}`,
									gridColumn: `span ${Math.floor(Math.random() * 2) + 1}`,
								}}
							>
								<img
									src={src}
									alt={`Work ${i + 1}`}
									className="absolute inset-0 w-full h-[50vh] object-cover transform hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
									<h3 className="text-white text-xl font-bold">
										Project {i + 1}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Client-side only elements */}
			{isClient && (
				<>
					{/* Floating Particles */}
					<div className="absolute inset-0 pointer-events-none">
						{[...Array(30)].map((_, i) => (
							<div
								key={i}
								className="absolute w-1 h-1 bg-white rounded-full"
								style={{
									top: `${Math.random() * 100}%`,
									left: `${Math.random() * 100}%`,
									animation: `float ${5 + i}s infinite`,
								}}
							/>
						))}
					</div>

					{/* Background Shapes */}
					<div className="absolute inset-0 pointer-events-none">
						{[...Array(5)].map((_, i) => (
							<div
								key={i}
								className="absolute w-24 h-24 border-2 border-white/10 rounded-full"
								style={{
									top: `${Math.random() * 100}%`,
									left: `${Math.random() * 100}%`,
									animation: `float ${8 + i}s infinite`,
								}}
							/>
						))}
					</div>
				</>
			)}

			<style jsx global>{`
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

				.work-image {
					transition: transform 0.3s ease, box-shadow 0.3s ease;
				}

				.work-image:hover {
					transform: translateY(-5px);
					box-shadow: 0 10px 30px rgba(0, 194, 255, 0.3);
				}
			`}</style>
		</div>
	);
}
// const index = () => {
// 	return (
// 		<PageContainer>
// 			<div>Work</div>;
// 		</PageContainer>
// 	);
// };

// export default index;
