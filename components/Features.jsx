import { CheckCircleIcon } from "lucide-react";
import React from "react";

function Features() {
	return (
		<div className="my-16 flex flex-col space-y-8">
			{/*1 section */}

			<div className="lg:flex lg:flex-row flex flex-col items-center justify-between lg:space-x-12 container mx-auto px-4 w-full lg:w-[80%] 2xl:w-[80%] py-7">
				<div className="lg:w-[50%] flex flex-col">
					<h1 className="text-black text-2xl lg:text-3xl font-medium">
						Accelerate Your Hiring Process with AI
					</h1>

					<div className="my-7 flex flex-col space-y-7">
						<div className="flex items-start ">
							<CheckCircleIcon
								color="#3AE4AD"
								size={30}
								className="mr-4"
							/>{" "}
							<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl  ">
								Utilize AI to schedule interviews automatically
								without manual intervention.
							</p>
						</div>
						<div className="flex items-start ">
							<CheckCircleIcon
								color="#3AE4AD"
								size={30}
								className="mr-4"
							/>{" "}
							<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl">
								Evaluate candidates promptly with AI-powered
								assessment tools.
							</p>
						</div>
						<div className="flex items-start ">
							<CheckCircleIcon
								color="#3AE4AD"
								size={30}
								className="mr-4 "
							/>{" "}
							<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl">
								Access AI-generated insights to make faster
								hiring decisions.
							</p>
						</div>
					</div>
					<button className="bg-primary text-white py-2 px-5 rounded text-lg ml-10 lg:w-1/2 mr-10">
						Know More
					</button>
				</div>
				<div className="lg:w-[40%]  flex lg:items-end lg:justify-end">
					<img
						src="feature1.gif"
						className="w-auto h-auto"
						alt="Banner"
					/>
				</div>
			</div>
			{/*2 section */}
			<div className=" bg-btnbackground py-12">
				<div className="lg:flex lg:flex-row flex flex-col items-center justify-between lg:space-x-12  px-4 container mx-auto w-full lg:w-[80%] 2xl:w-[80%]">
					<div className="lg:block hidden lg:w-[40%]">
						<img
							src="banner.png"
							className="w-full h-auto"
							alt="Banner"
						/>
					</div>
					<div className="lg:w-[45%] flex flex-col w-full">
						<h1 className="text-black text-2xl lg:text-3xl font-medium">
							Optimize Efficiency and Reduce Costs with AI
						</h1>

						<div className="my-7 flex flex-col space-y-7">
							<div className="flex items-start ">
								<CheckCircleIcon
									color="#3AE4AD"
									size={30}
									className="mr-4"
								/>{" "}
								<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl">
									Streamline repetitive tasks using AI,
									freeing up recruiter time.
								</p>
							</div>
							<div className="flex items-start ">
								<CheckCircleIcon
									color="#3AE4AD"
									size={30}
									className="mr-4"
								/>{" "}
								<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl">
									Reduce expenses with AI-driven process
									efficiencies.
								</p>
							</div>
							<div className="flex items-start ">
								<CheckCircleIcon
									color="#3AE4AD"
									size={30}
									className="mr-4"
								/>{" "}
								<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl">
									Allow your team to focus on high-impact
									tasks by offloading routine work to AI.
								</p>
							</div>
						</div>
						<button className="bg-primary text-white py-2 px-5 rounded text-lg ml-10 lg:w-1/2 mr-10">
							Know More
						</button>
					</div>
					<div className="lg:hidden lg:w-[40%]">
						<img
							src="banner.png"
							className="w-full h-auto"
							alt="Banner"
						/>
					</div>
				</div>
			</div>
			{/*3 section */}
			<div className="lg:flex lg:flex-row flex flex-col items-center justify-between lg:space-x-12 container mx-auto px-4 py-7 lg:w-[80%] 2xl:w-[80%]">
				<div className="lg:w-[50%] flex flex-col">
					<h1 className="text-black text-2xl lg:text-3xl font-medium">
						Ensure Interview Integrity with AI
					</h1>

					<div className="my-7 flex flex-col space-y-7">
						<div className="flex items-start ">
							<CheckCircleIcon
								color="#3AE4AD"
								size={30}
								className="mr-4"
							/>{" "}
							<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl">
								Utilize AI tools that monitor and secure the
								interview process.
							</p>
						</div>
						<div className="flex items-start ">
							<CheckCircleIcon
								color="#3AE4AD"
								size={30}
								className="mr-4"
							/>{" "}
							<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl">
								Ensure that the candidate’s performance is
								genuine with AI verification.
							</p>
						</div>
						<div className="flex items-start ">
							<CheckCircleIcon
								color="#3AE4AD"
								size={30}
								className="mr-4"
							/>{" "}
							<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl">
								Increase the reliability of your hiring
								decisions with AI-driven integrity checks.
							</p>
						</div>
					</div>
					<button className="bg-primary text-white py-2 px-5 rounded text-lg ml-10 lg:w-1/2 mr-10">
						Know More
					</button>
				</div>
				<div className="lg:w-[40%]  flex lg:items-end lg:justify-end">
					<img
						src="pro 3.gif"
						className="w-auto lg:h-[450px] h-auto"
						alt="Banner"
					/>
				</div>
			</div>
			{/*4 section */}
			<div className=" bg-btnbackground py-12">
				<div className="lg:flex lg:flex-row flex flex-col items-center justify-between lg:space-x-12  px-4 container mx-auto w-full lg:w-[80%] 2xl:w-[80%]">
					<div className="lg:block hidden lg:w-[40%]">
						<img
							src="banner.png"
							className="w-full h-auto"
							alt="Banner"
						/>
					</div>
					<div className="lg:w-[45%] flex flex-col">
						<h1 className="text-black text-2xl lg:text-3xl font-medium">
							Foster a Inclusive Workforce with AI
						</h1>

						<div className="my-7 flex flex-col space-y-7">
							<div className="flex items-start ">
								<CheckCircleIcon
									color="#3AE4AD"
									size={30}
									className="mr-4"
								/>{" "}
								<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl">
									Implement uniform interview procedures using
									AI.
								</p>
							</div>
							<div className="flex items-start ">
								<CheckCircleIcon
									color="#3AE4AD"
									size={30}
									className="mr-4"
								/>{" "}
								<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl">
									Minimize conscious and subconscious biases
									with AI algorithms.
								</p>
							</div>
							<div className="flex items-start ">
								<CheckCircleIcon
									color="#3AE4AD"
									size={30}
									className="mr-4"
								/>{" "}
								<p className="text-gray-500 text-lg max-w-[80%] lg:max-w-sm 2xl:text-xl">
									Attract and retain a diverse pool of talent
									with AI-enhanced fairness.
								</p>
							</div>
						</div>
							<button className="bg-primary text-white py-2 px-5 rounded text-lg ml-10 lg:w-1/2 mr-10">
							Know More
						</button>
					</div>
					
					<div className="lg:hidden lg:w-[40%]">
						<img
							src="banner.png"
							className="w-full h-auto"
							alt="Banner"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Features;
