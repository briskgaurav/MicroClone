import React from "react";

export default function Button({}) {
  return (
    <div className="p-[2px] group bg-gradient-to-r cursor-pointer w-fit from-[#D49878] via-[#699AA9] to-[#CDB970]  rounded-full">
      <div
        className={` bg-[#000000] px-[1.5vw] py-[.7vw] flex items-center gap-[.3vw] rounded-full max-sm:px-[7vw] max-sm:py-[2vw]`}
      >
        <div className="flex items-center gap-[.3vw]">
          <p
            className={`text-[.9vw]  max-sm:text-[4vw] group-hover:translate-x-[-.2vw] transition-all duration-300 font-haffer text-center w-full`}
          >
            Join the Waitlist
          </p>
          <div className="w-[.6vw] mb-[.5vw] group-hover:opacity-100 transition-all duration-500 opacity-0 hidden group-hover:flex  h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 9 9"
              className="w-full h-full object-contain"
            >
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="M5.82904 2.10986H1.63971V0.609863H8.38971V7.35986H6.88971V3.17052L2.17004 7.89019L1.10938 6.82953L5.82904 2.10986Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
