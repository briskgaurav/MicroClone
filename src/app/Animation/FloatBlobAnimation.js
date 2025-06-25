import { gsap } from "gsap";

export const animateFloatingBlobs = (elements, options = {}) => {
  const {
    yRange = [-50, 50],
    xRange = [-50, 50], 
    durationRange = [1, 3],
    ease = "sine.inOut"
  } = options;

  // Create a single timeline for better performance
  const tl = gsap.timeline();

  // Animate each blob in a random direction
  elements.forEach((element) => {
    const angle = gsap.utils.random(0, Math.PI * 2); // Random angle in radians
    const distance = gsap.utils.random(30, 80); // Random distance to travel
    
    // Calculate x and y offsets based on angle
    const xOffset = Math.cos(angle) * distance;
    const yOffset = Math.sin(angle) * distance;
    
    tl.to(`.${element}`, {
      x: xOffset,
      y: yOffset,
      duration: gsap.utils.random(durationRange[0], durationRange[1]),
      ease: ease,
      repeat: -1,
      yoyo: true,
      repeatRefresh: true // Refresh values on each repeat for more randomness
    }, 0);
  });

  return tl;
};