import React, { useEffect } from "react";
import gsap from "gsap";

export default function LoaderMicro() {
  useEffect(() => {
    const paths = document.querySelectorAll(".loaderPath");
    const percentageText = document.querySelector(".loader-percentage");

    // Animate SVG Paths
    gsap.to(paths, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.08,
    });

    // Animate Line
    gsap.to(".loaderLine", {
      width: "100%",
      duration: 1,
      ease: "power2.out",
    });

    // Animate Percentage Text
    const counterObj = { val: 0 };
    gsap.to(counterObj, {
      val: 100,
      duration: 1.2,
      ease: "linear",
      onUpdate: () => {
        if (percentageText) {
          const val = Math.round(counterObj.val);
          percentageText.innerText = val.toString().padStart(2, "0") + "%";
        }
      },
      onComplete: () => {
        gsap.to(".loaderDiv", {
          y: "-100%",
          duration: 1.2,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.to(".loaderDiv", {
              visibility: "hidden",
            });
          },
        });
      },
    });
  }, []);

  return (
    <div className="h-screen fixed bg-white top-0 left-0 z-[999] loaderDiv w-full">
      <div className="flex items-center  gap-3 flex-col justify-center h-full w-full">
        {/* Logo / Wordmark Container */}
        <div className="h-auto w-[30%]  p-[2px] rounded-[1vw] bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] via-[#45B7D1] via-[#96CEB4] to-[#FFEEAD]">
          <div className="bg-black overflow-hidden h-full p-[1vw] rounded-[1vw] w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              overflow="visible"
              viewBox="0 0 95 22"
              className="h-full w-full"
            >
              {/* Each path below gets animated */}
              <path
                fill="currentColor"
                fillRule="evenodd"
                className="loaderPath translate-y-[120%]"
                d="M14.3079 9.25599V21.9561H18.481L18.481 18.8389V9.25599C18.481 6.48297 20.7498 4.235 23.5484 4.235C26.347 4.235 28.6158 6.48297 28.6158 9.25599V21.9561H32.7889V9.25599C32.7889 4.19931 28.6518 0.100067 23.5484 0.100067C20.6644 0.100067 18.089 1.40915 16.3944 3.46032C14.6999 1.40915 12.1245 0.100067 9.2405 0.100067C4.13711 0.100067 0 4.19931 0 9.25599V21.9561H4.17313V9.25599C4.17313 6.48297 6.44187 4.235 9.2405 4.235C12.0391 4.235 14.3079 6.48297 14.3079 9.25599Z"
                clipRule="evenodd"
              />
              <path
                fill="currentColor"
                d="M34.0731 21.9561V0.100067H38.2463V21.9561H34.0731Z"
                className="loaderPath translate-y-[120%]"
              />
              <path
                fill="currentColor"
                className="loaderPath translate-y-[120%]"
                d="M49.8514 22C47.7968 22 45.9751 21.5395 44.3862 20.6186C42.7974 19.6976 41.5646 18.411 40.688 16.7586C39.8114 15.0792 39.373 13.1696 39.373 11.0297C39.373 8.88984 39.8114 6.99374 40.688 5.34143C41.5646 3.68911 42.7974 2.40247 44.3862 1.48151C45.9751 0.560548 47.7968 0.100067 49.8514 0.100067C52.2895 0.100067 54.3441 0.736615 56.0152 2.00971C57.7136 3.25572 58.7409 4.94866 59.097 7.08854L55.3166 7.77927H55.1522C54.9057 6.53326 54.303 5.51749 53.3442 4.73197C52.3854 3.94644 51.2348 3.55367 49.8925 3.55367C47.9749 3.55367 46.4271 4.2444 45.2492 5.62584C44.0712 6.9802 43.4822 8.78149 43.4822 11.0297C43.4822 13.278 44.0712 15.0928 45.2492 16.4742C46.4271 17.8557 47.9749 18.5464 49.8925 18.5464C51.317 18.5464 52.5087 18.1536 53.4675 17.3681C54.4263 16.5555 55.0427 15.4178 55.3166 13.9551L59.2614 14.6865C58.8231 16.9618 57.7547 18.7495 56.0563 20.0497C54.3852 21.3499 52.3169 22 49.8514 22Z"
              />
              <path
                className="loaderPath translate-y-[120%]"
                fill="currentColor"
                d="M60.3721 10.4994C60.3721 4.75628 65.071 0.100067 70.8675 0.100067H73.7992V4.21345H70.8675C67.3638 4.21345 64.5235 7.02793 64.5235 10.4994V21.8546H60.3721V10.4994Z"
              />
              <path
                className="loaderPath translate-y-[120%]"
                fill="currentColor"
                fillRule="evenodd"
                d="M83.8948 18.1233C87.8666 18.1233 91.0863 14.9341 91.0863 11C91.0863 7.06586 87.8666 3.87664 83.8948 3.87664C79.9231 3.87664 76.7034 7.06586 76.7034 11C76.7034 14.9341 79.9231 18.1233 83.8948 18.1233ZM83.8948 21.9999C90.0281 21.9999 95 17.0751 95 11C95 4.92485 90.0281 0 83.8948 0C77.7616 0 72.7897 4.92485 72.7897 11C72.7897 17.0751 77.7616 21.9999 83.8948 21.9999Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Loader Line and Text */}
        <div className="h-[1px] flex items-center gap-2 w-[29%]">
          <div className="h-full w-[1%] loaderLine bg-white transition-all"></div>
          <p className="font-light text-[.9vw] loader-percentage">00%</p>
        </div>
      </div>
    </div>
  );
}
