import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
export default function WorkMobile() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-mobile",
          start: "top top",
          end: "bottom top",
          markers: true,
          scrub: 2,
          pin: true,
        },
      });
      tl.to(".text-workMobile", {
        y: "-150%",
        duration: 1,
        ease: "power2.inOut",
      });
      tl.fromTo(
        ".gridMobile",
        {
          rotateX: "45deg",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        },
        {
          rotateX: "0deg",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
      tl.to(
        ".sphereMobile",
        {
          y: "-150%",
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
      tl.to(
        ".mountainsMobile",
        {
          y: "-150%",
          duration: 1,
          ease: "power2.inOut",
        },
        "<+.5"
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="h-fit work-mobile w-full py-[30vw] px-[2vw] flex flex-col items-center justify-center">
      <div className="w-full h-fit text-workMobile">
        <div className="flex items-center w-full justify-between ">
          {[
            "AI Powered",
            "All-In-One Tool",
            "Automatically",
            "Organizes Itself",
          ].map((item, index) => (
            <p
              className=" text-[2.2vw] text-yellow-600 font-bold font-pp"
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
        <h2 className="text-[15vw] leading-[1] w-full mt-[10vw] text-center text-white  font-tobias">
          Micro works the way you want to work
        </h2>
      </div>

      <div className="w-full relative flex items-center justify-center h-[80vh] ">
        <div className="w-full mountainsMobile h-full absolute top-0 left-0">
          <img
            src="/images/Mountains.webp"
            alt="grid"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          style={{
            perspective: "1000px",
          }}
          className="w-[calc(100%-8vw)] flex items-center justify-center relative  h-fit"
        >
          <div className="w-[50%] sphereMobile h-full -translate-x-[-50%] absolute z-[10] top-0 left-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 372 576"
              className="w-full h-auto object-contain"
            >
              <mask
                id="coloredOrb_svg__c"
                width="372"
                height="372"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <circle
                  cx="185.882"
                  cy="185.882"
                  r="185.882"
                  fill="url(#coloredOrb_svg__b)"
                ></circle>
              </mask>
              <g mask="url(#coloredOrb_svg__c)">
                <g filter="url(#coloredOrb_svg__d)">
                  <circle
                    cx="132.656"
                    cy="136.877"
                    r="81.957"
                    fill="white"
                    fillOpacity="0.9"
                  ></circle>
                </g>
                <g filter="url(#coloredOrb_svg__e)">
                  <path
                    fill="#F0D8BA"
                    fillRule="evenodd"
                    d="M138.364 372.609C241.024 372.609 324.246 289.387 324.246 186.727C324.246 139.021 306.275 95.512 276.732 62.6016C325.814 96.0612 358.039 152.417 358.039 216.299C358.039 318.959 274.817 402.182 172.157 402.182C117.203 402.182 67.8196 378.335 33.7891 340.425C63.5824 360.735 99.5866 372.609 138.364 372.609Z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </g>
              <defs>
                <filter
                  id="coloredOrb_svg__a"
                  width="580.021"
                  height="641.021"
                  x="-105.011"
                  y="23.989"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_430_3285"
                    stdDeviation="49.005"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="coloredOrb_svg__d"
                  width="292.342"
                  height="292.342"
                  x="-13.515"
                  y="-9.294"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_430_3285"
                    stdDeviation="32.107"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="coloredOrb_svg__e"
                  width="452.678"
                  height="468.008"
                  x="-30.425"
                  y="-1.612"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_430_3285"
                    stdDeviation="32.107"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="coloredOrb_svg__b"
                  x1="144.034"
                  x2="427.17"
                  y1="109.477"
                  y2="341.555"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D91E1E"></stop>
                  <stop offset="1" stopColor="#C4C4C4"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-full z-[-1] gridMobile h-full ">
            <img
              src="/images/cardGridMobile.webp"
              alt="grid"
              className="w-full h-full  object-cover"
            />
          </div>
        </div>
      </div>

      <div className="px-[5vw] h-full w-full ">
        <p className="text-[15vw] leading-[1] ">Everything in one place</p>
        <p className="text-[4vw] ">Fully-featured email client, CRM, task manager and more integrated with Gmail, Calendar, Linkedin, WhatsApp and other tools. Plus the ability to create pipeline trackers, project management tools and more on top of this data.</p>
        <div className=" w-full h-full">
          <div className="w-full relative h-full">
            <img className="w-full h-full object-contain" src="/images/SevenCardsMobile.webp" alt="email" />
            <img src="/images/TwoCardsMobile.webp" className="w-full h-full object-contain absolute top-[5%] left-0" alt="email" />
          </div>
         
        </div>
      </div>
    </div>
  );
}
