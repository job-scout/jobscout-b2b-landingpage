/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import {
	Facebook,
	Linkedin,
	Mail,
	MoveLeft,
	Printer,
	Twitter,
} from "lucide-react";
import Link from "next/link";

import { shareOnSocialMedia } from "@/utils";
import { useRouter } from "next/router";
import Text from "./Text";

const printBlog = () => {
	window.print();
};

const shareViaEmail = (blogTitle, blogUrl) => {
	const subject = encodeURIComponent(`Check out this blog: ${blogTitle}`);
	const body = encodeURIComponent(
		`I thought you might find this blog interesting:\n${blogTitle}\n${blogUrl}`,
	);
	window.location.href = `mailto:?subject=${subject}&body=${body}`;
};

const DummyBlog = ({ blog }) => {
	// console.log(blog)
	const router = useRouter();
	return (
		<div className="container mx-auto  lg:w-[90%] mb-10 px-3 md:px-10 -mt-16">
			<div className="relative w-full  px-3 lg:mb-10">
				<MoveLeft
					className="rounded-full w-8 h-10 p-1 cursor-pointer hover:text-secondary"
					onClick={() => router.back()}
				/>
				<p className="text-xs md:text-sm text-[#0895FF] ">
					Notes from the Field{" "}
					<span className="text-[#A5A5A5]">
						{" "}
						• {blog?.timeToRead}
					</span>
				</p>
				<Text variant="heading">{blog?.mainTitle}</Text>
				<p className="text-xs md:text-sm text-[#A5A5A5]">
					by <strong>JobScout</strong>
				</p>
				<img
					src={blog?.previewImage}
					width={300}
					height={50}
					className=" flex items-center w-[100%] h-[200px] object-contain mt-3"
				/>
			</div>

			<div className="relative flex flex-col lg:flex-row justify-start items-center lg:items-start px-3 gap-4">
				<div className="flex lg:flex-col space-y-0 lg:space-y-2 gap-2 my-3 lg:my-0">
					<button
						onClick={() =>
							shareOnSocialMedia("facebook", blog?.mainTitle)
						}
					>
						<Facebook className="bg-[#A5A5A5] stroke-none rounded-full w-8 h-8 p-1 cursor-pointer fill-white hover:bg-primary hover:stroke-primary transition duration-300" />
					</button>

					<button
						onClick={() =>
							shareOnSocialMedia("linkedin", blog?.mainTitle)
						}
					>
						<Linkedin className="bg-[#A5A5A5] stroke-[#A5A5A5] rounded-full w-8 h-8 p-1 cursor-pointer fill-white hover:bg-primary hover:stroke-primary transition duration-300" />
					</button>
					<button
						onClick={() =>
							shareViaEmail(blog?.mainTitle, window.location.href)
						}
					>
						<Mail className="bg-[#A5A5A5] stroke-[#A5A5A5] rounded-full w-8 h-8 p-1 cursor-pointer fill-white hover:bg-primary hover:stroke-primary transition duration-300" />
					</button>
					<button onClick={printBlog}>
						<Printer className="bg-[#A5A5A5] stroke-[#A5A5A5] rounded-full w-8 h-8 p-1 cursor-pointer fill-white hover:bg-primary hover:stroke-primary transition duration-300" />
					</button>
				</div>
				<Text html={blog?.content} className="mb-20 w-full" />
			</div>
		</div>
	);
};

export default DummyBlog;
