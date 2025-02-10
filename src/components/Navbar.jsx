"use client";
import React, { useRef } from "react";

function Navbar() {
	const navRef = useRef(null);
	return (
		<div>
			<nav
				ref={navRef}
				className="navbar px-12 py-6 fixed w-full top-0 z-50 backdrop-blur-md border-b border-white/10 text-white"
			>
				<div className="max-w-7xl mx-auto flex justify-between items-center gap-5">
					<span className="text-2xl font-bold  relative -left-[6rem] transition-colors duration-100">
						SOLESTYLE
					</span>
					<div className="space-x-8">
						{[
							"Work",
							"Services",
							"Templates",
							"Tech",
							"Careers",
							"About Us",
						].map((item) => (
							<button
								key={item}
								className=" hover:text-white transition-colors duration-100 text-sm font-bold uppercase"
							>
								{item}
							</button>
						))}
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
