import React from "react";
import { useRouter } from "next/router";
import BlogDetailsBanner from "@/components/BlogDetailsBanner";
import DummyBlog from "@/components/dummyBlog";

// Mock data for case studies
const data = [
  {
    id: '1',
    timeToRead:'19 minutes Read',
    previewImage: '/dummy.jpg',
    previewTitle: 'Case Study 1',
    previewSubtitle: 'This is a short description of Case Study 1. It covers the main achievements and results.',
    content: 'Full content of Case Study 1. This would be a longer text explaining all details and insights achieved during the case study.',
  },
  {
    id: '2',
    previewImage: '/dummy.jpg',
    timeToRead:'19 minutes Read',
    previewTitle: 'Case Study 2',
    previewSubtitle: 'This is a short description of Case Study 2. Showing how the key issues were addressed.',
    content: 'Full content of Case Study 2. Providing comprehensive details and breakdown of the study.',
  },
  {
    id: '3',
    previewImage: '/dummy.jpg',
    timeToRead:'19 minutes Read',
    previewTitle: 'Case Study 3',
    previewSubtitle: 'This is a short description of Case Study 3. Highlighting the unique approach and results.',
    content: 'Full content of Case Study 3. Detailing the methodologies and conclusions derived from the case study.',
  },
];

const Home = () => {
  const router = useRouter();
  const id = router.query.id;

  const blog = data?.find((e) => e?.id === id);

  const breadcrumbItems = [
    {
      label: "JobScout",
      url: () => router.push("/"),
      isButton: true,
    },
    { label: "Case Studies", url: () => router.push("/case-studies"),
      isButton: true, },
    { label: blog?.previewTitle, url: () => {}, isButton: true },
  ];

  return (
    <div>
      <div className="mt-4 mb-24">
        <BlogDetailsBanner
          title="Case Studies"
          breadcrumbItems={breadcrumbItems}
        />
      </div>
      <div>
        <DummyBlog blog={blog} />
      </div>
    </div>
  );
};

export default Home;