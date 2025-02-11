"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ShinyButton from "../ShinyButton";

export default function CubeTextAnimation() {
	const mainTextRef = useRef(null);
	const subTextRef = useRef(null);
	const cloneRefs = useRef([]);
	const titleRef = useRef(null);

	useGSAP(() => {
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
	useEffect(() => {
		const letters = titleRef.current?.querySelectorAll(".span");

		// Timeline for Circle clip path animation
		gsap.set(titleRef.current, {
			y: -440,
		});
		gsap.set(".digitalText", {
			y: -200,
		});
	}, []);

	return (
		<div className="relative h-[150vh] w-[100vw] overflow-hidden text-container">
			{/* Sub Text Layers */}
			<div
				// ref={subTextRef}
				className="absolute w-full lg:w-5/6 top-[55%] left-1/2 
        -translate-x-1/2 -translate-y-1/2 subText"
			>
				<h2
					ref={titleRef}
					className="text-[40px] lg:text-[120px] font-bold text-center text-transparent
          [text-shadow:_0_0_20px_rgba(255,255,255,0.3)]
           p-2 cursor-default"
					style={{
						WebkitTextStroke: "2.5px #fff",
					}}
				>
					{/* Transform Your Digital Presence */}
					{"Transform Your Digital Presence".split("").map((letter, index) => (
						<span
							key={index}
							className="inline-block span opacity-0 transformText"
						>
							{letter === " " ? "\u00A0" : letter}
						</span>
					))}
				</h2>
				<span className="digitalFuture relative block text-[14px] lg:text-[22px] mt-20 lg:mt-12  -top-10   text-center text-gray-400 font-medium left-1/2 -translate-x-1/2 leading-10 opacity-0 ">
					MAKE YOUR WEBSITE CONVERT
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
			{/* <div
				className="absolute inset-0 bg-gradient-to-r from-transparent 
        via-white/10 to-transparent animate-shine pointer-events-none w-[100vw]"
			/> */}

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
