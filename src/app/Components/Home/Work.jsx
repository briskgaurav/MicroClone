import Image from "next/image";
import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SvgBackground from "../Background/SvgBackground";

gsap.registerPlugin(ScrollTrigger);

const imageMap = {
  4: "/images/1.webp",
  5: "/images/2.webp",
  7: "/images/3.webp",
  17: "/images/4.webp",
  19: "/images/7.webp",
  20: "/images/6.webp",
  23: "/images/5.webp",
};

export default function Work() {
  const [ToggleSvg, setToggleSvg] = useState(false);
  const data = [
    "AI Powered",
    "All-In-One Tool",
    "Automatically",
    "Organizes Itself",
  ];

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-container",
          start: "20% top",
          end: "+2000 top",
          // markers: true,
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        ".perspective-plane",

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
        }
      );
      tl.to(
        ".svg-card",
        {
          y: "-250%",
          duration: 1,
          ease: "linear",
        },
        "<"
      );
      tl.to(
        ".text-work",
        {
          y: "-200%",
          ease: "linear",
        },
        "<+.5"
      );
      tl.to(
        ".bg-layer",
        {
          y: "-20%",

          ease: "linear",
        },
        "<"
      );
      tl.to(".bg-layer", {
        opacity: 0,
        duration: 1,
        ease: "linear",
      });
      const images = gsap.utils.toArray(".image-work");

      const imageAnimations = [
        { index: 5, left: "-103%", top: "-101%" },
        { index: 1, left: "2%", top: "215%" },
        { index: 4, left: "-211%", top: "4%" },
        { index: 6, left: "208%", top: "-101%" },
        { index: 0, left: "-107%", top: "322%" },
        { index: 2, left: "208%", top: "216%" },
        { index: 3, left: "-105%", top: "4%" },
      ];

      imageAnimations.forEach(({ index, left, top }) => {
        tl.to(
          images[index],
          {
            left,
            top,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
      });
      tl.to(
        ".image-mountain",
        {
          y: "-80%",
          duration: 3,
          ease: "linear",
        },
        "<-1"
      );
      tl.fromTo(
        ".text-wrapper",
        {
          opacity: 0,
          duration: 1,
          x: "30%",
          ease: "power2.inOut",
        },
        {
          opacity: 1,
          duration: 1,
          x: "0%",
          ease: "power2.inOut",
        }
      );
      tl.to(
        ".image-wrapper",
        {
          y: "-25%",
          scale: 2,
          transformOrigin: "center center",
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
      tl.to([images[5], images[6], images[1], images[2]], {
        y: "100%",
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setToggleSvg(true);
        },
        onReverseComplete: () => {
          setToggleSvg(false);
        },
      });

      tl.to(".text-wrapper", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });

      tl.fromTo(
        ".text-wrapper2",
        {
          opacity: 0,
          duration: 1,
          x: "30%",
          y: "-190%",
          ease: "power2.inOut",
        },
        {
          opacity: 1,
          duration: 1,
          x: "0%",
          ease: "power2.inOut",
        }
      );
      tl.to(
        ".image-wrapper",
        {
          y: "-40%",
          scale: 2.6,
          transformOrigin: "center center",
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
      tl.to([images[0], images[3]], {
        y: "100%",
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.to(
        ".text-wrapper2",
        {
          opacity: 0,
          y: "-300%",
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(
        ".image-wrapper",
        {
          y: "-65%",
          scale: 3.5,
          transformOrigin: "center center",
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
      tl.fromTo(
        ".text-wrapper3",
        {
          opacity: 0,
          duration: 1,
          x: "30%",
          y: "-360%",
          ease: "power2.inOut",
        },
        {
          opacity: 1,
          duration: 1,
          x: "0%",
          ease: "power2.inOut",
          onComplete: () => {
            setToggleSvg(false);
          },
          onReverseComplete: () => {
            setToggleSvg(true);
          },
        },
        "<"
      );
    });
    return () => context.kill();
  }, []);

  return (
    <div className="h-fit work-container w-full py-[5vw] flex flex-col items-center justify-center relative">
      <div className="flex flex-col z-10  gap-[2vw] py-[5vw] h-[50vh] items-center justify-between w-[70%] px-[2vw]">
        <div className="flex w-[95%] items-center justify-between ">
          {data.map((item, index) => (
            <p
              key={index}
              className="font-pp uppercase text-[#CEAD5C] text-[.6vw]"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex w-full items-center justify-center">
          <h2 className="font-tobias text-work text-[7.5vw] text-center leading-none tracking-tighter">
            Micro works the way you want to work
          </h2>
        </div>
      </div>

      <div className="h-[50vh] w-full relative">
        <div className="w-full  image-mountain -z-1 h-auto absolute top-[-60%] left-0">
          <Image
            className="w-full h-full  object-cover"
            src="/images/mountains.webp"
            alt="work"
            width={1000}
            height={1000}
          />
        </div>
        <div className="perspective-[500px] h-[100vh] w-full flex items-center justify-center absolute top-[-50%] left-0">
          <div className="w-[52%] perspective-plane h-full rounded-xl relative ">
            {/* 🔵 Background Grid Layer (with border and background) */}
            <div className="absolute inset-0 z-0 rounded-xl bg-[#0F1013] bg-layer pointer-events-none grid grid-cols-5 grid-rows-5 p-2 gap-2">
              {[...Array(25)].map((_, index) => (
                <div
                  key={index}
                  className="w-full h-full border border-white/10 bg-transparent rounded-lg"
                />
              ))}
            </div>

            {/* 🟢 Foreground Image Cards Layer */}
            <div className=" image-wrapper grid grid-cols-5 grid-rows-5 w-full h-full p-2 gap-2 z-10 relative">
              {[...Array(25)].map((_, index) => (
                <div
                  key={index}
                  className="relative w-full h-full bg-transparent rounded-lg"
                >
                  {imageMap[index] && (
                    <Image
                      src={imageMap[index]}
                      alt={`Image ${index}`}
                      width={100}
                      height={100}
                      data-index={index}
                      className="absolute image-work inset-0 w-full h-full object-contain"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CircularSvg */}
        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-[80%]">
          <div className="w-[20vw] svg-card h-auto">
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
                  fillOpacity=""
                />
              </g>
              <circle
                cx="100.002"
                cy="100.002"
                r="100.002"
                fill="url(#DarkOrb_svg__b)"
                fillOpacity="0.5"
              />
              <mask
                id="DarkOrb_svg__d"
                width="202"
                height="201"
                x="-1"
                y="0"
                maskUnits="userSpaceOnUse"
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
        </div>
        <div className="flex px-[10vw] translate-y-[-50%] text-wrapper items-start flex-col gap-1 w-full">
          <h2 className="font-haffer tracking-tighter text-[4vw]">
            Everything in one place
          </h2>
          <p className="w-[30%] tracking-tight text-[.9vw]">
            Fully-featured email client, CRM, task manager and more integrated
            with Gmail, Calendar, Linkedin, WhatsApp and other tools. Plus the
            ability to create pipeline trackers, project management tools and
            more on top of this data.
          </p>
        </div>
        <div className="flex px-[10vw]  text-wrapper2 items-start flex-col gap-1 w-full">
          <h2 className="font-haffer tracking-tighter text-[4vw]">
            Automatically Updated
          </h2>
          <p className="w-[30%] tracking-tight text-[.9vw]">
            Everything - companies, people, and more - is enriched with hundreds
            of datapoints from a rich global and personal knowledge graph. Plus
            any property can be updated automatically when there's new email or
            meeting activity.
          </p>
        </div>
        <div className="flex px-[10vw] text-wrapper3 items-start flex-col gap-1 w-full">
          <h2 className="font-haffer tracking-tighter text-[4vw]">
            Collaborative by default
          </h2>
          <p className="w-[30%] tracking-tight text-[.9vw]">
            Create custom apps, objects, properties and more to power any kind
            of experience you can imagine or use Micro AI to generate it from
            your description.
          </p>
        </div>
      </div>
      <SvgBackground toggle={ToggleSvg} />
    </div>
  );
}
