"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import CustomLink from "./utils/CustomLink";
import { FollowOnFacebook } from "./utils/FacebookFollowButton";
import { FollowOnInstagram } from "./utils/InstagramFollowButton";

export default function MobileNav() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modalRef = useRef(null);
	const navLinks = [
		"Home",
		// "Work",
		"Services",
		"Works",
		"Tech",
		"Pricing",
		"Blog",
		"About Us",
	];

	const toggleModal = () => {
		if (isModalOpen) {
			gsap.to(modalRef.current, {
				x: "100%",
				duration: 0.3,
				ease: "power2.inOut",
				onComplete: () => setIsModalOpen(false),
			});
		} else {
			setIsModalOpen(true);
			gsap.fromTo(
				modalRef.current,
				{ x: "100%" },
				{ x: "0%", duration: 0.3, ease: "power2.inOut" }
			);
		}
	};

	return (
		<div className="nav-mobile block lg:hidden max-w-[100vw]">
			<nav className="navbar px-6 py-4 fixed w-full top-0 z-50 backdrop-blur-md border-b border-white/10 text-white">
				<div className="max-w-7xl mx-auto flex justify-between items-center h-[1.8rem]">
					<CustomLink href="/">
						{/* <span className="speak text-lg font-bold  relative -left-[0rem] transition-colors duration-100 tracking-[0.2rem]">
							TWEENLAB
						</span> */}
						<img
							src="/images/updatedLogo.png"
							className="relative right-12 h-32 w-56"
						/>
					</CustomLink>

					<button
						onClick={toggleModal}
						className="toggleButton p-1 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all z-50 relative"
					>
						<svg
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								className="path"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</nav>

			{/* Modal Overlay */}
			{isModalOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
					onClick={toggleModal}
				/>
			)}

			{/* Modal Content */}
			<div
				ref={modalRef}
				className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gradient-to-b from-gray-900 to-gray-800 z-50 shadow-2xl"
				style={{ transform: "translateX(100%)" }}
			>
				<div className="p-6 border-b border-white/10 flex justify-between items-center text-white">
					<h2 className="text-xl font-bold  bg-clip-text ">Menu</h2>
					<button
						onClick={toggleModal}
						className="closeNav p-1 hover:bg-black/10 rounded-lg transition-colors text-white"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<div className="p-6 space-y-4">
					{navLinks.map((item) => (
						<div key={item} onClick={() => toggleModal()}>
							<CustomLink
								href={`/${
									item.toLowerCase() === "home"
										? "/"
										: item.toLowerCase().replace(/\s+/g, "")
								}`}
							>
								<div className="px-4 py-2 hover:bg-white/5 rounded-lg transition-all transform hover:translate-x-2">
									<span className="text-lg font-medium text-white bg-clip-text ">
										{item}
									</span>
								</div>
							</CustomLink>
						</div>
					))}
					<div className="absolute bottom-10 mt-40">
						<FollowOnFacebook />
						<FollowOnInstagram />
					</div>
				</div>
			</div>
		</div>
	);
}
