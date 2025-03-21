import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const Litigation = () => {
  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <div className="container">
          <h1>Litigation</h1>
          <p className="service-detail-intro">
            (High Court, Magistrate's Court, General & Commercial) Litigation generally refers to the process in terms whereof an Attorney institutes legal action against another person on behalf of his client, or alternatively where an Attorney defends his client against legal action so instituted.
          </p>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <div className="service-detail-section">
            <h2>We render the following services:</h2>
            
            <ul className="service-list">
              <li>Debt Collections</li>
              <li>Claims Resulting from personal injuries</li>
              <li>Divorces and maintenance matters</li>
              <li>Sequestrations, Liquidations and Rehabilitations</li>
              <li>General Lawsuits</li>
              <li>Motor Vehicle Accident Claims</li>
            </ul>
          </div>
          
          <div className="service-detail-cta">
            <h2>Need assistance with litigation matters?</h2>
            <p>
              Our experienced litigation attorneys can help you navigate complex legal disputes and represent your interests in court.
              Contact us today to schedule a consultation about your case.
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

export default Litigation;