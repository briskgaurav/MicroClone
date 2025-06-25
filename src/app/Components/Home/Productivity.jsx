import React, { useEffect, useRef } from "react";
import { gsap, splitColor } from "gsap";
import { animateFloatingBlobs } from "@/app/Animation/FloatBlobAnimation";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import UseMobile from "../Hooks/UseMobile";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Productivity() {
  const isMobile = UseMobile();
  const refProductivity = useRef(null);
  const orbs = [
    { size: isMobile ? '35vw' : '8vw', position: "top-[15%] left-[40%]" },
    { size: isMobile ? '40vw' : '10vw', position: "top-[50%] left-[10%]" },
    { size: isMobile ? '15vw' : '15vw', position: "top-[20%] left-[80%]" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const splitText = SplitText.create(".text-split", {
        type: "chars",
        charsClass: "text-split-char",
      });
      gsap.to(".text-split-char", {
        color: "#000000",
        ease: "power2.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: refProductivity.current,
          start: "top top",
          end: "40% top",
          scrub: true,
          // markers: true,
          pin: true,
        },
      });
      animateFloatingBlobs(orbs.map((_, i) => `orb-${i}`));
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={refProductivity} className="h-screen relative  w-full ">
      <div className="w-full flex flex-col items-center justify-center h-full">
        <p className="text-[5.5vw] max-sm:text-[15vw] max-sm:w-[78%] text-split text-center leading-[1.15] text-[#DFC9A7] font-medium tracking-tighter w-[45%] font-haffer">
        Designed to let you focus on your work, not productivity.
        </p>
      </div>
      {orbs.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.position} orb-${i}`}
          style={{ width: item.size }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 201 201"
          >
            <circle
              cx="100.817"
              cy="100.817"
              r="100.002"
              fill="url(#LightOrb_svg__b)"
              fillOpacity="0.5"
              data-figma-bg-blur-radius="21.357"
            ></circle>
            <mask
              id="LightOrb_svg__d"
              width="201"
              height="201"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <circle
                cx="100.819"
                cy="100.817"
                r="100.002"
                fill="url(#LightOrb_svg__c)"
              ></circle>
            </mask>
            <g mask="url(#LightOrb_svg__d)">
              <g filter="url(#LightOrb_svg__e)">
                <circle
                  cx="72.186"
                  cy="74.453"
                  r="44.092"
                  fill="white"
                ></circle>
              </g>
              <g filter="url(#LightOrb_svg__f)">
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M75.2529 201.273C130.483 201.273 175.255 156.501 175.255 101.271C175.255 75.603 165.585 52.1938 149.689 34.4878C176.098 52.4881 193.438 82.8091 193.438 117.18C193.438 172.41 148.665 217.182 93.4356 217.182C63.8737 217.182 37.3078 204.355 19 183.963C35.027 194.887 54.3942 201.273 75.2529 201.273Z"
                  clipRule="evenodd"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="LightOrb_svg__a"
                width="291.824"
                height="291.825"
                x="-29.186"
                y="-10.095"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_1016_7077"
                  stdDeviation="26.364"
                ></feGaussianBlur>
              </filter>
              <filter
                id="LightOrb_svg__e"
                width="157.276"
                height="157.276"
                x="-6.452"
                y="-4.185"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_1016_7077"
                  stdDeviation="17.273"
                ></feGaussianBlur>
              </filter>
              <filter
                id="LightOrb_svg__f"
                width="243.53"
                height="251.787"
                x="-15.546"
                y="-0.058"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_1016_7077"
                  stdDeviation="17.273"
                ></feGaussianBlur>
              </filter>
              <linearGradient
                id="LightOrb_svg__b"
                x1="78.303"
                x2="230.626"
                y1="59.712"
                y2="184.567"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EAEAEA"></stop>
                <stop offset="1" stopColor="#969696"></stop>
              </linearGradient>
              <linearGradient
                id="LightOrb_svg__c"
                x1="78.305"
                x2="230.628"
                y1="59.712"
                y2="184.567"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EAEAEA"></stop>
                <stop offset="1" stopColor="#C4C4C4"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
