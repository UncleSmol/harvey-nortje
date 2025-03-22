import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Services.css';

const Services = () => {
  // Refs for animated elements
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const servicesGridRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Function to limit text to a specific number of words to fit in 4 lines
  const limitWords = (text, maxWords = 30) => {
    const words = text.split(' ');
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
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
    
    // Staggered animation for service cards
    gsap.fromTo(
      ".service-card",
      { y: 30, opacity: 0, scale: 0.95 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.6, 
        stagger: 0.1, 
        ease: "back.out(1.2)",
        delay: 0.4
      }
    );
    
    // CTA section animation
    gsap.fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.8 }
    );
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      id: 'commercial',
      title: 'Commercial',
      icon: '💼',
      description: 'We render advice and assist our clients with negotiating and drafting agreements relating to various Commercial and Corporate transactions.',
      link: '/services/commercial'
    },
    {
      id: 'property-law',
      title: 'Property Law and Conveyancing',
      icon: '🏡',
      description: 'Conveyancing deals with inter alia the transfer of ownership of land from one person to another.',
      link: '/services/property-law'
    },
    {
      id: 'notarial-services',
      title: 'Notarial Services',
      icon: '📜',
      description: 'Services pertaining to Notarial Practice – relates to the creation and/or transfer of real rights of land as well as the registration of Antenuptial Contracts.',
      link: '/services/notarial-services'
    },
    {
      id: 'wills-estates',
      title: 'Wills and Administration of Estates',
      icon: '📝',
      description: 'We render advice and assist our clients with the drafting of their Wills. Administration of Estates, deals with the process, culminating in the winding-up of a deceased person\'s estate.',
      link: '/services/wills-estates'
    },
    {
      id: 'litigation',
      title: 'Litigation',
      icon: '⚖️',
      description: '(High Court, Magistrate\'s Court, General & Commercial) Litigation generally refers to the process in terms whereof an Attorney institutes legal action against another person on behalf of his client, or alternatively where an Attorney defends his client against legal action so instituted.',
      link: '/services/litigation'
    },
    {
      id: 'antenuptial-contracts',
      title: 'Antenuptial Contracts',
      icon: '💍',
      description: 'We provide advice and draft the necessary documentation.',
      link: '/services/antenuptial-contracts'
    }
  ];

  return (
    <div className="services-page" ref={pageRef}>
      <div className="services-header" ref={headerRef}>
        <div className="container">
          <h1>Our Services</h1>
          <p className="services-intro">
            Harvey Nortje Attorneys offers a comprehensive range of legal services 
            tailored to meet the needs of individuals and businesses. With over a century 
            of combined experience, our team provides expert legal counsel across these 
            key practice areas.
          </p>
        </div>
      </div>

      <div className="services-content">
        <div className="container">
          <div className="services-grid" ref={servicesGridRef}>
            {serviceCategories.map((service) => (
              <div className="service-card" key={service.id} id={service.id}>
                <div className="service-icon">{service.icon}</div>
                <h2>{service.title}</h2>
                <p className="service-description">{limitWords(service.description)}</p>
                <Link to={service.link} className="more-info-button" aria-label={`More information about ${service.title}`}>
                  <span className="text">More Info</span>
                  <span className="icon">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="services-cta" ref={ctaRef}>
        <div className="container">
          <h2>Need Legal Assistance?</h2>
          <p>
            Our experienced team of attorneys is ready to help you with your legal needs.
            Contact us today to schedule a consultation.
          </p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
