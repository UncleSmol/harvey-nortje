import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
import useServiceAnimations from '../../hooks/useServiceAnimations';

const Commercial = () => {
  // Get animation refs and functions from the custom hook
  const { pageRef, headerRef, contentRef, addToSectionsRef } = useServiceAnimations();

  return (
    <div className="service-detail-page" ref={pageRef}>
      <div className="service-detail-header" ref={headerRef}>
        <div className="container">
          <h1>Commercial</h1>
          <p className="service-detail-intro">
            We render advice and assist our clients with negotiating and drafting agreements 
            relating to various Commercial and Corporate transactions.
          </p>
        </div>
      </div>

      <div className="service-detail-content" ref={contentRef}>
        <div className="container">
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>About Our Commercial Services</h2>
            <p>
              Our Commercial Law Department specializes in providing comprehensive legal services 
              for businesses of all sizes. We understand that commercial transactions require not only 
              legal expertise but also a deep understanding of business operations and objectives.
            </p>
            <p>
              Our team of experienced attorneys works closely with clients to ensure that their 
              commercial interests are protected while facilitating smooth business operations and growth.
            </p>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>We render advice on and assist with:</h2>
            
            <div className="service-features">
              <div className="service-feature">
                <h3>Lease Agreements</h3>
                <p>Drafting of lease agreements for houses (furnished/unfurnished), farms, small holdings, 
                sectional title units, and business premises.</p>
              </div>
              
              <div className="service-feature">
                <h3>Movable Property</h3>
                <p>Drafting of agreements in respect of the sale or letting of movable property.</p>
              </div>
              
              <div className="service-feature">
                <h3>Business Sales</h3>
                <p>Drafting of agreements for the sale of member's interest in close corporations, 
                shares in companies, and businesses.</p>
              </div>
              
              <div className="service-feature">
                <h3>Legal Documents</h3>
                <p>Preparation of acknowledgements of debt, suretyships, special and/or general powers of attorney.</p>
              </div>
              
              <div className="service-feature">
                <h3>Business Structures</h3>
                <p>Establishment and dissolution of companies, close corporations, trusts and partnerships.</p>
              </div>
            </div>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>Our Approach</h2>
            <p>
              At Harvey Nortje Attorneys, we take a client-centered approach to commercial law. We believe 
              in building long-term relationships with our clients, understanding their business objectives, 
              and providing practical legal solutions that align with their goals.
            </p>
            <p>
              Our process typically includes:
            </p>
            <ol>
              <li>Initial consultation to understand your business needs and objectives</li>
              <li>Thorough analysis of the legal aspects of your commercial transactions</li>
              <li>Drafting or reviewing necessary documentation with attention to detail</li>
              <li>Negotiation support to secure favorable terms</li>
              <li>Implementation assistance and ongoing legal support</li>
            </ol>
          </div>
          
          <div className="service-cta">
            <h2>Need assistance with commercial legal matters?</h2>
            <p>
              Our experienced team of attorneys is ready to help you with your commercial legal needs.
              Contact us today to schedule a consultation.
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

export default Commercial;
