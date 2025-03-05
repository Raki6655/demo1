"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import "./about.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Templates from "../templates/Templates";
import ContactSection from "../footer/ContactSection";
import ContactSection2 from "../footer/Contact2";
import ContactGpt from "../footer/ContactGpt";
import VerticalSlider from "../VerticalSlider/VerticalSlider";

function AboutUs() {
	const aboutRef = useRef(null);
	const titleRef = useRef(null);
	useEffect(() => {
		// Animation for text down transition
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: ".mottosTexts ul",
				start: "top 20%",
				end: `bottom 30%`,
				scrub: 2,
				ease: "ease",
				duration: 3,
			},
		});

		timeline
			.to(".slide1 span", {
				y: 220,
			})
			.to(".slide2 span", {
				y: 220,
			})
			.to(".slide3 span", {
				y: 220,
			})
			.to(".slide4 span", {
				y: 220,
			});

		ScrollTrigger.create({
			trigger: aboutRef.current,
			start: "top top",
			// markers: true,
			onEnter: () => {
				gsap.to(".navbar", {
					color: "rgba(0,0,0,1)",
				});
				gsap.to(".toggleButton svg", {
					color: "rgba(0,0,0,1)",
				});
			},
			onLeaveBack: () => {
				gsap.to(".navbar", {
					color: "white",
					ease: "circ.in",
				});
				gsap.to(".toggleButton svg", {
					color: "white",
				});
			},
		});
		// gsap.set(".circle", {
		// 	y: -400,
		// 	x: -200,
		// });
		const letters = titleRef.current?.querySelectorAll("span");

		// Timeline for Circle clip path animation

		const timelinee = gsap.timeline({
			scrollTrigger: {
				trigger: titleRef.current,
				start: "top 18%",
				end: "95%", // Controls how long the section stays pinned
				scrub: true,
				pin: true, // Keeps the text in place until the animation is done
				// markers: true,
				pinSpacing: false,
			},
		});
		gsap.to(".workHeader", {
			opacity: 1,
			y: 0,
			stagger: 0.5,
			scrollTrigger: {
				trigger: ".workHeader",
				start: "top 35%",
				scrub: true,
			},
		});

		timelinee.to(letters, {
			opacity: 1,
			y: 0,
			stagger: 0.1,
			duration: 0.5,
			ease: "power3.out",
		});
		// gsap.set(".spanText", {
		// 	opacity: 0,
		// 	y: 20,
		// });
		// gsap.set(".mailBox .endText", {
		// 	y: 100,
		// 	opacity: 0,
		// });

		const endTimeline = gsap
			.timeline()

			.to(".circle", {
				clipPath: "circle(22% at 50% 75%)",
				duration: 0.5,
			})
			.to(".circle", {
				clipPath: "circle(200% at 50% 75%)",
			})
			.to([".navbar", ".toggleButton svg"], {
				color: "white",
			});

		ScrollTrigger.create({
			trigger: ".circle",
			start: "top 0%",
			end: "100%",
			scrub: true,
			pin: true,
			// markers: true,
			pinSpacing: false,
			animation: endTimeline,
			onUpdate: (self) => {
				const progress = self.progress;
				if (progress * 100 > 40) {
					gsap.to(".navbar", {
						color: "white",
					});
					gsap.to(".toggleButton svg", {
						color: "white",
					});
				} else {
					gsap.to(".navbar", {
						color: "black",
					});
					gsap.to(".toggleButton svg", {
						color: "black",
					});
				}
				if (progress * 100 > 40) {
					gsap.to(".spanText", {
						opacity: 1,
						y: 0,
						stagger: 0.1,
						ease: "ease-in",
						duration: 0,
					});
					gsap.to(".mailBox .endText", {
						y: 0,
						opacity: 1,
						ease: "elastic.inOut",
						stagger: 0.3,
					});
				} else {
					gsap.to(".spanText", {
						opacity: 0,
						y: 20,
						stagger: 0.1,
						ease: "ease-out",
						duration: 0,
					});
				}
			},
		});
	}, []);

	return (
		<div
			className="mottosTexts w-full h-[680vh] lg:h-[680vh] bg-black/20 "
			ref={aboutRef}
		>
			{" "}
			<ul className=" px-2 lg:px-0 flex flex-col gap-5 lg:gap-5 py-[10rem] lg:py-10 text-[72px] lg:text-[240px]">
				<div className="slide slide1">
					<span>Reliable</span>
				</div>
				<div className="slide slide2 italic">
					<span>Customizable</span>
				</div>
				<div className="slide slide3 russian">
					<span>Effective</span>
				</div>
				<div className="slide slide4 french">
					<span>Fast</span>
				</div>
			</ul>
			{/* <Templates /> */}
			<div className="max-w-full workHeader ml-6   opacity-0 translate-y-10">
				<h1 className="text-black text-3xl lg:text-5xl font-bold">
					Some of our <span className="speak ml-2">BEST </span>Works
				</h1>
				<h2 className="text-black/70 text-md lg:text-lg font-medium mt-4 max-w-full">
					We believe in delivering top-notch solutions with precision and
					innovation, ensuring quality and reliability in every project.
				</h2>
			</div>
			<VerticalSlider />
			<h1
				ref={titleRef}
				className="relative top-20 text-[39px] lg:text-[110px] text-green font-extrabold w-full text-center uppercase"
			>
				{"You Dream, We Build".split("").map((letter, index) => (
					<span key={index} className="inline-block opacity-0 -translate-y-20">
						{letter === " " ? "\u00A0" : letter}
					</span>
				))}
			</h1>
			<div className="circle w-full h-[100vh] bg-black flex items-center justify-center ">
				<ContactSection />
			</div>
		</div>
	);
}

export default AboutUs;
