"use client";
import Link from "next/link";
import React, { useRef } from "react";
import CustomLink from "./utils/CustomLink";
import MobileNav from "./MobileNavbar";

function Navbar() {
	const navRef = useRef(null);
	return (
		<>
			<div className="hidden lg:block">
				<nav
					ref={navRef}
					className="navbar px-12 py-6 fixed w-full top-0 z-50 backdrop-blur-md border-b border-white/10 text-white"
				>
					<div className="relative max-w-7xl mx-auto flex justify-between items-center gap-5 h-[1.6rem]">
						<CustomLink href={"/"}>
							{/* <span className="speak text-2xl font-bold  relative -left-[6rem] transition-colors duration-100 tracking-[0.4rem]">
								TWEENLAB
							</span> */}
							<img
								src="/images/updatedLogo.png"
								className="relative right-36 h-36 w-60"
							/>
						</CustomLink>
						<div className="space-x-8">
							{[
								// "Work",
								"Services",
								"Works",
								"Tech",
								// "Careers",
								"About Us",
							].map((item) => (
								<CustomLink
									href={`${item.toLowerCase().replace(/\s+/g, "")}`}
									key={item}
								>
									<button className=" hover:text-white transition-colors duration-100 text-sm font-bold uppercase">
										{item}
									</button>
								</CustomLink>
							))}
						</div>
					</div>
				</nav>
			</div>
			{/* <div className="nav-mobile block lg:hidden">
				<nav
					ref={navRef}
					className="navbar px-12 py-6 fixed w-full top-0 z-50 backdrop-blur-md border-b border-white/10 text-white"
				>
					<div className="max-w-7xl mx-auto flex justify-between items-center gap-5">
						<CustomLink href={"/"}>
							<span className="text-xl font-bold  relative -left-[6rem] transition-colors duration-100 ml-14">
								SOLESTYLE
							</span>
						</CustomLink>
						<div className="space-x-8">
							{["Work"].map((item) => (
								<CustomLink href={`${item.toLowerCase()}`} key={item}>
									<button className=" hover:text-white transition-colors duration-100 text-xs font-bold uppercase">
										{item}
									</button>
								</CustomLink>
							))}
						</div>
					</div>
				</nav>
			</div> */}
			<MobileNav />
		</>
	);
}

export default Navbar;
