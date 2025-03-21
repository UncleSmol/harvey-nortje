import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './TestimonialCarousel.css';

const testimonials = [
  {
    text: "I went in a stranger with a difficult case and Barry listened when everyone else passed the buck. He welcomed me in and helped me with the advice of a father or trusted friend. I will never be anxious with legal things again. Thank you Barry. You're a friend, a gentleman and a credit to your profession. God bless.",
    author: "Client",
    timeAgo: "4 years ago",
    highlights: ["Responsiveness", "Quality", "Professionalism", "Value"]
  },
  {
    text: "Azimah handled the bond registration of our house. They kept us up to date and were super effective in handling it. Would recommend them and would definitely use them again.",
    author: "Home Buyer",
    timeAgo: "4 years ago",
    highlights: ["Responsiveness", "Quality", "Professionalism", "Value"]
  },
  {
    text: "Best ever. New light was brought through my old window pane. Came depressed but left optimistic and excited",
    author: "Client",
    timeAgo: "4 years ago"
  },
  {
    text: "The service was excellent i was so excited to see the last signing of the agreement of buying a new home",
    author: "Home Buyer",
    timeAgo: "2 years ago"
  },
  {
    text: "Great lawyers who know what they are doing. The service and experience of their staff is nothing short of excellent",
    author: "Business Client",
    timeAgo: "2 years ago"
  },
  {
    text: "Attorneys of age in Witbank. From about 1906 when it began. Lawyers are lawyers i guess and its ones decision to decide should you want to use them.",
    author: "Local Resident",
    timeAgo: "2 years ago"
  },
  {
    text: "Very neat and easy to find. Professional and friendly",
    author: "Client",
    timeAgo: "2 years ago"
  },
  {
    text: "The staff is knowledgable and friendly. Always willing to assist.",
    author: "Client",
    timeAgo: "7 years ago"
  },
  {
    text: "They handled the sale of my house very efficiently and can be trusted",
    author: "Property Seller",
    timeAgo: "4 years ago"
  },
  {
    text: "Quick, friendly and efficient service.",
    author: "Client",
    timeAgo: "3 years ago"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const nextIndex = (currentIndex + 1) % testimonials.length;
    animateSlide(nextIndex);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    animateSlide(prevIndex);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    animateSlide(index);
  };

  const animateSlide = (newIndex) => {
    const testimonialElement = document.querySelector('.testimonial-content');
    
    gsap.to(testimonialElement, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.fromTo(
          testimonialElement,
          { opacity: 0, y: -20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.5,
            onComplete: () => setIsAnimating(false)
          }
        );
      }
    });
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000); // Change testimonial every 8 seconds
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-content">
        <div className="testimonial-quote">"</div>
        <p className="testimonial-text">{currentTestimonial.text}</p>
        
        <div className="testimonial-meta">
          <div className="testimonial-author">— {currentTestimonial.author}</div>
          <div className="testimonial-time">{currentTestimonial.timeAgo}</div>
        </div>
        
        {currentTestimonial.highlights && currentTestimonial.highlights.length > 0 && (
          <div className="testimonial-highlights">
            {currentTestimonial.highlights.map((highlight, index) => (
              <span key={index} className="highlight-tag">{highlight}</span>
            ))}
          </div>
        )}
      </div>
      
      <div className="testimonial-controls">
        <button 
          className="control-btn prev-btn" 
          onClick={goToPrev}
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          className="control-btn next-btn" 
          onClick={goToNext}
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;