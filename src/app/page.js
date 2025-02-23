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
			<div className="">
				<LandingPage />
				{/* <LandingDemo /> */}
				{/* <HeroSection /> */}
				{/* <div className="max-w-full flex flex-col px-5 lg:px-0 lg:items-start  ml-0 lg:ml-12  serviceHeader relative  my-10 opacity-0 translate-y-20">
					<h1 className="text-black/85 lg:text-black text-3xl lg:text-5xl font-bold">
						Top <span className="speak ml-2">SERVICES</span> We Provide
					</h1>
					<h2 className="text-black/70 lg:text-black  text-md lg:text-lg font-medium mt-4">
						We believe in delivering top-notch solutions with precision and
						innovation, ensuring quality and reliability in every project.
					</h2>
				</div> */}
				<ServicePage />
				<AboutUs />
				{/* <Templates /> */}
				{/* <ProjectsSection /> */}
			</div>
		</>
	);
}
