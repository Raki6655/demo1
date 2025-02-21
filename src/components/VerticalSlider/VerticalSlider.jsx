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
			"A fashion collection store site showcasing the products they sell in a interactive manner.",
	},
	{
		imgSrc: "/images/FashionProject.png",
		title: "Fancy Store",
		description:
			"A fashion collection store site showcasing the products they sell in a interactive manner.",
	},
	{
		imgSrc: "/images/DentalProject.png",
		title: "Modern Cosmetic Brand",
		description:
			"A fashion collection store site showcasing the products they sell in a interactive manner.",
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
					<img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
					<div className="absolute bottom-36 lg:bottom-10 left-3 lg:left-10 flex flex-col">
						<h1>{slide.title}</h1>
						<h2>{slide.description}</h2>
					</div>
				</div>
			))}
		</div>
	);
}

export default VerticalSlider;
