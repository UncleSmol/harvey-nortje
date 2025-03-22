import { gsap } from 'gsap';

// Show dropdown animation
export const showDropdown = (element) => {
  if (!element) return;
  
  // Make sure we start with correct initial state
  gsap.set(element, {
    display: 'block',
    opacity: 0,
    y: 15,
    transformOrigin: 'top center',
    pointerEvents: 'auto'
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
      gsap.set(element, { 
        display: 'none',
        pointerEvents: 'none'
      });
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

// Mobile menu animations
export const animateMobileMenuOpen = (menuRef, menuItems) => {
  // First, set the menu to visible
  gsap.set(menuRef, {
    display: 'block',
    right: '-300px' 
  });
  
  // Animate the menu sliding in
  gsap.to(menuRef, {
    right: 0,
    duration: 0.4, 
    ease: 'power3.inOut'
  });
  
  // Animate each menu item with a stagger effect
  gsap.fromTo(
    menuItems,
    { 
      x: 50,
      opacity: 0 
    },
    { 
      x: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 0.3,
      ease: 'power2.out',
      delay: 0.2
    }
  );
};

export const animateMobileMenuClose = (menuRef, onComplete) => {
  // Animate the menu sliding out
  gsap.to(menuRef, {
    right: window.innerWidth < 576 ? '-280px' : '-300px',
    duration: 0.4,
    ease: 'power3.inOut',
    onComplete: () => {
      if (onComplete) onComplete();
    }
  });
};

// Toggle mobile submenu animation
export const toggleMobileSubmenu = (submenuElement, isOpen) => {
  if (!submenuElement) return;
  
  if (isOpen) {
    gsap.set(submenuElement, { 
      display: 'block',
      height: 'auto'
    });
    
    const height = submenuElement.offsetHeight;
    
    gsap.fromTo(
      submenuElement,
      { 
        height: 0,
        opacity: 0
      },
      {
        height: height,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut'
      }
    );
  } else {
    gsap.to(submenuElement, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(submenuElement, { display: 'none' });
      }
    });
  }
};
