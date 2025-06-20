import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
export default function Customization() {
  useEffect(() => {
    const textSplit = new SplitText(".split-text", {
      type: "words,chars",
      mask: "lines",
      linesClass: "split-text-line",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".customization",
        start: "top 50%",
        end: "10% top",
        // markers: true,
        scrub: true,
      },
    });

    tl.fromTo(
      ".customization-text",
      {
        x: "30%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    tl.fromTo(
      textSplit.chars,
      {
        opacity: 0,
        x: "100%",
        stagger: 0.02,
      },
      {
        opacity: 1,
        x: "0%",
        duration: 0.5,
        stagger: {
          amount: 0.5,
          from: "start",
        },
        ease: "back.out",
      }
    );
    tl.fromTo(
      ".perspective-rotation",
      {
        rotateX: "-90deg",
        scale: 0.5,
        opacity: 0,
        transformOrigin: "top",
        transformStyle: "preserve-3d",
      },
      {
        rotateX: "0deg",
        scale: 1,
        opacity: 1,
        transformOrigin: "top",
        transformStyle: "preserve-3d",
        duration: 2,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div className="h-fit customization w-full mt-[15vw] px-[12vw]">
      <div className="flex customization-text flex-col gap-[2vw] w-[50%]">
        <h2 className="text-[4.5vw] leading-none tracking-tighter">
          Customized to work the way you do
        </h2>
        <p className="text-[1vw] w-[80%] leading-none tracking-tight">
          Create custom apps, objects, properties and more to power any kind of
          experience you can imagine or use Micro AI to generate it from your
          description.
        </p>
        <div className="w-full capsule-hide h-[10vh] border border-white flex items-center justify-between rounded-full p-2">
          <div className="w-[4vw] h-[4vw] ">
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
                    result="effect1_foregroundBlur_656_4621"
                    stdDeviation="10"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
          <p className="text-[1.5vw] split-text pr-[2vw] leading-none tracking-tight ">
            Help me organize our celebratory team offsite!
          </p>
        </div>
      </div>
      <div style={{ perspective: "2000px" }} className="w-full">
        <div className="w-full rounded-[1vw] perspective-rotation mt-[2vw] h-[100vh] overflow-hidden relative">
          <Image
            src="/images/UI2.webp"
            alt="customization"
            fill
            className="object-contain h-full w-full"
          />
          <div className="w-[81%] absolute top-[8%] right-[1%] rounded-[1vw] h-[88vh] overflow-hidden">
            <Image
              src="/images/UI.webp"
              alt="customization"
              width={1000}
              height={1000}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
