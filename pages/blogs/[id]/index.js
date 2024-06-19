import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import BlogDetailPage from "@/components/Blogs/BlogDetailPage";

function Index() {
	const router = useRouter();
	const { id } = router.query;
	const [blogData, setBlogData] = useState(null);
	const [loading, setLoading] = useState(true);

	function extractIdFromURL(url) {
		try {
			if (!url) {
				throw new Error("Invalid URL");
			}
			const parts = url.split("/");
			const lastPart = parts[parts.length - 1];
			if (!lastPart) {
				throw new Error("URL does not contain an ID");
			}
			const id = lastPart.split("-").pop();
			if (!id) {
				throw new Error("ID could not be extracted from URL");
			}
			return id;
		} catch (error) {
			console.error("Error extracting ID from URL:", error.message);
			return null;
		}
	}

	const blogID = extractIdFromURL(id);

	// Dummy data for blog posts
	const dummyBlogData = [
		{
			id: "1",
			title: "The Future of AI in Technology",
			content: "AI is rapidly advancing and has the potential to revolutionize various industries. In this blog, we'll delve into the future impacts of AI on technology...",
			thumbNail: "https://via.placeholder.com/250",
			readTime: 5,
			createdAt: "2023-09-15T10:00:00Z",
			blogCategory: "Technology",
		},
		{
			id: "2",
			title: "The Importance of a Healthy Lifestyle",
			content: "Maintaining a healthy lifestyle is crucial for physical and mental well-being. This article explores tips and benefits of leading a healthy lifestyle...",
			thumbNail: "https://via.placeholder.com/250",
			readTime: 7,
			createdAt: "2023-09-14T10:00:00Z",
			blogCategory: "Health",
		},
		{
			id: "3",
			title: "Business Strategies for Startups",
			content: "Starting a business can be challenging. Here are some key strategies to help your startup succeed in today's competitive market...",
			thumbNail: "https://via.placeholder.com/250",
			readTime: 8,
			createdAt: "2023-09-13T10:00:00Z",
			blogCategory: "Business",
		},
	];

	useEffect(() => {
		const fetchData = async () => {
			// Using dummy data instead of fetching from API or localStorage
			setBlogData(dummyBlogData);
			setLoading(false);
		};

		if (blogID) {
			fetchData();
		}
	}, [blogID]);

	if (loading) {
		return <div>Loading...</div>;
	}

	const matchingBlog = blogData
		? blogData.find((blog) => blog.id === blogID)
		: null;

	const relatedBlogs = blogData?.filter(
		(blog) => blog.blogCategory === matchingBlog?.blogCategory && blog.id !== blogID,
	);

	const top3RelatedBlogs = relatedBlogs?.slice(0, 3);

	return (
		<div>
			<Head>
				{matchingBlog && (
					<>
						<title>{matchingBlog.title}</title>
					</>
				)}
			</Head>
			{matchingBlog && <BlogDetailPage blog={matchingBlog} />}

			
		</div>
	);
}

export default Index;