import BlogCard from "@/components/Blogs/BlogCard";
import BlogCardSkeleton from "@/components/Blogs/BlogCardSkeleton";

import { useEffect, useRef, useState } from "react";

export default function Home() {
	const buttons = [{ label: "All" }];
	const [loading, setLoading] = useState(true);

	// Dummy data for categories
	const dummyCategories = [
		{ category: "Technology", isImportant: true },
		{ category: "Health", isImportant: true },
		{ category: "Business", isImportant: false },
	];

	// Dummy data for blog posts with structure that matches BlogCard component
	const dummyBlogData = [
		{
			id: 1,
			title: "The Future of AI in Technologies",
			content: "AI is rapidly advancing and has the potential to revolutionize various industries. In this blog, we'll delve into the future impacts of AI on technology...",
			thumbNail: "https://via.placeholder.com/250",
			readTime: 5,
			blogCategory: "Technology",
			createdAt: "2023-09-15T10:00:00Z",
		},
		{
			id: 2,
			title: "The Importance of a Healthy Lifestyle",
			content: "Maintaining a healthy lifestyle is crucial for physical and mental well-being. This article explores tips and benefits of leading a healthy lifestyle...",
			thumbNail: "https://via.placeholder.com/250",
			readTime: 7,
			blogCategory: "Health",
			createdAt: "2023-09-14T10:00:00Z",
		},
		{
			id: 3,
			title: "Business Strategies for Startups",
			content: "Starting a business can be challenging. Here are some key strategies to help your startup succeed in today's competitive market...",
			thumbNail: "https://via.placeholder.com/250",
			readTime: 8,
			blogCategory: "Business",
			createdAt: "2023-09-13T10:00:00Z",
		},
	];

	const notImportantCategories = dummyCategories.filter(
		(category) => !category.isImportant,
	);

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState([]);
	const [blogData, setBlogData] = useState([]);
	const [activeButton, setActiveButton] = useState("All");

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		setActiveButton("");
	};

	const handleButtonClick = (buttonLabel) => {
		setActiveButton(buttonLabel);
		setSelectedCategory("");
	};

	useEffect(() => {
		const fetchData = async () => {
			// Simulate data fetch delay
			setTimeout(() => {
				setBlogData(dummyBlogData);
				setLoading(false);
			}, 1000);
		};

		fetchData();
	}, [activeButton, selectedCategory]);

	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [setIsDropdownOpen]);

	return (
		<main className="container mx-auto mb-32 lg:px-16 2xl:px-20 px-4 lg:pt-6">
			<div className="text-center space-y-7">
				<p className="my-6 lg:text-3xl text-2xl font-semibold text-black">
					Community Blog
				</p>
				 <p className=" mx-auto w-full text-[#777E8B] lg:w-[70%]  2xl:w-[60%] lg:leading-loose  leading-normal text-sm lg:text-base">
              Empowering Your Path to Career Triumph! Uncover a Realm of
              Resources, Wisdom, and Backing for Your Professional Journey.
              Connect with us at{" "}
              <a href="mailto:support@jobscout.co.in">
                <span className="text-[#cc56b8] underline">
                  support@jobscout.co.in
                </span>
              </a>{" "}
              to become part of our Flourishing Community.
            </p>
			</div>
			<div className="flex flex-wrap justify-start  px-6 pt-10 pb-10 lg:gap-20 2xl:gap-20  gap-x-12 gap-y-3">
				{buttons.map((button) => (
					<button
						key={button.label}
						className={`lg:text-lg custom-transition hover:text-[#cc56b8] lg:pb-1 ${
							activeButton === button.label
								? "font-bold border-b-2 border-[#cc56b8] text-[#cc56b8]"
								: "font-medium border-b-2 border-transparent"
						}`}
						onClick={() => handleButtonClick(button.label)}
					>
						{button.label}
					</button>
				))}
				{dummyCategories
					.filter((categoryObj) => categoryObj.isImportant)
					.map((categoryObj) => (
						<button
							key={categoryObj.category}
							className={`lg:text-lg custom-transition hover:text-[#cc56b8] lg:pb-1 ${
								selectedCategory === categoryObj.category
									? "font-bold border-b-2 border-[#cc56b8] text-[#cc56b8]"
									: "font-medium border-b-2 border-transparent"
							}`}
							onClick={() => handleCategoryChange(categoryObj.category)}
						>
							{categoryObj.category}
						</button>
					))}
			</div>


			{loading && (
				<div className="grid lg:grid-cols-3 2xl:grid-cols-3 gap-7">
					{Array.from({ length: 6 }).map((_, index) => (
						<BlogCardSkeleton key={index} />
					))}
				</div>
			)}

			{!loading && blogData.length === 0 && (
				<div className="flex flex-col items-center justify-center">
					<img src="/no-data.png" width={500} height={350} className="" />
					<p className="text-gray-700 mb-5">
						Blog for{" "}
						<span className="text-[#cc56b8]"> {selectedCategory} </span>
						category is not available!
					</p>
					{selectedCategory && (
						<button
							key="reset"
							onClick={() => {
								setSelectedCategory([]);
								setIsDropdownOpen(false);
								setLoading(true);
								setActiveButton("All");
							}}
							className="bg-[#cc56b8] text-white px-6 py-3 rounded-3xl"
							role="menuitem"
						>
							Browse All
						</button>
					)}
				</div>
			)}

			{!loading && (
				<div className="grid lg:grid-cols-3 2xl:grid-cols-3 gap-7 2xl:gap-7">
					{blogData
						.filter((blog) =>
							selectedCategory.length > 0
								? blog.blogCategory === selectedCategory
								: true,
						)
						.map((blog, index) => (
							<BlogCard key={index} blog={blog} />
						))}
				</div>
			)}
		</main>
	);
}