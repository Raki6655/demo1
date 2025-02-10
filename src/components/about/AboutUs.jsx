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

function AboutUs() {
	const aboutRef = useRef(null);
	const titleRef = useRef(null);
	useEffect(() => {
		// Animation for text down transition
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: "ul",
				start: "top 40%",
				end: `bottom 50%`,
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

		// gsap.to(".navbar", {
		// 	color: "black",
		// 	scrollTrigger: {
		// 		trigger: aboutRef.current,
		// 		start: "top top",
		// 		markers: true,
		// 		onEnter: () => {
		// 			gsap.to(".navbar", {
		// 				color: rgba(40, 40, 40, 0.1),
		// 			});
		// 		},
		// 	},
		// });
		ScrollTrigger.create({
			trigger: aboutRef.current,
			start: "top top",
			// markers: true,
			onEnter: () => {
				gsap.to(".navbar", {
					color: "rgba(0,0,0,1)",
				});
			},
			onLeaveBack: () => {
				gsap.to(".navbar", {
					color: "white",
					ease: "circ.in",
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
				start: "top 20%",
				end: "+=100%", // Controls how long the section stays pinned
				scrub: true,
				pin: true, // Keeps the text in place until the animation is done
				markers: true,
				pinSpacing: false,
			},
		});

		timelinee.from(letters, {
			opacity: 0,
			y: -50,
			stagger: 0.1,
			duration: 0.5,
			ease: "power3.out",
		});

		const endTimeline = gsap
			.timeline()

			.to(".circle", {
				clipPath: "circle(10% at 50% 40%)",
				duration: 0.5,
			})
			.to(".circle", {
				clipPath: "circle(200% at 50% 50%)",
				// onStart: () => {
				// 	gsap.to(".navbar", {
				// 		color: "white",
				// 		ease: "circ.in",
				// 	});
				// },
			})
			.to(".navbar", {
				color: "white",
			});
		ScrollTrigger.create({
			trigger: ".circle",
			start: "top top",
			end: "200%",
			scrub: true,
			pin: true,
			markers: true,
			pinSpacing: false,
			animation: endTimeline,
			onUpdate: (self) => {
				const progress = self.progress;
				if (progress * 100 > 40) {
					gsap.to(".navbar", {
						color: "white",
					});
				} else {
					gsap.to(".navbar", {
						color: "black",
					});
				}
				// gsap.to(".circle", {
				// 	clipPath: `circle(${20 + 80 * progress}% at 50% 50%)`,
				// 	x: -200 + progress * 300,
				// 	//  onLeaveBack:()=>{
				// 	// 	clipPath: `circle(${20 + 80 * progress}% at 50% 50%)`
				// 	//  }
				// });
			},
			// onEnter: () => {
			// 	gsap.to(".navbar", {
			// 		color: "white",
			// 	});
			// },
			// onLeaveBack: () => {
			// 	gsap.to(".navbar", {
			// 		color: "black",
			// 	});
			// },
		});
	}, []);
	useGSAP(() => {});
	return (
		<div className="w-full h-[550vh] bg-black/20 pt-10" ref={aboutRef}>
			{" "}
			<ul>
				<div className="slide slide1">
					<span>Discover</span>
				</div>
				<div className="slide slide2 italic">
					<span>Channelize</span>
				</div>
				<div className="slide slide3 russian">
					<span>Workshop</span>
				</div>
				<div className="slide slide4 french">
					<span>Safety</span>
				</div>
			</ul>
			<Templates />
			<h1
				ref={titleRef}
				className="text-[110px] text-green font-extrabold w-full text-center uppercase"
			>
				{"You Dream, We Build".split("").map((letter, index) => (
					<span key={index} className="inline-block">
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
