
import React, { useState } from "react";

import Link from "next/link";

const Navbar = () => {
	

	return (
		<>
			<section className="sticky top-0 bg-white w-full z-50 flex justify-center ">
				<div className="container mx-auto  hidden lg:w-[80%] 2xl:w-[80%] justify-between py-4 px-4 lg:flex items-center ">
					<Link href="/">
						<div className="flex items-center space-x-1">
							<img
								src="logo.svg"
								width={120}
								height={100}
								className="h-12 w-auto"
							/>
							<img
								src="js-img.png"
								width={120}
								height={100}
								className="h-8 w-auto -mt-1.5"
							/>
						</div>
					</Link>
					<div className="flex items-center space-x-7 lg:mr-6">
						<button
							className="text-text font-medium"
							onClick={() =>
								window.open(
									"https://dev-app.jobscout.work/",
									"_blank",
								)
							}
						>
							Login
						</button>

						<button className="text-text font-medium bg-btnbackground px-4 py-2 rounded">
							Request Demo
						</button>
					</div>
				</div>
			</section>
			<section
				className={`sticky top-0 -mt-3 bg-white flex h-20 items-center justify-between px-4 lg:hidden z-50`}
			>
				<Link href="/">
					<div className="flex items-center  space-x-1">
						<img
							src="logo.svg"
							width={120}
							height={100}
							className="h-10 w-auto"
						/>
						<img
							src="js-img.png"
							width={120}
							height={100}
							className="h-7 w-auto -mt-1.5"
						/>
					</div>
				</Link>

				<button className="text-text font-medium text-xl">Login</button>
			</section>
		</>
	);
};

export default Navbar;
