import React from 'react';
import './Careers.css';

const Careers = () => {
  return (
    <div className="careers-page">
      <div className="careers-header">
        <div className="container">
          <h1>Careers</h1>
          <p className="careers-intro">
            Explore career opportunities at Harvey Nortje Attorneys
          </p>
        </div>
      </div>

      <div className="careers-content">
        <div className="container">
          <div className="careers-section">
            <h2>Working at Harvey Nortje Attorneys</h2>
            
            <p className="careers-description">
              As a result of our commitment to excellence, we require employees with exceptional skills and commitment. 
              Our emphasis on recruiting high calibre people and providing them with development opportunities, is vital 
              to attracting and retaining top people. This ensures that our employees - professionals and support staff - 
              provide the best legal services to our clients as one of the cornerstones of our practice.
            </p>
            
            <div className="qualities-section">
              <h3>We are looking to employ candidates with:</h3>
              
              <ul className="qualities-list">
                <li>The ability and drive to progress</li>
                <li>Leadership skills</li>
                <li>Commitment</li>
                <li>Academic excellence</li>
                <li>Enthusiasm and creativity</li>
                <li>Integrity and a zero-tolerance for negative intent</li>
                <li>A well-balanced lifestyle in respect of career, sport, hobbies, socialising etc. – an all-rounder</li>
                <li>Excellent communication skills</li>
              </ul>
            </div>
            
            <div className="careers-cta">
              <h3>Interested in joining our team?</h3>
              <p>
                If you believe you have what it takes to be part of our dynamic team, we'd love to hear from you.
                Please send your CV and a cover letter to our HR department.
              </p>
              <a href="mailto:careers@harveynortje.co.za" className="apply-button">
                Apply Now
              </a>
            </div>
          </div>
          
          <div className="careers-benefits">
            <h2>Why Work With Us</h2>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🚀</div>
                <h3>Professional Growth</h3>
                <p>Continuous learning and development opportunities to advance your legal career</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">👥</div>
                <h3>Collaborative Culture</h3>
                <p>Work alongside experienced attorneys in a supportive team environment</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">⚖️</div>
                <h3>Diverse Practice Areas</h3>
                <p>Gain experience across multiple legal disciplines and specializations</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">🏆</div>
                <h3>Recognition</h3>
                <p>Your contributions and achievements will be valued and recognized</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
