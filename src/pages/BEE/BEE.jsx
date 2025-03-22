import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './BEE.css';

const BEE = () => {
  // Create refs for animated elements
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const certificateRef = useRef(null);
  const commitmentRef = useRef(null);
  
  useEffect(() => {
    // Create a timeline for better control
    const tl = gsap.timeline();
    
    // Fade in the entire page
    tl.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    
    // Animate header from top
    tl.fromTo(
      headerRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      "-=0.4"
    );
    
    // Animate content section
    tl.fromTo(
      contentRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
      "-=0.3"
    );
    
    // Special animation for the BEE badge with bounce effect
    tl.fromTo(
      badgeRef.current,
      { scale: 0.5, opacity: 0, rotation: -15 },
      { 
        scale: 1, 
        opacity: 1, 
        rotation: 0,
        duration: 1, 
        ease: "elastic.out(1.2, 0.5)"
      },
      "-=0.2"
    );
    
    // Animate certificate button with slight bounce
    tl.fromTo(
      certificateRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.4)" },
      "-=0.6"
    );
    
    // Animate commitment section
    tl.fromTo(
      commitmentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
      "-=0.3"
    );
    
    // Animate list items one by one
    tl.fromTo(
      ".bee-commitment ul li",
      { x: -20, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.4, 
        stagger: 0.1, 
        ease: "power2.out"
      },
      "-=0.2"
    );
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bee-page" ref={pageRef}>
      <div className="bee-header" ref={headerRef}>
        <div className="container">
          <h1>BEE</h1>
          <p className="bee-intro">
            Black Economic Empowerment
          </p>
        </div>
      </div>

      <div className="bee-content" ref={contentRef}>
        <div className="container">
          <div className="bee-section">
            <div className="bee-info">
              <p>Our firm is committed to implement Black Economic Empowerment and is currently a <strong>Level 2 contributor</strong>.</p>
              
              <div className="certificate-link" ref={certificateRef}>
                <a href="https://harveynortje.co.za/images/2024/BEE/BEE_Sertifikaat_2024.pdf" target="_blank" rel="noopener noreferrer" className="certificate-button">
                  <span className="icon">📄</span>
                  <span className="text">View our Broad Based Black Economic Empowerment Certificate</span>
                </a>
              </div>
            </div>
            
            <div className="bee-badge" ref={badgeRef}>
              <div className="level-badge">
                <div className="level-number">2</div>
                <div className="level-text">BEE Level</div>
              </div>
            </div>
          </div>
          
          <div className="bee-commitment" ref={commitmentRef}>
            <h2>Our Commitment to Transformation</h2>
            <p>
              At Harvey Nortje Attorneys, we are dedicated to the principles of economic transformation and 
              empowerment in South Africa. Our Level 2 B-BBEE status reflects our ongoing commitment to:
            </p>
            <ul>
              <li>Promoting diversity and inclusion within our firm</li>
              <li>Supporting skills development and training initiatives</li>
              <li>Contributing to socio-economic development in our communities</li>
              <li>Implementing fair and equitable employment practices</li>
              <li>Engaging with and supporting black-owned businesses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BEE;
