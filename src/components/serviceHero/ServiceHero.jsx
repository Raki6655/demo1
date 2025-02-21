"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./serviceHero.css";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHero() {
	const containerRef = useRef();
	const serviceCards = useRef([]);
	const servicesRef = useRef();
	const router = useRouter(); // Detects page changes
	const servicesList = [
		{
			title: "Web Development",
			icon: "🌐",
			desc: "Crafting high-performance websites with modern frameworks like Next.js and React. We deliver SEO-optimized, responsive solutions tailored to your business needs.",
		},
		{
			title: "UI/UX Design",
			icon: "🎨",
			desc: "Creating intuitive interfaces with user-centered design principles. From wireframes to prototypes, we ensure seamless user experiences.",
		},
		{
			title: "Mobile Apps",
			icon: "📱",
			desc: "Developing native iOS and Android applications with cutting-edge features, ensuring smooth performance across all devices.",
		},
		{
			title: "Video Editing",
			icon: "🎥",
			desc: "Professional video production services including editing, color grading, motion graphics, and post-production effects.",
		},
		{
			title: "Branding",
			icon: "🖌️",
			desc: "Comprehensive branding packages including logo design, brand guidelines, and visual identity systems.",
		},
		{
			title: "AI Solutions",
			icon: "🤖",
			desc: "Building custom AI agents, machine learning models, and automation systems to streamline your business processes.",
		},
	];
	useGSAP(
		() => {
			// Hero text animation
			gsap.to(".hero-text", {
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: 0.2,
				ease: "power4.out",
			});

			// Floating animation
			gsap.to(".floating-element", {
				y: 15,
				duration: 3,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});
		},
		{ scope: containerRef }
	);

	const cards = document.querySelectorAll(".cards");
	console.log(cards);
	useEffect(() => {
		// Animate service cards on scroll
		console.log(Array.from(servicesRef.current.children));
		// Array.from(servicesRef.current.children).forEach((serviceCard) => {
		// 	gsap.to(serviceCard, {
		// 		opacity: 1,
		// 		y: 0,
		// 		duration: 0.8,
		// 		stagger: 0.7,
		// 		scrollTrigger: {
		// 			trigger: serviceCard,
		// 			start: "top center",
		// 			toggleActions: "play none none reverse",
		// 		},
		// 	});
		// });
		// 	gsap.to(serviceCard, {
		// 		opacity: 1,
		// 		y: 0,
		// 		duration: 0.8,
		// 		stagger: 0.7,
		// 		scrollTrigger: {
		// 			trigger: serviceCard,
		// 			start: "top center",
		// 			toggleActions: "play none none reverse",
		// 		},
		// 	});

		if (servicesRef.current) {
			// Get all child elements as an array
			const serviceCards = gsap.utils.toArray(servicesRef.current.children);

			// Animate each card with stagger effect
			gsap.fromTo(
				serviceCards,
				{ opacity: 0, y: 50 }, // Start state
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.2, // Stagger each element
					scrollTrigger: {
						trigger: servicesRef.current,
						start: "top 80%",
						end: "bottom top",
						toggleActions: "play none none reverse",
					},
				}
			);
		}

		return () => {
			// router.events.off("routeChangeComplete", handleRouteChange);
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up triggers
		};
	}, [servicesRef.current]);

	return (
		<div
			ref={containerRef}
			className="relative bg-gradient-to-b from-gray-950 to-blue-900/20"
		>
			{/* Hero Section */}
			<div className="min-h-screen flex items-center justify-center relative overflow-hidden">
				<div className="bgImage h-[100vh] w-[100vw] absolute "></div>
				<div className="text-center max-w-4xl px-4 relative z-10">
					<h1 className="hero-text translate-y-[1.5rem] leading-none opacity-0 text-[4rem] md:text-[6rem] font-bold  bg-clip-text  mb-8">
						Digital Excellence
					</h1>
					<p className="hero-text translate-y-[1.5rem] opacity-0 text-md md:text-xl text-white/80 max-w-2xl mx-auto">
						Transforming visions into cutting-edge digital solutions through
						innovative technology and creative expertise. We specialize in
						delivering comprehensive digital services that drive business growth
						and enhance user experiences.
					</p>
				</div>

				{/* Floating Elements */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="floating-element absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
					<div className="floating-element absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl" />
				</div>
			</div>

			{/* Services Section */}
			<div className="container mx-auto px-4 py-24">
				<div className="max-w-4xl mx-auto text-center mb-20">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Our Core Services
					</h2>
					<p className="text-xl text-white/80 leading-relaxed">
						We offer a comprehensive suite of digital services designed to meet
						your business needs. From web development to AI solutions, our team
						delivers innovative, high-quality results that drive success.
					</p>
				</div>

				<div
					className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8"
					ref={servicesRef}
				>
					{servicesList.map((service, i) => (
						<div
							key={i}
							ref={(el) => (serviceCards.current[i] = el)}
							className="cards p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400/30 translate-y-[2rem] opacity-0 transition-all group"
						>
							<div className="text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
								{service.icon}
							</div>
							<h3 className="text-2xl font-semibold text-white mb-4">
								{service.title}
							</h3>
							<p className="text-white/70 leading-relaxed">{service.desc}</p>
						</div>
					))}
				</div>

				{/* Additional Content Section */}
				<div className="max-w-6xl mx-auto mt-24 text-center">
					<h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
						Why Choose Us?
					</h3>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="p-6 bg-white/5 rounded-2xl">
							<h4 className="text-xl font-semibold text-white mb-4">
								Expert Team
							</h4>
							<p className="text-white/70">
								Our team of skilled professionals brings years of experience and
								expertise to every project.
							</p>
						</div>
						<div className="p-6 bg-white/5 rounded-2xl">
							<h4 className="text-xl font-semibold text-white mb-4">
								Cutting-Edge Tech
							</h4>
							<p className="text-white/70">
								We utilize the latest technologies to deliver innovative and
								future-proof solutions.
							</p>
						</div>
						<div className="p-6 bg-white/5 rounded-2xl">
							<h4 className="text-xl font-semibold text-white mb-4">
								Client-Centric Approach
							</h4>
							<p className="text-white/70">
								Your success is our priority. We work closely with you to
								understand and achieve your goals.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent]" />
		</div>
	);
}
