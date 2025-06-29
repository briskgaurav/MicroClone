import { animateFloatingBlobs } from "@/app/Animation/FloatBlobAnimation";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import UseMobile from "../Hooks/UseMobile";
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function WorkingHard() {
  const { isMobile } = UseMobile();
  const orbs = [
    { size: isMobile ? "35vw" : "12vw", position: "top-[10%] left-[0%]" },
    { size: isMobile ? "40vw" : "15vw", position: "top-[20%] left-[85%]" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateFloatingBlobs(orbs.map((_, i) => `orb-${i}`));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".workHard",
          start: "top top",
          end: "80% top",
        }
      })

      const splitText = new SplitText(".lines", {
        type: "words,chars",
        linesClass: "lines",
        mask: "lines,chars,words",
      })
      tl.fromTo(splitText.words, {
        opacity: 0,
      }, {
        opacity: 1,
        stagger: 0.03,
      })
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="h-fit workHard overflow-hidden relative ">
      
      <div className="h-screen py-[5vw] max-sm:py-[10vw] w-full flex items-center justify-center flex-col gap-[1vw] relative">
        <div className="w-full h-screen flex flex-col items-start max-sm:justify-center pl-[26vw] max-sm:pl-[5vw] max-sm:gap-[6vw] gap-[1.5vw]">
          <h2 className="lg:heading max-sm:text-[14vw] max-sm:leading-[1.1] tracking-tight">Working hard just got easy</h2>
          <p className="text-[2.4vw] w-[52%] font-medium leading-[1.2] font-tobias tracking-tight max-sm:text-[8vw] max-sm:w-[90%]">
            The era of manual productivity is over and a new one has
            begun.
          </p>
          <p className="w-[50%] lines text-[1.1vw] max-sm:text-[5vw] max-sm:w-[90%]">
            Everything is centralized - one place to catch up on all your 
            <span className="text-teal-500"> messages</span>, track your <span className="text-teal-500">projects</span>, and prepare for meetings with
            customers and investors.
          </p>
          <p className="w-[45%] max-sm:text-[5vw] max-sm:w-[90%] lines text-[1.1vw] -mt-[1vw] max-sm:mt-[-2vw] ">
            Your work is automated - <span className="text-teal-500">CRM</span> records update automatically, <span className="text-teal-500">emails </span>
            are intelligently sorted, and <span className="text-teal-500">documents</span> are drafted for you.
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
              viewBox="0 0 200 200"
              className="w-full h-full object-contain"
            >
              <g filter="url(#DarkOrb_svg__a)">
                <circle
                  cx="115.91"
                  cy="135.003"
                  r="93.184"
                  fill="black"
                  fillOpacity="0.04"
                />
              </g>
              <circle
                cx="100.002"
                cy="100.002"
                r="100.002"
                fill="url(#DarkOrb_svg__b)"
                fillOpacity="0.2"
              />
              <mask
                id="DarkOrb_svg__d"
                width="202"
                height="201"
                x="-1"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
              >
                <circle
                  cx="100"
                  cy="100.002"
                  r="100.002"
                  fill="url(#DarkOrb_svg__c)"
                />
              </mask>
              <g mask="url(#DarkOrb_svg__d)">
                <g filter="url(#DarkOrb_svg__e)">
                  <circle cx="71.363" cy="73.638" r="44.092" fill="white" />
                </g>
                <g filter="url(#DarkOrb_svg__f)">
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M74.4342 200.458C129.664 200.458 174.436 155.686 174.436 100.456C174.436 74.7892 164.767 51.3806 148.871 33.6748C175.279 51.6752 192.619 81.9956 192.619 116.366C192.619 171.595 147.846 216.368 92.6165 216.368C63.054 216.368 36.4875 203.54 18.1797 183.147C34.207 194.072 53.5748 200.458 74.4342 200.458Z"
                    clipRule="evenodd"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="DarkOrb_svg__a"
                  width="291.824"
                  height="291.824"
                  x="-30.002"
                  y="-10.91"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_1016_7067"
                    stdDeviation="26.364"
                  />
                </filter>
                <filter
                  id="DarkOrb_svg__e"
                  width="157.276"
                  height="157.276"
                  x="-7.275"
                  y="-5"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_1016_7067"
                    stdDeviation="17.273"
                  />
                </filter>
                <filter
                  id="DarkOrb_svg__f"
                  width="243.532"
                  height="251.786"
                  x="-16.366"
                  y="-0.871"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_1016_7067"
                    stdDeviation="17.273"
                  />
                </filter>
                <linearGradient
                  id="DarkOrb_svg__b"
                  x1="77.489"
                  x2="229.811"
                  y1="58.897"
                  y2="183.752"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAEAEA" />
                  <stop offset="1" stopColor="#969696" />
                </linearGradient>
                <linearGradient
                  id="DarkOrb_svg__c"
                  x1="77.487"
                  x2="229.809"
                  y1="58.897"
                  y2="183.752"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EAEAEA" />
                  <stop offset="1" stopColor="#C4C4C4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}
