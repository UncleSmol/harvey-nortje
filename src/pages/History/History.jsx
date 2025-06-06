import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './History.css';

const History = () => {
  // Create refs for animated elements
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  
  useEffect(() => {
    // Simple fade-in animation for the entire page
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    
    // Simple animation for header
    gsap.fromTo(
      headerRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );
    
    // Simple animation for content
    gsap.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.4 }
    );
    
    // Staggered animation for timeline items
    gsap.fromTo(
      ".timeline-item",
      { x: -30, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.7, 
        stagger: 0.2, 
        ease: "power2.out",
        delay: 0.6
      }
    );
    
    // Animation for values section
    gsap.fromTo(
      valuesRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.8 }
    );
    
    // Staggered animation for value cards
    gsap.fromTo(
      ".value-card",
      { y: 20, opacity: 0, scale: 0.95 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.6, 
        stagger: 0.15, 
        ease: "back.out(1.2)",
        delay: 1
      }
    );
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="history-page" ref={pageRef}>
      <div className="history-header" ref={headerRef}>
        <div className="container">
          <h1>Since 1908</h1>
          <p className="history-intro">
            Learn about our rich history and heritage dating back to 1908.
          </p>
        </div>
      </div>

      <div className="history-content" ref={contentRef}>
        <div className="container">
          <div className="history-section">
            <div className="history-text">
              <p>
                One of our main focuses is to maintain Sound Client Relationships built on trust and confidentiality, 
                and to be experienced by our clients and partners as an accessible firm that will do everything in 
                its power to meet the individual needs of all our clients.
              </p>
              
              <p>
                The firm was established in 1908 in Witbank, Mpumalanga under the name of A E Harvey, and has 
                since grown to a well established law firm.
              </p>
              
              <p>
                With offices situated in Emalahleni (Witbank), Mpumalanga, together with our national network 
                of partners, we are able to render our services to clients country wide.
              </p>
              
              <p>
                We consist of a team of motivated and competent personnel who display a splendid team spirit 
                based on mutual respect and trust, which enables us to provide excellent service to all our clients.
              </p>
            </div>
            
            <div className="history-timeline" ref={timelineRef}>
              <div className="timeline-item">
                <div className="timeline-year">1908</div>
                <div className="timeline-content">
                  <h3>Establishment</h3>
                  <p>Firm established in Witbank, Mpumalanga under the name of A E Harvey</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1950s</div>
                <div className="timeline-content">
                  <h3>Growth Period</h3>
                  <p>Expansion of services and client base throughout Mpumalanga</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1980s</div>
                <div className="timeline-content">
                  <h3>Partnership Formation</h3>
                  <p>Evolution into Harvey Nortje Attorneys with expanded legal expertise</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">Today</div>
                <div className="timeline-content">
                  <h3>Modern Practice</h3>
                  <p>A well-established law firm with a national network of partners</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="history-values" ref={valuesRef}>
            <h2>Our Core Values</h2>
            
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">⚖️</div>
                <h3>Integrity</h3>
                <p>Upholding the highest ethical standards in all our dealings</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Trust</h3>
                <p>Building lasting relationships based on mutual trust and confidentiality</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">👥</div>
                <h3>Accessibility</h3>
                <p>Remaining approachable and responsive to all our clients' needs</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">✨</div>
                <h3>Excellence</h3>
                <p>Striving for excellence in every aspect of our legal services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
