import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const WillsEstates = () => {
  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <div className="container">
          <h1>Wills and Administration of Estates</h1>
          <p className="service-detail-intro">
            We render advice and assist our clients with the drafting of their Wills. Administration of Estates, deals with the process, culminating in the winding-up of a deceased person's estate.
          </p>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <div className="service-detail-section">
            <h2>We render the following services:</h2>
            
            <ul className="service-list">
              <li>Advice on the planning of estates</li>
              <li>Drafting of Wills and Trusts</li>
              <li>Administration of Deceased Estates</li>
              <li>Advice and assistance with financial planning</li>
            </ul>
          </div>
          
          <div className="service-detail-cta">
            <h2>Need assistance with wills or estate planning?</h2>
            <p>
              Our experienced attorneys can help you plan for the future and ensure your wishes are carried out.
              Contact us today to schedule a consultation about wills, trusts, or estate administration.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Contact Us
              </Link>
              <Link to="/services" className="cta-button secondary">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WillsEstates;