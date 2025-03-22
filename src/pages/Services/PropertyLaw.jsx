import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
import useServiceAnimations from '../../hooks/useServiceAnimations';

const PropertyLaw = () => {
  // Get animation refs and functions from the custom hook
  const { pageRef, headerRef, contentRef, addToSectionsRef } = useServiceAnimations();

  return (
    <div className="service-detail-page" ref={pageRef}>
      <div className="service-detail-header" ref={headerRef}>
        <div className="container">
          <h1>Property Law and Conveyancing</h1>
          <p className="service-detail-intro">
            Conveyancing deals with inter alia the transfer of ownership of land from one person to another.
          </p>
        </div>
      </div>

      <div className="service-detail-content" ref={contentRef}>
        <div className="container">
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>About Property Law Services</h2>
            <p>
              Property Law encompasses the legal processes and documentation required for the transfer, 
              registration, and ownership of immovable property. Our conveyancing department specializes 
              in handling all aspects of property transactions, ensuring that your property rights are 
              properly established and protected.
            </p>
            <p>
              As registered conveyancers, our attorneys are qualified to handle the specialized legal 
              work involved in property transfers, bond registrations, and related matters. We ensure 
              that all transactions comply with relevant legislation and regulations.
            </p>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>Our Property Law Services</h2>
            <p>
              Our Property Law Department offers comprehensive services for all property-related legal matters. 
              Whether you're buying your first home, selling commercial property, or developing a new real 
              estate project, our team has the expertise to guide you through the process.
            </p>
            
            <div className="service-features">
              <div className="service-feature">
                <h3>Property Transfers</h3>
                <p>Handling the legal process of transferring property ownership from seller to buyer, 
                including preparation and lodgment of all necessary documentation.</p>
              </div>
              
              <div className="service-feature">
                <h3>Bond Registrations</h3>
                <p>Registration of mortgage bonds when property is purchased with financing, ensuring 
                all legal requirements are met for both the buyer and the financial institution.</p>
              </div>
              
              <div className="service-feature">
                <h3>Sectional Title Registrations</h3>
                <p>Specialized services for sectional title properties, including establishment of sectional 
                title schemes and transfer of sectional title units.</p>
              </div>
              
              <div className="service-feature">
                <h3>Property Development</h3>
                <p>Legal services for property developers, including township establishment, subdivision 
                of land, and consolidation of properties.</p>
              </div>
            </div>
          </div>
          
          <div className="service-detail-section" ref={addToSectionsRef}>
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
          
          <div className="service-detail-section" ref={addToSectionsRef}>
            <h2>The Conveyancing Process</h2>
            <p>
              The conveyancing process involves several important steps that must be completed correctly 
              to ensure a valid property transfer. Our experienced team guides clients through each stage:
            </p>
            <ol>
              <li>Preparation and signing of the deed of sale</li>
              <li>Securing of financing (if applicable)</li>
              <li>Preparation of transfer documents</li>
              <li>Obtaining rates clearance certificates and other necessary clearances</li>
              <li>Lodgment of documents at the Deeds Office</li>
              <li>Registration of transfer and bond (if applicable)</li>
              <li>Final financial settlements between parties</li>
            </ol>
          </div>
          
          <div className="service-cta">
            <h2>Need assistance with property law matters?</h2>
            <p>
              Our experienced team of attorneys is ready to help you with your property transactions and conveyancing needs.
              Contact us today to schedule a consultation.
            </p>
            <Link to="/contact" className="cta-button">
              Contact Us
            </Link>
            <Link to="/services" className="back-to-services">
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLaw;
