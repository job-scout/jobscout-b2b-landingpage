import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const NavItems = () => {
	const navigation = [
		{ name: "About Us", href: "/about-us" },
		{ name: "Features", href: "/our-feature" },
		{ name: "FAQs", href: "/faq" },
		{ name: "Contact Us", href: "/contact-us" },
	];
	const router = useRouter();

	return (
		<div className="mt-12 flex flex-col items-center gap-10 lg:mt-0 lg:flex-row">
			<ul className="flex flex-col items-center gap-6 text-base font-semibold sm:gap-10 lg:flex-row ">
				<Link
					className={`font-medium text-lg mr-0 lg:mr-1 ${
						router.pathname === "/" ? "text-primary" : "text-gray"
					} hover:text-secondary `}
					href={"/"}
				>
					<span className="poppins-text">Home</span>
				</Link>
				{navigation?.map((nav, index) => (
					<li key={index}>
						<Link
							className={`font-medium text-lg ${
								router.asPath.includes(nav.href)
									? "text-primary"
									: "text-gray"
							} hover:text-secondary`}
							href={nav.href}
						>
							<span className="poppins-text">{nav.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavItems;
