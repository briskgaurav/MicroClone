import React, { useEffect } from "react";
import Button from "../Buttons/Button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SwiperComponent from "../Swiper/SwiperComponent";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    text: "Micro has been game-changing for staying on top of my connections. Love how easy it is to search through and get detailed info on my contacts.",
    author: "Jacob Peters",
    role: "Cofounder/CEO",
    company: "Superpower",
    image: "https://www.micro.so/_next/static/media/superpower.c8915e11.svg",
  },
  {
    text: "The AI capabilities are incredible. It helps me maintainWe've been able to close much more capital since onboarding to Micro. It's eliminated 80% of the busywork we'd have to do and has helped us engage with investors we would have missed.",
    author: "Sarah Chen",
    role: "Head of Product",
    company: "TechFlow",
    image: "https://www.micro.so/_next/static/media/shield.99c33afb.svg",
  },
];

export default function Footer() {
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-container",
          start: "top 20%",
          end: "center 20%",
          // markers: true,
          scrub: true,
        },
      });

      tl.to(".capsule", {
        bottom: "10%",
        duration: 1,
      });
      tl.to(".text-1", {
        opacity: 1,
        translateY: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.to(".button", {
        opacity: 1,
        translateY: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.to(".footer-text", {
        opacity: 1,
        duration: 1,
        translateY: 0,
        ease: "power2.inOut",
        delay: 2,
        stagger: 0.7,
      });
    });
    return () => context.revert();
  }, []);

  return (
    <div className="h-fit w-full flex flex-col items-center justify-center footer-container">
      <SwiperComponent />
      <div className="h-fit flex-col  border-t-2 border-[#EBDFCA] max-sm:w-[85%] w-[75%]  gap-5  p-4 flex items-center justify-center">
        <p className="text-[2.5vw] max-sm:text-[9vw] w-full  max-sm:leading-[1.1] text-1 opacity-0 translate-y-[50%] text-center font-tobias text-[#14151A] tracking-tighter">
          Apply Now to be part of the closed beta
        </p>
        <div className="button opacity-0 translate-y-[50%]">
          <Button fontSize="1vw" paddingy="1.5vw" paddingx="4vw" />
        </div>
      </div>
      {/* "FOOTER" */}
      <div className="h-screen max-sm:h-[90vh] mt-[10vw] relative w-full flex">
        <Image
          src={"/images/footer.webp"}
          alt="footer"
          width={1000}
          height={1000}
          className="w-full max-sm:h-[40%] absolute z-[-1] bottom-0 left-0  h-full object-cover"
        />
        <div className="w-full px-[1vw] max-sm:pt-[45vw]  max-sm:px-[3vw] h-full flex flex-col    ">
          <div className="border-b pb-[.5vw] max-sm:pb-[8vw] pt-[10vw] h-fit border-black w-full flex max-sm:flex-col max-sm:items-start items-center justify-between opacity-0 footer-text translate-y-[10%] text-black text-[2vw] tracking-tighter leading-[1.2]">
            <p className="text-[4vw] max-sm:text-[14vw] font-haffer">Organized.</p>
            <p className="font-tobias text-[2vw] max-sm:text-[7vw]">So you don't have to be.</p>
          </div>
          <div className="flex footer-text opacity-0 max-sm:opacity-100 translate-y-[10%] max-sm:flex-row-reverse items-center justify-between">
            <div className="flex items-start max-sm:py-[5vw]  justify-start gap-8 py-[1vw]">
              {[
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 13 12"
                >
                  <path
                    fill="black"
                    d="M0 1.39394C0 0.989891 0.14077 0.656558 0.422297 0.393939C0.703825 0.131309 1.06982 0 1.52027 0C1.96268 0 2.32062 0.129285 2.59411 0.387879C2.87564 0.654545 3.01641 1.00201 3.01641 1.4303C3.01641 1.81818 2.87967 2.14141 2.60618 2.4C2.32465 2.66667 1.95463 2.8 1.49614 2.8H1.48407C1.04166 2.8 0.683723 2.66667 0.410232 2.4C0.13674 2.13333 0 1.79798 0 1.39394ZM0.156853 12V3.90303H2.83542V12H0.156853ZM4.3195 12H6.99807V7.47879C6.99807 7.19595 7.03025 6.97777 7.09459 6.82424C7.2072 6.54949 7.37814 6.31716 7.60738 6.12727C7.83663 5.93737 8.12419 5.84242 8.47008 5.84242C9.37098 5.84242 9.82143 6.45252 9.82143 7.67273V12H12.5V7.35758C12.5 6.16161 12.2185 5.25455 11.6554 4.63636C11.0923 4.01818 10.3483 3.70909 9.42326 3.70909C8.38562 3.70909 7.57722 4.15758 6.99807 5.05455V5.07879H6.986L6.99807 5.05455V3.90303H4.3195C4.33558 4.16161 4.34363 4.96565 4.34363 6.31515C4.34363 7.66464 4.33558 9.55959 4.3195 12Z"
                  ></path>
                </svg>,
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 13 12"
                >
                  <path
                    fill="black"
                    d="M6.49999 1.0811C8.10207 1.0811 8.29182 1.0872 8.92449 1.11607C9.50949 1.14277 9.82718 1.24051 10.0386 1.32266C10.3187 1.4315 10.5186 1.56154 10.7285 1.77149C10.9385 1.98143 11.0685 2.18133 11.1773 2.46137C11.2595 2.67282 11.3572 2.99051 11.3839 3.57549C11.4128 4.20818 11.4189 4.39794 11.4189 6.00001C11.4189 7.60209 11.4128 7.79184 11.3839 8.42451C11.3572 9.00951 11.2595 9.3272 11.1773 9.53865C11.0685 9.81869 10.9385 10.0186 10.7285 10.2285C10.5186 10.4385 10.3187 10.5685 10.0386 10.6773C9.82718 10.7595 9.50949 10.8573 8.92449 10.884C8.29191 10.9128 8.10216 10.9189 6.49999 10.9189C4.89782 10.9189 4.70807 10.9128 4.07549 10.884C3.49049 10.8573 3.1728 10.7595 2.96137 10.6773C2.68131 10.5685 2.48141 10.4385 2.27146 10.2285C2.06152 10.0186 1.93148 9.81869 1.82266 9.53865C1.74049 9.3272 1.64274 9.00951 1.61604 8.42454C1.58718 7.79184 1.58108 7.60209 1.58108 6.00001C1.58108 4.39794 1.58718 4.20818 1.61604 3.57551C1.64274 2.99051 1.74049 2.67282 1.82266 2.46137C1.93148 2.18133 2.06152 1.98143 2.27146 1.77149C2.48141 1.56154 2.68131 1.4315 2.96137 1.32266C3.1728 1.24051 3.49049 1.14277 4.07546 1.11607C4.70816 1.0872 4.89791 1.0811 6.49999 1.0811ZM6.49999 0C4.87047 0 4.66617 0.00690694 4.02621 0.0361066C3.38755 0.0652587 2.95142 0.166672 2.56975 0.315004C2.1752 0.468338 1.84059 0.673498 1.50703 1.00706C1.17347 1.34061 0.968314 1.67522 0.81498 2.06977C0.666648 2.45144 0.565235 2.88758 0.536083 3.52623C0.506883 4.16617 0.5 4.3705 0.5 6.00001C0.5 7.62953 0.506883 7.83385 0.536083 8.47379C0.565235 9.11245 0.666648 9.54858 0.81498 9.93025C0.968314 10.3248 1.17347 10.6594 1.50703 10.993C1.84059 11.3265 2.1752 11.5317 2.56975 11.685C2.95142 11.8334 3.38755 11.9348 4.02621 11.9639C4.66617 11.9931 4.87047 12 6.49999 12C8.1295 12 8.33383 11.9931 8.97377 11.9639C9.61242 11.9348 10.0486 11.8334 10.4302 11.685C10.8248 11.5317 11.1594 11.3265 11.4929 10.993C11.8265 10.6594 12.0317 10.3248 12.185 9.93025C12.3333 9.54858 12.4347 9.11245 12.4639 8.47379C12.4931 7.83385 12.5 7.62953 12.5 6.00001C12.5 4.3705 12.4931 4.16617 12.4639 3.52623C12.4347 2.88758 12.3333 2.45144 12.185 2.06977C12.0317 1.67522 11.8265 1.34061 11.4929 1.00706C11.1594 0.673498 10.8248 0.468338 10.4302 0.315004C10.0486 0.166672 9.61242 0.0652587 8.97377 0.0361066C8.33383 0.00690694 8.1295 0 6.49999 0ZM6.49999 2.91892C4.79836 2.91892 3.4189 4.29838 3.4189 6.00001C3.4189 7.70164 4.79836 9.0811 6.49999 9.0811C8.20162 9.0811 9.58108 7.70164 9.58108 6.00001C9.58108 4.29838 8.20162 2.91892 6.49999 2.91892ZM6.49999 8.00002C5.39543 8.00002 4.49998 7.10457 4.49998 6.00001C4.49998 4.89545 5.39543 4 6.49999 4C7.60455 4 8.5 4.89545 8.5 6.00001C8.5 7.10457 7.60455 8.00002 6.49999 8.00002ZM10.4228 2.79719C10.4228 3.19484 10.1005 3.5172 9.70281 3.5172C9.30516 3.5172 8.98279 3.19484 8.98279 2.79719C8.98279 2.39954 9.30516 2.0772 9.70281 2.0772C10.1005 2.0772 10.4228 2.39954 10.4228 2.79719Z"
                  ></path>
                </svg>,
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 13 12"
                >
                  <path
                    fill="black"
                    d="M7.49289 5.08125L11.8671 0H10.8304L7.03245 4.41188L3.99888 0H0.5L5.08731 6.67163L0.5 12H1.53664L5.54756 7.34091L8.75112 12H12.25L7.4926 5.08125H7.49289ZM6.07311 6.73031L5.60826 6.066L1.91012 0.779812H3.50233L6.48664 5.046L6.95139 5.71031L10.8309 11.2556H9.23886L6.07311 6.73059V6.73031Z"
                  ></path>
                </svg>,
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer h-auto w-[.6vw] max-sm:w-[10vw] items-center justify-center"
                >
                  <Link href={"/#"}>{item}</Link>
                </div>
              ))}
            </div>
            <div className="flex max-sm:flex-col items-center max-sm:items-start justify-start gap-[5vw] max-sm:gap-[2vw] max-sm:py-[5vw] py-[1vw]">
              {["Contact Us", "Carrers", "Privacy", "Terms"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="text-[.6vw] max-sm:text-[2.5vw] cursor-pointer text-black flex items-center justify-center gap-2"
                  >
                    <Link href={"/#"}>
                      <p className="uppercase tracking-wider font-pp">{item}</p>
                    </Link>
                    <div className="w-[.5vw] max-sm:w-[2vw] max-sm:h-[2vw] h-[.5vw]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 9 9"
                        className="h-full w-full"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M5.82904 2.10986H1.63971V0.609863H8.38971V7.35986H6.88971V3.17052L2.17004 7.89019L1.10938 6.82953L5.82904 2.10986Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div>
            <p className="font-pp uppercase max-sm:text-[2.5vw] text-black text-[.5vw]">
              © Micro Applications Inc. 2025
            </p>
          </div>
          <div className="h-full w-full ">
            <img
              className="w-full h-full object-contain object-bottom"
              src="https://www.micro.so/_next/static/media/FooterLogo.7147597f.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
