// "use client";

import HeroSection from "@/components/HeroSection";
import LandingDeep2 from "@/components/LandingDeepSeek2";
import LandingPage from "@/components/LandingPage";
import ServicePage from "@/components/service/ServicePage";
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
				{/* <HeroSection /> */}
				<ServicePage />
			</div>
		</>
	);
}
