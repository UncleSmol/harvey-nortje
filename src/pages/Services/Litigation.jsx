import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
import useServiceAnimations from '../../hooks/useServiceAnimations';

const Litigation = () => {
  // Get animation refs and functions from the custom hook
  const { pageRef, headerRef, contentRef, addToSectionsRef } = useServiceAnimations();

  return (
    <div className="service-detail-page" ref={pageRef}>
      <div className="service-detail-header" ref={headerRef}>
        <div className="container">
          <h1>Litigation</h1>
          <p className="service-detail-intro">
            (High Court, Magistrate's Court, General & Commercial) Litigation generally refers to the process in terms whereof an Attorney institutes legal action against another person on behalf of his client, or alternatively where an Attorney defends his client against legal action so instituted.
          </p>
        </div>
      </div>

      <div className="service-detail-content" ref={contentRef}>
        <div className="container">
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>About Our Litigation Services</h2>
            <p>
              Our Litigation Department specializes in representing clients in legal disputes across a wide 
              range of matters. We understand that litigation can be stressful and complex, which is why our 
              experienced litigators provide strategic guidance and strong advocacy to protect your interests.
            </p>
            <p>
              Whether you need to initiate legal proceedings or defend against a claim, our team has the 
              expertise to navigate the complexities of the legal system and work toward the best possible 
              outcome for your case.
            </p>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
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
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>Our Litigation Approach</h2>
            <p>
              We take a strategic approach to litigation, focusing on achieving the best possible outcome 
              while managing costs and minimizing disruption to our clients' lives or businesses. Our 
              process typically includes:
            </p>
            <ol>
              <li>Initial consultation to understand the dispute and assess the legal position</li>
              <li>Development of a litigation strategy tailored to the specific case</li>
              <li>Exploration of alternative dispute resolution options where appropriate</li>
              <li>Thorough preparation of pleadings and other court documents</li>
              <li>Gathering and analysis of evidence to support the case</li>
              <li>Strong representation in court proceedings</li>
              <li>Negotiation of settlements when in the client's best interest</li>
            </ol>
          </div>
          
          <div className="service-detail-cta" ref={addToSectionsRef}>
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
