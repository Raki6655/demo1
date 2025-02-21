"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./verticalslider.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const sliderData = [
	{
		imgSrc: "/images/FashionPage.png",
		title: "Modern Fashion Design",
		description:
			"A fashion collection store site showcasing the products they sell in an interactive manner.",
		info: "Explore the latest trends in modern fashion.",
	},
	{
		imgSrc: "/images/FashionProject.png",
		title: "Fancy Store",
		description:
			"A fashion collection store site showcasing the products they sell in an interactive manner.",
		info: "Discover exclusive designs and styles.",
	},
	{
		imgSrc: "/images/DentalProject.png",
		title: "Modern Cosmetic Brand",
		description:
			"A fashion collection store site showcasing the products they sell in an interactive manner.",
		info: "Revolutionize your beauty routine with our products.",
	},
];

function VerticalSlider() {
	const slidesRef = useRef([]);

	useEffect(() => {
		slidesRef.current.forEach((item, index) => {
			if (index !== slidesRef.current.length - 1) {
				gsap.to(item, {
					scale: 0.9,
					opacity: 0,
					scrollTrigger: {
						trigger: item,
						start: "top 2%",
						end: "bottom 2%",
						scrub: true,
					},
				});
			}
		});
	}, []);

	return (
		<div className="categoriesContainer">
			{sliderData.map((slide, index) => (
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
					<a
						href="#" // Replace with actual URL
						className="visit-link"
						onClick={(e) => {
							e.preventDefault();
							// Add your click handler here
							console.log("Navigate to", slide.title);
						}}
					>
						Visit
					</a>
				</div>
			))}
		</div>
	);
}

export default VerticalSlider;
