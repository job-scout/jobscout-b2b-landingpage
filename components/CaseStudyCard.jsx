import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";

const CaseStudyCard = ({ index, blog }) => {
  function trimStringTo10Characters(inputString, release, maxLength) {
    if (inputString.length <= release) {
      return inputString;
    } else {
      return inputString.slice(0, maxLength) + "...";
    }
  }
  const router = useRouter();
  function trimContent(content, maxLength) {
    if (!content || content.length <= maxLength) {
      return content || "";
    }

    return `${content.slice(0, maxLength)}...`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 180 }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      exit={{ opacity: 0, rotateX: -180 }}
      transition={{
        duration: 0.6,
        delay: 0.1 * (index + 1),
        scale: {
          type: "spring",
          damping: 14,
          stiffness: 200,
          restDelta: 0.001,
        },
      }}
      className="flex flex-col lg:flex-row items-center justify-center container w-full mb-5 max-w-sm sm:max-w-lg md:max-w-7xl"
    >
      {/* <div className="absolute top-[-80px] left-[80px] md:top-[-150px] md:left-[250px] xl:top-[65px] xl:left-[-200px]"> */}
      <div className=" -mb-8 lg:mb-0 lg:-me-12 z-10 rounded-full  bg-white">
      
        <div  className="lg:w-32 w-28 lg:h-32 h-28 rounded-full  p-4 shadow-lg flex items-center justify-center velvet-sun text-white text-5xl font-semibold ">
        { blog?.id}
        </div>
      </div>
      <div className="relative flex justify-center w-full ">
        <div className="w-full py-5 bg-yellow-50/50 flex  backdrop:items-center justify-center gap-[30px] rounded-lg shadow-md">
          <div
            iv
            className="flex flex-col gap-4 lg:justify-start justify-center w-10/12 pt-3"
          >
            <h1 className="text-xl mt-3 md:text-2xl lg:mt-0 2xl:mt-0 text-center lg:text-start font-semibold lg:font-medium 2xl:font-medium text-black">
              {blog?.previewTitle}
            </h1>
            <div className="text-sm md:text-base text-center lg:text-start">
              <p className="lg:flex flex-col gap-3 md:gap-1 hidden text-gray-600">
                <span className="linear-text-gradient1">JobScout</span>{" "}
                {trimStringTo10Characters(blog?.previewSubtitle, 230, 231)}
              </p>
              <p className="flex flex-col gap-3 md:gap-1 lg:hidden text-gray-600">
               <span className="linear-text-gradient1">JobScout</span>{" "}
                {trimStringTo10Characters(blog?.previewSubtitle, 100, 101)}
              </p>
           
            </div>
            <div className="text-center xl:text-start text-white">
              <Link
                href={`/case-studies/${blog?.id}/${blog?.previewTitle}`}
              >
                <button className=" cursor-pointer px-8 py-2 rounded-full bg-orange-500">
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
