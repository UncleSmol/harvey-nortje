import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const Commercial = () => {
  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <div className="container">
          <h1>Commercial</h1>
          <p className="service-detail-intro">
            We render advice and assist our clients with negotiating and drafting agreements 
            relating to various Commercial and Corporate transactions.
          </p>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <div className="service-detail-section">
            <h2>We render advice on and assist with:</h2>
            
            <ul className="service-list">
              <li>
                <h3>Drafting of Lease Agreements in respect of:</h3>
                <ul className="sub-list">
                  <li>Houses (furnished / unfurnished)</li>
                  <li>Farms</li>
                  <li>Small Holdings</li>
                  <li>Sectional Title Units (furnished / unfurnished)</li>
                  <li>Business premises</li>
                </ul>
              </li>
              
              <li>Drafting of Agreements in respect of the sale or letting of movable property</li>
              
              <li>
                <h3>Drafting of Agreements in respect of the sale of:</h3>
                <ul className="sub-list">
                  <li>Member's Interest in Close Corporations</li>
                  <li>Shares in Companies</li>
                  <li>Businesses</li>
                </ul>
              </li>
              
              <li>Acknowledgement of Debt, Suretyships, Special and/or General Powers of Attorney</li>
              
              <li>Establishment and Dissolution of Companies, Close Corporations, Trusts and Partnerships</li>
            </ul>
          </div>
          
          <div className="service-detail-cta">
            <h2>Need assistance with commercial legal matters?</h2>
            <p>
              Our experienced team of attorneys is ready to help you with your commercial legal needs.
              Contact us today to schedule a consultation.
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

export default Commercial;