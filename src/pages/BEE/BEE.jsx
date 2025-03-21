import React from 'react';
import { Link } from 'react-router-dom';
import './BEE.css';

const BEE = () => {
  return (
    <div className="bee-page">
      <div className="bee-header">
        <div className="container">
          <h1>BEE</h1>
          <p className="bee-intro">
            Black Economic Empowerment
          </p>
        </div>
      </div>

      <div className="bee-content">
        <div className="container">
          <div className="bee-section">
            <div className="bee-info">
              <p>Our firm is committed to implement Black Economic Empowerment and is currently a <strong>Level 2 contributor</strong>.</p>
              
              <div className="certificate-link">
                <a href="https://harveynortje.co.za/images/2024/BEE/BEE_Sertifikaat_2024.pdf" target="_blank" rel="noopener noreferrer" className="certificate-button">
                  <span className="icon">📄</span>
                  <span className="text">View our Broad Based Black Economic Empowerment Certificate</span>
                </a>
              </div>
            </div>
            
            <div className="bee-badge">
              <div className="level-badge">
                <div className="level-number">2</div>
                <div className="level-text">BEE Level</div>
              </div>
            </div>
          </div>
          
          <div className="bee-commitment">
            <h2>Our Commitment to Transformation</h2>
            <p>
              At Harvey Nortje Attorneys, we are dedicated to the principles of economic transformation and 
              empowerment in South Africa. Our Level 2 B-BBEE status reflects our ongoing commitment to:
            </p>
            <ul>
              <li>Promoting diversity and inclusion within our firm</li>
              <li>Supporting skills development and training initiatives</li>
              <li>Contributing to socio-economic development in our communities</li>
              <li>Implementing fair and equitable employment practices</li>
              <li>Engaging with and supporting black-owned businesses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BEE;
