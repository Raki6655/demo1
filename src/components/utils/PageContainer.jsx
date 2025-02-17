"use client";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";

function PageContainer({ children }) {
	// const [positions, setPositions] = useState([]);

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

		gsap.to(".navbar", {
			color: "white",
			ease: "circ.in",
		});
		gsap.to(".toggleButton svg", {
			color: "white",
			ease: "circ.in",
		});
	}, []);
	return (
		<div className=" pageContainer w-full max-w-full min-h-[100vh] h-full text-white  absolute left-0 top-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
			{children}
		</div>
	);
}

export default PageContainer;
