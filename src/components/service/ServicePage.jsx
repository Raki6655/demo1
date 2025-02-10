"use client"; // Ensures it's a client component in Next.js
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./service.css";

const ServicePage = () => {
	const containerRef = useRef(null);
	const rightViewRef = useRef(null);
	const textRefs = useRef([]);
	const imageRefs = useRef([]);
	const services = [
		{
			title: "Web Development",
			description:
				"We craft stunning, high-performance websites using modern technologies like Next.js, React, and TailwindCSS. Our web solutions ensure fast loading times, SEO optimization, and seamless user experiences.",
			colorClass: "web-development red",
			image: "dashboard_background.png",
		},
		{
			title: "Creative Portfolios",
			description:
				"Your online presence matters! We design breathtaking portfolio websites that showcase your work with visually appealing animations, smooth interactions, and an elegant aesthetic.",
			colorClass: "creative-portfolios green",
			image: "landing_cover.png",
		},
		{
			title: "Mobile & Web Apps",
			description:
				"From native mobile apps to progressive web applications, we build feature-rich, scalable, and responsive solutions that engage users and deliver outstanding performance.",
			colorClass: "mobile-web-apps blue",
			image: "Mockup.png",
		},
		{
			title: "Interactive Dashboards",
			description:
				"We create powerful, data-driven dashboards that visualize complex information with clarity. Our dashboards are intuitive, interactive, and optimized for real-time analytics.",
			colorClass: "interactive-dashboards pink",
			image: "Dashboard1.png",
		},
	];

	useEffect(() => {
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);

			// Pin the rightView (Image container)
			ScrollTrigger.create({
				trigger: containerRef.current,
				pin: rightViewRef.current,
				end: "bottom bottom",
			});

			// Select all text contents and images dynamically
			const textContents = textRefs.current.slice(1);
			const allImages = imageRefs.current.slice(1);
			const allImageIncluded = imageRefs.current;

			gsap.set(allImages, { yPercent: 101 });

			textContents.forEach((content, index) => {
				const text = content.querySelector("h1");

				const timeline = gsap
					.timeline()
					.to(allImages[index], {
						yPercent: 0,
						autoAlpha: 1,
						ease: "circ.inOut",
						// onStart: () => {
						// 	console.log(containerRef?.current);
						// 	containerRef.current.style.backgroundImage = `url('/images/${services[index].image}')`;
						// },
					})
					.set(allImageIncluded[index], {
						autoAlpha: 0,
					});

				ScrollTrigger.create({
					trigger: text,
					start: "top 100%",
					end: "top 10%",
					animation: timeline,
					scrub: true,
					// markers: true,
				});
			});

			return () => {
				ScrollTrigger.getAll().forEach((st) => st.kill());
			};
		}
	}, []);

	return (
		<div>
			{/* <div className="spacer"></div> */}
			<div ref={containerRef} className="contentContainer ">
				{/* <div className="backgroundImage"></div> */}
				{/* Left Side (Text) */}
				<div className="leftView view px-10 mt-10 ">
					{services.map((service, index) => (
						<div
							key={index}
							ref={(el) => (textRefs.current[index] = el)}
							className="content mt-[10rem]"
						>
							<h1 className="text-[56px] font-bold">{service.title}</h1>
							<p className="mt-10 text-lg">{service.description}</p>
						</div>
					))}
				</div>

				{/* Right Side (Images) */}
				<div ref={rightViewRef} className="rightView view relative right-10 ">
					<div className="images px-20 mr-10">
						{services.map((service, index) => (
							<div
								key={index}
								ref={(el) => (imageRefs.current[index] = el)}
								className={` image ${service.colorClass} top-[5rem] left-1/2 -translate-x-1/2 rounded-3xl  `}
								style={{
									backgroundImage: `url('/images/${service.image}')`,
									backgroundSize: "contain",

									backgroundRepeat: "no-repeat",
								}}
							>
								{/* <div
									className={`img h-1/3 w-2/3 border-black border-2 relative left-1/2 -translate-x-1/2 top-[10rem] `}
								></div> */}
							</div>
						))}
					</div>
				</div>
			</div>
			{/* <div className="spacer"></div> */}
		</div>
	);
};

export default ServicePage;
