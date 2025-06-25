import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
export default function CustomizationMobile() {

  return (
    <div className="h-fit customization w-full mt-[15vw] flex flex-col items-center justify-center ">
      <div className="w-[90%] line-capsule  capsule-hide fit border border-white flex items-center justify-between gap-[2vw] rounded-full p-[1.5vw]">
        <div className="w-[10vw] h-[10vw] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 74 74"
            className="w-full h-full object-contain"
          >
            <rect
              width="74"
              height="74"
              fill="url(#blurb_svg__c)"
              rx="37"
            ></rect>
            <rect
              width="74"
              height="74"
              fill="white"
              fillOpacity="0.4"
              rx="37"
            ></rect>
            <path
              fill="white"
              fillOpacity="0.3"
              d="M9 28C9 12.536 21.536 0 37 0V0C52.464 0 65 12.536 65 28V46C65 61.464 52.464 74 37 74V74C21.536 74 9 61.464 9 46V28Z"
            ></path>
            <path
              fill="white"
              fillOpacity="0.3"
              d="M22 15C22 6.71573 28.7157 0 37 0V0C45.2843 0 52 6.71573 52 15V59C52 67.2843 45.2843 74 37 74V74C28.7157 74 22 67.2843 22 59V15Z"
            ></path>
            <path
              fill="white"
              fillOpacity="0.3"
              d="M34 3C34 1.34314 35.3431 0 37 0V0C38.6569 0 40 1.34315 40 3V71C40 72.6569 38.6569 74 37 74V74C35.3431 74 34 72.6569 34 71V3Z"
            ></path>
            <defs>
              <radialGradient
                id="blurb_svg__b"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="translate(-1.77508e-06 15) rotate(30.6403) scale(82.9109 63.8872)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CC1ADD"></stop>
                <stop offset="0.605" stopColor="#188BD2"></stop>
                <stop offset="1" stopColor="#D91627"></stop>
              </radialGradient>
              <radialGradient
                id="blurb_svg__c"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="translate(-1.77508e-06 16) rotate(30.6403) scale(82.9109 63.8872)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CC1ADD"></stop>
                <stop offset="0.605" stopColor="#188BD2"></stop>
                <stop offset="1" stopColor="#D91627"></stop>
              </radialGradient>
              <filter
                id="blurb_svg__a"
                width="114"
                height="114"
                x="-20"
                y="-21"
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
                  result="effect1_foregroundBlur_656_4621"
                  stdDeviation="10"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
        <p className="text-[3.7vw] split-text pr-[1vw] leading-none tracking-tight ">
          Help me organize our celebratory team offsite!
        </p>
      </div>
      <div  className="w-full pl-[6vw] py-[10vw]">
        <div className="w-full rounded-[1vw] perspective-rotation mt-[2vw] h-[40vh] overflow-hidden relative">
          <Image
            src="/images/UI2.webp"
            alt="customization"
            fill
            className="object-cover object-left h-full w-full"
          />
          <div className="w-full absolute translate-x-[28%] -translate-y-[50%] top-1/2 right-[0%] rounded-[2vw] h-[39vh] overflow-hidden">
            <Image
              src="/images/UI.webp"
              alt="customization"
              width={1000}
              height={1000}
              className="object-cover h-full w-full object-left"
            />
          </div>
        </div>
        <div className="flex customization-text pt-[10vw] flex-col gap-[8vw] w-[95%]">
          <h2 className="text-[15vw] leading-[1.1] tracking-tighter">
            Customized to work the way you do
          </h2>
          <p className="text-[4vw] w-[100%] leading-[1.2] tracking-tight">
            Create custom apps, objects, properties and more to power any kind
            of experience you can imagine or use Micro AI to generate it from
            your description.
          </p>
        </div>
      </div>
    </div>
  );
}
