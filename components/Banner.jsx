import React from "react";

function Banner() {
	return (
		<div className="relative bg-gradient-to-b from-primary via-primary/95 to-primary/75 min-h-screen overflow-hidden">
			<div className="grid-background "></div>

			<div className="text-white  h-[90vh] lg:h-[85vh] flex items-center justify-between container mx-auto px-4 lg:w-[80%] 2xl:w-[80%] space-x-12 lg:pt-8">
				<div className="lg:w-[50%] flex flex-col space-y-12 lg:my-0 my-12">
					<div className="flex flex-col space-y-5">
						<h1 className="lg:text-left text-center text-5xl font-medium lg:leading-snug leading-snug">
							Automate your hiring process
						</h1>

						<p className="text-lg lg:text-left text-center">
							JobScout helps your team transcribe, summarize,
							search, and analyze voice conversations.
						</p>
					</div>

					<div className="lg:flex lg:flex-row flex flex-col items-center space-y-5 lg:space-y-0 lg:space-x-6">
						<button className="bg-text py-3 px-5 rounded text-lg">
							Get started for free
						</button>

						<button className="bg-white/10  py-3 px-10 rounded text-lg">
							Request Demo
						</button>
					</div>
				</div>

				<div className="lg:w-[40%] 2xl:w-[30%] hidden lg:block">
					<img
						src="banner.png"
						className="w-full h-auto"
						alt="Banner"
					/>
				</div>
			</div>

			<div className="used-across-section relative flex flex-col items-center justify-center space-y-12 lg:pt-7 pb-16">
					
				<p className="text-white text-lg lg:text-xl relative z-10 font-medium w-[90%] container mx-auto text-center">
					USED ACROSS 300,000+ ORGANIZATIONS
				</p>

				<div className="lg:flex items-center space-x-12 relative z-10 hidden">
					<img
						src="dummy-logo.jpg"
						className="w-auto h-28"
						alt="Logo 1"
					/>

					<img
						src="dummy-logo.jpg"
						className="w-auto h-28"
						alt="Logo 2"
					/>

					<img
						src="dummy-logo.jpg"
						className="w-auto h-28"
						alt="Logo 3"
					/>

					<img
						src="dummy-logo.jpg"
						className="w-auto h-28"
						alt="Logo 4"
					/>
				</div>

				<div className="marquee-container lg:hidden">
					<div className="marquee-content">
						<img src="dummy-logo.jpg" alt="Logo 1" />

						<img src="dummy-logo.jpg" alt="Logo 2" />

						<img src="dummy-logo.jpg" alt="Logo 3" />

						<img src="dummy-logo.jpg" alt="Logo 4" />
					</div>
				</div>
			</div>

			<style jsx>{`
				.used-across-section {
					position: relative;

					z-index: 1;

					width: 100%;

					overflow: hidden;
				}

				.grid-background {
					position: absolute;

					top: 75%;

					left: 50%;

					transform: translate(-50%, -50%) perspective(1000px)
						rotateX(60deg);

					width: 100vw;

					height: 150vh;

					background: none;

					z-index: 0;
				}

				.grid-background::before {
					content: "";

					position: absolute;

					top: 0;

					left: 0;

					width: 100%;

					height: 100%;

					background-image: linear-gradient(
							to right,
							rgba(255, 255, 255, 0.1) 1px,
							transparent 1px
						),
						linear-gradient(
							to bottom,
							rgba(255, 255, 255, 0.1) 1px,
							transparent 1px
						);

					background-size: 50px 80px;
				}

				/* For mobile view (max-width 1024px) */

				@media (max-width: 1024px) {
					.grid-background {
						display:none
						
					}

					.grid-background::before {
						display:none
					}
				}
			`}</style>
		</div>
	);
}

export default Banner;
