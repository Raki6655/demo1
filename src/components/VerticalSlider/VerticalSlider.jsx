"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./verticalslider.css";
import Link from "next/link";
import CustomLink from "../utils/CustomLink";
import { usePathname, useRouter } from "next/navigation";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const sliderData = [
	{
		imgSrc: "/images/FashionPage.png",
		title: "Modern Fashion Design",
		description:
			"A fashion collection store site showcasing the products they sell in an interactive manner.",
		info: "Explore the latest trends in modern fashion.",
		link: "https://fashion-store-beryl.vercel.app/",
	},
	{
		imgSrc: "/images/videoPortfolio.png",
		title: "Video Portfolio",
		description:
			"A video portfolio site for featuring your vidoes in smooth and unique way.",
		info: "Video Animation control on scroll.",
		link: "https://coopgraphy.vercel.app/",
	},
	{
		imgSrc: "/images/MakeupSite.png",
		title: "Modern Cosmetic Brand",
		description:
			"A fashion collection store site showcasing the products they sell in an interactive manner.",
		info: "Revolutionize your beauty routine with our products.",
		link: "https://cosmetic-store-iota.vercel.app/",
	},
	{
		imgSrc: "/images/SophiaCover.png",
		title: "Perfume Store",
		description:
			"A perfume collection store site showcasing the products they sell in an interactive manner.",
		info: "Modern fregrense selling site",
		link: "https://sophia-tau-one.vercel.app/",
	},
	{
		imgSrc: "/images/HotelSiteCover.png",
		title: "Hotel Booking Page",
		description:
			"A minimalistic hotel booking web app featuring clean and smooth UI",
		info: "A hotel booking site",
		link: "https://hotelhub-one.vercel.app/",
	},
	{
		imgSrc: "/images/FashionProject.png",
		title: "Fancy Store",
		description:
			"A fashion collection store site showcasing the products they sell in an interactive manner.",
		info: "Discover exclusive designs and styles.",
		link: "#",
	},
];

function VerticalSlider() {
	const slidesRef = useRef([]);
	const endTextRef = useRef(null);
	const router = useRouter();
	const pathName = usePathname();
	const containerRef = useRef(null);
	const messageRef = useRef(null);
	const buttonRef = useRef(null);
	const buttonRefBottom = useRef(null);
	console.log(pathName);

	useEffect(() => {
		slidesRef.current.forEach((item, index) => {
			if (true) {
				gsap.to(item, {
					scale: 0.9,
					opacity: 0,
					scrollTrigger: {
						trigger: item,
						start: "top 60%",
						end: "bottom 2%",
						scrub: true,
					},
				});
			}
		});
		// gsap.set(endTextRef.current, {
		// 	opacity: 0,
		// });
		// gsap.to(endTextRef.current, {
		// 	y: 0,
		// 	opacity: 1,
		// 	scrollTrigger: {
		// 		trigger: endTextRef.current,
		// 		start: "top 60%",
		// 		scrub: true,
		// 	},
		// });
	}, []);
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top 40%",
				toggleActions: "play none none none",
				scrub: true,
			},
		});

		tl.to(endTextRef.current, {
			opacity: 1,
			y: 0,

			ease: "power3.out",
		})
			.to(
				messageRef.current,
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
				},
				"-=0.6"
			) // Start slightly before previous animation ends
			.to(
				buttonRef.current,
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
				},
				"-=0.9"
			)
			.to(
				buttonRefBottom.current,
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
				},
				"-=0.9"
			);
	}, []);
	let updatedData = pathName === "/" ? sliderData.slice(0, 3) : sliderData;

	return (
		<div>
			<div className="categoriesContainer bg-black">
				{updatedData.map((slide, index) => (
					<div
						key={index}
						className={`imageCard card${index + 1}`}
						ref={(el) => (slidesRef.current[index] = el)}
					>
						<div className="image-wrapper">
							<img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
						</div>
						<div className="absolute bottom-36 lg:bottom-10 left-3 lg:left-10 flex flex-col">
							<h1>{slide.title}</h1>
							<h2>{slide.description}</h2>
						</div>
						<Link href={slide.link} passHref>
							<span
								href="#" // Replace with actual URL
								className="visit-link"
							>
								Visit
							</span>
						</Link>
					</div>
				))}
				{pathName === "/works" && (
					<div
						className="h-[100vh] w-full flex flex-col items-center justify-center"
						ref={containerRef}
					>
						<h2
							ref={endTextRef}
							className="mt-[0vh] text-start text-xl lg:text-4xl font-medium lg:font-extrabold px-4 lg:px-20 leading-[2rem] lg:leading-[3.5rem] tracking-wide z-100 text-black-600 translate-y-20 opacity-0 "
						>
							We craft more than just websites—we build digital experiences that
							embody your brand all within very affordable price.
							<br />
							<br /> With seamless animations, strategic design, and{" "}
							<div className="inline relative w-full">
								<span className="speak rounded-md text-white spanText ">
									revenue-driven
								</span>{" "}
							</div>
							solutions, we ensure your online presence is both impactful and
							profitable.
						</h2>

						<p
							ref={messageRef}
							className="mt-6 text-lg text-gray-500 text-center max-w-xl px-6 translate-y-20 opacity-0"
						>
							Take just <span className="font-semibold">5 minutes</span> of your
							time—it could exponentially boost your brand and sales!
						</p>

						<a
							ref={buttonRef}
							href="mailto:tweenlab81@gmail.com"
							className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition-all translate-y-20 opacity-0"
						>
							Reach Out on Mail
						</a>
					</div>
				)}
			</div>
			{pathName === "/" && (
				<CustomLink href={"/works"}>
					<div className="relative -bottom-24 lg:-bottom-28  z-10  ">
						<span className=" absolute left-1/2 -translate-x-1/2   text-2xl font-bold cursor-pointer text-black/90 hover:text-black/100 hover:scale-105 ease-in-out duration-100">
							See All
						</span>
					</div>
				</CustomLink>
			)}
		</div>
	);
}

export default VerticalSlider;
