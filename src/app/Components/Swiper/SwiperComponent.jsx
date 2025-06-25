import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { gsap } from "gsap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";


const data = [
  {
    text: "Micro has been game-changing for staying on top of my connections. Love how easy it is to search through and get detailed info on my contacts.",
    author: "Jacob Peters",
    role: "Cofounder/CEO",
    company: "Superpower",
    image: "https://www.micro.so/_next/static/media/superpower.c8915e11.svg",
  },
  {
    text: "The AI capabilities are incredible. It helps me maintain relationships effectively and surface relevant opportunities at the right time.",
    author: "Sarah Chen",
    role: "Head of Product",
    company: "TechFlow",
    image: "https://www.micro.so/_next/static/media/shield.99c33afb.svg",
  },
];

export default function SwiperComponent() {
  const swiperRef = useRef(null);

  return (
    <div className="h-[80vh] max-sm:h-[90vh] w-full px-[10vw] max-sm:px-[5vw] p-[2vw] flex items-center justify-center border-[#EBDFCA]">
      <div className="w-[90%] max-sm:w-[100%] rounded-full relative border-2 border-[#EBDFCA] h-[90%] max-sm:h-[80%]">
        <div className="absolute capsule bottom-0 left-0 w-full h-[92%] max-sm:h-[95%] overflow-hidden bg-[#0E1013] rounded-full">
          <Swiper
            direction={"vertical"}
            navigation={false}
            effect={'fade'}
            className="h-full"
            loop={true}
            speed={800}
            fadeEffect={{
             crossFade:true,
             duration:1,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {data.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div className="flex slide-content z-[10] max-sm:px-[5%] flex-col items-center justify-center h-full gap-4 max-sm:gap-[4vw] px-[20%]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.company.toLowerCase()}
                    width={150}
                    height={50}
                  />
                  <p className="font-tobias text-[1.7vw] max-sm:text-[8vw] tracking-tighter leading-[1.2] text-white text-center">
                    {testimonial.text}
                  </p>
                  <p className="text-[1vw] max-sm:text-[4vw] text-white text-center">
                    {testimonial.author} - {testimonial.role} -{" "}
                    {testimonial.company}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full flex flex-wrap">
                {[...Array(2500)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[.15vw] h-[.15vw] bg-white/15 rounded-full"
                    style={{
                      margin: "0.5%",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-[15%] max-sm:bottom-[5%] max-sm:translate-x-[50%] z-[20] right-[10%] max-sm:right-[50%] w-fith-[10%] flex items-center ">
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className="w-[1.2vw] max-sm:w-[5vw] h-[1.2vw] max-sm:h-[5vw] cursor-pointer flex items-center justify-center"
            >
              <Image
                className=" w-full h-full object-contain"
                src={
                  "https://www.micro.so/_next/static/media/arrow.f400b257.svg"
                }
                alt="arrow"
                width={10}
                height={10}
              />
            </div>
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-[1.2vw] max-sm:w-[5vw] h-[1.2vw] max-sm:h-[5vw]  cursor-pointer flex items-center justify-center"
            >
              <Image
                className="rotate-180 w-full h-full object-contain"
                src={
                  "https://www.micro.so/_next/static/media/arrow.f400b257.svg"
                }
                alt="arrow"
                width={10}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
