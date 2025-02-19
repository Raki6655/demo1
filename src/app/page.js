// "use client";

import HeroSection from "@/components/HeroSection";
import LandingDeep2 from "@/components/LandingDeepSeek2";
import LandingDemo from "@/components/LandingDemo";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/about/AboutUs";
import ProjectsSection from "@/components/project/OurProjects";
import ServicePage from "@/components/service/ServicePage";
import Templates from "@/components/templates/Templates";

// import { Oswald } from "../fonts/Oswald (1)";

export const metadata = {
	title: "Page Title",
	description: "Page Description",
};
export default function Home() {
	return (
		<>
			<div>
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
