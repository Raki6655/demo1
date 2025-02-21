"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

function CustomLink({ children, href }) {
	const router = useRouter();

	function sleep(time) {
		return new Promise((resolve, reject) => {
			return setTimeout(resolve, time);
		});
	}
	const handleTransition = async (e) => {
		e.preventDefault();
		setTimeout(() => {
			router.push(href);
		}, [2000]);
		const body = document.querySelector("body");
		body.classList.add("transition-page");
		await sleep(500);
		router.push(href);
		await sleep(500);
		body.classList.remove("transition-page");
	};
	return <Link href={href}>{children}</Link>;
}

export default CustomLink;
