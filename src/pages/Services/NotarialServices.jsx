import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
import useServiceAnimations from '../../hooks/useServiceAnimations';

const NotarialServices = () => {
  // Get animation refs and functions from the custom hook
  const { pageRef, headerRef, contentRef, addToSectionsRef } = useServiceAnimations();

  return (
    <div className="service-detail-page" ref={pageRef}>
      <div className="service-detail-header" ref={headerRef}>
        <div className="container">
          <h1>Notarial Services</h1>
          <p className="service-detail-intro">
            Services pertaining to Notarial Practice – relates to the creation and/or transfer of real rights of land as well as the registration of Antenuptial Contracts.
          </p>
        </div>
      </div>

      <div className="service-detail-content" ref={contentRef}>
        <div className="container">
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>About Notarial Services</h2>
            <p>
              Notarial services involve the preparation and execution of specialized legal documents that 
              require the involvement of a Notary Public. A Notary Public is an attorney who has passed 
              additional examinations and is authorized to perform specific legal functions, including the 
              authentication and certification of documents.
            </p>
            <p>
              At Harvey Nortje Attorneys, our notaries provide expert services for a range of notarial 
              matters, ensuring that all documents are legally sound and properly executed according to 
              South African law.
            </p>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>Our Notarial Services</h2>
            <p>
              Our notaries are qualified to handle a wide range of notarial services, providing clients 
              with the assurance that their legal documents meet all requirements and will be recognized 
              both locally and internationally where applicable.
            </p>
            
            <div className="service-features">
              <div className="service-feature">
                <h3>Antenuptial Contracts</h3>
                <p>Drafting and registration of antenuptial contracts for couples planning to marry 
                out of community of property, with or without the accrual system.</p>
              </div>
              
              <div className="service-feature">
                <h3>Notarial Bonds</h3>
                <p>Preparation and registration of general and special notarial bonds over movable property 
                as security for loans or other obligations.</p>
              </div>
              
              <div className="service-feature">
                <h3>Servitudes</h3>
                <p>Creation and registration of servitudes over immovable property, including right of way 
                servitudes and other real rights.</p>
              </div>
              
              <div className="service-feature">
                <h3>Mining Rights</h3>
                <p>Execution of Prospecting / Mining Rights at the DMR, Emalahleni, ensuring all legal 
                requirements are met.</p>
              </div>
              
              <div className="service-feature">
                <h3>Cession of Exclusive Use</h3>
                <p>Preparation and registration of cession of exclusive use areas in sectional title schemes.</p>
              </div>
            </div>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>The Notarial Process</h2>
            <p>
              The notarial process varies depending on the type of document being prepared or authenticated, 
              but generally includes the following steps:
            </p>
            <ol>
              <li>Initial consultation to understand client needs and requirements</li>
              <li>Preparation of the necessary notarial document</li>
              <li>Explanation of the document's contents and legal implications to the client</li>
              <li>Execution of the document in the presence of the notary</li>
              <li>Authentication of the document with the notary's signature and seal</li>
              <li>Registration of the document where required (e.g., antenuptial contracts, notarial bonds)</li>
              <li>Provision of certified copies to the client</li>
            </ol>
          </div>
          
          <div className="service-cta" ref={addToSectionsRef}>
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
