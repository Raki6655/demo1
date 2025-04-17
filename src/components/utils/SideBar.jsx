// "use client";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faPhone,
// 	faEnvelope,
// 	faChevronLeft,
// 	faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// export default function ContactSidebar() {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggleSidebar = () => {
// 		setIsOpen((prev) => !prev);
// 	};

// 	return (
// 		<div
// 			className={`fixed top-1/3 right-0 z-50 transition-all duration-300 ease-in-out ${
// 				isOpen ? "translate-x-0" : "translate-x-[85%]"
// 			}`}
// 		>
// 			<div className="relative bg-gradient-to-b from-[#6a82fb]/90 to-[#fc5c7d]/90 shadow-2xl backdrop-blur-md rounded-l-3xl py-4 px-2 flex flex-col items-center gap-4">
// 				{/* Toggle Pill */}
// 				<button
// 					onClick={toggleSidebar}
// 					className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-5 h-10 bg-white/60 hover:bg-white/80 backdrop-blur-lg rounded-r-full shadow-md flex items-center justify-center transition-all duration-300"
// 				>
// 					<FontAwesomeIcon
// 						icon={isOpen ? faChevronRight : faChevronLeft}
// 						className="text-gray-700"
// 						size="xs"
// 					/>
// 				</button>

// 				{/* WhatsApp */}
// 				<a
// 					href="https://wa.me/1234567890"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					className="bg-green-500 hover:bg-green-600 p-3 rounded-full text-white shadow-md transition duration-300"
// 				>
// 					<FontAwesomeIcon icon={faWhatsapp} size="lg" />
// 				</a>

// 				{/* Call */}
// 				<a
// 					href="tel:+1234567890"
// 					className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full text-white shadow-md transition duration-300"
// 				>
// 					<FontAwesomeIcon icon={faPhone} size="lg" />
// 				</a>

// 				{/* Mail */}
// 				<a
// 					href="mailto:someone@example.com"
// 					className="bg-rose-500 hover:bg-rose-600 p-3 rounded-full text-white shadow-md transition duration-300"
// 				>
// 					<FontAwesomeIcon icon={faEnvelope} size="lg" />
// 				</a>
// 			</div>
// 		</div>
// 	);
// }
"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
	faPhone,
	faEnvelope,
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactSidebar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div
			className={`fixed top-[42%] lg:top-[40%] right-0 z-50 transition-all duration-300 ease-in-out ${
				isOpen ? "translate-x-0" : "translate-x-[85%]"
			}`}
		>
			<div className="relative bg-gradient-to-b from-[#6a82fb]/90 to-[#fc5c7d]/90 shadow-2xl backdrop-blur-md rounded-l-3xl py-6 p-3 flex flex-col items-center gap-8">
				{/* Toggle Button */}
				<div
					onClick={toggleSidebar}
					className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-4 h-8 lg-w-6 lg-h-10 bg-white/70 hover:bg-white/90 backdrop-blur-lg rounded-r-full shadow-lg flex items-center justify-center cursor-pointer z-50 transition-all duration-300"
				>
					<FontAwesomeIcon
						icon={isOpen ? faChevronRight : faChevronLeft}
						className="text-gray-700 text-sm transition-transform duration-300"
					/>
				</div>

				{/* WhatsApp */}
				<div className="group relative">
					<a
						href="https://wa.me/+9779765878107"
						target="_blank"
						rel="noopener noreferrer"
						className="relative p-3 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300"
					>
						{/* Oscillating Ring */}
						<span className="absolute inset-0 rounded-full border-4 border-white opacity-20 animate-ping-slow pointer-events-none"></span>
						<FontAwesomeIcon
							icon={faWhatsapp}
							className="relative z-10 text-xl animate-pulse"
						/>
					</a>
					<span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
						WhatsApp
					</span>
				</div>

				{/* Call */}
				<div className="group relative">
					<a
						href="tel:+9779765878107"
						className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full text-white shadow-md transition duration-300"
					>
						<FontAwesomeIcon icon={faPhone} className="text-lg" />
					</a>
					<span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
						Call
					</span>
				</div>

				{/* Mail */}
				<div className="group relative">
					<a
						href="mailto:alannpn75@gmail.com"
						className="bg-rose-500 hover:bg-rose-600 p-3 rounded-full text-white shadow-md transition duration-300"
					>
						<FontAwesomeIcon icon={faEnvelope} className="text-lg" />
					</a>
					<span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
						Mail
					</span>
				</div>
			</div>
		</div>
	);
}
