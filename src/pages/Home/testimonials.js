/**
 * Testimonials Carousel Functionality
 * This script handles the testimonial carousel navigation and scrolling
 */

// Add this script to your project and import it in your Home component

// Function to scroll to a specific testimonial
export function scrollToTestimonial(index) {
  const carousel = document.querySelector('.testimonials-carousel');
  if (!carousel) return;
  
  const testimonials = carousel.querySelectorAll('.testimonial');
  if (index >= testimonials.length) index = 0;
  if (index < 0) index = testimonials.length - 1;
  
  // Update active dot
  const dots = document.querySelectorAll('.testimonial-nav-dot');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
  
  // Scroll to the testimonial
  testimonials[index].scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start'
  });
}

// Function to navigate to previous or next testimonial
export function navigateTestimonial(direction) {
  const carousel = document.querySelector('.testimonials-carousel');
  if (!carousel) return;
  
  const dots = document.querySelectorAll('.testimonial-nav-dot');
  let activeIndex = Array.from(dots).findIndex(dot => dot.classList.contains('active'));
  
  if (activeIndex === -1) activeIndex = 0;
  
  if (direction === 'next') {
    scrollToTestimonial(activeIndex + 1);
  } else if (direction === 'prev') {
    scrollToTestimonial(activeIndex - 1);
  }
}

// Function to initialize the testimonial carousel
export function initTestimonialCarousel() {
  // Set the first testimonial as active on page load
  scrollToTestimonial(0);
  
  // Optional: Auto-rotate testimonials
  let testimonialInterval;
  
  function startAutoRotate() {
    testimonialInterval = setInterval(() => {
      navigateTestimonial('next');
    }, 5000); // Change testimonial every 5 seconds
  }
  
  function stopAutoRotate() {
    clearInterval(testimonialInterval);
  }
  
  // Start auto-rotation
  startAutoRotate();
  
  // Pause rotation when user interacts with carousel
  const carousel = document.querySelector('.testimonials-container');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoRotate);
    carousel.addEventListener('mouseleave', startAutoRotate);
    carousel.addEventListener('touchstart', stopAutoRotate, { passive: true });
    carousel.addEventListener('touchend', startAutoRotate);
  }
  
  // Clean up on unmount (if using in a React component)
  return () => {
    stopAutoRotate();
    if (carousel) {
      carousel.removeEventListener('mouseenter', stopAutoRotate);
      carousel.removeEventListener('mouseleave', startAutoRotate);
      carousel.removeEventListener('touchstart', stopAutoRotate);
      carousel.removeEventListener('touchend', startAutoRotate);
    }
  };
}