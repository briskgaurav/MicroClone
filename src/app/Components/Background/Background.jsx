import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Hero from "../Home/Hero";
import WorkingHard from "../Home/WorkingHard";
import Introduction from "../Home/Introduction";
import Work from "../Home/Work";
import Customization from "../Home/Customization";
import BuiltDifferent from "../Home/BuiltDifferent";
import LoaderMicro from "@/app/Loader/LoaderMicro";
import Navbar from "../Header/Navbar";

export default function Background() {
  const rainRefs = useRef([]);

  useEffect(() => {
    rainRefs.current.forEach((drop) => {
      if (drop) {
        gsap.to(drop, {
          y: "1200vh",
          duration: gsap.utils.random(35, 45),
          ease: "linear",
          repeat: -1,
          delay: gsap.utils.random(0, 15),
        });
      }
    });
  }, []);

  const TOTAL_DOTS = 30000; // Adjust based on performance and screen size
  const TOTAL_LINES = 50;

  return (
    <div className="relative h-fit overflow-hidden">
      {/* Background Grid + Rain Lines */}
      <div className="absolute top-0 left-0 w-full z-[-1]">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(0.5rem,1fr))] gap-4 p-4 bg-[#0F1013]">
          {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
            <div key={i} className="w-full h-full relative">
              <div className="w-[0.15vw] h-[0.15vw] rounded-full bg-foreground/20"></div>
            </div>
          ))}
        </div>

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
      <LoaderMicro  />
      <Navbar />
      <Hero />
      <WorkingHard />
      <Introduction />
      <Work />
      <Customization />
      <BuiltDifferent />
    </div>
  );
}
