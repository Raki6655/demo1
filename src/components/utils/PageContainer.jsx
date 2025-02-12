"use client";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

function PageContainer({ children }) {
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
	}, []);
	return (
		<div className="pt-20 pageContainer max-w-full min-h-[100vh] h-full text-white ">
			{children}
		</div>
	);
}

export default PageContainer;
