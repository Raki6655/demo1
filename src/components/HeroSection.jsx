"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ShinyButton from "./ShinyButton";

gsap.registerPlugin(ScrollTrigger);

const products = [
	{
		id: 1,
		name: "AeroRun",
		price: 249,
		sizes: [7, 8, 9, 10],
		status: "Available",
		image: "/shoe1.png",
	},
	{
		id: 2,
		name: "BeroRun",
		price: 249,
		sizes: [7, 8, 9, 10],
		status: "Available",
		image: "/shoe1.png",
	},
	{
		id: 3,
		name: "CeroRun",
		price: 249,
		sizes: [7, 8, 9, 10],
		status: "Available",
		image: "/shoe1.png",
	},
	// Add other products...
];

export default function HeroSection() {
	const containerRef = useRef(null);
	const [activeProduct, setActiveProduct] = useState(0);
	const infoRefs = useRef([]);

	useGSAP(
		() => {
			// Card Info Animation
			infoRefs.current.forEach((info, i) => {
				gsap.from(info, {
					scrollTrigger: {
						trigger: info,
						start: "top center+=100",
						toggleActions: "play none none reverse",
					},
					y: 100,
					opacity: 0,
					duration: 0.8,
					ease: "power4.out",
					delay: i * 0.2,
				});
			});

			// Background Shape Animation
			gsap.to(".float-shape", {
				y: 30,
				rotation: 360,
				duration: 8,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});
		},
		{ scope: containerRef }
	);

	return (
		<div ref={containerRef} className="min-h-screen relative bg-[#090b21]">
			{/* Animated Background Shapes */}
			<div className="absolute inset-0 pointer-events-none">
				<svg
					className="float-shape absolute top-20 left-1/4 opacity-20"
					width="100"
					height="100"
				>
					<circle
						cx="50"
						cy="50"
						r="40"
						stroke="#00c6ff"
						strokeWidth="2"
						fill="none"
					/>
				</svg>
				<svg
					className="float-shape absolute top-1/3 right-1/4 opacity-20"
					width="80"
					height="80"
				>
					<polygon
						points="40,0 80,80 0,80"
						stroke="#00ff88"
						strokeWidth="2"
						fill="none"
					/>
				</svg>
			</div>

			<div className="container mx-auto px-4 py-24 relative z-10">
				{/* Product Cards */}
				<div className="grid lg:grid-cols-3 gap-8 mt-24">
					{products.map((product, i) => (
						<div
							key={product.id}
							className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10
                       hover:shadow-[0_0_30px_2px_rgba(0,198,255,0.1)] transition-all duration-300"
						>
							<div className="relative h-96 p-6">
								<Image
									src={product.image}
									alt={product.name}
									fill
									className="object-contain"
								/>
							</div>

							{/* Animated Info Section */}
							<div
								ref={(el) => (infoRefs.current[i] = el)}
								className="p-6 space-y-4"
							>
								<div className="flex justify-between items-center">
									<h3 className="text-3xl font-bold bg-gradient-to-r from-[#00c6ff] to-[#00ff88] bg-clip-text text-transparent">
										${product.price}
									</h3>
									<span className="flex items-center text-sm text-white/80">
										<span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
										{product.status}
									</span>
								</div>

								<div className="space-y-2">
									<p className="text-white/80">Select Size</p>
									<div className="grid grid-cols-4 gap-2">
										{product.sizes.map((size) => (
											<button
												key={size}
												className="py-2 text-center text-white/80 hover:text-white
                                 border border-white/20 rounded-lg hover:border-[#00ff88]
                                 transition-all duration-200"
											>
												{size}
											</button>
										))}
									</div>
								</div>

								<button
									key={i}
									className="py-2 text-center text-white/80 hover:text-white
                                 border border-white/20 rounded-lg hover:border-[#00ff88]
                                 transition-all duration-200"
								>
									Add To Cart
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Floating Text Animation */}
				<div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-8 mix-blend-lighten">
					{products.map((product, i) => (
						<div key={product.id} className="relative overflow-hidden h-24">
							<h2
								className={`text-7xl font-bold text-right transition-all duration-500 ${
									activeProduct === i
										? "translate-x-0 opacity-100 text-[#00ff88]"
										: "translate-x-20 opacity-20 text-white"
								}`}
							>
								{product.name}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full" />
							</h2>
						</div>
					))}
				</div>
			</div>

			{/* Dynamic Background Lines */}
			<svg className="absolute inset-0 w-full h-full opacity-10">
				<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
					<path
						d="M 40 0 L 0 0 0 40"
						fill="none"
						stroke="#00c6ff"
						strokeWidth="1"
					/>
				</pattern>
				<rect width="100%" height="100%" fill="url(#grid)" />
			</svg>
		</div>
	);
}
