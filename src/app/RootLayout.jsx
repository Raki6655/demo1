"use client";
import { DM_Serif_Text, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Loader from "@/components/utils/Loader";
import gsap from "gsap";
import Head from "next/head";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const oswald = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-Oswald",
	weight: ["400", "500", "600", "700"],
});
const DMserif = DM_Serif_Text({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-DMserif",
	weight: ["400"],
});

// export default function RootLayout({ children }) {
// 	return (
// 		<Suspense fallback={<span>Loading...</span>}>
// 			<LayoutContent>{children}</LayoutContent>
// 		</Suspense>
// 	);
// }
export default function RootLayout({ children }) {
	const [loading, setLoading] = useState(true); // Start with loading true
	const pathname = usePathname();
	// const searchParams = useSearchParams();
	const loaderRef = useRef(null);

	useEffect(() => {
		const handleRouteChange = () => {
			setLoading(true); // Show loader on route change
		};

		const handleRouteComplete = () => {
			// Fade out the loader before hiding it
			gsap.to(loaderRef.current, {
				opacity: 0,
				duration: 1, // Slow fade-out
				ease: "power3.out",
				onComplete: () => setLoading(false), // Hide loader after fade-out
			});
		};

		// Simulate route change detection
		handleRouteChange(); // Show loader initially
		const timeout = setTimeout(() => {
			handleRouteComplete(); // Hide loader after a delay (simulate page load)
		}, 1000); // Adjust the delay as needed

		return () => {
			clearTimeout(timeout); // Clean up the timeout
		};
	}, [pathname]);

	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased ${oswald.variable} ${DMserif.variable}`}
			>
				{loading && <Loader ref={loaderRef} isLoading={loading} />}{" "}
				{/* Pass isLoading prop */}
				<Navbar />
				{!loading && children} {/* Render the page content when not loading */}
			</body>
		</html>
	);
}
