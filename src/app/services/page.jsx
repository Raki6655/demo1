import ServicePage from "@/components/service/ServicePage";
import PageContainer from "@/components/utils/PageContainer";
import React from "react";

const index = () => {
	return (
		<PageContainer>
			<div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
				<ServicePage />
			</div>
		</PageContainer>
	);
};

export default index;
