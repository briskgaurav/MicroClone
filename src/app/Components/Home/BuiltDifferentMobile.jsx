import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import WhiteBackground from "../Background/WhiteBackground";
import { animateFloatingBlobs } from "@/app/Animation/FloatBlobAnimation";

gsap.registerPlugin(ScrollTrigger);


export default function BuiltDifferentMobile() {
  const orbs = [
    { size: "35vw", position: "top-[25%] left-[50%]" },
    { size: "25vw", position: "top-[50%] left-[38%]" },
    { size: "40vw", position: "top-[70%] left-[80%]" },
    { size: "10vw", position: "top-[70%] left-[10%]" },
  ];
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".built-different",
          start: "center center",
          end: "bottom top",
          scrub: true,
          // markers: true,
          pin: true,
        },
      });
      gsap.to(".marquee", {
        x: "-82%",
        duration: 10,
        ease: "none",
        repeat: -1,
      });

      tl.fromTo(
        ".mask-container",
        { WebkitMaskSize: "50% 50%", maskSize: "50% 50%" },
        { WebkitMaskSize: "500% 500%", maskSize: "500% 500%", ease: "none" }
      );
      animateFloatingBlobs(orbs.map((_, i) => `orb-${i}`));
    });

    return () => context.revert();
  }, []);

  return (
    <div className="h-fit min-h-screen  relative built-different w-full  flex flex-col items-center justify-end  ">
      <p className="font-tobias absolute bottom-[8%]  w-[90%] tracking-tight leading-[1.1] text-[12vw] text-center">
        Startups, Investors, anyone.
      </p>
      <div className="w-[60%] h-[45%] translate-x-[-50%] translate-y-[-50%] absolute rounded-full border border-white/20 top-1/2 left-1/2"></div>
      <div
        className="w-full min-h-screen translate-y-[-50%] translate-x-[-50%]  absolute inset-1/2 py-0 h-fit mask-container"
        style={{
          WebkitMaskImage: "url('/svg/whitemask.svg')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "50% 50%", // Initial size
          maskImage: "url('/svg/whitemask.svg')",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "50% 50%", // Initial size
        }}
      >
        <div className="h-fit relative w-full ">
          <div className="h-screen absolute inset-0 z-[-1] bg-[#F9F5EE] w-full grid grid-cols-[repeat(auto-fill,minmax(.5rem,1fr))] gap-4 p-4">
            {[...Array(50000)].map((_, i) => (
              <div
                key={i}
                className="w-[.15vw] h-[.15vw] rounded-full bg-black/20"
              />
            ))}
          </div>
          <div className="h-[100vh] z-[5] flex items-end  relative">
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
            <div className="h-[30%] w-[100vw] marquee whitespace-nowrap flex items-center justify-center text-[#14151A] gap-4">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-nowrap items-center gap-4 justify-center"
                >
                  <h2 className="text-[8vw] leading-none tracking-tighter font-tobias">
                    Micro is Built Different.
                  </h2>
                  <div className="p-[1vw] w-[7vw] h-[7vw] rounded-[1vw] bg-[#14151A]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 72 72"
                      stroke="#DBCAAB"
                      className="w-[100%] h-[100%]"
                    >
                      <path
                        stroke="#DBCAAB"
                        strokeWidth="0.5"
                        d="M33.7752 35.559C33.7752 42.4918 28.6849 48.0692 22.456 48.0692C16.227 48.0692 11.1367 42.4918 11.1367 35.559C11.1367 28.6262 16.227 23.0488 22.456 23.0488C28.6849 23.0488 33.7752 28.6262 33.7752 35.559Z"
                      ></path>
                      <path
                        stroke="#DBCAAB"
                        strokeWidth="0.5"
                        d="M40.9221 35.5583C40.9221 47.7938 33.2841 57.5961 23.9884 57.5961C14.6927 57.5961 7.05469 47.7938 7.05469 35.5583C7.05469 23.3228 14.6927 13.5205 23.9884 13.5205C33.2841 13.5205 40.9221 23.3228 40.9221 35.5583Z"
                      ></path>
                      <path
                        stroke="#DBCAAB"
                        strokeWidth="0.5"
                        d="M48.0686 35.2186C48.0686 51.3847 37.3201 64.4021 24.1593 64.4021C10.9985 64.4021 0.25 51.3847 0.25 35.2186C0.25 19.0526 10.9985 6.03516 24.1593 6.03516C37.3201 6.03516 48.0686 19.0526 48.0686 35.2186Z"
                      ></path>
                      <path
                        stroke="#DBCAAB"
                        strokeWidth="0.5"
                        d="M54.8731 35.2176C54.8731 53.0699 42.7578 67.4635 27.9014 67.4635C13.045 67.4635 0.929688 53.0699 0.929688 35.2176C0.929688 17.3654 13.045 2.97168 27.9014 2.97168C42.7578 2.97168 54.8731 17.3654 54.8731 35.2176Z"
                      ></path>
                      <path
                        stroke="#DBCAAB"
                        strokeWidth="0.5"
                        d="M62.0188 34.1974C62.0188 52.5905 48.3241 67.4642 31.4743 67.4642C14.6245 67.4642 0.929688 52.5905 0.929688 34.1974C0.929688 15.8043 14.6245 0.930664 31.4743 0.930664C48.3241 0.930664 62.0188 15.8043 62.0188 34.1974Z"
                      ></path>
                      <circle
                        cx="35.728"
                        cy="35.728"
                        r="35.478"
                        stroke="#DBCAAB"
                        strokeWidth="0.5"
                      ></circle>
                      <path
                        stroke="#DBCAAB"
                        strokeWidth="0.5"
                        d="M71.2071 35.7285C71.2071 55.3332 55.9982 71.207 37.2598 71.207C18.5214 71.207 3.3125 55.3332 3.3125 35.7285C3.3125 16.1238 18.5214 0.25 37.2598 0.25C55.9982 0.25 71.2071 16.1238 71.2071 35.7285Z"
                      ></path>
                      <path
                        stroke="#DBCAAB"
                        strokeWidth="0.5"
                        d="M71.2069 35.5579C71.2069 53.5945 58.7899 68.1441 43.5546 68.1441C28.3193 68.1441 15.9023 53.5945 15.9023 35.5579C15.9023 17.5213 28.3193 2.97168 43.5546 2.97168C58.7899 2.97168 71.2069 17.5213 71.2069 35.5579Z"
                      ></path>
                      <path
                        stroke="#DBCAAB"
                        strokeWidth="0.5"
                        d="M71.205 35.7287C71.205 43.6688 68.876 50.847 65.1231 56.0339C61.37 61.2211 56.2068 64.4018 50.5283 64.4018C44.8498 64.4018 39.6865 61.2211 35.9334 56.0339C32.1805 50.847 29.8516 43.6688 29.8516 35.7287C29.8516 27.7887 32.1805 20.6105 35.9334 15.4236C39.6865 10.2363 44.8498 7.05566 50.5283 7.05566C56.2068 7.05566 61.37 10.2363 65.1231 15.4236C68.876 20.6105 71.205 27.7887 71.205 35.7287Z"
                      ></path>
                      <path
                        stroke="#DBCAAB"
                        strokeWidth="0.5"
                        d="M71.2064 35.5587C71.2064 42.6113 69.3318 48.9847 66.314 53.5875C63.2949 58.1925 59.1526 60.9992 54.613 60.9992C50.0733 60.9992 45.9311 58.1925 42.9119 53.5875C39.8942 48.9847 38.0195 42.6113 38.0195 35.5587C38.0195 28.5061 39.8942 22.1326 42.9119 17.5298C45.9311 12.9249 50.0733 10.1182 54.613 10.1182C59.1526 10.1182 63.2949 12.9249 66.314 17.5298C69.3318 22.1326 71.2064 28.5061 71.2064 35.5587Z"
                      ></path>
                      <path
                        stroke="#DBCAAB"
                        strokeWidth="0.5"
                        d="M71.2079 35.559C71.2079 40.541 69.792 45.0406 67.5158 48.2881C65.239 51.5363 62.1175 53.5135 58.6977 53.5135C55.2779 53.5135 52.1564 51.5363 49.8796 48.2881C47.6033 45.0406 46.1875 40.541 46.1875 35.559C46.1875 30.5771 47.6033 26.0774 49.8796 22.83C52.1564 19.5817 55.2779 17.6045 58.6977 17.6045C62.1175 17.6045 65.239 19.5817 67.5158 22.83C69.792 26.0774 71.2079 30.5771 71.2079 35.559Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
