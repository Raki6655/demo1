"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ShinyButton from "../ShinyButton";

export default function CubeTextAnimation() {
	const mainTextRef = useRef(null);
	const subTextRef = useRef(null);
	const cloneRefs = useRef([]);

	useGSAP(() => {
		// Initial animation
		gsap.from([mainTextRef.current, subTextRef.current], {
			duration: 1.5,
			opacity: 0,
			y: 100,
			stagger: 0.2,
			ease: "power4.out",
		});

		// Floating animation
		gsap.to(mainTextRef.current, {
			y: -10,
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});

		// Hover animations
		const mainElements = mainTextRef.current?.children;
		const subElements = subTextRef.current?.children;

		if (mainElements) {
			Array.from(mainElements).forEach((el, i) => {
				el.addEventListener("mouseenter", () => {
					gsap.to(el, {
						y: -30,
						duration: 0.4,
						ease: "power4.out",
					});
					gsap.to(cloneRefs.current[i], {
						y: 30,
						opacity: 1,
						duration: 0.4,
						ease: "power4.out",
					});
				});

				el.addEventListener("mouseleave", () => {
					gsap.to(el, {
						y: 0,
						duration: 0.6,
						ease: "elastic.out(1, 0.5)",
					});
					gsap.to(cloneRefs.current[i], {
						y: 60,
						opacity: 0,
						duration: 0.3,
						ease: "power2.in",
					});
				});
			});
		}
	});

	return (
		<div className="relative h-[150vh] w-[100vw] overflow-hidden text-container">
			{/* Main Text Layers */}
			<div ref={mainTextRef} className="outroTextContent absolute w-full">
				{/* <h1
					className="text-[180px] font-extrabold absolute text-transparent 
          top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2
          [text-shadow:_0_0_15px_rgba(255,255,255,0.5)] 
          border-4 border-white/30 p-8 cursor-default"
					style={{
						WebkitTextStroke: "2px #fff",
					}}
				>
					<span className="block -translate-z-10">Lets Walk Around</span>
					<span className="block text-[100px] mt-6 opacity-80">
						Build Digital Future
					</span>
				</h1> */}
			</div>

			{/* Sub Text Layers */}
			<div
				ref={subTextRef}
				className="absolute w-4/5 top-[60%] left-1/2 
        -translate-x-1/2 -translate-y-1/2 subText"
			>
				<h2
					className="text-[100px] font-bold text-center text-transparent
          [text-shadow:_0_0_20px_rgba(255,255,255,0.3)]
           p-6 cursor-default"
					style={{
						WebkitTextStroke: "2.5px #fff",
					}}
				>
					Transform Your Digital Presence
				</h2>
				<span className="digitalFuture relative block text-[22px] mt-12 opacity-60 -top-10   text-center text-gray-400 font-medium left-1/2 -translate-x-1/2 leading-10  ">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, sit.
					Modi fugiat odit veritatis reprehenderit! Id illo eum eos quibusdam
					quaerat, eius quas pariatur corporis!
				</span>
				{/* <ShinyButton name={"Explore"} /> */}
			</div>

			{/* Animated Clones */}
			{[0, 1].map((i) => (
				<div
					key={i}
					ref={(el) => el && (cloneRefs.current[i] = el)}
					className=" text-[180px] font-extrabold text-white 
            opacity-0 top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2
            pointer-events-none"
				>
					<span className="block">Lets Walk Around</span>
					{i === 0 && (
						<span className="block text-[100px] mt-6 opacity-60">
							Build Digital Future
						</span>
					)}
				</div>
			))}

			{/* Shine Effect */}
			<div
				className="absolute inset-0 bg-gradient-to-r from-transparent 
        via-white/10 to-transparent animate-shine pointer-events-none w-[100vw]"
			/>

			{/* <style jsx global>{`
				@keyframes shine {
					0% {
						transform: translateX(-100%) skewX(-15deg);
					}
					100% {
						transform: translateX(100%) skewX(-15deg);
					}
				}
				.animate-shine {
					animation: shine 3s infinite linear;
					mask-image: linear-gradient(
						120deg,
						rgba(0, 0, 0, 0) 20%,
						rgba(0, 0, 0, 0.8) 50%,
						rgba(0, 0, 0, 0) 80%
					);
				}
			`}</style> */}
		</div>
	);
}
