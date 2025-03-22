import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useServiceAnimations = () => {
  // Refs for animated elements
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);
  
  // Add to sections ref array
  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  
  useEffect(() => {
    // Page entrance animation
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );
    
    // Content container animation
    gsap.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.4 }
    );
    
    // Staggered animation for sections
    gsap.fromTo(
      sectionsRef.current,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power2.out",
        delay: 0.6
      }
    );
    
    // Feature items animation
    gsap.fromTo(
      ".service-feature",
      { y: 20, opacity: 0, scale: 0.95 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.6, 
        stagger: 0.15, 
        ease: "back.out(1.2)",
        delay: 0.8
      }
    );
    
    // CTA section animation
    gsap.fromTo(
      ".service-cta",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 1 }
    );
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return {
    pageRef,
    headerRef,
    contentRef,
    addToSectionsRef
  };
};

export default useServiceAnimations;