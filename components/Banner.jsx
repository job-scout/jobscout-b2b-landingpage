import React from "react";

function Banner() {
	return (
		<div className="bg-primary">
			<div className=" text-white h-screen lg:h-[86vh] 2xl:h-[90vh] flex items-center justify-between container mx-auto px-4 lg:w-[80%] 2xl:w-[80%] space-x-12 ">
				<div className="lg:w-[50%] flex flex-col space-y-12 lg:my-0 my-12">
					<div className="flex flex-col space-y-5">
						<h1 className="lg:text-left text-center text-4xl lg:text-5xl font-medium lg:leading-snug leading-snug">
							Automate your hiring process
						</h1>
						<p className="text-sm lg:text-lg lg:text-left text-center ">
							JobScout helps your team transcribe, summarize,
							search, and analyze voice conversations.
						</p>
					</div>
					<div className="lg:flex lg:flex-row flex flex-col items-center space-y-5 lg:space-y-0 lg:space-x-6 ">
						<button className="bg-text py-3 px-5 rounded  text-lg">
							Get started for free
						</button>
						<button className="bg-white/10 py-3 px-10 rounded  text-lg">
							Request Demo
						</button>
					</div>
				</div>
				<div className="lg:w-[40%] 2xl:w-[30%] hidden lg:block"><img src="banner.png" className="w-full h-auto"/></div>
			</div>
		</div>
	);
}

export default Banner;
