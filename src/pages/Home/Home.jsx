import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';
import heroImage from '../../assets/slide1-accessible.jpg'; // Ensure this image is in your assets folder

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollTimerRef = useRef(null);
  
  // Refs for animations
  const heroRef = useRef(null);
  const covidBannerRef = useRef(null);
  const welcomeRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);
  const ctaRef = useRef(null);
  const testimonialsRef = useRef(null);
  const testimonialsArray = useRef([]);
  const testimonialContainerRef = useRef(null);

  // Array of testimonials from Google Maps
  const testimonials = [
    {
      text: "4 years ago I went in a stranger with a difficult case and Barry listened when everyone else passed the buck. He welcomed me in and helped me with the advice of a father or trusted friend. I will never be anxious with legal things again. Thank you Barry. You're a friend, a gentleman and a credit to your profession. God bless.",
      timeAgo: "4 years ago"
    },
    {
      text: "Azimah handled the bond registration of our house. They kept us up to date and were super effective in handling it. Would recommend them and would definitely use them again.",
      timeAgo: "4 years ago"
    },
    {
      text: "Best ever. New light was brought through my old window pane. Came depressed but left optimistic and excited",
      timeAgo: "4 years ago"
    },
    {
      text: "The service was excellent i was so excited to see the last signing of the agreement of buying a new home",
      timeAgo: "2 years ago"
    },
    {
      text: "Great lawyers who know what they are doing. The service and experience of their staff is nothing short of excellent",
      timeAgo: "2 years ago"
    },
    {
      text: "Attorneys of age in Witbank. From about 1906 when it began. Lawyers are lawyers i guess and its ones decision to decide should you want to use them.",
      timeAgo: "2 years ago"
    },
    {
      text: "Very neat and easy to find. Professional and friendly",
      timeAgo: "7 years ago"
    },
    {
      text: "The staff is knowledgable and friendly. Always willing to assist.",
      timeAgo: "a year ago"
    },
    {
      text: "The food was good and the activities were the best",
      timeAgo: "4 years ago"
    },
    {
      text: "They handled the sale of my house very efficiently and can be trusted",
      timeAgo: "2 years ago"
    }
  ];

  // Auto-scroll functionality - defined as a React callback to avoid dependency issues
  const startAutoScroll = useCallback(() => {
    // Clear any existing timer
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }
    
    // Set up a new timer
    autoScrollTimerRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }
    }, 8000); // 8 seconds
  }, [isPaused, testimonials.length]);

  // Testimonial navigation functions
  const navigateTestimonial = (direction) => {
    // Clear the auto-scroll timer when manually navigating
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }
    
    if (direction === 'next') {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
    
    // Restart auto-scroll after manual navigation
    startAutoScroll();
  };

  const scrollToTestimonial = (index) => {
    // Clear the auto-scroll timer when manually navigating
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }
    
    setCurrentTestimonial(index);
    
    // Restart auto-scroll after manual navigation
    startAutoScroll();
  };

  useEffect(() => {
    // Initial animations on page load
    const tl = gsap.timeline();
    
    // COVID banner animation
    tl.fromTo(
      covidBannerRef.current, 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    
    // Hero section animation
    tl.fromTo(
      heroRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.4" // Slightly overlap with previous animation
    );
    
    // Welcome heading animation
    tl.fromTo(
      welcomeRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.2)" },
      "-=0.2"
    );
    
    // Staggered paragraph animations
    tl.fromTo(
      [paragraph1Ref.current, paragraph2Ref.current, paragraph3Ref.current],
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3, duration: 0.7, ease: "power2.out" },
      "-=0.3"
    );
    
    // CTA button animation
    tl.fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.1"
    );
    
    // Scroll-triggered animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element, i) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Clear auto-scroll timer on unmount
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, []);

  // Initialize testimonials
  useEffect(() => {
    // Hide all testimonials except the first one
    testimonialsArray.current.forEach((testimonial, index) => {
      if (index !== 0) {
        gsap.set(testimonial, { opacity: 0, display: 'none' });
      }
    });
    
    // Start auto-scrolling
    startAutoScroll();
    
    // Add event listeners for pausing on hover/focus
    const container = testimonialContainerRef.current;
    if (container) {
      container.addEventListener('mouseenter', () => setIsPaused(true));
      container.addEventListener('mouseleave', () => setIsPaused(false));
      container.addEventListener('focusin', () => setIsPaused(true));
      container.addEventListener('focusout', () => setIsPaused(false));
    }
    
    // Cleanup
    return () => {
      if (container) {
        container.removeEventListener('mouseenter', () => setIsPaused(true));
        container.removeEventListener('mouseleave', () => setIsPaused(false));
        container.removeEventListener('focusin', () => setIsPaused(true));
        container.removeEventListener('focusout', () => setIsPaused(false));
      }
      
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [startAutoScroll]);

  // Handle testimonial transitions with GSAP
  useEffect(() => {
    if (testimonialsArray.current.length > 0) {
      // Create a timeline for smooth transition
      const tl = gsap.timeline();
      
      // Fade out current testimonial
      testimonialsArray.current.forEach((testimonial, index) => {
        if (index !== currentTestimonial) {
          tl.to(testimonial, { 
            opacity: 0, 
            duration: 0.5, 
            ease: "power2.out",
            onComplete: () => {
              // Hide the testimonial after fade out
              gsap.set(testimonial, { display: 'none' });
            }
          }, 0); // Start at the same time
        }
      });
      
      // Show and fade in the new testimonial
      tl.set(testimonialsArray.current[currentTestimonial], { 
        display: 'block' 
      }, 0.3);
      
      tl.to(testimonialsArray.current[currentTestimonial], { 
        opacity: 1, 
        duration: 0.7, 
        ease: "power2.inOut" 
      }, 0.3);
    }
  }, [currentTestimonial]);

  // Add testimonial elements to the ref array
  const addToTestimonialsRefs = (el) => {
    if (el && !testimonialsArray.current.includes(el)) {
      testimonialsArray.current.push(el);
    }
  };

  return (
    <div className="home-page">
      {/* COVID-19 Banner */}
      <div className="covid-banner" ref={covidBannerRef}>
        <span>Click here for official </span>
        <Link to="/covid">Covid-19 Information & Updates</Link>
      </div>
      
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-overlay"></div>
        <img src={heroImage} alt="Harvey Nortje Attorneys Office" className="hero-image" />
        <div className="hero-content">
          <h1>Harvey Nortje Attorneys</h1>
          <p>Trusted Legal Services Since 1908</p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <h2 ref={welcomeRef}>Welcome to Harvey Nortje Attorneys</h2>
          
          <div className="content-columns">
            <div className="column">
              <p ref={paragraph1Ref}>
                One of our main focuses is to maintain Sound Client Relationships built on trust and confidentiality, and to be experienced by our clients and partners as an accessible firm that will do everything in its power to meet the individual needs of all our clients.
              </p>
              
              <p ref={paragraph2Ref}>
                The firm was established in 1908 in Emalahleni, Mpumalanga under the name of A E Harvey, and has since grown to a well established law firm.
              </p>
            </div>
            
            <div className="column animate-on-scroll">
              <div className="fact-card">
                <div className="fact-number">115+</div>
                <div className="fact-label">Years of Excellence</div>
              </div>
              
              <div className="fact-divider"></div>
              
              <div className="fact-card">
                <div className="fact-number">Nationwide</div>
                <div className="fact-label">Legal Services</div>
              </div>
            </div>
          </div>
          
          <p ref={paragraph3Ref}>
            With offices situated in Emalahleni (Emalahleni), Mpumalanga together with our national network of partners, we are able to render our services to clients country wide. We consist of a team of motivated and competent personnel who display a splendid team spirit based on mutual respect and trust, which enables us to provide excellent service to all our clients.
          </p>
          
          <div className="cta-container" ref={ctaRef}>
            <Link to="/contact" className="cta-button">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="services-overview animate-on-scroll">
        <div className="container">
          <h2>Our Legal Services</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚖️</div>
              <h3>Corporate Law</h3>
              <p>Expert guidance for businesses of all sizes</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🏡</div>
              <h3>Property Law</h3>
              <p>Handling all property-related legal matters</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">👪</div>
              <h3>Family Law</h3>
              <p>Compassionate support for family legal issues</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📝</div>
              <h3>Contract Law</h3>
              <p>Ensuring your agreements are legally sound</p>
            </div>
          </div>
          
          <div className="more-services">
            <Link to="/services">View All Services</Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="testimonial-section animate-on-scroll" ref={testimonialsRef}>
        <div className="container">
          <h2>What Our Clients Say</h2>
          
          <div className="testimonials-container" ref={testimonialContainerRef}>
            {/* Use a wrapper div with overflow hidden to prevent the carousel from affecting layout */}
            <div className="testimonials-wrapper">
              <div className="testimonials-carousel">
                {testimonials.map((testimonial, index) => (
                  <div 
                    className="testimonial" 
                    key={index}
                    ref={addToTestimonialsRefs}
                  >
                    <div className="testimonial-quote">"</div>
                    <p className="testimonial-text">
                      {testimonial.text}
                    </p>
                    <div className="testimonial-time">{testimonial.timeAgo}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="testimonial-nav">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  className={`testimonial-nav-dot ${currentTestimonial === index ? 'active' : ''}`} 
                  onClick={() => scrollToTestimonial(index)}
                ></div>
              ))}
            </div>
            
            <div className="testimonial-arrows">
              <div className="testimonial-arrow testimonial-arrow-left" onClick={() => navigateTestimonial('prev')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </div>
              <div className="testimonial-arrow testimonial-arrow-right" onClick={() => navigateTestimonial('next')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
