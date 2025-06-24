import React, { useEffect } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);
export default function SvgBackground({ toggle }) {
  useEffect(() => {
    const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 4
      });
    if (toggle) {
      tl.fromTo(
        ".gradient-path",
        {
          drawSVG: "0% 0%",
          opacity: 1,
        },
        {
          drawSVG: "0% 100%",
          duration: 1,
          ease: "power2.inOut",
        }
      );

      // Then animate end point from left to right
      tl.to(".gradient-path", {
        drawSVG: "100% 100%",
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.set(".gradient-path", {
        opacity: 0,
      });
    }
  }, [toggle]);

  return (
    <div className="absolute w-full h-screen top-0 left-0 z-[-1] py-[4vw] opacity-30">
      <div className="w-[123vw] blur-3xl h-full translate-y-[50%] -translate-x-[10vw]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 2391 1500"
          className="w-full h-auto object-cover object-bottom"
        >
          <filter id="blur">
            <feGaussianBlur stdDeviation="00" />
          </filter>
          <path
            stroke="url(#Gradient_svg__a)"
            strokeWidth="200"
            d="M171 323.996C227.282 305.664 368.347 272.398 482.348 285.998C624.85 302.997 847.584 383.995 948.174 411.994C1048.76 439.993 1165.17 563.741 1418.79 539.99C1546.92 527.99 1924.13 475.992 2178 210"
            className="gradient-path"
            filter="url(#blur)"
          ></path>
          <defs>
            <linearGradient
              id="Gradient_svg__a"
              x1="171"
              x2="2109.55"
              y1="295.021"
              y2="404.299"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A888AB"></stop>
              <stop offset="0.141" stopColor="#DFA35D"></stop>
              <stop offset="0.366" stopColor="#6295AF"></stop>
              <stop offset="0.576" stopColor="#DEC073"></stop>
              <stop offset="1" stopColor="#539590"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
