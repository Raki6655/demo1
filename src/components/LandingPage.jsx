"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "@studio-freight/lenis";
import ShinyButton from "./ShinyButton";
import CubeTextAnimation from "./text/MovingText";
import BookingModal from "./modal/BookingModal";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";

// const Button = dynamic(() => import("./Button"), { ssr: false });

export default function Landing() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const containerRef = useRef(null);
	const headlineRef = useRef(null);
	const ctaRef = useRef(null);
	const navRef = useRef(null);
	const lineRefs = useRef([]);
	const bannerRef = useRef(null);
	const modalRef = useRef(null);

	const mm = gsap.matchMedia();
	useEffect(() => {
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
		}
		const lenis = new Lenis({ lerp: 0.08, smooth: true });

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);
	useEffect(() => {
		const mainScreenScrollTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				pin: true,
				start: "top top",
				end: () => `+=${window.innerHeight * 3.5}`,
				scrub: true,
				// pinSpacing: false,
			},
		});

		gsap.set(".span", {
			opacity: 0,
			y: 50,
		});
		gsap.set(".digitalFuture", {
			opacity: 0,
		});

		mm.add("(max-width:768px)", () => {
			gsap.set(bannerRef.current, { backgroundSize: "350%" }); // Ensure initial state
			return mainScreenScrollTimeline
				.to(bannerRef.current, {
					clipPath: "circle(15% at 50% 50%)",
					duration: 4,
					backgroundSize: "220%",
				})
				.to(bannerRef.current, {
					clipPath: "circle(100% at 50% 50%)",
					duration: 3,
					backgroundSize: "160%",
				})
				.to(bannerRef.current, {
					scale: 0.7,
					backgroundSize: "100%",
					duration: 1,
				})
				.to(".button-rounded", {
					y: 250,
					duration: 2,

					scale: 0.95,
					ease: "power1.out",
				})
				.to(bannerRef.current, {
					filter: "blur(20px)",
					duration: 2,
				})

				.to(headlineRef.current?.children, {
					y: -500, // Moves text slightly up
					// opacity: 0, // Fades out
					stagger: 0.1, // Creates a smooth stagger effect
					duration: 3,
					ease: "power1.out",
					// opacity: 0,
				})
				.to(".span", {
					opacity: 1,
					y: 0,
					stagger: 0.2,
				})
				.to(".digitalFuture", {
					opacity: 1,
					y: -450,
					duration: 1.5,
				});
		});

		mm.add("(min-width: 769px)", () => {
			// Animation for small screens
			return mainScreenScrollTimeline

				.to(bannerRef.current, {
					clipPath: "circle(20% at 50% 50%)",
					duration: 2,
					backgroundSize: "220%",
				})
				.to(bannerRef.current, {
					clipPath: "circle(100% at 50% 50%)",
					duration: 3,
					backgroundSize: "180%",
				})
				.to(bannerRef.current, {
					scale: 0.7,
					backgroundSize: "100%",
					duration: 4,
				})
				.to(bannerRef.current, {
					filter: "blur(80px)",
					duration: 4,
				})
				.to(headlineRef.current?.children, {
					y: -800, // Moves text slightly up
					// opacity: 0, // Fades out
					stagger: 0.1, // Creates a smooth stagger effect
					duration: 3,
					ease: "power1.out",
					// opacity: 0,
				})
				.to(".span", {
					opacity: 1,
					y: 0,
					stagger: 0.2,
				})
				.to(".digitalFuture", {
					opacity: 1,
					y: -450,
					duration: 1.5,
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

				.to(".button-rounded", {
					position: "absolute",
					x: 650,
					y: -130,
					scale: 1.2,
					ease: "power1.out",

					onStart: () => {
						document.querySelector(".button").classList.add("hover");
					},
				});
		});

		return () => {
			mainScreenScrollTimeline.kill();
		};
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
				y: 30,
				stagger: 0.1,
				duration: 1.2,
				ease: "expo.out",
				delay: 0.5,
			});

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
	const { contextSafe } = useGSAP(() => {
		gsap.set(modalRef.current, { opacity: 0, scale: 0.95 });
	});

	const openModal = contextSafe(() => {
		setIsModalOpen(true);

		// gsap.to(modalRef.current, {
		// 	opacity: 1,
		// 	scale: 1,
		// 	duration: 0.3,
		// 	ease: "power2.out",
		// });
	});

	useEffect(() => {
		if (isModalOpen && modalRef.current) {
			gsap.fromTo(
				modalRef.current,
				{ opacity: 0, scale: 0.9 },
				{
					opacity: 1,
					scale: 1,
					duration: 0.3,
					ease: "power2.out",
				}
			);
		}
	}, [isModalOpen]);
	return (
		<div
			ref={containerRef}
			className="min-h-screen bg-[#090b21] relative overflow-hidden "
		>
			{isModalOpen && (
				<BookingModal
					ref={modalRef}
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
				/>
			)}
			<div
				ref={bannerRef}
				className="  banner-img"
				// src="./images/background_banner.png"
				alt="Picture of the author"
			/>
			<div className="outroTextContent absolute w-full">
				<CubeTextAnimation />
			</div>

			{/* Main Content */}
			<div className="h-[100dvh] lg:h-[100vh] w-full flex items-start  lg:items-center px-2 lg:px-8 ">
				<div className="max-w-7xl ml-0 lg:ml-[6vw] relative z-10 flex flex-col items-center lg:block">
					<div
						ref={headlineRef}
						className="space-y-4 w-[100%] mt-[8.5rem] lg:mt-[6rem] "
					>
						<div className="overflow-hidden">
							<h1 className="text-4xl lg:text-8xl font-bold text-white text-center lg:text-start leading-8">
								Elevate Your <span className="speak">Brand</span>,
							</h1>
						</div>
						<div className="overflow-hidden">
							<h1 className="text-4xl lg:text-8xl font-bold text-white text-center lg:text-start leading-8">
								Embrace the
							</h1>
						</div>
						<div className="overflow-hidden">
							<h1 className="text-4xl lg:text-8xl font-bold text-white text-center lg:text-start leading-8">
								<span className="speak">Extraordinary</span>
							</h1>
						</div>
						<div className="pt-1 lg:pt-8 px-2 lg:px-0 ">
							<p className="text-sm lg:text-xl text-white/80 max-w-2xl text-center lg:text-start">
								A good looking website might be a difference between success and
								a failure !
							</p>
						</div>
					</div>
					<ShinyButton name={"Book a Call"} onClick={openModal} />
				</div>
			</div>

			{/* Enhanced Glowing Lines Background */}
			{/* <div className="absolute inset-0 pointer-events-none min-w-[100vw]">
				<svg className="w-full h-full opacity-20 svg" viewBox="50 0 100 100">
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
			</div> */}
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
