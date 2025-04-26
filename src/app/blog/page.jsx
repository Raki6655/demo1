"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { blogPosts } from "../../data/blog";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({ post }) => {
	const cardRef = useRef(null);

	return (
		<div
			ref={cardRef}
			className="blog-card bg-[#111] rounded-2xl overflow-hidden opacity-0 translate-y-8"
		>
			<div className="aspect-[16/9] overflow-hidden">
				<img
					src={post.image}
					alt={post.title}
					className="w-full h-full object-cover card-image hover:scale-105 transition-transform duration-700"
				/>
			</div>
			<div className="p-8">
				<div className="flex gap-3 mb-4">
					{post.categories.map((category, index) => (
						<span
							key={index}
							className="category-tag text-xs font-medium px-3 py-1 rounded-full bg-[#5000FF] text-white opacity-0"
						>
							{category}
						</span>
					))}
				</div>
				<h3 className="card-title text-2xl font-bold text-white mb-4 opacity-0">
					{post.title}
				</h3>
				<p className="card-excerpt text-gray-400 mb-6 line-clamp-3 opacity-0">
					{post.excerpt}
				</p>
				<div className="flex items-center justify-between">
					<div className="flex items-center card-author opacity-0">
						{/* <img
							src={post.author.avatar}
							alt={post.author.name}
							className="w-10 h-10 rounded-full mr-3"
						/> */}
						<div>
							<p className="text-white font-medium">{post.author.name}</p>
							<p className="text-gray-400 text-sm">{post.date}</p>
						</div>
					</div>
					<Link
						href={`/blog/${post.slug}`}
						className="card-button inline-flex items-center text-[#5000FF] font-medium opacity-0 hover:text-white transition-colors group"
					>
						Read More
						<svg
							className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
};

const BlogPage = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);

	// const blogPosts = [
	// 	{
	// 		title: "The Future of Web Development: What's Next in 2024",
	// 		slug: "future-web-development-2024",
	// 		excerpt:
	// 			"Explore the upcoming trends in web development, from AI integration to WebAssembly and the evolution of frontend frameworks.",
	// 		image: "/images/blog/web-dev-future.jpg",
	// 		categories: ["Web Development", "Trends"],
	// 		author: {
	// 			name: "Alex Chen",
	// 			avatar: "/images/authors/alex.jpg",
	// 		},
	// 		date: "Mar 15, 2024",
	// 	},
	// 	{
	// 		title: "Mastering TypeScript: Advanced Patterns and Best Practices",
	// 		slug: "mastering-typescript-patterns",
	// 		excerpt:
	// 			"Deep dive into TypeScript's advanced features, design patterns, and how to structure large-scale applications effectively.",
	// 		image: "/images/blog/typescript.jpg",
	// 		categories: ["TypeScript", "Best Practices"],
	// 		author: {
	// 			name: "Sarah Johnson",
	// 			avatar: "/images/authors/sarah.jpg",
	// 		},
	// 		date: "Mar 12, 2024",
	// 	},
	// 	{
	// 		title: "Building Scalable Microservices with Node.js",
	// 		slug: "scalable-microservices-nodejs",
	// 		excerpt:
	// 			"Learn how to design, implement, and deploy scalable microservices architecture using Node.js and modern tools.",
	// 		image: "/images/blog/microservices.jpg",
	// 		categories: ["Backend", "Architecture"],
	// 		author: {
	// 			name: "Mike Williams",
	// 			avatar: "/images/authors/mike.jpg",
	// 		},
	// 		date: "Mar 10, 2024",
	// 	},
	// 	{
	// 		title: "React Performance Optimization Techniques",
	// 		slug: "react-performance-optimization",
	// 		excerpt:
	// 			"Practical strategies and tips for optimizing React applications, from code splitting to memorization and state management.",
	// 		image: "/images/blog/react-perf.jpg",
	// 		categories: ["React", "Performance"],
	// 		author: {
	// 			name: "Emily Davis",
	// 			avatar: "/images/authors/emily.jpg",
	// 		},
	// 		date: "Mar 8, 2024",
	// 	},
	// 	{
	// 		title: "AI in Software Development: Practical Applications",
	// 		slug: "ai-software-development",
	// 		excerpt:
	// 			"Discover how AI is transforming software development, from code generation to testing and deployment automation.",
	// 		image: "/images/blog/ai-dev.jpg",
	// 		categories: ["AI", "Innovation"],
	// 		author: {
	// 			name: "David Kim",
	// 			avatar: "/images/authors/david.jpg",
	// 		},
	// 		date: "Mar 5, 2024",
	// 	},
	// 	{
	// 		title: "Modern CSS Techniques for Better Web Design",
	// 		slug: "modern-css-techniques",
	// 		excerpt:
	// 			"Explore advanced CSS features and techniques for creating stunning, responsive, and performant web designs.",
	// 		image: "/images/blog/css-modern.jpg",
	// 		categories: ["CSS", "Design"],
	// 		author: {
	// 			name: "Lisa Chen",
	// 			avatar: "/images/authors/lisa.jpg",
	// 		},
	// 		date: "Mar 3, 2024",
	// 	},
	// ];

	// useEffect(() => {
	// 	// Heading animation
	// 	gsap.set(headingRef.current, { opacity: 1, y: 0 });
	// 	gsap.from(headingRef.current, {
	// 		opacity: 0,
	// 		y: 50,
	// 		duration: 1,
	// 		scrollTrigger: {
	// 			trigger: headingRef.current,
	// 			start: "top 85%",
	// 			toggleActions: "play none none reverse",
	// 		},
	// 	});

	// 	// Blog cards stagger animation
	// 	const cards = document.querySelectorAll(".blog-card");

	// 	gsap.to(cards, {
	// 		opacity: 1,
	// 		y: 0,
	// 		duration: 1,
	// 		stagger: 0.2,
	// 		ease: "power3.out",
	// 		scrollTrigger: {
	// 			trigger: sectionRef.current,
	// 			start: "top 70%",
	// 		},
	// 	});

	// 	// Card content animations
	// 	cards.forEach((card) => {
	// 		const elements = card.querySelectorAll(
	// 			".category-tag, .card-title, .card-excerpt, .card-author, .card-button"
	// 		);
	// 		gsap.set(elements, { opacity: 1, y: 0 });
	// 		gsap.from(elements, {
	// 			opacity: 0,
	// 			y: 20,
	// 			duration: 0.8,
	// 			stagger: 0.1,
	// 			ease: "power2.out",
	// 			scrollTrigger: {
	// 				trigger: card,
	// 				start: "top 85%",
	// 				toggleActions: "play none none reverse",
	// 			},
	// 		});
	// 	});

	// 	return () => {
	// 		ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	// 	};
	// }, []);

	useEffect(() => {
		gsap.set(headingRef.current, { opacity: 1, y: 0 });
		gsap.from(headingRef.current, {
			opacity: 0,
			y: 50,
			duration: 1,
			scrollTrigger: {
				trigger: headingRef.current,
				start: "top 85%",
				toggleActions: "play none none reverse",
			},
		});

		const cards = document.querySelectorAll(".blog-card");

		cards.forEach((card) => {
			// Animate the card itself
			gsap.to(card, {
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: card,
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
			});

			// Animate card internal elements
			const elements = card.querySelectorAll(
				".category-tag, .card-title, .card-excerpt, .card-author, .card-button"
			);
			gsap.set(elements, { opacity: 1, y: 0 });
			gsap.from(elements, {
				opacity: 0,
				y: 20,
				duration: 0.8,
				stagger: 0.1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: card,
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
			});
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section ref={sectionRef} className="bg-black min-h-screen py-24">
			<div className="container mx-auto px-6">
				<div className="max-w-2xl mx-auto text-center mb-16">
					<h1
						ref={headingRef}
						className="text-5xl md:text-6xl font-bold text-white mb-6 opacity-0"
					>
						Latest Insights in
						<span className="text-[#5000FF]"> Software Development</span>
					</h1>
					<p className="text-gray-400 text-lg">
						Explore our latest articles, tutorials, and insights about software
						development, best practices, and emerging technologies.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogPosts.map((post, index) => (
						<BlogCard key={index} post={post} />
					))}
				</div>

				<div className="text-center mt-16">
					<button className="bg-[#5000FF] text-white px-8 py-3 rounded-full font-medium hover:bg-[#6000FF] transition-colors">
						Load More Articles
					</button>
				</div>
			</div>
		</section>
	);
};

export default BlogPage;
