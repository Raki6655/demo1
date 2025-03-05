// "use client";

import LandingPage from "@/components/LandingPage";
import AboutUs from "@/components/about/AboutUs";
import ServicePage from "@/components/service/ServicePage";

export const metadata = {
	title: "TWEENLAB | Your One-Stop Solution for All Tech Services",
	description:
		"TWEENLAB is a top software development agency providing web development, mobile apps, UI/UX design, cloud solutions, AI development, and more.",
	keywords:
		"software development, web development, mobile app development, UI/UX design, cloud solutions, AI development, machine learning, blockchain, SaaS development, IT consulting, tech agency, software company, custom software solutions, Next.js development, React development, full-stack development",
	openGraph: {
		title: "TWEENLAB | Your One-Stop Solution for All Tech Services",
		description:
			"TWEENLAB provides cutting-edge software solutions, including web & mobile app development, AI, cloud solutions, and more. Let's build something great together.",
		url: "https://tweenlab.com", // Replace with your actual domain
		siteName: "TWEENLAB",
		images: [
			{
				url: "/images/TLlogo.webp", // Replace with your actual image
				width: 1200,
				height: 630,
				alt: "TWEENLAB - Software Development Agency",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "TWEENLAB | Your One-Stop Solution for All Tech Services",
		description:
			"Need top-notch software solutions? TWEENLAB delivers web & mobile apps, AI, cloud services, and more. Contact us today!",
		images: ["https://tweenlab.com/twitter-card.jpg"], // Replace with your actual image
	},
};
export default function Home() {
	return (
		<>
			<div className="">
				<LandingPage />
				{/* <LandingDemo /> */}
				{/* <HeroSection /> */}

				<ServicePage />
				<AboutUs />
				{/* <Templates /> */}
				{/* <ProjectsSection /> */}
			</div>
		</>
	);
}
