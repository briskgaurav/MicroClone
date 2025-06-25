import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Background from "../Background/Background";
import Features from "./Features";
import WorkingHard from "./WorkingHard";
import Button from "../Buttons/Button";
gsap.registerPlugin(ScrollTrigger);


export default function HeroMobile() {
  const orbs = [
    { size: "35vw", position: "top-[20%] left-[60%]" },
    { size: "25vw", position: "top-[35%] left-[55%]" },
    { size: "15vw", position: "top-[80%] left-[35%]" },
  ];
  const orbs2 = [
    { size: "35vw", position: "top-[6%] left-[50%]" },
    { size: "25vw", position: "top-[25%] left-[10%]" },
    { size: "40vw", position: "top-[50%] left-[70%]" },
  ];
  const refHero = useRef(null);
  const TOTAL_DOTS = 5000;
  const TOTAL_LINES = 20;
  const rainRefs = useRef([]);
  const imageRefs = useRef([]);
  const imageRefsBottom = useRef([]);
  const xTo = useRef([]);
  const yTo = useRef([]);

  const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
  };

  const handleImageMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 30;
    const moveY = (clientY - window.innerHeight / 2) / 30;

    imageRefs.current.forEach((ref) => {
      if (ref) {
        gsap.to(ref, {
          x: moveX,
          y: moveY,
          duration: 1,
          ease: "power2.out",
        });
      }
    });

    imageRefsBottom.current.forEach((ref) => {
      if (ref) {
        gsap.to(ref, {
          x: moveX * 1.2,
          y: moveY * 1.2,
          duration: 1,
          ease: "power2.out",
        });
      }
    });
  };

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: refHero.current,
          start: "top top", 
          end: "+1000 top",
          scrub: true,
          pin: true,
        },
      });

      rainRefs.current.forEach((drop) => {
        if (drop) {
          gsap.to(drop, {
            y: "1200vh",
            duration: gsap.utils.random(20, 30),
            ease: "linear", 
            repeat: -1,
            delay: gsap.utils.random(0, 15),
          });
        }
      });

      tl.to(".layer1", {
        opacity: 0,
        duration: 0.5,
      });
      tl.to("#secondImageMask", {
        maskSize: "20% 20%",
        duration: 0.5,
      });
      tl.to(
        ["#firstImage", "#thirdImage"],
        {
          y: "-120%",
          duration: 0.5,
        },
        "<"
      );
      tl.to(".blackDiv", {
        scale: 3.5,
      });
      tl.to(
        "#secondImageMask",
        {
          maskSize: "400% 400%",
        },
        "<"
      );

      tl.set(".blackDiv", {
        opacity: 0,
      });
    });

    window.addEventListener("mousemove", handleImageMove);

    return () => {
      context.revert();
      window.removeEventListener("mousemove", handleImageMove); 
    };
  }, []);

  return (
    <div ref={refHero} className="min-h-screen  relative h-fit w-full">
      {/* Masked Images */}
      <div className="h-full flex flex-col-reverse px-[5vw] py-[4vw] max-sm:px-[10vw] max-sm:py-[15vw]   hero-div translate-y-[100%] !z-[500] absolute bottom-0  left-0 w-full">
        <div className="flex w-full h-full flex-col items-start justify-end gap-[8vw]">
          <p className="text-[4vw] w-full  leading-none tracking-tighter">
            Micro is an all-in-one tool for email, CRM, project management and
            more that automatically organizes itself.
          </p>
          <div className="flex items-center group bg-[#F9F5EE] rounded-full justify-center cursor-pointer py-[5vw] px-[2vw] z-[999] gap-[.3vw] w-full">
            <p className="text-black text-[3vw]">Join the waitlist</p>
            <div className="w-[.6vw] mb-[.5vw] group-hover:opacity-100 transition-all duration-300 opacity-0 h-[.8vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 9 9"
                className="w-full h-full object-contain"
              >
                <path
                  fill="#000000"
                  fillRule="evenodd"
                  d="M5.82904 2.10986H1.63971V0.609863H8.38971V7.35986H6.88971V3.17052L2.17004 7.89019L1.10938 6.82953L5.82904 2.10986Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full flex-col items-center pt-[10vw] justify-start">
          <h1 className="text-[18vw]  leading-none tracking-tighter">
            Organized.
          </h1>
          <p className="text-[8vw] font-tobias  leading-none tracking-tighter">
            So you don't have to be.
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
        <div
          id="secondImageMask"
          className="w-full !z-[999] h-full bg-black"
          style={{
            WebkitMaskImage: "url('/svg/blackMask.svg')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "50% 50%",
            WebkitMaskComposite: "xor",
            maskImage: "url('/svg/whitemask.svg')",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "0% 0%",
            maskComposite: "exclude",
          }}
        >
          <div className="h-fit  relative ">
            <div className="  h-fit absolute top-0 left-0 w-full z-[-54]">
              <div className=" grid grid-cols-[repeat(auto-fill,minmax(0.5rem,1fr))] gap-4 p-4 bg-[#0F1013]">
                {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
                  <div key={i} className="w-full h-full relative">
                    <div className="w-[0.15vw] h-[0.15vw] rounded-full bg-foreground/20"></div>
                  </div>
                ))}
              </div>

              {/* Rain Lines */}
              <div className="absolute inset-0 flex items-center justify-evenly w-full h-full pointer-events-none">
                {Array.from({ length: TOTAL_LINES }).map((_, index) => (
                  <div
                    key={index}
                    className="w-[0.15vw] h-full relative flex justify-start"
                  >
                    <span
                      ref={(el) => (rainRefs.current[index] = el)}
                      className="absolute top-0 left-0 w-full h-20 translate-y-[-100%] bg-gradient-to-b  opacity-70 from-transparent to-cyan-400"
                      style={{
                        transformOrigin: "top",

                        backgroundImage: `linear-gradient(to bottom, transparent, ${
                          ["#00ffff", "#ffffff", "#800080", "#ffd700"][
                            Math.floor(Math.random() * 4)
                          ]
                        })`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <section className="h-[50vh] py-[5vw] w-full flex items-center justify-center flex-col gap-[1vw] relative">
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
                        <circle
                          cx="71.363"
                          cy="73.638"
                          r="44.092"
                          fill="white"
                        />
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
            </section>
          </div>
        </div>
      </div>
      <div className="h-full blackDiv relative w-full flex items-end pb-[8vw] justify-center p-[4vw]">
        <div className=" w-[calc(100%-0vw)]  hero-div translate-y-[100%] opacity-0 h-[calc(100%-8%)] relative bg-black overflow-hidden rounded-[5vw] flex items-center justify-center">
          {/* first Image Layer */}
          <div className="w-full layer1 opacity-100 rounded-[5vw] overflow-hidden h-full relative">
            <div className=" scale-100 translate-y-[-11%] h-full w-full absolute inset-0">
              <Image
                ref={(el) => (imageRefs.current[0] = el)}
                src="/images/homeTop.webp"
                alt="hero"
                fill
                className="w-full  h-full object-cover object-right"
              />
            </div>
            <div className="w-full  h-full absolute bottom-[0%] translate-y-[15%]  left-0">
              <Image
                ref={(el) => (imageRefsBottom.current[0] = el)}
                src="/images/homeBottom.webp"
                alt="hero"
                fill
                className="w-full h-full object-cover object-right"
              />
            </div>
          </div>

          {/* second Image Layer */}
          <div className="w-full z-[2] absolute flex gap-2 p-2 top-0 left-0 h-full ">
            <div
              id="secondImage"
              className="w-full h-full relative border-[1px] overflow-hidden border-white/50 flex items-center justify-center rounded-[5vw] "
            >
              <div className=" translate-y-[-11%] h-full w-full absolute inset-0">
                <Image
                  ref={(el) => (imageRefs.current[2] = el)}
                  src="/images/homeTop.webp"
                  alt="hero"
                  fill
                  className="w-full h-full object-cover object-right"
                />
              </div>
              <div className="w-[calc(100vw-3vw)] scale-120 h-full absolute bottom-0  left-0">
                <Image
                  ref={(el) => (imageRefsBottom.current[2] = el)}
                  src="/images/homeBottom.webp"
                  alt="hero"
                  fill
                  className="w-full  object-cover h-full object-right "
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full z-[4] absolute top-0 left-0 ">
            <div className="w-full h-full relative  ">
              {orbs2.map((item, i) => (
                <div
                  key={i}
                  className={`absolute ${item.position} orb-${i}`}
                  style={{ width: item.size }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 200 200"
                  >
                    <g filter="url(#DarkOrb_svg__a)">
                      <circle
                        cx="115.91"
                        cy="135.003"
                        r="93.184"
                        fill="black"
                        fillOpacity="0.04"
                      ></circle>
                    </g>
                    <circle
                      cx="100.002"
                      cy="100.002"
                      r="100.002"
                      fill="url(#DarkOrb_svg__b)"
                      fillOpacity="0.2"
                      data-figma-bg-blur-radius="21.357"
                    ></circle>
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
                      ></circle>
                    </mask>
                    <g mask="url(#DarkOrb_svg__d)">
                      <g filter="url(#DarkOrb_svg__e)">
                        <circle
                          cx="71.363"
                          cy="73.638"
                          r="44.092"
                          fill="white"
                        ></circle>
                      </g>
                      <g filter="url(#DarkOrb_svg__f)">
                        <path
                          fill="white"
                          fillRule="evenodd"
                          d="M74.4342 200.458C129.664 200.458 174.436 155.686 174.436 100.456C174.436 74.7892 164.767 51.3806 148.871 33.6748C175.279 51.6752 192.619 81.9956 192.619 116.366C192.619 171.595 147.846 216.368 92.6165 216.368C63.054 216.368 36.4875 203.54 18.1797 183.147C34.207 194.072 53.5748 200.458 74.4342 200.458Z"
                          clipRule="evenodd"
                        ></path>
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
                          result="effect1_foregroundBlur_1016_7067"
                          stdDeviation="26.364"
                        ></feGaussianBlur>
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
                          result="effect1_foregroundBlur_1016_7067"
                          stdDeviation="17.273"
                        ></feGaussianBlur>
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
                          result="effect1_foregroundBlur_1016_7067"
                          stdDeviation="17.273"
                        ></feGaussianBlur>
                      </filter>
                      <linearGradient
                        id="DarkOrb_svg__b"
                        x1="77.489"
                        x2="229.811"
                        y1="58.897"
                        y2="183.752"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EAEAEA"></stop>
                        <stop offset="1" stopColor="#969696"></stop>
                      </linearGradient>
                      <linearGradient
                        id="DarkOrb_svg__c"
                        x1="77.487"
                        x2="229.809"
                        y1="58.897"
                        y2="183.752"
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
          </div>
        </div>
      </div>
    </div>
  );
}
