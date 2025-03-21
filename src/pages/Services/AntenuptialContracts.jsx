import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const AntenuptialContracts = () => {
  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <div className="container">
          <h1>Antenuptial Contracts</h1>
          <p className="service-detail-intro">
            We provide advice and draft the necessary documentation for antenuptial contracts to protect your assets and establish clear financial arrangements before marriage.
          </p>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <div className="service-detail-section">
            <h2>Our Antenuptial Contract Services Include:</h2>
            
            <ul className="service-list">
              <li>Consultation and advice on matrimonial property regimes</li>
              <li>Drafting of customized antenuptial contracts</li>
              <li>Explanation of the legal implications of different contract options</li>
              <li>Registration of antenuptial contracts with the Deeds Office</li>
              <li>Advice on protecting business interests and assets</li>
              <li>Guidance on postnuptial contracts where applicable</li>
            </ul>
            
            <div className="info-box">
              <h3>Why You Need an Antenuptial Contract</h3>
              <p>
                In South Africa, couples who marry without an antenuptial contract are automatically married in community of property. 
                This means all assets and liabilities are shared equally, regardless of when or how they were acquired. 
                An antenuptial contract allows you to keep your assets separate and protect yourself from your spouse's debts.
              </p>
            </div>
          </div>
          
          <div className="service-detail-cta">
            <h2>Planning to get married?</h2>
            <p>
              Our experienced attorneys can help you draft an antenuptial contract that protects your interests.
              Contact us today to schedule a consultation and secure your financial future.
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

export default AntenuptialContracts;