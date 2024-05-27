import { FOOTER_LINKS } from "@/data/footerData";
import Link from "next/link";

import React from "react";

function Footer() {
    return (
        <div className="bg-btnbackground">
		<div className="container mx-auto py-3 text-black lg:flex lg:flex-row flex flex-col items-center justify-between lg:px-5 px-3 font-medium lg:space-y-0 space-y-4 ">
			<div>JobScout © Copyright2024 </div>
				
				<div>
				<Link href="/privacy-policy"> Privacy</Link> |{" "}
				<Link href="/terms-of-use"> Terms</Link>
			</div>
			
			<div className="flex items-center space-x-4">
				
				{FOOTER_LINKS.social.map((data, index) => (
					<a
						href={data?.href}
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
            </div>
            </div>
	);
}

export default Footer;
