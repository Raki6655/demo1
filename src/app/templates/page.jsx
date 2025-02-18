import Templates from "@/components/templates/Templates";
import PageContainer from "@/components/utils/PageContainer";
import VerticalSlider from "@/components/VerticalSlider/VerticalSlider";
import React from "react";

const index = () => {
	return (
		<PageContainer>
			<div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950  ">
				{/* <Templates /> */}
				<VerticalSlider />
			</div>
		</PageContainer>
	);
};

export default index;
