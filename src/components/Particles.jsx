"use client";

import { useEffect, useState } from "react";

export default function Particles() {
	const [positions] = useState(() =>
		Array.from({ length: 30 }, () => ({
			top: Math.random() * 100,
			left: Math.random() * 100,
			duration: 5 + Math.random() * 10,
		}))
	);

	return (
		<div className="absolute inset-0">
			{positions.map((pos, i) => (
				<div
					key={i}
					className="absolute w-1 h-1 bg-white rounded-full"
					style={{
						top: `${pos.top}%`,
						left: `${pos.left}%`,
						animation: `float ${pos.duration}s infinite ease-in-out`,
					}}
				/>
			))}
		</div>
	);
}
