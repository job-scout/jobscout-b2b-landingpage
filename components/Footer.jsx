
import { FOOTER_LINKS } from "@/data/footerData";
import Link from "next/link";

import { useRouter } from "next/router";


const Footer = () => {
	const router = useRouter();

	// console.log(router.asPath);

	return (
		<div className="bg-primary px-4 lg:px-8 lg:py-8 pt-4 pb-8  text-white">
			<div className="container mx-auto lg:w-[90%] 2xl:w-[80%]  w-full justify-between sm:flex  pb-12">
				<div
					className="flex flex-col  space-y-5 lg:items-start lg:justify-start lg:w-[40%]  lg:mt-0 mt-12 px-4 "
					onClick={() => router.push("/")}
				>
					<img src="js_logo.png" className="lg:w-auto lg:h-36 w-28 h-28"/>
					<p className="text-white/50 ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, id?
					</p>
					<div className="flex items-center space-x-4">
				
				
			</div>
				</div>
				<div className="mx-4 mt-10  gap-6   lg:mx-0 lg:mt-0 lg:flex lg:flex-row  flex flex-col space-y-7 lg:space-y-0 lg:w-[50%] ">
					<div className="flex flex-col gap-3 lg:w-[40%]">
						<p className="font-semibold text-2xl mb-3">
							Company
						</p>
						<div className="flex flex-col gap-2">
							<Link
								className="text-white/50 hover:text-white"
								href="/"
							>
								Our Story
							</Link>
							<Link
								className="text-white/50 hover:text-white"
								href="/"
							>
								Book a demo
							</Link>
							<Link
								className="text-white/50 hover:text-white"
								href="/"
							>
								Pricing
							</Link>
							<Link
								className="text-white/50 hover:text-white"
								href="/"
							>
								Careers
							</Link>
						</div>
						
					</div>
					<div className="flex flex-col gap-3 lg:w-[40%]">
						<p className="font-semibold text-2xl mb-3 ">Resources</p>
						<div className="flex flex-col gap-2">
							<Link
								className="text-white/50 hover:text-white"
								href="/"
							>
								Guides
							</Link>
							<Link
								className="text-white/50 hover:text-white"
								href="/"
							>
								Blogs
							</Link>
							
						</div>
					
					</div>

					<div className="flex flex-col gap-3 lg:w-[30%]">
						<p className="font-semibold text-2xl mb-3 ">Legal</p>
						<div className="flex flex-col gap-2">
							{/*	{FOOTER_LINKS.contact.map((com, index) => (
								<div
									key={index}
									className="flex items-start gap-x-2 text-white/50 hover:text-white"
								>
									<a
										href={com?.href}
										dangerouslySetInnerHTML={{
											__html: com?.label.replace(
												/\n/g,
												"<br/>",
											),
										}}
									/>
								</div>
							))} */}
							<div className="flex flex-col gap-2">
							<Link
								className="text-white/50 hover:text-white"
								href="/terms-of-use"
							>
								Terms Of Use
							</Link>
							<Link
								className="text-white/50 hover:text-white"
								href="/privacy-policy"
							>
								Privacy Policy
							</Link>
							
						</div>
						</div>
					</div>
				</div>
				
			</div>
			<div className="pt-5 text-center border-t border-gray text-white/50">
				© 2024 JobScout | All Rights Reserved
			</div>
			{/*
			<div className="container mx-auto mt-16 justify-between md:flex">
				<div className="ml-4 md:ml-0 flex flex-col gap-2  sm:flex-row md:gap-10">
					<a
						href="/terms-&-conditions"
						className={`${
							router.asPath === "/terms-&-conditions"
								? "underline"
								: ""
						}`}
					>
						Terms & Conditions
					</a>
					<a
						href="/privacy-policy"
						className={`${
							router.asPath === "/privacy-policy"
								? "underline"
								: ""
						}`}
					>
						Privacy Policy
					</a>
				</div>
				<div className="ml-4 mt-5 flex items-center gap-4 justify-start md:ml-0 md:mt-0 md:gap-6">
					{FOOTER_LINKS.social.map((data, index) => (
						<a
							href={data.href}
							target="_blank"
							key={index}
							className=""
						>
							<img
								src={data?.icon}
								alt={data?.label}
								height={data?.height}
								width={data?.width}
							/>
						</a>
					))}
				</div>
				</div>*/}
		</div>
	);
};

export default Footer;
