import Image from "next/image";
// import Link from "next/link";
import React from "react";
// import ProfileSlider from "./ProfileSlider";

import ServiceCard from "./ServiceCard";
import { PROMISES_DATA } from "@/data/OUR_PROMISES";

export default function OurPromises() {
	const { heading, subHeading, service } = PROMISES_DATA[0].promises;
	return (
		<section className="items-center mt-8 px-4">
			<div className="text-container text-center">
				<h2 className="text-3xl  text-center   text-black font-semibold">
					{heading}
				</h2>
				<h6 className="text-gray text-base text-center mt-4">
					{subHeading}
				</h6>
			</div>
			<div className="container mx-auto  lg:flex lg:flex-row flex flex-col  items-center justify-between lg:w-[80%] 2xl:w-[60%]  my-16 space-y-16 lg:space-y-0">
				{service.map((s, index) => (
					<ServiceCard
						key={index}
						icon={s.icon}
						service={s.benefitName}
						description={s.description}
						iconSecondary
					/>
				))}
			</div>
		</section>
	);
}
