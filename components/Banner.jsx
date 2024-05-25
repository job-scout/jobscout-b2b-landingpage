import React from "react";

function Banner() {
	return (
		<div className="bg-primary">
			<div className=" text-white lg:h-[86vh] 2xl:h-[90vh] flex items-center justify-between container mx-auto px-4 lg:w-[80%] 2xl:w-[70%] space-x-12 ">
				<div className="w-[50%] flex flex-col space-y-12">
					<div className="flex flex-col space-y-5">
						<h1 className="text-5xl font-medium leading-snug">
							Automate your hiring process
						</h1>
						<p className="text-lg">
							JobScout helps your team transcribe, summarize,
							search, and analyze voice conversations.
						</p>
					</div>
					<div className="flex items-center space-x-6">
						<button className="bg-text py-3 px-5 rounded  text-lg">
							Get started for free
						</button>
						<button className="bg-white/10 py-3 px-5 rounded  text-lg">
							Request Demo
						</button>
					</div>
				</div>
				<div className="w-[50%] "><img src="banner.png"/></div>
			</div>
		</div>
	);
}

export default Banner;
