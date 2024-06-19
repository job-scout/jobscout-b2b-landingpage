import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";

function BlogDetailPage({ blog }) {
	const router = useRouter();

	const {
		id,
		title,
		content,
		thumbNail,
		readTime,

		createdAt,

		posted,
		blogCategory,
	} = blog;

	const date = new Date(createdAt);

	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];
	const day = date.getDate().toString().padStart(2, "0");
	const monthIndex = date.getMonth();
	const month = monthNames[monthIndex];
	const year = date.getFullYear();

	const formattedDateStr = `${month} ${day}, ${year}`;

	const shareOnSocialMedia = (platform, blogTitle) => {
		let shareUrl = "";
		switch (platform) {
			case "facebook":
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
					window.location.href,
				)}`;
				break;
			case "twitter":
				shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
					blogTitle,
				)}&url=${encodeURIComponent(window.location.href)}`;
				break;

			default:
				return;
		}
		window.open(shareUrl, "_blank");
	};

	const copyToClipboard = () => {
		const link = "https://jobscout.co.in" + router.asPath;
		console.log(link);
		navigator.clipboard
			.writeText(link)
			.then(() => {
				toast.success("Link copied to clipboard!");
			})
			.catch((err) => {
				toast.error("Failed to copy the link");
			});
	};

	const [loaded, setLoaded] = useState(false);

	const handleImageLoad = () => {
		setLoaded(true);
	};

	return (
		<div className="mb-28 mt-7 container w-full lg:w-[60%] 2xl:w-[60%] mx-auto px-4 space-y-7">
			<button onClick={() => router.back()}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-move-left"
				>
					<path d="M6 8L2 12L6 16" />
					<path d="M2 12H22" />
				</svg>
			</button>
			<h1 className="text-xl lg:text-3xl font-medium leading-normal text-black ">
				{title}
			</h1>

			<div>
				<div className="font-medium lg:flex  lg:flex-row flex flex-col space-y-3 lg:space-y-0  justify-between items-center py-3 border-y border-[#BDBDBD]">
					<div className="flex items-center space-x-2 text-gray-500 ">
						<p>{formattedDateStr}</p>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="8"
							height="8"
							viewBox="0 0 8 8"
							fill="none"
						>
							<circle
								cx="4"
								cy="4"
								r="4"
								transform="matrix(-1 0 0 1 8 0)"
								fill="#4F4F4F"
							/>
						</svg>
						<p>{readTime} min read</p>
					</div>

					<div className="flex items-center space-x-4 ">
						<button
							onClick={() =>
								shareOnSocialMedia("twitter", blog?.title)
							}
						>
							<svg
								width="22"
								height="22"
								viewBox="0 0 22 22"
								fill="black"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="simple-icons:x">
									<path
										id="Vector"
										d="M17.3259 1.05713H20.6992L13.3293 9.4813L22 20.9424H15.2112L9.8945 13.9904L3.80967 20.9424H0.4345L8.31783 11.9315L0 1.05805H6.96117L11.7673 7.41238L17.3259 1.05713ZM16.1425 18.9239H18.0116L5.9455 2.97021H3.93983L16.1425 18.9239Z"
										fill="black"
									/>
								</g>
							</svg>{" "}
						</button>

						<button
							onClick={() =>
								shareOnSocialMedia("facebook", blog?.title)
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="11"
								height="22"
								viewBox="0 0 11 22"
								fill="none"
							>
								<path
									d="M8.99732 3.65292H10.9144V0.154917C10.5837 0.10725 9.4462 0 8.12145 0C2.05595 0 3.7062 7.19583 3.4647 8.25H0.413574V12.1605H3.46382V22H7.20357V12.1614H10.1304L10.5951 8.25092H7.2027C7.3672 5.66225 6.53682 3.65292 8.99732 3.65292Z"
									fill="blue"
								/>
							</svg>{" "}
						</button>
						<button onClick={() => copyToClipboard()}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 30 30"
								fill="none"
							>
								<path
									d="M8.90625 7.5H25.3125C25.6855 7.5 26.0431 7.64816 26.3069 7.91188C26.5706 8.1756 26.7188 8.53329 26.7188 8.90625V25.3125C26.7188 25.6855 26.5706 26.0431 26.3069 26.3069C26.0431 26.5706 25.6855 26.7188 25.3125 26.7188H8.90625C8.53329 26.7188 8.17561 26.5706 7.91188 26.3069C7.64816 26.0431 7.5 25.6855 7.5 25.3125V8.90625C7.5 8.53329 7.64816 8.1756 7.91188 7.91188C8.17561 7.64816 8.53329 7.5 8.90625 7.5ZM10.3125 23.9062H23.9062V10.3125H10.3125V23.9062ZM3.28125 4.6875V21.0938C3.28125 21.4667 3.42941 21.8244 3.69313 22.0881C3.95686 22.3518 4.31454 22.5 4.6875 22.5C5.06046 22.5 5.41814 22.3518 5.68187 22.0881C5.94559 21.8244 6.09375 21.4667 6.09375 21.0938V6.09375H21.0938C21.4667 6.09375 21.8244 5.94559 22.0881 5.68187C22.3518 5.41815 22.5 5.06046 22.5 4.6875C22.5 4.31454 22.3518 3.95685 22.0881 3.69313C21.8244 3.42941 21.4667 3.28125 21.0938 3.28125H4.6875C4.31454 3.28125 3.95686 3.42941 3.69313 3.69313C3.42941 3.95685 3.28125 4.31454 3.28125 4.6875Z"
									fill="black"
									fill-opacity="0.75"
								/>
							</svg>{" "}
						</button>
					</div>
				</div>

				<div className="my-8 flex flex-col items-center justify-between">
					{!loaded && (
						<div
							className="rounded-t w-full h-[250px]  bg-gradient-to-b from-gray-50 to-gray-200"
							style={{ zIndex: 1 }}
						></div>
					)}
					<img
						className={`rounded-t object-cover lg:mx-auto  lg:w-[60%] w-full h-auto ${
							loaded ? "opacity-100" : "opacity-0"
						}`}
						src={thumbNail}
						alt={"test"}
						height={360}
						width={"auto"}
						onLoad={handleImageLoad}
					/>
					<div className="mt-8 ">
						<p
							className=" mb-5 "
							dangerouslySetInnerHTML={{ __html: content }}
						/>
					</div>{" "}
				</div>
			</div>
		</div>
	);
}

export default BlogDetailPage;
