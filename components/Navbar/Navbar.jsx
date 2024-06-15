import React, { useState } from "react";

import Link from "next/link";

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(true);

	// Function to hide the banner

	const hideBanner = () => {
		setIsVisible(false);
	};
	return (
		<>
			{isVisible && (
				<div
					id="banner"
					className="bg-gradient-to-r from-violet-400 via-violet-700 to-blue-700   font-medium text-white text-sm "
				>
					<div className="lg:flex lg:flex-row flex flex-col items-center justify-center  lg:h-9 py-1 lg:py-0">
						<h1>Introducing JobScout mobile app! &#128293;</h1>
						<a
							href="https://example.com"
							className="ml-2 underline"
						>
							Install now
						</a>
						<button
							onClick={hideBanner}
							className="absolute right-7 bg-transparent border-0 text-white cursor-pointer"
						>
							✖
						</button>
					</div>
				</div>
			)}
			<section className="sticky top-0 bg-white w-full z-50 flex justify-center ">
				<div className="container mx-auto  hidden lg:w-[90%] 2xl:w-[90%] justify-between py-4 px-4 lg:flex items-center ">
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
							// onClick={() =>
							// 	window.open(
							// 		"https://dev-app.jobscout.work/",
							// 		"_blank",
							// 	)
							// }
						>
							Login
						</button>

						<button className="text-text font-medium bg-btnbackground px-4 py-2 rounded">
							Try Demo 
						</button>
					</div>
				</div>
			</section>
			<section
				className={`sticky top-0  bg-white flex h-20 items-center justify-between px-4 lg:hidden z-50`}
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

				<button
					className="text-text font-medium text-xl"
					// onClick={() =>
					// 	window.open("https://dev-app.jobscout.work/", "_blank")
					// }
				>
					Login
				</button>
			</section>
		</>
	);
};

export default Navbar;
