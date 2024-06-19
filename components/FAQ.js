import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { FAQ_DATA } from "@/data/FAQ_DATA";

import { ArrowBigUp, ArrowRight, ArrowUp, Minus, MinusCircle, PlusCircle } from "lucide-react";


const FAQ = () => {
  const router = useRouter();
  const [collapse, setCollapse] = useState(null);

  const toggleAccordion = (index) => {
    if (collapse === index) {
      setCollapse(null);
    } else {
      setCollapse(index);
    }
  };


 

  return (
    <>
      
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            duration: 0.1,
            scale: {
              type: "spring",
              damping: 50,
              stiffness: 200,
              restDelta: 0.001,
            },
          }}
          className="pt-2 pb-20 overflow-hidden text-black"
        >
          <div className="poppins-text w-[95%] md:w-[90%] lg:w-[70%] xl:w-[65%] mx-auto">
            <motion.p
              initial={{ opacity: 0, scale: 1.2, x: "-60%" }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.2, x: "-60%" }}
              transition={{
                duration: 0.3,
                scale: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="text-2xl md:text-3xl text-center font-semibold"
            >
              FAQ&apos;s
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 1.2, x: "60%" }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.2, x: "60%" }}
              transition={{
                duration: 0.3,
                scale: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              className="text-center text-lg mt-3 pb-6"
            >
              Find answers to the most popular questions about JobScout here.
              If you are facing any issue using the website,{" "}
              <span
                onClick={() => router.push("/#contact-us")}
                className="underline cursor-pointer hover:text-primary font-medium text-primary"
              >
                contact us
              </span>{" "}
              at{" "}
              <a href="mailto:support@jobscout.co.in" className="underline hover:text-primary text-primary font-medium">
                support@jobscout.co.in
              </a>{" "}
            
              <br /> We are here to help you 24/7.
            </motion.p>
          </div>
          <div className="wrapper w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.3,
                  scale: {
                    type: "spring",
                    damping: 15,
                    stiffness: 200,
                    restDelta: 0.001,
                  },
                }}
                className="border border-gray-500 rounded-xl"
              >
                {FAQ_DATA.map((data, index) => (
                  <div key={index} className="item">
                    <div
                      className="title flex items-center justify-between px-4 py-5 cursor-pointer border-b-2 border-gray-500 rounded-xl"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className="sm:text-xl font-semibold text-gray-700 poppins-text">
                        {data?.question}
                      </h3>
                      {collapse === index ? (
                        <motion.span
                          initial={{ rotate: 0 }}
                          whileTap={{ rotate: -180 }}
                          exit={{ rotate: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: "circOut",
                          }}
                        >
                        <MinusCircle />
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ rotate: 0 }}
                          whileTap={{ rotate: -180 }}
                          exit={{ rotate: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: "circOut",
                          }}
                        >
                                      
                                            <PlusCircle/>
                        </motion.span>
                      )}
                    </div>
                    <>
                      {data?.arrayAns ? (
                        <>
                          {data?.answerArray.map((answers, index) => (
                            <motion.p
                              initial={{ opacity: 0, y: "-50%" }}
                              whileInView={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: "-50%" }}
                              transition={{
                                duration: 0.5,
                                scale: {
                                  type: "spring",
                                  damping: 10,
                                  stiffness: 100,
                                  restDelta: 0.001,
                                },
                              }}
                              key={index}
                              className={`${
                                collapse === index ? "" : "hidden"
                              } poppins-text border-b-2 px-4 py-2 rounded-xl text-lg`}
                            >
                              {answers}
                            </motion.p>
                          ))}
                        </>
                      ) : (
                        <>
                          <motion.div
                            initial={{ opacity: 0, y: "-50%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "-50%" }}
                            transition={{
                              duration: 0.5,
                              scale: {
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                                restDelta: 0.001,
                              },
                            }}
                            className={`${
                              collapse === index ? "" : "hidden"
                            } poppins-text px-4 py-5 border-b-2 rounded-xl text-lg`}
                          >
                            {data?.answer}
                          </motion.div>
                        </>
                      )}
                    </>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default FAQ;
