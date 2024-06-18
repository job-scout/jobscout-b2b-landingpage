import CaseStudyCard from "@/components/CaseStudyCard";
import React from "react";

const Index = () => {
	const dummyCaseStudyBlogs = [
		{
			id: "1",
			previewImage: "/js_logo.png",
			previewTitle: "Case Study 1",
			previewSubtitle:
				"This is a short description of Case Study 1. It covers the main achievements and results.",
			content:
				"Full content of Case Study 1. This would be a longer text explaining all details and insights achieved during the case study.",
		},
		{
			id: "2",
			previewImage: "/js_logo.png",
			previewTitle: "Case Study 2",
			previewSubtitle:
				"This is a short description of Case Study 2. Showing how the key issues were addressed.",
			content:
				"Full content of Case Study 2. Providing comprehensive details and breakdown of the study.",
		},
		{
			id: "3",
			previewImage: "/js_logo.png",
			previewTitle: "Case Study 3",
			previewSubtitle:
				"This is a short description of Case Study 3. Highlighting the unique approach and results.",
			content:
				"Full content of Case Study 3. Detailing the methodologies and conclusions derived from the case study.",
		},
	];

	return (
		<div className="flex flex-col items-center justify-center mb-24">
			<p className="text-2xl md:text-3xl font-medium text-black mb-4 md:mb-12  mt-8 text-center">
				Case Studies
			</p>

			<div className="flex flex-col justify-center items-center w-full">
				<div className="container mx-auto 2xl:w-[70%] lg:w-[80%] space-y-10 px-5">
					<span className="flex flex-col gap-12 justify-center items-center w-full ">
						{dummyCaseStudyBlogs.map((blog, i) => (
							<CaseStudyCard key={i} blog={blog} index={i} />
						))}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Index;
