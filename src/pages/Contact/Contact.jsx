import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="contact-intro">
            Get in touch with Harvey Nortje Attorneys. We're here to help with your inquiries.
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <h2>Emalahleni (Witbank)</h2>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="label">Tel:</span>
                    <a href="tel:+27136562161" className="value">(013) 656 2161</a>
                  </div>
                  
                  <div className="contact-item">
                    <span className="label">Fax:</span>
                    <span className="value">(013) 656 0842</span>
                  </div>
                  
                  <div className="contact-item">
                    <span className="label">E-Mail:</span>
                    <a href="mailto:info@harveynortje.co.za" className="value">info@harveynortje.co.za</a>
                  </div>
                  
                  <div className="contact-item">
                    <span className="label">Docex:</span>
                    <span className="value">Docex 5, Emalahleni (Witbank)</span>
                  </div>
                </div>
                
                <div className="address-section">
                  <h3>Physical Address:</h3>
                  <p>1st Floor WCMAS Building, C/o OR Tambo & Susanna Street, Emalahleni (Witbank) 1035</p>
                  <a href="https://maps.google.com/?q=WCMAS+Building+OR+Tambo+Susanna+Street+Emalahleni" target="_blank" rel="noopener noreferrer" className="map-link">
                    View Map
                  </a>
                </div>
                
                <div className="address-section">
                  <h3>Postal Address:</h3>
                  <p>PO Box 61, Emalahleni (Witbank), South Africa, 1035</p>
                </div>
                
                <div className="hours-section">
                  <h3>Office Hours:</h3>
                  <div className="hours-item">
                    <span className="day">Monday - Thursday:</span>
                    <span className="time">07h30 - 16h30</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Fridays:</span>
                    <span className="time">07h30 - 15h30</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-section">
              <div className="contact-card">
                <h2>Send Us a Message</h2>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1234567890123!2d29.2345678!3d-25.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDUyJzM1LjYiUyAyOcKwMTQnMDQuNCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Harvey Nortje Attorneys Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
