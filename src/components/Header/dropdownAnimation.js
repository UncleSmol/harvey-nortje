import { gsap } from 'gsap';

// Show dropdown animation
export const showDropdown = (element) => {
  if (!element) return;
  
  // Make sure we start with correct initial state
  gsap.set(element, {
    display: 'block',
    opacity: 0,
    y: 15,
    transformOrigin: 'top center'
  });
  
  // Kill any ongoing animations
  gsap.killTweensOf(element);
  
  // Animate dropdown appearing
  return gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    ease: 'power2.out'
  });
};

// Hide dropdown animation
export const hideDropdown = (element, onComplete) => {
  if (!element) return;
  
  // Kill any ongoing animations
  gsap.killTweensOf(element);
  
  // Animate dropdown disappearing
  return gsap.to(element, {
    opacity: 0,
    y: 15,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      gsap.set(element, { display: 'none' });
      if (onComplete) onComplete();
    }
  });
};

// Handle hover effects
export const handleHoverAnimation = (element, isEntering) => {
  if (!element || window.innerWidth < 992) return;
  
  gsap.to(element, {
    y: isEntering ? -3 : 0,
    duration: 0.3,
    ease: 'power2.out'
  });
};
