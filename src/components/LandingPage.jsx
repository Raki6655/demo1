"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "@studio-freight/lenis";
// import Button from "./Button";
import dynamic from "next/dynamic";
import ShinyButton from "./ShinyButton";
import CubeTextAnimation from "./text/MovingText";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";

// const Button = dynamic(() => import("./Button"), { ssr: false });

export default function Landing() {
	const containerRef = useRef(null);
	const headlineRef = useRef(null);
	const ctaRef = useRef(null);
	const navRef = useRef(null);
	const lineRefs = useRef([]);
	const bannerRef = useRef(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const lenis = new Lenis({
			smooth: true,
			lerp: 0.1, // Adjust for smoothness (0.1 = smoother, 1 = instant)
		});

		// Function to continuously update GSAP's ScrollTrigger
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		const mainScreenScrollTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				pin: true,
				start: "top top",

				end: () => `+=${window.innerHeight * 4}`,
				// onUpdate: (self) => {
				// 	const progress = self.progress;
				// 	gsap.to(bannerRef.current, {
				// 		backgroundSize: `${150 - 50 * progress}%`,
				// 		borderRadius: `${progress * 50}%`,
				// 	});
				// },
				scrub: true,

				// markers: true,
			},
		});
		gsap.set(".text-container", {
			opacity: 0,
		});
		gsap.set(".subText", {
			opacity: 0,
			y: 200,
		});
		gsap.set(".digitalFuture", {
			opacity: 0,
			y: 200,
		});

		mainScreenScrollTimeline

			.to(bannerRef.current, {
				clipPath: "circle(20% at 50% 50%)",
				duration: 2,
				backgroundSize: "220%",
			})
			.to(bannerRef.current, {
				clipPath: "circle(100% at 50% 50%)",
				duration: 4,
				backgroundSize: "180%",
			})
			.to(bannerRef.current, {
				scale: 0.9,
				backgroundSize: "100%",
				duration: 4,
			})
			.to(bannerRef.current, {
				filter: "blur(90px)",
				duration: 2,
			})
			.to(headlineRef.current?.children, {
				y: -800, // Moves text slightly up
				// opacity: 0, // Fades out
				stagger: 0.05, // Creates a smooth stagger effect
				duration: 3,
				ease: "power1.out",
			})
			.to(".text-container", {
				opacity: 1,
				duration: 1,
				ease: "power1.out",
				onStart: () => {
					document
						.querySelector(".animate-shine")
						.classList.add("display-none");
				},

				// y: -700,
				// scale: 0.8,
			})
			.to(".subText", {
				delay: -1,
				duration: 2,
				y: -420,
				ease: "circ.inOut",
			})
			.to(".digitalFuture", {
				opacity: 1,
				delay: -0.5,
				y: -0,
				ease: "power1.out",
			})

			.to(".button-rounded", {
				position: "absolute",
				x: 650,
				y: -130,
				scale: 1.2,
				ease: "power1.out",

				onStart: () => {
					console.log(document.querySelector(".button"));
					document.querySelector(".button").classList.add("hover");
				},
			});
		// mainScreenScrollTimeline?.onComplete(() => {
		// 	console.log(document.querySelector(".button"));
		// 	document.querySelector(".button").classList.add("hover");
		// });
		return () => {
			mainScreenScrollTimeline.kill();
		};

		setIsClient(true);
	}, []);

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

			// ScrollTrigger.create({
			// 	trigger: bannerRef.current,
			// 	pin: true,
			// 	markers: true,
			// });

			// CTA Animation
			gsap.from(ctaRef.current, {
				scale: 0.8,
				opacity: 0,
				duration: 1.5,
				ease: "elastic.out(1, 0.5)",
				delay: 1.2,
			});

			// Line wave animation
			lineRefs.current.forEach((line, i) => {
				if (!line) return;

				gsap.fromTo(
					line,
					{ strokeDashoffset: 1000 },
					{
						strokeDashoffset: 0,
						duration: 2 + i * 0.2,
						repeat: -1,
						ease: "power1.inOut",
					}
				);

				gsap.to(line, {
					opacity: 1,
					repeat: -1,
					yoyo: true,
					duration: 3,
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
			className="min-h-screen bg-[#090b21] relative overflow-hidden "
		>
			<div
				ref={bannerRef}
				className="  banner-img"
				// src="./images/background_banner.png"
				alt="Picture of the author"
			/>
			<div className="outroTextContent absolute w-full">
				{/* <h1 className="text-8xl font-extrabold absolute text-white  top-[50vh] text-center w-full">
					Lets Walk Around(Base Text)
				</h1>
				<h2 className="text-8xl font-extrabold absolute text-white  top-[40vh] text-center w-full">
					Some attractive relevant text for my software selling aggenciy
				</h2>
			<span>some attractive relevant text</span> */}
				<CubeTextAnimation />
			</div>
			{/* <nav
				ref={navRef}
				className="px-12 py-6 fixed w-full top-0 z-50 backdrop-blur-md border-b border-white/10"
			>
				<div className="max-w-7xl mx-auto flex justify-between items-center gap-5">
					<span className="text-2xl font-bold text-white relative -left-[6rem]">
						SOLESTYLE
					</span>
					<div className="space-x-8">
						{[
							"Work",
							"Services",
							"Templates",
							"Tech",
							"Careers",
							"About Us",
						].map((item) => (
							<button
								key={item}
								className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-bold uppercase"
							>
								{item}
							</button>
						))}
					</div>
				</div>
			</nav> */}

			{/* Main Content */}
			<div className="h-screen flex items-center px-8 ">
				<div className="max-w-7xl ml-[6vw] relative z-10">
					<div
						ref={headlineRef}
						className="space-y-6 w-[100%] mt-[10rem] overflow-hidden"
					>
						<div className="overflow-hidden">
							<h1 className="text-8xl font-bold text-white">
								Elevate Your Style,
							</h1>
						</div>
						<div className="overflow-hidden">
							<h1 className="text-8xl font-bold text-white">Embrace the</h1>
						</div>
						<div className="overflow-hidden">
							<h1 className="text-8xl font-bold text-white">Extraordinary</h1>
						</div>
						<div className="pt-8 overflow-hidden">
							<p className="text-xl text-white/80 max-w-2xl">
								A really good website can be a difference between success and a
								failure !
							</p>
						</div>
					</div>
					<ShinyButton name={"Explore"} />
					{/* <button
						// ref={ctaRef}
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
						></div>
					</button> */}
				</div>
				{/* <img
					ref={shoeRef}
					className="scale-150 ml-[2vw] relative -left-10 top-10 rounded-full"
					src="./images/background_banner.png"
					height={600}
					width={500}
					alt="Picture of the author"
				/> */}
			</div>

			{/* Enhanced Glowing Lines Background */}
			<div className="absolute inset-0 pointer-events-none min-w-[100vw]">
				<svg className="w-full h-full opacity-20" viewBox="50 0 100 100">
					{[...Array(20)].map((_, i) => (
						<path
							key={i}
							ref={(el) => (lineRefs.current[i] = el)}
							d={`M${i * 30} 0v100M0 ${i * 10}h100`}
							stroke="url(#lineGradient)"
							strokeWidth="0.8"
							strokeDasharray="1000"
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
							<stop offset="0%" stopColor="#00c6ff" stopOpacity="0.8" />
							<stop offset="50%" stopColor="#0072ff" stopOpacity="0.8" />
							<stop offset="100%" stopColor="#00c6ff" stopOpacity="0.8" />
						</linearGradient>

						<filter id="glow">
							<feGaussianBlur stdDeviation="2" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>
				</svg>

				{/* Client-side only particles to fix hydration error */}
				{/* {isClient && (
					<div className="absolute inset-0">
						{[...Array(30)].map((_, i) => (
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
				)} */}
			</div>
			<div
				className="absolute inset-0 bg-gradient-to-r from-transparent 
        via-white/10 to-transparent animate-shine pointer-events-none w-[100vw]"
			></div>

			{/* Global Styles */}
			{/* <style jsx global>{`
				@keyframes float {
					0% {
						transform: translateY(0) translateX(0);
						opacity: 0.3;
					}
					50% {
						transform: translateY(-20px) translateX(20px);
						opacity: 0.8;
					}
					100% {
						transform: translateY(0) translateX(0);
						opacity: 0.3;
					}
				}

				path {
					filter: url(#glow);
				}
			`}</style> */}
		</div>
	);
}
