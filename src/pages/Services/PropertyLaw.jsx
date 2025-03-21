import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const PropertyLaw = () => {
  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <div className="container">
          <h1>Property Law and Conveyancing</h1>
          <p className="service-detail-intro">
            Conveyancing deals with inter alia the transfer of ownership of land from one person to another.
          </p>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <div className="service-detail-section">
            <h2>Our firm renders the following services:</h2>
            
            <ul className="service-list">
              <li>
                <h3>Advice on and drafting of Contracts of Purchase / Deeds of Sale including:</h3>
                <ul className="sub-list">
                  <li>Houses</li>
                  <li>Farms</li>
                  <li>Small Holdings</li>
                  <li>Sectional Title Units</li>
                  <li>Business Premises</li>
                  <li>or any other immovable property</li>
                </ul>
              </li>
              
              <li>Registration of Transfers, Bonds, Bond Cancellations</li>
              
              <li>Opening of Sectional Title Registers together with the transfer of units to end-users.</li>
              
              <li>Cluster Developments</li>
              
              <li>Sub-divisions and Consolidations</li>
              
              <li>Affordable Housing and Leasehold Transfers</li>
              
              <li>Servitudes, Notarial Bonds, Notarial Deeds and Ante-nuptial Contracts (also see Notarial Practice) and all matters relating to the above</li>
              
              <li>Deceased Estate Transfers</li>
              
              <li>Divorce Transfers</li>
              
              <li>Substitution of Debtors</li>
              
              <li>
                <h3>We are on the panels of:</h3>
                <ul className="sub-list">
                  <li>Standard Bank of SA Limited</li>
                  <li>First National Bank</li>
                  <li>First National Bank Commercial</li>
                  <li>Absa Bank Limited</li>
                  <li>Nedbank Limited</li>
                  <li>Eskom Finance Company SOC Limited</li>
                </ul>
              </li>
            </ul>
            
            <div className="document-link">
              <Link target='_blank' to="https://harveynortje.co.za/images/pdf/flow-chart-transfer-process.pdf" className="document-button">
                View our Transfer Process Flow Chart
              </Link>
            </div>
          </div>
          
          <div className="service-detail-cta">
            <h2>Need assistance with property law matters?</h2>
            <p>
              Our experienced team of attorneys is ready to help you with your property transactions and conveyancing needs.
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

export default PropertyLaw;