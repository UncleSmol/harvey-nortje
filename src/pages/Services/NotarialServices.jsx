import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const NotarialServices = () => {
  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <div className="container">
          <h1>Notarial Services</h1>
          <p className="service-detail-intro">
            Services pertaining to Notarial Practice – relates to the creation and/or transfer of real rights of land as well as the registration of Antenuptial Contracts.
          </p>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <div className="service-detail-section">
            <h2>We render advice on and assist with the drafting of:</h2>
            
            <ul className="service-list">
              <li>Antenuptial Contracts</li>
              <li>Servitudes</li>
              <li>Execution of Prospecting / Mining Rights at the DMR, Emalahleni</li>
              <li>Notarial Bonds</li>
              <li>Cession of Exclusive Use</li>
              <li>and all matters relating thereto</li>
            </ul>
          </div>
          
          <div className="service-detail-cta">
            <h2>Need assistance with notarial services?</h2>
            <p>
              Our experienced notaries are ready to help you with antenuptial contracts, servitudes, 
              notarial bonds, and other notarial matters. Contact us today to schedule a consultation.
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

export default NotarialServices;