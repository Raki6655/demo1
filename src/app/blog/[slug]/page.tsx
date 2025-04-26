"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { useParams } from "next/navigation";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const BlogPostPage = () => {
	const [isMounted, setIsMounted] = useState(false);
	const params = useParams();
	console.log("Params:", params);

	const post = blogPosts.find((p) => p.slug === params.slug);
	console.log("Found post:", post);

	const contentRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const metaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isMounted || !post) return;

		// Image animation
		gsap.from(imageRef.current, {
			scale: 1.2,
			opacity: 0,
			duration: 1.5,
			ease: "power3.out",
		});

		// Title animation
		gsap.from(titleRef.current, {
			y: 50,
			opacity: 0,
			duration: 1,
			delay: 0.3,
			ease: "power3.out",
		});

		// Meta information animation
		gsap.from(metaRef.current, {
			y: 30,
			opacity: 0,
			duration: 1,
			delay: 0.5,
			ease: "power3.out",
		});

		// Content animations
		const contentElements =
			contentRef.current?.querySelectorAll("h2, p, ul, ol, pre");
		if (contentElements) {
			gsap.from(contentElements, {
				y: 30,
				opacity: 0,
				duration: 1,
				stagger: 0.1,
				scrollTrigger: {
					trigger: contentRef.current,
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
			});
		}

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [isMounted, post]);

	if (!post) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold mb-4">Post not found</h1>
					<Link href="/blog" className="text-blue-500 hover:underline">
						Back to blog
					</Link>
				</div>
			</div>
		);
	}

	return (
		<article className="min-h-screen bg-black text-white py-24">
			<div className="container mx-auto px-6">
				<div className="max-w-4xl mx-auto">
					<div ref={imageRef} className="mb-12 rounded-2xl overflow-hidden">
						<Image
							src={post.image}
							alt={post.title}
							width={1200}
							height={675}
							className="w-full h-auto object-cover"
							priority
						/>
					</div>

					<div className="mb-12">
						<h1 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">
							{post.title}
						</h1>

						<div
							ref={metaRef}
							className="flex flex-wrap items-center gap-4 text-gray-400"
						>
							<div className="flex items-center">
								{/* <Image
									src={
										post.author.avatar ||
										post.author.image ||
										"/images/authors/default.jpg"
									}
									alt={post.author.name}
									width={40}
									height={40}
									className="rounded-full mr-3"
									priority
								/> */}
								<div>
									<p className="text-white font-medium">{post.author.name}</p>
									<p className="text-sm">{post.author.role}</p>
								</div>
							</div>
							<span>•</span>
							<time>{post.date}</time>
							<span>•</span>
							<div className="flex gap-2">
								{post.categories.map((category, index) => (
									<span
										key={index}
										className="px-3 py-1 rounded-full bg-[#5000FF] text-white text-sm"
									>
										{category}
									</span>
								))}
							</div>
						</div>
					</div>

					<div
						ref={contentRef}
						className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-[#5000FF] prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-800 prose-pre:p-4 prose-pre:rounded-lg prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-blockquote:text-gray-400 prose-blockquote:border-l-[#5000FF]"
					>
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							components={{
								h2: ({ children }) => (
									<h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
								),
								p: ({ children }) => (
									<p className="text-lg leading-relaxed mb-4">{children}</p>
								),
								ul: ({ children }) => (
									<ul className="list-disc pl-6 mb-4">{children}</ul>
								),
								ol: ({ children }) => (
									<ol className="list-decimal pl-6 mb-4">{children}</ol>
								),
								li: ({ children }) => <li className="mb-2">{children}</li>,
								code: ({ children }) => (
									<code className="bg-gray-800 px-2 py-1 rounded">
										{children}
									</code>
								),
								pre: ({ children }) => (
									<pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
										{children}
									</pre>
								),
								blockquote: ({ children }) => (
									<blockquote className="border-l-4 border-[#5000FF] pl-4 italic my-4">
										{children}
									</blockquote>
								),
							}}
						>
							{post.content}
						</ReactMarkdown>
					</div>

					<div className="mt-16 text-center">
						<Link
							href="/blog"
							className="inline-flex items-center text-[#5000FF] font-medium hover:text-white transition-colors group"
						>
							Back to Blog
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
		</article>
	);
};

export default BlogPostPage;
