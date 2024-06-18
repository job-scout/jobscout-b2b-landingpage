import Image from "next/image";
import React from "react";
import Breadcrumb from "./Breadcrumb";



const BlogDetailsBanner = ({ title, breadcrumbItems }) => {
  return (
    <div className="flex justify-center px-2 md:px-16 text-white calm-darya w-full py-10  ">
      <div className="container mx-auto w-[90%] flex justify-between items-center">
        <span>
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-medium my-1 md:my-3">
            {title}
          </h1>
          <Breadcrumb items={breadcrumbItems}/>
        </span>

        
      </div>
    </div>
  );
};

export default BlogDetailsBanner;
