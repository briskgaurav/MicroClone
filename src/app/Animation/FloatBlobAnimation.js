import { gsap } from "gsap";

export const animateFloatingBlobs = (elements, options = {}) => {
  const {
    yRange = [-50, 50],
    xRange = [-50, 50], 
    durationRange = [1, 3],
    ease = "sine.inOut"
  } = options;

  elements.forEach((_, index) => {
    // Generate random initial positions within ranges
    const startY = gsap.utils.random(yRange[0], yRange[1]);
    const startX = gsap.utils.random(xRange[0], xRange[1]);
    const duration = gsap.utils.random(durationRange[0], durationRange[1]);

    // Create seamless loop by animating to same position
    gsap.to(`.${elements[index]}`, {
      y: startY,
      x: startX,
      duration: duration,
      ease: ease,
      repeat: -1,
      yoyo: true,
      // Ensure smooth transition between loops
      repeatRefresh: false
    });
  });
};