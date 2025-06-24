import React from "react";
import Features from "../Home/Features";
import Productivity from "../Home/Productivity";
import Footer from "../Footer/Footer";
import SvgBackground from "./SvgBackground";

export default function WhiteBackground() {
  return (
    <div className="h-fit min-h-screen  relative  w-full">
      <div className="h-full absolute z-[-1] -mt-[.5vw] overflow-hidden bg-[#F9F5EE] top-0 left-0 w-full grid grid-cols-[repeat(auto-fill,minmax(.5rem,1fr))] gap-4 p-4">
        {[...Array(50000)].map((_, i) => (
          <div
            key={i}
            className="w-[.15vw] h-[.15vw] rounded-full bg-black/20"
          />
        ))}
      </div>
        <Features />
        <Productivity />
        <Footer />
    </div>
  );
}
