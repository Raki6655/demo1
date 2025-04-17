/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
			backdropBlur: {
				xs: "2px",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			animation: {
				"bounce-custom": "bounceShrink 5s infinite",
				"ping-slow": "pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
			},
			keyframes: {
				bounceShrink: {
					"0%, 100%": { transform: "scale(1)", opacity: "1" },
					"50%": { transform: "scale(0.9)", opacity: "0.9" },
				},
				pingSlow: {
					"0%": { transform: "scale(1)", opacity: "0.5" },
					"75%, 100%": { transform: "scale(1.8)", opacity: "0" },
				},
			},
		},
	},
	plugins: [],
};
