import React from "react";

export default function Button({
  
}) {
  return (
    <div className="p-[2px] bg-gradient-to-r w-fit from-pink-500 via-yellow-500 to-green-500  rounded-full">
      <div className={` bg-[#000000] px-[1.5vw] py-[.7vw] rounded-full`}>
        <p className={`text-[.8vw] font-haffer tracking-tight font-medium`}>Join the Waitlist</p>
      </div>
    </div>
  );
}
