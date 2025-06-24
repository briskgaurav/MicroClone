"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function Introduction() {
  const navItems = [
    {
      icon: (
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 14V8.66667C10.5 8.48986 10.4298 8.32029 10.3047 8.19526C10.1797 8.07024 10.0101 8 9.83333 8H7.16667C6.98986 8 6.82029 8.07024 6.69526 8.19526C6.57024 8.32029 6.5 8.48986 6.5 8.66667V14"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.5 6.66648C2.49995 6.47253 2.54222 6.2809 2.62386 6.10496C2.70549 5.92902 2.82453 5.77301 2.97267 5.64782L7.63933 1.64848C7.87999 1.44509 8.1849 1.3335 8.5 1.3335C8.8151 1.3335 9.12001 1.44509 9.36067 1.64848L14.0273 5.64782C14.1755 5.77301 14.2945 5.92902 14.3761 6.10496C14.4578 6.2809 14.5 6.47253 14.5 6.66648V12.6665C14.5 13.0201 14.3595 13.3592 14.1095 13.6093C13.8594 13.8593 13.5203 13.9998 13.1667 13.9998H3.83333C3.47971 13.9998 3.14057 13.8593 2.89052 13.6093C2.64048 13.3592 2.5 13.0201 2.5 12.6665V6.66648Z"
          ></path>
        </svg>
      ),
      text: "Home",
      position: "0vw",
      video: "https://www.micro.so/videos/optimized/home-high-265.mp4"
    },
    {
      icon: (
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.832 2.6665H3.16536C2.42898 2.6665 1.83203 3.26346 1.83203 3.99984V11.9998C1.83203 12.7362 2.42898 13.3332 3.16536 13.3332H13.832C14.5684 13.3332 15.1654 12.7362 15.1654 11.9998V3.99984C15.1654 3.26346 14.5684 2.6665 13.832 2.6665Z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.1654 4.6665L9.18536 8.4665C8.97955 8.59545 8.74158 8.66384 8.4987 8.66384C8.25582 8.66384 8.01785 8.59545 7.81203 8.4665L1.83203 4.6665"
          ></path>
        </svg>
      ),
      text: "Messages",
      position: "8vw",
      video: "https://www.micro.so/videos/optimized/messages-high-265.mp4"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.12625 10.3332C7.06674 10.1025 6.94648 9.89191 6.778 9.72343C6.60952 9.55495 6.39897 9.43469 6.16825 9.37517L2.07825 8.32051C2.00847 8.3007 1.94706 8.25867 1.90333 8.2008C1.8596 8.14293 1.83594 8.07238 1.83594 7.99984C1.83594 7.9273 1.8596 7.85675 1.90333 7.79888C1.94706 7.74101 2.00847 7.69898 2.07825 7.67917L6.16825 6.62384C6.39889 6.56438 6.60938 6.44422 6.77786 6.27587C6.94633 6.10751 7.06663 5.8971 7.12625 5.66651L8.18092 1.57651C8.20053 1.50645 8.24251 1.44474 8.30047 1.40077C8.35843 1.35681 8.42917 1.33301 8.50192 1.33301C8.57467 1.33301 8.64542 1.35681 8.70337 1.40077C8.76133 1.44474 8.80332 1.50645 8.82292 1.57651L9.87692 5.66651C9.93644 5.89722 10.0567 6.10777 10.2252 6.27625C10.3937 6.44473 10.6042 6.56499 10.8349 6.62451L14.9249 7.67851C14.9953 7.69791 15.0573 7.73985 15.1015 7.79789C15.1457 7.85594 15.1696 7.92688 15.1696 7.99984C15.1696 8.0728 15.1457 8.14374 15.1015 8.20179C15.0573 8.25983 14.9953 8.30177 14.9249 8.32117L10.8349 9.37517C10.6042 9.43469 10.3937 9.55495 10.2252 9.72343C10.0567 9.89191 9.93644 10.1025 9.87692 10.3332L8.82225 14.4232C8.80265 14.4932 8.76067 14.5549 8.70271 14.5989C8.64475 14.6429 8.574 14.6667 8.50125 14.6667C8.42851 14.6667 8.35776 14.6429 8.2998 14.5989C8.24184 14.5549 8.19986 14.4932 8.18025 14.4232L7.12625 10.3332Z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.832 2V4.66667"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.1667 3.3335H12.5"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.16797 11.3335V12.6668"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.83333 12H2.5"
          ></path>
        </svg>
      ),
      text: "Projects",
      position: "16vw",
      video: "https://www.micro.so/videos/optimized/projects-high-265.mp4"
    },
    {
      icon: (
        <svg
          className="h-full w-full object-contain"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.4987 13.9998C12.4987 12.5853 11.9368 11.2288 10.9366 10.2286C9.93641 9.22841 8.57985 8.6665 7.16536 8.6665C5.75088 8.6665 4.39432 9.22841 3.39413 10.2286C2.39393 11.2288 1.83203 12.5853 1.83203 13.9998"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.16536 8.66667C9.00631 8.66667 10.4987 7.17428 10.4987 5.33333C10.4987 3.49238 9.00631 2 7.16536 2C5.32442 2 3.83203 3.49238 3.83203 5.33333C3.83203 7.17428 5.32442 8.66667 7.16536 8.66667Z"
          ></path>
        </svg>
      ),
      text: "CRM",
      position: "24vw",
      video: "https://www.micro.so/videos/optimized/crm-high-265.mp4"
    },
    {
      icon: (
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.12625 10.3332C7.06674 10.1025 6.94648 9.89191 6.778 9.72343C6.60952 9.55495 6.39897 9.43469 6.16825 9.37517L2.07825 8.32051C2.00847 8.3007 1.94706 8.25867 1.90333 8.2008C1.8596 8.14293 1.83594 8.07238 1.83594 7.99984C1.83594 7.9273 1.8596 7.85675 1.90333 7.79888C1.94706 7.74101 2.00847 7.69898 2.07825 7.67917L6.16825 6.62384C6.39889 6.56438 6.60938 6.44422 6.77786 6.27587C6.94633 6.10751 7.06663 5.8971 7.12625 5.66651L8.18092 1.57651C8.20053 1.50645 8.24251 1.44474 8.30047 1.40077C8.35843 1.35681 8.42917 1.33301 8.50192 1.33301C8.57467 1.33301 8.64542 1.35681 8.70337 1.40077C8.76133 1.44474 8.80332 1.50645 8.82292 1.57651L9.87692 5.66651C9.93644 5.89722 10.0567 6.10777 10.2252 6.27625C10.3937 6.44473 10.6042 6.56499 10.8349 6.62451L14.9249 7.67851C14.9953 7.69791 15.0573 7.73985 15.1015 7.79789C15.1457 7.85594 15.1696 7.92688 15.1696 7.99984C15.1696 8.0728 15.1457 8.14374 15.1015 8.20179C15.0573 8.25983 14.9953 8.30177 14.9249 8.32117L10.8349 9.37517C10.6042 9.43469 10.3937 9.55495 10.2252 9.72343C10.0567 9.89191 9.93644 10.1025 9.87692 10.3332L8.82225 14.4232C8.80265 14.4932 8.76067 14.5549 8.70271 14.5989C8.64475 14.6429 8.574 14.6667 8.50125 14.6667C8.42851 14.6667 8.35776 14.6429 8.2998 14.5989C8.24184 14.5549 8.19986 14.4932 8.18025 14.4232L7.12625 10.3332Z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.832 2V4.66667"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.1667 3.3335H12.5"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.16797 11.3335V12.6668"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.83333 12H2.5"
          ></path>
        </svg>
      ),
      text: "MicroAI",
      position: "32vw",
      video: "https://www.micro.so/videos/optimized/ai-high-265.mp4"
    },
  ];

  const [active, setActive] = useState(navItems[0]);

  useEffect(() => {
    gsap.to(".absolute-btn", {
      x: active.position,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [active]);

  return (
    <div className="h-fit w-full flex py-[2vw] flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-[5.3vw] font-haffer leading-[1.3] tracking-tight">
          Introducing Micro
        </h2>
        <p className="font-tobias text-[1.8vw]">
          The all-in-one tool that organizes itself
        </p>
        <div className="w-fit mt-[4vw] rounded-full bg-zinc-500/10 backdrop-blur-md h-[6vh] px-[.2vw] flex items-center relative justify-center">
          <div className="w-[8vw] h-[90%] -translate-y-1/2  absolute absolute-btn top-1/2 left-[calc(.2vw+0vw)] rounded-full z-[-1] bg-black "></div>
          {navItems.map((item, index) => (
            <div
              onClick={() => setActive(item)}

              className="w-[8vw] flex z-[5] items-center gap-[.5vw] justify-center h-full"
              key={index}
            >
              <div className={`w-[1vw] h-auto  ${active.text === item.text ? "text-white" : "text-zinc-500"}`}>{item.icon}</div>
              <p className={`text-[.8vw] cursor-pointer  text-center ${active.text === item.text ? "text-white" : "text-zinc-500"}`}>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="w-full mt-[2vw] h-full flex flex-col items-center justify-center">
          <div className="w-[75%] p-[.5vw] h-auto rounded-xl bg-white/50 backdrop-blur-xl">
            <div className="bg-white w-full h-full aspect-video rounded-xl overflow-hidden">
              <video
                src={active.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
