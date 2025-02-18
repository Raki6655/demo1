import ServicePage from "@/components/service/ServicePage";
import PageContainer from "@/components/utils/PageContainer";
import React from "react";
import "../../app/globals.css";
import ServicesHero from "@/components/serviceHero/ServiceHero";

const index = () => {
	return (
		<PageContainer>
			<div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
				<ServicesHero />
				{/* <ServicePage /> */}
			</div>
		</PageContainer>
	);
};

export default index;
