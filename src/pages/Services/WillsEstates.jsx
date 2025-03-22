import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
import useServiceAnimations from '../../hooks/useServiceAnimations';

const WillsEstates = () => {
  // Get animation refs and functions from the custom hook
  const { pageRef, headerRef, contentRef, addToSectionsRef } = useServiceAnimations();

  return (
    <div className="service-detail-page" ref={pageRef}>
      <div className="service-detail-header" ref={headerRef}>
        <div className="container">
          <h1>Wills and Administration of Estates</h1>
          <p className="service-detail-intro">
            We render advice and assist our clients with the drafting of their Wills. Administration of Estates, deals with the process, culminating in the winding-up of a deceased person's estate.
          </p>
        </div>
      </div>

      <div className="service-detail-content" ref={contentRef}>
        <div className="container">
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>About Wills and Estates</h2>
            <p>
              Estate planning and administration are crucial aspects of ensuring that your assets are 
              distributed according to your wishes after your passing. A properly drafted Will provides 
              peace of mind that your loved ones will be taken care of and your estate will be administered 
              efficiently.
            </p>
            <p>
              Our Wills and Estates Department specializes in providing comprehensive services for both 
              estate planning and the administration of deceased estates. We guide clients through these 
              often complex processes with sensitivity and professional expertise.
            </p>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>Our Wills and Estates Services</h2>
            <p>
              We offer a range of services related to Wills and the administration of estates, tailored 
              to meet the individual needs of our clients. Our experienced team ensures that all legal 
              requirements are met while providing compassionate support during difficult times.
            </p>
            
            <div className="service-features">
              <div className="service-feature">
                <h3>Will Drafting</h3>
                <p>Professional drafting of Wills that clearly express your wishes regarding the distribution 
                of your assets, appointment of executors, and guardianship of minor children.</p>
              </div>
              
              <div className="service-feature">
                <h3>Estate Planning</h3>
                <p>Comprehensive estate planning services, including advice on minimizing estate duty, 
                structuring your estate for efficient administration, and planning for business succession.</p>
              </div>
              
              <div className="service-feature">
                <h3>Deceased Estate Administration</h3>
                <p>Complete administration of deceased estates, from reporting the estate to the Master 
                of the High Court to the final distribution of assets to heirs.</p>
              </div>
              
              <div className="service-feature">
                <h3>Testamentary Trusts</h3>
                <p>Establishment and administration of testamentary trusts created in terms of a Will, 
                providing for the management of assets for beneficiaries who are minors or require 
                special arrangements.</p>
              </div>
            </div>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>The Estate Administration Process</h2>
            <p>
              The administration of a deceased estate involves several important steps that must be 
              completed in accordance with legal requirements. Our team guides executors and heirs 
              through this process:
            </p>
            <ol>
              <li>Reporting the estate to the Master of the High Court</li>
              <li>Appointment of an executor</li>
              <li>Collection and valuation of assets</li>
              <li>Settlement of debts and liabilities</li>
              <li>Preparation and submission of the liquidation and distribution account</li>
              <li>Distribution of assets to heirs</li>
              <li>Finalization and closure of the estate</li>
            </ol>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
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
