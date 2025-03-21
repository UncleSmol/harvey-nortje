import React, { useState } from 'react';
import './Team.css';

const Team = () => {
  // State to track active tab for each team member
  const [activeTabs, setActiveTabs] = useState({});

  // Function to handle tab switching
  const handleTabChange = (memberId, tabName) => {
    setActiveTabs({
      ...activeTabs,
      [memberId]: tabName
    });
  };
  const teamMembers = [
    {
      id: 'willie',
      name: 'WILLEM DANIEL NORTJE (WILLIE NORTJE)',
      image: 'https://harveynortje.co.za/images/willie.jpg',
      title: 'Director: Attorney, Notary and Conveyancer',
      specialization: 'Specialising in Deceased Estates, Wills and Trusts; Conveyancing; Property and Commercial Law; Notarial Practice.',
      education: 'B.Iur; LL.B.; Hons. B.Com',
      admission: '(Admitted as attorney in 1976)',
      contact: {
        office: '013 656 2161',
        mobile: '083 229 1121',
        email: 'willie@harveynortje.co.za'
      }
    },
    {
      id: 'barry',
      name: 'BAREND JOHANNES WAGNER (BARRY WAGNER)',
      image: 'https://harveynortje.co.za/images/barry 5.jpg',
      title: 'Director: Attorney and Conveyancer',
      specialization: 'Specialising in Conveyancing, Property and Commercial Law and Divorce Mediation.',
      education: 'B.Iur; LL.B.; Advanced Diploma in Human Rights',
      admission: '(Admitted as attorney in 1985)',
      contact: {
        office: '013 656 2161',
        mobile: '083 229 1330',
        email: 'barry@harveynortje.co.za'
      }
    },
    {
      id: 'marius',
      name: 'MARIUS BOTHA',
      image: 'https://harveynortje.co.za/images/marius 1.jpg',
      title: 'Director: Attorney',
      specialization: 'Specialising in Civil Litigation (High and Magistrate\'s Court); Debt Collections and Evictions; Divorces.',
      education: 'B.Proc.',
      admission: '(Admitted as attorney in 1999)',
      contact: {
        office: '013 656 2161',
        mobile: '082 463 7462',
        email: 'marius@harveynortje.co.za'
      }
    },
    {
      id: 'leandra',
      name: 'LEANDRA NAIDOO',
      image: 'https://harveynortje.co.za/images/team/Leandra-Naidoo.jpg',
      title: 'Director: Attorney',
      specialization: 'Specialising in criminal law; divorce; domestic violence; children\'s court matters; maintenance; commercial law and harassment applications.',
      education: 'LL.B.',
      admission: '(Admitted on 31 January 2011 at the Pietermaritzburg High Court)\n(Admitted on 25 June 2013 at the North Gauteng High Court)',
      contact: {
        office: '013 656 2161',
        mobile: '084 875 0389',
        email: 'leandra@harveynortje.co.za'
      }
    },
    {
      id: 'marisel',
      name: 'MARISÈL CRAUWCAMP',
      image: 'https://harveynortje.co.za/images/team/Marisel.JPG',
      title: 'Director: Attorney, Notary and Conveyancer',
      specialization: 'Specialising in Conveyancing; Property and Commercial Law; Deceased Estates; Wills and Trusts; Notarial Practice.',
      education: 'LL.B.',
      admission: '(Admitted as attorney in 2008)',
      contact: {
        office: '013 656 2161',
        mobile: '072 483 4135',
        email: 'marisel@harveynortje.co.za'
      }
    },
    {
      id: 'alicia',
      name: 'ALICIA LIEBENBERG',
      image: 'https://harveynortje.co.za/images/team/Alicia-Liebenberg.jpg',
      title: 'Director: Attorney',
      specialization: 'Specialising in Civil Litigation (High and Magistrate\'s Court), Criminal Law, Debt Collections, Evictions, Divorce, Maintenance, Domestic Violence and Children\'s Court matters.',
      education: 'LL.B.',
      admission: '(Admitted as attorney in 2016)',
      contact: {
        office: '013 656 2161',
        mobile: '083 658 7134',
        email: 'collections@harveynortje.co.za'
      }
    },
    {
      id: 'lucky',
      name: 'LUCKY THANJEKWAYO',
      image: 'https://harveynortje.co.za/images/team/lucky-thanjekwayo-resized.jpg',
      title: 'Professional Assistant: Attorney',
      specialization: 'Specialising in Deceased Estates; Wills and Trusts; Debt Collections and Debt Reviews; Contracts and Lease Agreements; Evictions; Labour Law.',
      education: 'LL.B.',
      admission: '(Admitted as attorney in 2019)',
      contact: {
        office: '013 656 2161',
        mobile: '078 128 5442',
        email: 'lucky@harveynortje.co.za'
      }
    }
  ];


  return (
    <div className="team-page">
        <div className="team-header">
          <div className="container">
            <h1>Our Team</h1>
            <p className="team-intro">
              Meet our team of experienced legal professionals at Harvey Nortje Attorneys. 
              With over a century of combined experience, our attorneys are dedicated to 
              providing exceptional legal services across a wide range of practice areas.
            </p>
          </div>
        </div>

        <div className="team-content">
          <div className="container">
            <div className="team-grid">
              {teamMembers.map((member, index) => {
                // Set default active tab if not already set
                const activeTab = activeTabs[member.id] || 'specialization';
                
                return (
                  <div 
                    className="team-member" 
                    key={member.id} 
                    id={member.id}
                  >
                    <div className="team-member-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="team-member-info">
                      <h2>{member.name}</h2>
                      <h3>{member.title}</h3>
                      
                      {/* Tab Navigation */}
                      <div className="info-tabs">
                        <button 
                          className={`tab-button ${activeTab === 'specialization' ? 'active' : ''}`}
                          onClick={() => handleTabChange(member.id, 'specialization')}
                        >
                          Expertise
                        </button>
                        <button 
                          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
                          onClick={() => handleTabChange(member.id, 'education')}
                        >
                          Education
                        </button>
                        <button 
                          className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
                          onClick={() => handleTabChange(member.id, 'contact')}
                        >
                          Contact
                        </button>
                      </div>
                      
                      {/* Tab Content */}
                      <div className={`tab-content ${activeTab === 'specialization' ? 'active' : ''}`}>
                        <p className="specialization">{member.specialization}</p>
                      </div>
                      
                      <div className={`tab-content ${activeTab === 'education' ? 'active' : ''}`}>
                        <p className="education">{member.education}</p>
                        <p className="admission">{member.admission}</p>
                      </div>
                      
                      <div className={`tab-content ${activeTab === 'contact' ? 'active' : ''}`}>
                        <div className="contact-info">
                          <div className="contact-item">
                            <span className="label">Office:</span>
                            <span className="value">{member.contact.office}</span>
                          </div>
                          <div className="contact-item">
                            <span className="label">Mobile:</span>
                            <span className="value">{member.contact.mobile}</span>
                          </div>
                          <div className="contact-item">
                            <span className="label">Email:</span>
                            <a href={`mailto:${member.contact.email}`} className="value email-link">
                              {member.contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Team;
