"use client"; // Required for GSAP and interactivity
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
	const textRef = useRef(null);

	useEffect(() => {
		const letters = textRef.current.children;

		// GSAP Timeline for the text animation
		const tl = gsap.timeline({ repeat: -1 }); // Infinite loop

		// Animation: Show letters one by one
		tl.fromTo(
			letters,
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.1, // Stagger effect for each letter
				ease: "power3.out",
			}
		);

		// Animation: Fade letters up and out
		tl.to(letters, {
			opacity: 0,
			y: -20,
			duration: 0.5,
			stagger: 0.1,
			ease: "power3.in",
			delay: 0.5, // Delay before fading out
		});

		return () => {
			tl.kill(); // Clean up the animation on unmount
		};
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "#18182e",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 9999,
			}}
		>
			<div
				ref={textRef}
				style={{
					fontSize: "5rem",
					fontWeight: "bold",
					color: "white",
					display: "flex",
				}}
			>
				{"TWEENLAB".split("").map((letter, index) => (
					<span
						key={index}
						style={{ opacity: 0 }}
						className="speak tracking-[1rem] text-3xl"
					>
						{letter}
					</span>
				))}
			</div>
		</div>
	);
};

export default Loader;
