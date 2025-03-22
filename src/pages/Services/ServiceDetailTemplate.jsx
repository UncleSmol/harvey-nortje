import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './ServiceDetail.css';

// This is a template component that can be used as a reference for all service detail pages
const ServiceDetailTemplate = () => {
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

  return (
    <div className="service-detail-page" ref={pageRef}>
      <div className="service-detail-header" ref={headerRef}>
        <div className="container">
          <h1>Service Title</h1>
          <p className="service-detail-intro">
            Brief description of the service that gives an overview of what it entails.
          </p>
        </div>
      </div>

      <div className="service-detail-content" ref={contentRef}>
        <div className="container">
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>About This Service</h2>
            <p>
              Detailed description of the service. Explain what the service is, why clients might need it,
              and how your firm approaches this area of law. This should be comprehensive enough to give
              potential clients a clear understanding of what to expect.
            </p>
            <p>
              Additional information about the service, perhaps including its importance, common scenarios
              where it's needed, or how it relates to other services you offer.
            </p>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>What We Offer</h2>
            <p>
              Overview of the specific offerings within this service category. This could include different
              types of contracts, different scenarios you handle, or different aspects of the legal process
              you assist with.
            </p>
            
            <div className="service-features">
              <div className="service-feature">
                <h3>Feature 1</h3>
                <p>Description of a specific aspect of the service that you provide.</p>
              </div>
              
              <div className="service-feature">
                <h3>Feature 2</h3>
                <p>Description of another specific aspect of the service that you provide.</p>
              </div>
              
              <div className="service-feature">
                <h3>Feature 3</h3>
                <p>Description of yet another specific aspect of the service that you provide.</p>
              </div>
            </div>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>Our Process</h2>
            <p>
              Explanation of how you typically handle cases in this area. This gives potential clients
              insight into what working with you would be like and what steps are involved.
            </p>
            <ol>
              <li>Initial consultation to understand client needs</li>
              <li>Research and preparation of necessary documents</li>
              <li>Review and refinement with client input</li>
              <li>Finalization and execution of legal processes</li>
              <li>Follow-up and ongoing support as needed</li>
            </ol>
          </div>
          
          <div className="service-cta">
            <h2>Ready to Get Started?</h2>
            <p>
              Contact us today to discuss your needs and how we can assist you with this service.
              Our experienced team is ready to provide the guidance and representation you need.
            </p>
            <Link to="/contact" className="cta-button">
              Contact Us
            </Link>
          </div>
          
          <Link to="/services" className="back-to-services">
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailTemplate;