import Templates from "@/components/templates/Templates";
import PageContainer from "@/components/utils/PageContainer";
import VerticalSlider from "@/components/VerticalSlider/VerticalSlider";
import React from "react";

const index = () => {
	return (
		<PageContainer>
			<div className="mt-[6rem] lg:mt-[8rem] px-2 flex flex-col items-start lg:items-center">
				<h1 className="text-white text-3xl lg:text-5xl font-bold">
					Our Work <span className="speak ml-2">SPEAKS</span>
				</h1>
				<h2 className="text-white text-md lg:text-lg font-medium mt-4">
					We believe in delivering top-notch solutions with precision and
					innovation, ensuring quality and reliability in every project.
				</h2>
			</div>
			<div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950  ">
				{/* <Templates /> */}
				<VerticalSlider />
			</div>
		</PageContainer>
	);
};

export default index;
