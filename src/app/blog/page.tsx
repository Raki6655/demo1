"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { BlogPost } from "@/types/blog";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface BlogCardProps {
	post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const card = cardRef.current;
		if (!card) return;
		gsap.set(card, { opacity: 0, y: 200 });
		gsap.to(card, {
			y: 0,
			opacity: 1,
			duration: 3,
			ease: "ease-in",
			scrollTrigger: {
				trigger: card,
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	const handleClick = () => {
		console.log("Navigating to blog post:", post.slug);
	};

	return (
		<Link href={`/blog/${post.slug}`} onClick={handleClick}>
			<div
				ref={cardRef}
				className="blog-card bg-[#111] rounded-2xl overflow-hidden opacity-0 translate-y-8"
			>
				<div className="aspect-[16/9] overflow-hidden">
					<Image
						src={post.image}
						alt={post.title}
						width={800}
						height={450}
						className="w-full h-full object-cover card-image hover:scale-105 transition-transform "
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
							<Image
								src={
									post.author.avatar ||
									post.author.image ||
									"/images/authors/default.jpg"
								}
								alt={post.author.name}
								width={40}
								height={40}
								className="w-10 h-10 rounded-full mr-3"
							/>
							<div>
								<p className="text-white font-medium">{post.author.name}</p>
								<p className="text-gray-400 text-sm">{post.date}</p>
							</div>
						</div>
						<div className="card-button inline-flex items-center text-[#5000FF] font-medium opacity-0 hover:text-white transition-colors group">
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
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

const BlogPage: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		console.log(
			"Available blog posts:",
			blogPosts.map((p) => p.slug)
		);

		// Heading animation
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

		// Blog cards stagger animation
		const cards = document.querySelectorAll(".blog-card");
		gsap.set(cards, { opacity: 1, y: 0 });
		gsap.from(cards, {
			opacity: 0,
			y: 100,
			duration: 2,
			stagger: 0.5,
			ease: "power3.out",
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 70%",
				toggleActions: "play none none reverse",
			},
		});

		// Card content animations
		cards.forEach((card) => {
			const elements = card.querySelectorAll(
				".category-tag, .card-title, .card-excerpt, .card-author, .card-button"
			);
			gsap.set(elements, { opacity: 1, y: 0 });
			gsap.from(elements, {
				opacity: 0,
				y: 20,
				duration: 2,
				stagger: 0.1,
				ease: "ease-in",
				scrollTrigger: {
					trigger: card,
					start: "top 70%",
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
