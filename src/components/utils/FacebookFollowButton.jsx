import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export const FollowOnFacebook = () => {
	const handleFollow = () => {
		window.open(
			"https://www.facebook.com/profile.php?id=100064855270608",
			"_blank"
		);
	};

	return (
		<button
			onClick={handleFollow}
			className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-all rounded-lg shadow-md"
		>
			<FontAwesomeIcon icon={faFacebook} size="lg" />
			<span>Follow on Facebook</span>
		</button>
	);
};
