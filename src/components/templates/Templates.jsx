"use client";
import React, { useEffect } from "react";
import "./templates.css";
import gsap from "gsap";
import Image from "next/image";

function Templates() {
	const projects = [
		{
			title: "Neon Nexus Dashboard",
			image: "/projects/dash.png",
			desc: "Real-time analytics platform with AI insights",
			tech: ["React", "Three.js", "WebGL"],
			link: "#",
		},
		{
			title: "Cyber Market",
			image: "/projects/market.png",
			desc: "NFT marketplace with 3D visualization",
			tech: ["Next.js", "Solidity", "GraphQL"],
			link: "#",
		},
		{
			title: "Quantum Stream",
			image: "/projects/stream.png",
			desc: "Low-latency video streaming service",
			tech: ["WebRTC", "Node.js", "Redis"],
			link: "#",
		},
		{
			title: "Neon Nexus Dashboardd",
			image: "/projects/dash.png",
			desc: "Real-time analytics platform with AI insights",
			tech: ["React", "Three.js", "WebGL"],
			link: "#",
		},
		{
			title: "Cyber Markett",
			image: "/projects/market.png",
			desc: "NFT marketplace with 3D visualization",
			tech: ["Next.js", "Solidity", "GraphQL"],
			link: "#",
		},
		{
			title: "Quantum Streamm",
			image: "/projects/stream.png",
			desc: "Low-latency video streaming service",
			tech: ["WebRTC", "Node.js", "Redis"],
			link: "#",
		},
		// Add 3 more projects
	];
	const mm = gsap.matchMedia();
	useEffect(() => {
		const tll = gsap.timeline({
			scrollTrigger: {
				trigger: ".aboutPage",
				start: "top 80%",
				scrub: true,
				// markers: true,
			},
		});

		mm.add("(max-width:768px)", () => {
			tll.to(".imgg", {
				stagger: 0.1,
				y: -300,
				scrub: true,
			});
		});
		mm.add("(min-width:769px)", () => {
			tll.to(".imgg", {
				stagger: 0.1,
				y: -700,
				scrub: true,
			});
		});
	}, []);
	return (
		<div>
			<div className="aboutPage">
				<h2>See Some of Our Best Works</h2>
				<section>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</section>
				<section>
					{/* <div className="imgg img1"></div>
					<div className="imgg img2"></div>
					<div className="imgg img3"></div>
					<div className="imgg img4"></div>
					<div className="imgg img5"></div>
					<div className="imgg img6"></div> */}
					{/* <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
					{projects.map((project, i) => (
						<div
							key={project.title}
							// ref={(el) => el && (cardsRef.current[i] = el)}
							className="imgg relative h-[350px] lg:h-[500px] bg-black/30 backdrop-blur-lg rounded-2xl 
                                         border-2 border-white/10 hover:border-[#00ff88]/50 transition-all
                                         overflow-hidden group"
						>
							{/* Image Container */}
							<div className="relative h-3/5 lg:h-3/4 overflow-hidden rounded-md">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover grayscale group-hover:grayscale-0 transition-all p-3"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
							</div>

							{/* Content */}
							<div className="px-4 lg:px-0 lg:p-6 relative mt-5 lg:mt-0">
								<h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
									{project.title}
								</h3>
								<p className="text-white/80 mb-4 text-sm lg:text-md">
									{project.desc}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 text-xs lg:text-sm bg-white/5 rounded-full text-[#00ff88]"
										>
											{tag}
										</span>
									))}
								</div>
							</div>

							{/* Hover Overlay */}
							<div
								className="absolute inset-0 bg-gradient-to-br from-[#00c6ff]/10 to-[#00ff88]/10 
                                  opacity-0 group-hover:opacity-100 transition-opacity"
							/>

							{/* Shine Effect */}
							<div
								className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 
                                  to-transparent opacity-0 group-hover:opacity-30 animate-shinee"
							/>
						</div>
					))}
					{/* </div> */}
				</section>
				{/* <section className="blank">
					<h3>Contact me to build your next dream site</h3>
					<h3>Hola ! Its a Wrap</h3>
				</section> */}
			</div>
		</div>
	);
}

export default Templates;
