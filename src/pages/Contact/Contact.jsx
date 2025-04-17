import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFax, FaExternalLinkAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // Create refs for animated elements
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const mapRef = useRef(null);
  
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
    
    // Simple animation for contact info and form
    gsap.fromTo(
      ".contact-info, .contact-form",
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.7, 
        stagger: 0.2, 
        ease: "power2.out",
        delay: 0.6
      }
    );
    
    // Simple animation for map section
    gsap.fromTo(
      mapRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.8 }
    );
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // In a real application, you would send the form data to your backend here
  };

  return (
    <div className="contact-page" ref={pageRef}>
      <div className="contact-header" ref={headerRef}>
        <div className="container">
          <h1>Contact Us</h1>
          <p className="contact-intro">
            Get in touch with Harvey Nortje Attorneys. We're here to help with your inquiries.
          </p>
        </div>
      </div>
      
      <div className="contact-content" ref={contentRef}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Emalahleni (Witbank)</h2>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaPhone aria-hidden="true" />
                </div>
                <div className="contact-details">
                  <h3>Phone Number</h3>
                  <p><a href="tel:+27136562161">(013) 656 2161</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaFax aria-hidden="true" />
                </div>
                <div className="contact-details">
                  <h3>Fax</h3>
                  <p>(013) 656 0842</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope aria-hidden="true" />
                </div>
                <div className="contact-details">
                  <h3>Email Address</h3>
                  <p><a href="mailto:info@harveynortje.co.za">info@harveynortje.co.za</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaMapMarkerAlt aria-hidden="true" />
                </div>
                <div className="contact-details">
                  <h3>Physical Address</h3>
                  <p>1st Floor WCMAS Building, C/o OR Tambo & Susanna Street, Emalahleni (Witbank) 1035</p>
                  <a 
                    href="https://maps.google.com/?q=WCMAS+Building+OR+Tambo+Susanna+Street+Emalahleni" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="map-link"
                    aria-label="View office location on Google Maps (opens in new tab)"
                  >
                    View Map <FaExternalLinkAlt style={{ fontSize: '0.8em', marginLeft: '3px' }} aria-hidden="true" />
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope aria-hidden="true" />
                </div>
                <div className="contact-details">
                  <h3>Postal Address</h3>
                  <p>PO Box 61, Emalahleni (Witbank), South Africa, 1035</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaClock aria-hidden="true" />
                </div>
                <div className="contact-details">
                  <h3>Office Hours</h3>
                  <p>Monday - Thursday: 07h30 - 16h30<br />Fridays: 07h30 - 15h30</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope aria-hidden="true" />
                </div>
                <div className="contact-details">
                  <h3>Docex</h3>
                  <p>Docex 5, Emalahleni (Witbank)</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              
              {formStatus.submitted && (
                <div className={`form-feedback ${formStatus.success ? 'success' : 'error'}`} role="alert">
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="map-section" ref={mapRef}>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1234567890123!2d29.2345678!3d-25.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDUyJzM1LjYiUyAyOcKwMTQnMDQuNCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Harvey Nortje Attorneys Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;