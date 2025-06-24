import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { animateFloatingBlobs } from "@/app/Animation/FloatBlobAnimation";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export default function Features() {
  const orbs = [
    { size: "10vw", position: "top-[10%] left-[50%]" },
    { size: "12vw", position: "top-[50%] left-[38%]" },
    { size: "15vw", position: "top-[20%] left-[80%]" },
    { size: "9vw", position: "top-[70%] left-[50%]" },
  ];
  const data = [
    {
      title: "Built for speed",
      description: "Lightning-fast performance for every task",
    },
    {
      title: "Built for speed",
      description: "Lightning-fast performance for every task",
    },
    {
      title: "Built for speed",
      description: "Lightning-fast performance for every task",
    },
  ];
  const refMessage = useRef(null);
  useEffect(() => {
    const paths = refMessage.current.querySelectorAll("path");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".blocks-container",
          start: "top 80%",
          end: "bottom top",
          // markers: true,
          scrub: true,
        },
      });

      data.forEach((_, i) => {
        tl.fromTo(
          `.blocks:nth-child(${i + 1}), .blocks:nth-child(${i + 1}) svg path`,
          {
            opacity: 0.2,
            drawSVG: "0%",
          },
          {
            opacity: 1,
            ease: "linear",
            drawSVG: "100%",
            duration: 0.5,
          }
        );

        tl.to(
          `.blocks:nth-child(${i + 1})`,

          {
            y: "-20%",
            ease: "linear",
          },
          "<"
        );

        tl.fromTo(
          `.blocks:nth-child(${i + 1}) .text-feature`,
          {
            opacity: 0,
            y: "100%",
          },
          {
            opacity: 1,
            y: "0%",
            duration: 1,
            ease: "linear",
            stagger: 0.2,
          },
          "<+.5"
        );
      });

      // Floating orbs animation
      animateFloatingBlobs(orbs.map((_, i) => `orb-${i}`));
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-fit  w-full relative z-10 overflow-x-hidden">
      <div className="absolute border-b  border-[#EBDFCA]  z-[-1] flex items-center justify-center top-0 left-0 w-full h-full">
        <div className="w-[70%] h-full flex items-center justify-center">
          <div className="w-1/2 h-full border-r-1 border-l-1 flex items-center justify-center border-[#EBDFCA]">
            <div className="w-[65vh] h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 510 738"
                className="w-full h-full object-contain"
              >
                <circle cx="255" cy="483" r="254.5" stroke="#E1D8C8"></circle>
                <circle cx="255" cy="255" r="254.5" stroke="#E1D8C8"></circle>
              </svg>
            </div>
          </div>
          <div className="w-1/2 h-full border-r-1 flex flex-col items-center justify-between py-[8vw]  border-[#EBDFCA]">
            <div className="h-[65vh] w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 512 419"
                className="w-full h-full object-contain"
              >
                <rect
                  width="254"
                  height="418"
                  x="257.5"
                  y="0.5"
                  stroke="#E1D8C8"
                  rx="127"
                ></rect>
                <rect
                  width="257"
                  height="418"
                  x="0.5"
                  y="0.5"
                  stroke="#E1D8C8"
                  rx="128.5"
                ></rect>
              </svg>
            </div>
            <div className="h-[65vh] w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 510 424"
                className="w-full h-full object-contain"
              >
                <rect
                  width="509"
                  height="253"
                  x="0.5"
                  y="0.5"
                  stroke="#E1D8C8"
                  rx="126.5"
                ></rect>
                <circle cx="425" cy="339" r="84.5" stroke="#E1D8C8"></circle>
                <path
                  stroke="#E1D8C8"
                  d="M338.5 339C338.5 385.671 300.889 423.5 254.5 423.5C208.111 423.5 170.5 385.671 170.5 339C170.5 292.329 208.111 254.5 254.5 254.5C300.889 254.5 338.5 292.329 338.5 339Z"
                ></path>
                <circle cx="85" cy="339" r="84.5" stroke="#E1D8C8"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[15vw]  h-full my-[10vw]   w-full ">
        <div className="w-full h-full  blocks-container ">
          {data.map((_, i) => (
            <div
              key={i}
              className={`flex items-center  blocks translate-y-[20%] mb-[25vw] ${
                i % 2 === 0 ? "flex-start" : "justify-end border-l-2 "
              } w-full`}
            >
              <div key={i} className={`flex gap-4 flex-col w-[50%]`}>
                <div className="h-[65vh] w-full rounded-[2vw] bg-[#14151A] p-5">
                  <svg
                    ref={refMessage}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 383 381"
                    className="w-full h-full object-contain"
                  >
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M369 171C369 204.689 293.336 232 200 232C106.664 232 31 204.689 31 171"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeDasharray="5 3"
                      strokeWidth="0.5"
                      d="M31 176C31 142.311 106.664 115 200 115C293.336 115 369 142.311 369 176"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M337 258C337 285.614 275.663 308 200 308C124.337 308 63 285.614 63 258"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeDasharray="5 3"
                      strokeWidth="0.5"
                      d="M63 263C63 235.386 124.337 213 200 213C275.663 213 337 235.386 337 263"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M337 101C337 128.614 275.663 151 200 151C124.337 151 63 128.614 63 101"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeDasharray="5 3"
                      strokeWidth="0.5"
                      d="M63 106C63 78.3858 124.337 56 200 56C275.663 56 337 78.3858 337 106"
                    ></path>
                    <circle
                      cx="200"
                      cy="182"
                      r="159.75"
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                    ></circle>
                    <circle
                      cx="200"
                      cy="182"
                      r="169.75"
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                    ></circle>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M200 35V329"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M347 182L53 182"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M303.945 285.944L96.0559 78.0549"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M96.0547 285.944L303.944 78.0549"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M58.0078 220.046L341.99 143.953"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M58.0078 143.953L341.99 220.046"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M72.6914 108.5L327.303 255.5"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M126.496 54.6943L273.496 309.306"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M161.949 40.0088L238.042 323.991"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M238.043 40.0088L161.95 323.991"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M273.496 54.6943L126.496 309.306"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M327.301 108.5L72.6893 255.5"
                    ></path>
                    <circle
                      cx="200"
                      cy="182"
                      r="18.75"
                      fill="#14151A"
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                    ></circle>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M379 3L14 368"
                    ></path>
                    <circle
                      cx="30"
                      cy="351"
                      r="29.75"
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                    ></circle>
                    <circle
                      cx="374"
                      cy="9"
                      r="8.75"
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                    ></circle>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M82.0352 44.0059C154.865 -17.0921 261.497 -11.4107 327.5 54.5298"
                    ></path>
                    <path
                      stroke="#F3E8AF"
                      strokeWidth="0.5"
                      d="M334.498 47.5298C317.058 30.1056 296.78 16.8889 275.039 8"
                    ></path>
                  </svg>
                </div>
                <div className="px-4 py-2   w-full ">
                  <p className="text-[2vw] text-feature leading-[1.2] text-[#14151A] font-light font-haffer">
                    {_.title}
                  </p>
                  <p className="text-[1.2vw] text-feature text-[#14151A]/80 font-haffer">
                    {_.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
