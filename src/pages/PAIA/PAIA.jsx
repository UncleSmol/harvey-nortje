import React from 'react';
import './PAIA.css';

const PAIA = () => {
  const paiaDocuments = [
    {
      id: 'manual',
      title: 'PAIA Manual',
      description: 'Promotion of Access to Information Act (PAIA) Manual for Harvey Nortje Attorneys',
      url: 'https://harveynortje.co.za/images/2024/PAIA-Manual/PAIA_MANUAL_JUNE_2024.pdf',
      icon: '📄'
    },
    {
      id: 'english',
      title: 'PAIA Guide - English',
      description: 'Guide on how to use the Promotion of Access to Information Act (English)',
      url: 'https://harveynortje.co.za/images/2024/PAIA-Manual/PAIA_ENGLISH_GUIDE.pdf',
      icon: '🇬🇧'
    },
    {
      id: 'afrikaans',
      title: 'PAIA Guide - Afrikaans',
      description: 'Gids oor hoe om die Wet op Bevordering van Toegang tot Inligting te gebruik (Afrikaans)',
      url: 'https://harveynortje.co.za/images/2024/PAIA-Manual/PAIA_AFRIKAANS_GUIDE.pdf',
      icon: '🇿🇦'
    },
    {
      id: 'isizulu',
      title: 'PAIA Guide - isiZulu',
      description: 'Umhlahlandlela wokusebenzisa uMthetho Wokukhuthaza Ukufinyelela Olwazini (isiZulu)',
      url: 'https://harveynortje.co.za/images/2024/PAIA-Manual/PAIA_ZULU_GUIDE.pdf',
      icon: '🇿🇦'
    }
  ];

  return (
    <div className="paia-page">
      <div className="paia-header">
        <div className="container">
          <h1>PAIA Information Manual & Guides</h1>
          <p className="paia-intro">
            Access to information documents in compliance with the Promotion of Access to Information Act.
          </p>
        </div>
      </div>

      <div className="paia-content">
        <div className="container">
          <div className="paia-section">
          <div className="paia-info">
            <h2>About PAIA</h2>
            <p>
              The Promotion of Access to Information Act (PAIA) gives effect to the constitutional right of access 
              to information held by the State and information held by another person that is required for the 
              exercise or protection of any rights.
            </p>
            <p>
              In terms of section 51 of PAIA, all private bodies are required to compile an information manual that 
              provides information on both the types and categories of records held by the public or private body.
            </p>
            <p>
              This page provides access to our PAIA Manual and the PAIA Guides in different languages as required by law.
            </p>
          </div>
          
          <div className="documents-grid">
            {paiaDocuments.map((document) => (
              <div className="document-card" key={document.id}>
                <div className="document-icon">{document.icon}</div>
                <div className="document-info">
                  <h3>{document.title}</h3>
                  <p>{document.description}</p>
                </div>
                <a 
                  href={document.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="download-button"
                  download
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
          </div>
          
          <div className="paia-contact">
          <h2>Information Officer Contact Details</h2>
          <p>
            For any PAIA-related inquiries or to submit a PAIA request, please contact our Information Officer:
          </p>
          <div className="contact-details">
           
            <div className="contact-item">
              <span className="label">Email:</span>
              <a href="mailto:info@harveynortje.co.za" className="value">info@harveynortje.co.za</a>
            </div>
            <div className="contact-item">
              <span className="label">Tel:</span>
              <a href="tel:+27136562161" className="value">(013) 656 2161</a>
            </div>
            <div className="contact-item">
              <span className="label">Address:</span>
              <span className="value">1st Floor WCMAS Building, C/o OR Tambo & Susanna Street, Emalahleni (Witbank) 1035</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAIA;
