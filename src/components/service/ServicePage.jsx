"use client"; // Ensures it's a client component in Next.js
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./service.css";
import { useGSAP } from "@gsap/react";

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
			image: "webBanner.jpg",
			points: [
				"⚡ Blazing fast loading speeds for a better user experience",
				"📈 SEO-optimized to boost your online visibility",
				"🧩 Modular and maintainable code architecture",
				"🔒 Robust security practices to protect your data",
				"💻 Responsive design for all devices",
			],
		},
		{
			title: "Creative Portfolios",
			description:
				"Your online presence matters! We design breathtaking portfolio websites that showcase your work with visually appealing animations, smooth interactions, and an elegant aesthetic.",
			colorClass: "creative-portfolios green",
			image: "ruthPortfolio.jpg",
			points: [
				"🎨 Visually stunning designs that captivate visitors",
				"✨ Smooth animations and transitions for a dynamic feel",
				"📸 High-resolution image support for sharp displays",
				"⚙️ Easy-to-update content management",
				"🚀 Optimized for fast loading and SEO performance",
			],
		},
		{
			title: "Mobile & Web Apps",
			description:
				"From native mobile apps to progressive web applications, we build feature-rich, scalable, and responsive solutions that engage users and deliver outstanding performance.",
			colorClass: "mobile-web-apps blue",
			image: "Mockup.png",
			points: [
				"📱 Cross-platform compatibility for seamless experiences",
				"⚡ Fast, responsive interfaces with smooth animations",
				"🔧 Scalable architecture for future growth",
				"📊 Integrated analytics for data-driven decisions",
				"🔒 Secure user authentication and data protection",
			],
		},
		{
			title: "Interactive Dashboards",
			description:
				"We create powerful, data-driven dashboards that visualize complex information with clarity. Our dashboards are intuitive, interactive, and optimized for real-time analytics.",
			colorClass: "interactive-dashboards pink",
			image: "Dashboard1.png",
			points: [
				"📊 Real-time data visualization for instant insights",
				"📈 Interactive charts and graphs for better analysis",
				"🔍 Advanced filtering and search functionality",
				"⚙️ Customizable layouts to fit your workflow",
				"🚀 Optimized for performance and accessibility",
			],
		},
	];
	const mm = gsap.matchMedia();
	useEffect(() => {
		// if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger);

		// Select all text contents and images dynamically
		const textContents = textRefs.current.slice(1);
		const allImages = imageRefs.current.slice(1);
		const allImageIncluded = imageRefs.current;
		gsap.set(allImages, { yPercent: 101 });

		mm.add("(max-width:768px)", () => {
			ScrollTrigger.create({
				trigger: containerRef.current,
				pin: rightViewRef.current,
				end: "bottom bottom",
				onEnter: () => {
					gsap.to(".navbar", {
						color: "rgba(0,0,0,1)",
					});
					// gsap.to(".toggleButton svg", {
					// 	color: "rgba(0,0,0,1)",
					// });
					// gsap.to(".closeNav", {
					// 	color: "rgba(0,0,0,1)",
					// });
				},
				onLeaveBack: () => {
					gsap.to(".navbar", {
						color: "white",
						ease: "circ.in",
					});
					// gsap.to(".toggleButton svg", {
					// 	color: "white",
					// 	ease: "circ.in",
					// });
					// gsap.to(".closeNav", {
					// 	color: "white",
					// 	ease: "circ.in",
					// });
				},
			});
		});
		mm.add("(min-width:769px", () => {
			// Pin the rightView (Image container)
			ScrollTrigger.create({
				trigger: containerRef.current,
				pin: rightViewRef.current,
				end: "bottom bottom",
			});

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
		});
		gsap.to(".serviceHeader", {
			opacity: 1,
			y: 0,
			stagger: 0.5,
			scrollTrigger: {
				trigger: ".serviceHeader",
				start: "top 70%",
				end: "top 50%",
				scrub: true,
			},
		});

		return () => {
			mm.revert();
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	}, []);
	useGSAP(() => {});

	return (
		<div className="lg-background">
			{/* <div className="spacer"></div> */}
			<div className="max-w-full flex flex-col px-5 lg:px-0 lg:items-start  ml-0 lg:ml-12  serviceHeader relative lg:absolute mt-10 lg:mt-0 pt-10 opacity-0 translate-y-20 none">
				<h1 className="text-white lg:text-white text-3xl lg:text-5xl font-bold">
					Top <span className="speak ml-2">SERVICES</span> We Provide
				</h1>
				<h2 className="text-white lg:text-white  text-md lg:text-lg font-medium mt-4">
					We believe in delivering top-notch solutions with precision and
					innovation, ensuring quality and reliability in every project.
				</h2>
			</div>
			{/* <div
				ref={containerRef}
				className="contentContainer bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 "
			> */}
			<div ref={containerRef} className="contentContainer ">
				{/* <div className="w-full flex flex-col items-center lg:items-center absolute">
					<h1 className="text-white text-3xl lg:text-5xl font-bold">
						Our Work <span className="speak ml-2">SPEAKS</span>
					</h1>
					<h2 className="text-white text-md lg:text-lg font-medium mt-4">
						We believe in delivering top-notch solutions with precision and
						innovation, ensuring quality and reliability in every project.
					</h2>
				</div> */}
				{/* <div className="backgroundImage"></div> */}
				{/* Left Side (Text) */}
				<div className="leftView view px-10 mt-10">
					{services.map((service, index) => (
						<div
							key={index}
							ref={(el) => (textRefs.current[index] = el)}
							className="content mt-[10rem]"
						>
							<h1 className="text-[56px] font-bold">{service.title}</h1>
							<p className="mt-5 text-lg leading-7">{service.description}</p>
							<ul className="list-disc list-inside mt-20">
								{service.points.map((point, i) => (
									<li key={i} className="text-md my-5 text-gray-200">
										{point}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Right Side (Images) */}
				<div
					ref={rightViewRef}
					className="rightView view relative right-10 mt-[5rem] "
				>
					<div className="images px-20 mr-10">
						{services.map((service, index) => (
							<div
								key={index}
								ref={(el) => (imageRefs.current[index] = el)}
								className={` image ${service.colorClass} -top-[4rem] left-1/2 -translate-x-1/2 rounded-3xl  `}
								style={{
									backgroundImage: `url('/images/${service.image}')`,
									backgroundSize: "contain",
									// aspectRatio: 1,

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
			<div className="h-full mt-16 lg:mt-0 flex flex-col gap-2 lg:none my-10 service-mobile  ">
				{services.map((service, index) => (
					<div
						key={index}
						// ref={(el) => (textRefs.current[index] = el)}
						className="flex flex-col h-full text-white lg:text-white px-3 lg:px-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 mx-4 lg:mx-2 my-4 py-3 rounded-2xl shadow-md"
					>
						<div
							key={index}
							// ref={(el) => (imageRefs.current[index] = el)}
							className={` image ${service.colorClass}  rounded-lg  `}
							style={{
								backgroundImage: `url('/images/${service.image}')`,
								backgroundSize: "cover",

								backgroundRepeat: "no-repeat",
							}}
						></div>
						<h1 className="text-[24px] lg:text-[56px] font-bold mt-5 lg:mt-8">
							{service.title}
						</h1>
						<p className="mt-3 lg:mt-10 text-sm lg:text-lg leading-8">
							{service.description}
						</p>
						<ul className="list-disc list-inside mt-10">
							{service.points.map((point, i) => (
								<li key={i} className="text-xs my-5 text-gray-200">
									{point}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			{/* <div className="spacer"></div> */}
		</div>
	);
};

export default ServicePage;
