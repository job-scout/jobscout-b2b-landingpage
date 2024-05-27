import React from "react";
import { Navigation, A11y, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { OUR_HAPPY_CUSTOMERS_DATA } from "@/data/OurHappyCustomersData";

export default function OurHappyCustomers() {
  const settings = {};
  return (
    <AnimatePresence>
      <div className=" bg-orange-50 our-happy-customer mb-12 overflow-hidden">
        <div className="my-20">
           <motion.p
            initial={{
              x: "80%",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 70,
                restDelta: 0.001,
              },
            }}
            className="mx-3 lg:mx-8 2xl:mx-16 mb-3 text text-left text-xl font-bold text-black"
          >
          Quotes
          </motion.p>
          <motion.p
            initial={{
              x: "80%",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 70,
                restDelta: 0.001,
              },
            }}
            className="mx-3 lg:mx-8 2xl:mx-16 mb-5 text text-left text-3xl md:text-4xl text-black font-semibold"
          >
           From our users
          </motion.p>
          <motion.div
            initial={{
              scale: 0.7,
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
            }}
            whileInView={{
              scale: 1,
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
            }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 70,
                restDelta: 0.001,
              },
            }}
            className="relative"
          >
            <Swiper
              modules={[Navigation, A11y, Autoplay, FreeMode]}
              spaceBetween={0}
              loop={true}
             
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                500: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 3,
                },
                1600: {
                  slidesPerView: 4,
                }
              }}
            >
              {OUR_HAPPY_CUSTOMERS_DATA.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                          type: "spring",
                          damping: 14,
                          stiffness: 100,
                          restDelta: 0.001,
                        },
                      }}
                      className="relative mx-auto my-2 h-[340px] 2xl:h-[360px] w-[360px] rounded-md p-5 shadow-md bg-white flex flex-col justify-between"
                    >
                      <div>
                        <img src="/quote.png" width={80} height={80}/>
                        <p className="py-4">{item?.info}</p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
