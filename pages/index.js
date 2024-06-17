import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import OurHappyCustomers from "@/components/OurHappyCustomers";
import FAQ from "@/components/FAQ";
import Hire from "@/components/Hire";
import GetInTouch from "@/components/Contact/GetInTouch";
import OurPromises from "@/components/OurPromises";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="">
			<Banner />
			<div id="features"></div>
			<Features />
			<div id="contact-us">
				<GetInTouch />
      </div>
      			<div id="get-started" className="pt-16"></div>
			<Hire />
			<OurHappyCustomers />
			<FAQ />
		</main>
	);
}
