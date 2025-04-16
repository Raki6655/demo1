import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const FollowOnInstagram = () => {
	const handleFollow = () => {
		window.open("https://www.instagram.com/your_username_here", "_blank"); // Replace with your actual Instagram link
	};

	return (
		<button
			onClick={handleFollow}
			className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:brightness-110 transition-all rounded-lg shadow-md"
		>
			<FontAwesomeIcon icon={faInstagram} size="lg" />
			<span>Follow on Instagram</span>
		</button>
	);
};
