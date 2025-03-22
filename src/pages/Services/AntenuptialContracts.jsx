import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
import useServiceAnimations from '../../hooks/useServiceAnimations';

const AntenuptialContracts = () => {
  // Get animation refs and functions from the custom hook
  const { pageRef, headerRef, contentRef, addToSectionsRef } = useServiceAnimations();

  return (
    <div className="service-detail-page" ref={pageRef}>
      <div className="service-detail-header" ref={headerRef}>
        <div className="container">
          <h1>Antenuptial Contracts</h1>
          <p className="service-detail-intro">
            We provide advice and draft the necessary documentation for antenuptial contracts to protect your assets and establish clear financial arrangements before marriage.
          </p>
        </div>
      </div>

      <div className="service-detail-content" ref={contentRef}>
        <div className="container">
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>About Antenuptial Contracts</h2>
            <p>
              An Antenuptial Contract (ANC) is a legal agreement entered into by couples before their marriage 
              that determines the property regime that will apply to their marriage. In South Africa, if you 
              don't sign an antenuptial contract before getting married, your marriage will automatically be 
              in community of property.
            </p>
            <p>
              Our experienced attorneys specialize in drafting antenuptial contracts that protect your assets 
              and establish clear financial arrangements, giving you peace of mind as you enter into marriage.
            </p>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>Types of Marriage Contracts</h2>
            <p>
              In South Africa, there are three main matrimonial property regimes. We provide expert advice 
              on all options to help you choose the most suitable arrangement for your circumstances.
            </p>
            
            <div className="service-features">
              <div className="service-feature">
                <h3>Marriage In Community of Property</h3>
                <p>This is the default regime if no antenuptial contract is signed. All assets and liabilities 
                of both spouses are combined into a joint estate, with each spouse owning an undivided half share.</p>
              </div>
              
              <div className="service-feature">
                <h3>Marriage Out of Community of Property Without Accrual</h3>
                <p>Each spouse retains their own separate estate, with complete separation of assets and liabilities 
                acquired before and during the marriage. This requires an antenuptial contract.</p>
              </div>
              
              <div className="service-feature">
                <h3>Marriage Out of Community of Property With Accrual</h3>
                <p>Each spouse retains their own separate estate, but the growth in their estates during the marriage 
                is shared equally upon dissolution of the marriage. This is the default for antenuptial contracts 
                unless specifically excluded.</p>
              </div>
            </div>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>Our Antenuptial Contract Process</h2>
            <p>
              Our process for drafting and registering antenuptial contracts is designed to be straightforward 
              and efficient, ensuring that your contract is properly executed before your marriage.
            </p>
            <ol>
              <li>Initial consultation to discuss your needs and explain the different matrimonial property regimes</li>
              <li>Advice on the most suitable regime based on your circumstances</li>
              <li>Drafting of the antenuptial contract according to your requirements</li>
              <li>Review of the draft contract with you to ensure it meets your needs</li>
              <li>Execution of the contract before a notary public (must be done before the marriage)</li>
              <li>Registration of the contract at the Deeds Office within three months of execution</li>
              <li>Provision of the registered contract for your records</li>
            </ol>
            <p>
              <strong>Important Note:</strong> An antenuptial contract must be signed before a notary public 
              before the marriage takes place. It cannot be entered into after the marriage without a court order.
            </p>
          </div>
          
          <div className="service-cta">
            <h2>Planning to Get Married?</h2>
            <p>
              Contact our office today to schedule a consultation about your antenuptial contract. 
              Our experienced attorneys will guide you through the process and ensure that your 
              financial interests are protected as you begin your married life.
            </p>
            <Link to="/contact" className="cta-button">
              Contact Us
            </Link>
          </div>
          
          <Link to="/services" className="back-to-services">
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AntenuptialContracts;