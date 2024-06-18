import { useRouter } from "next/router";
import React from "react";

function Banner() {
	const router = useRouter()
	return (
		<div className="relative bg-gradient-to-b from-primary via-primary/95 to-primary/75 min-h-screen overflow-hidden">
			<div className="grid-background "></div>

			<div className="text-white  h-[90vh] lg:h-[85vh] flex items-center justify-between container mx-auto px-4 lg:w-[90%] 2xl:w-[90%] space-x-12 lg:pt-8">
				<div className="lg:w-[45%] 2xl:w-[40%] flex flex-col space-y-10  lg:my-0 my-12">
					<div className="flex flex-col space-y-5">
						<h1 className="lg:text-left text-center lg:text-4xl text-5xl 2xl:text-5xl font-medium 2xl:leading-normal lg:leading-snug leading-snug">
							Automate your hiring process
						</h1>
						<div className=" flex flex-row items-center lg:items-start lg:space-x-6 lg:text-base 2xl:text-xl text-xs space-x-5 font-semibold">
							<p className=" linear-text-gradient ">
								{" "}
								4X <span className="">Response Rate</span>
							</p>
							<p className=" linear-text-gradient ">
								{" "}
								6X <span className="">Faster Hires</span>
							</p>
							<p className=" linear-text-gradient ">
								{" "}
								8X <span className="">Referrals</span>
							</p>
						</div>

						<p className="text-md lg:text-md  2xl:text-lg lg:text-left text-center">
							Streamline hiring, cut costs, save time, and secure top talent !
						</p>
					</div>

					<div className="lg:flex lg:flex-row flex flex-col items-center space-y-5 lg:space-y-0 lg:space-x-6">
						<button className="bg-text py-3 px-5 rounded text-lg" onClick={()=>router.push("/#get-started")}>
							Get started for free
						</button>

						<button className="bg-white/10  py-3 px-10 rounded text-lg"  onClick={()=>router.push("/get-started")}>
							Request Demo
						</button>
					</div>
				</div>

				<div className="lg:w-[50%] 2xl:w-[50%] hidden lg:block ">
					<img
						src="banner.gif"
						className="w-full h-auto"
						alt="Banner"
					/>
				</div>
			</div>

			<div className="used-across-section relative flex flex-col items-center justify-center  lg:pt-7 pb-8">
			

				<div className="lg:flex items-center relative z-10 ">
					<img
						src="map.gif"
						className="h-auto  w-auto"
						alt="Logo 1"
					/>
				</div>
					<p className=" text-white  text-lg lg:text-2xl relative z-10  w-[90%] container mx-auto text-center font-semibold">
					<span className="underlined ">
						TRUSTED ACROSS THE
					</span>

					<span className="ml-2 underlined  underline-clip">GLOBE</span>
				</p>
				{/* 
				<div className="marquee-container lg:hidden">
					<div className="marquee-content">
						<img src="dummy-logo.jpg" alt="Logo 1" />

						<img src="dummy-logo.jpg" alt="Logo 2" />

						<img src="dummy-logo.jpg" alt="Logo 3" />

						<img src="dummy-logo.jpg" alt="Logo 4" />
					</div>
				</div>*/}
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
							rgba(255, 255, 255, 0.05) 1px,
							transparent 1px
						),
						linear-gradient(
							to bottom,
							rgba(255, 255, 255, 0.05) 1px,
							transparent 1px
						);

					background-size: 80px 100px;
				}

				/* For mobile view (max-width 1024px) */

				@media (max-width: 1024px) {
					.grid-background {
						display: none;
					}

					.grid-background::before {
						display: none;
					}
				}
			`}</style>
		</div>
	);
}

export default Banner;
