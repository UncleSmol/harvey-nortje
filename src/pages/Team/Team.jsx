import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Team.css';

const Team = () => {
  // State Management
  const [flippedCard, setFlippedCard] = useState(null);
  const [activeTabs, setActiveTabs] = useState({});
  
  // DOM References
  const cardsRef = useRef([]);
  const contentRefs = useRef([]);
  const scrollIndicators = useRef([]);
  const teamGridRef = useRef(null);
  const teamHeaderRef = useRef(null);

  // Complete Team Data (First 3 members shown)
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
      },
      profile: `Mr. Nortje has been practicing as an attorney for over 45 years and has extensive experience in various fields of law. He specializes in Deceased Estates, Wills and Trusts, Conveyancing, Property Law, Commercial Law, and Notarial Practice.

As a senior director at Harvey Nortje Attorneys, he provides expert legal guidance and has built a reputation for his thorough approach and commitment to client service.

His academic qualifications include a B.Iur, LL.B., and an Honours degree in Commerce, providing him with a solid foundation in both legal and commercial matters.`
    },
    {
      id: 'barry',
      name: 'BAREND JOHANNES WAGNER (BARRY WAGNER)',
      image: 'https://harveynortje.co.za/images/barry%205.jpg',
      title: 'Director: Attorney and Conveyancer',
      specialization: 'Specialising in Conveyancing, Property and Commercial Law and Divorce Mediation.',
      education: 'B.Iur; LL.B.; Advanced Diploma in Human Rights',
      admission: '(Admitted as attorney in 1985)',
      contact: {
        office: '013 656 2161',
        mobile: '083 229 1330',
        email: 'barry@harveynortje.co.za'
      },
      profile: `Mr. Wagner has been practicing as an attorney since 1985 and is a director at Harvey Nortje Attorneys. His areas of specialization include Conveyancing, Property Law, Commercial Law, and Divorce Mediation.

With his Advanced Diploma in Human Rights, he brings a unique perspective to his legal practice, particularly in matters related to property rights and fair treatment in divorce proceedings.

His experience in divorce mediation has helped many clients reach amicable settlements, reducing the emotional and financial costs often associated with divorce litigation.`
    },
    {
      id: 'marius',
      name: 'MARIUS BOTHA',
      image: 'https://harveynortje.co.za/images/marius%201.jpg',
      title: 'Director: Attorney',
      specialization: 'Specialising in Civil Litigation (High and Magistrate\'s Court); Debt Collections and Evictions; Divorces.',
      education: 'B.Proc.',
      admission: '(Admitted as attorney in 1999)',
      contact: {
        office: '013 656 2161',
        mobile: '082 463 7462',
        email: 'marius@harveynortje.co.za'
      },
      profile: `Mr. Botha joined the firm in 1999 and has established himself as an expert in Civil Litigation. He handles cases in both the High Court and Magistrate's Court, with particular expertise in debt collections, evictions, and divorce proceedings.

His litigation experience makes him a formidable advocate for his clients' interests, and he is known for his strategic approach to complex legal disputes.

Mr. Botha's practical knowledge of court procedures and his ability to navigate the legal system efficiently have resulted in numerous successful outcomes for his clients.`
    },
        // Continuing teamMembers array
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
          },
          profile: `Ms. Naidoo is a director at Harvey Nortje Attorneys with a diverse practice that includes criminal law, family law, and commercial law. She has particular expertise in matters involving domestic violence, children's court proceedings, maintenance disputes, and harassment applications.
    
    Her compassionate approach to sensitive legal matters, combined with her strong advocacy skills, makes her especially effective in family law and criminal defense cases.
    
    Ms. Naidoo was admitted as an attorney at the Pietermaritzburg High Court in 2011 and at the North Gauteng High Court in 2013, allowing her to represent clients in multiple jurisdictions.`
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
          },
          profile: `Ms. Crauwcamp is a director at Harvey Nortje Attorneys who specializes in Conveyancing, Property Law, Commercial Law, Deceased Estates, Wills and Trusts, and Notarial Practice.
    
    As both an attorney, notary, and conveyancer, she offers comprehensive legal services related to property transactions and estate planning.
    
    Her attention to detail and thorough understanding of property law ensure that her clients' property transactions proceed smoothly and that their estate planning documents accurately reflect their wishes.`
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
          },
          profile: `Ms. Liebenberg is a director at Harvey Nortje Attorneys with a practice focused on litigation matters. She handles civil litigation in both the High Court and Magistrate's Court, as well as criminal law cases.
    
    Her expertise extends to debt collections, evictions, divorce proceedings, maintenance disputes, domestic violence cases, and children's court matters.
    
    Since her admission as an attorney in 2016, Ms. Liebenberg has built a reputation for her diligent representation of clients in contentious matters and her ability to navigate complex legal procedures effectively.`
        },
            // Final team member
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
      },
      profile: `Mr. Thanjekwayo joined Harvey Nortje Attorneys as a Professional Assistant after his admission as an attorney in 2019. He specializes in Deceased Estates, Wills and Trusts, Debt Collections and Debt Reviews, Contracts and Lease Agreements, Evictions, and Labour Law.

His diverse practice areas allow him to assist clients with a wide range of legal needs, from estate planning to contractual matters and employment disputes.

Mr. Thanjekwayo's analytical approach to legal problems and his commitment to client service make him a valuable member of the firm's legal team.`
    }
  ];

  // Add entrance animations on component mount
  useEffect(() => {
    // Setup the initial state for cards (invisible)
    gsap.set('.team-header', { 
      opacity: 0,
      y: -30
    });
    
    gsap.set('.team-card', { 
      opacity: 0,
      y: 50,
      scale: 0.95
    });

    // Create the entrance animation timeline
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out"
      }
    });

    // Animate the header
    tl.to('.team-header', { 
      opacity: 1, 
      y: 0, 
      duration: 1 
    });

    // Animate cards with staggered effect
    tl.to('.team-card', { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      duration: 0.8,
      stagger: {
        amount: 1.2, // Total time to stagger all elements
        from: "start",
        grid: "auto"
      }
    }, "-=0.3"); // Slight overlap with header animation
    
    // Add subtle hover animations for cards
    const cards = document.querySelectorAll('.team-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('flipped')) {
          gsap.to(card, { 
            y: -10,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            duration: 0.3
          });
        }
      });
      
      card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('flipped')) {
          gsap.to(card, { 
            y: 0,
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
            duration: 0.3
          });
        }
      });
    });

    // Cleanup function
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Card Flip Animation Handler
  const handleCardFlip = (memberId) => {
    const cardElement = cardsRef.current[memberId];
    const contentElement = contentRefs.current[memberId];
    const isCardFlipped = flippedCard === memberId;

    if (!cardElement) return;

    // Add or remove the 'flipped' class based on the current state
    if (!isCardFlipped) {
      // Flip the card
      cardElement.classList.add('flipped');
      
      // Use GSAP for smooth animation
      gsap.to(cardElement.querySelector('.team-card-inner'), {
        rotationY: 180,
        duration: 0.8,
        ease: "power4.out",
        onComplete: () => {
          // Activate scroll indicator if content overflows
          if (contentElement && contentElement.scrollHeight > contentElement.clientHeight) {
            gsap.to(scrollIndicators.current[memberId], {
              opacity: 1,
              duration: 0.3
            });
          }
        }
      });
      
      setFlippedCard(memberId);
    } else {
      // Flip the card back
      cardElement.classList.remove('flipped');
      
      // Use GSAP for smooth animation
      gsap.to(cardElement.querySelector('.team-card-inner'), {
        rotationY: 0,
        duration: 0.8,
        ease: "power4.out"
      });
      
      setFlippedCard(null);
    }
  };

  // Tab Change Handler
  const handleTabChange = (memberId, tabName) => {
    setActiveTabs(prevState => ({
      ...prevState,
      [memberId]: tabName
    }));

    // Reset scroll position when changing tabs
    const contentElement = contentRefs.current[memberId];
    if (contentElement) {
      contentElement.scrollTop = 0;
      gsap.to(scrollIndicators.current[memberId], { 
        opacity: 0,
        duration: 0.3 
      });
    }
    
    // Animate tab content appearance
    gsap.fromTo(
      `.tab-content.${tabName}`, 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  };

  // Scroll Management
  useEffect(() => {
    const handleContentScroll = (memberId) => {
      const contentElement = contentRefs.current[memberId];
      const indicatorElement = scrollIndicators.current[memberId];
      
      if (!contentElement || !indicatorElement) return;

      const shouldShowIndicator = 
        contentElement.scrollHeight > contentElement.clientHeight && 
        contentElement.scrollTop + contentElement.clientHeight < contentElement.scrollHeight;

      gsap.to(indicatorElement, {
        opacity: shouldShowIndicator ? 1 : 0,
        duration: 0.3
      });
    };

    // Add scroll listeners
    teamMembers.forEach(member => {
      const contentElement = contentRefs.current[member.id];
      if (contentElement) {
        contentElement.addEventListener('scroll', () => handleContentScroll(member.id));
      }
    });

    // Cleanup
    return () => {
      teamMembers.forEach(member => {
        const contentElement = contentRefs.current[member.id];
        if (contentElement) {
          contentElement.removeEventListener('scroll', () => handleContentScroll(member.id));
        }
      });
    };
  }, []);

  return (
    <div className="team-page">
      <div className="team-header" ref={teamHeaderRef}>
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
          <div className="team-grid" ref={teamGridRef}>
            {teamMembers.map((member) => {
              const isFlipped = flippedCard === member.id;
              const activeTab = activeTabs[member.id] || 'profile';

              return (
                <div 
                  className={`team-card ${isFlipped ? 'flipped' : ''}`}
                  key={member.id}
                  ref={el => cardsRef.current[member.id] = el}
                >
                  <div className="team-card-inner">
                    {/* Front Card */}
                    <div className="team-card-front">
                      <div className="team-member-image">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="team-member-basic-info">
                        <h2>{member.name.split(' (')[0]}</h2>
                        {member.name.includes('(') && (
                          <h3 className="nickname">
                            {member.name.split(' (')[1].replace(')', '')}
                          </h3>
                        )}
                        <p className="title">{member.title}</p>
                        <button
                          className="view-profile-btn"
                          onClick={() => handleCardFlip(member.id)}
                          aria-label={`View ${member.name.split(' (')[0]}'s profile`}
                        >
                          View Profile
                        </button>
                      </div>
                    </div>

                    {/* Back Card */}
                    <div className="team-card-back">
                      <button
                        className="close-profile-btn"
                        onClick={() => handleCardFlip(member.id)}
                        aria-label="Close profile"
                      >
                        &times;
                      </button>
                      
                      <div 
                        className="team-card-back-content"
                        ref={el => contentRefs.current[member.id] = el}
                      >
                        <div className="expanded-header">
                          <div className="expanded-image">
                            <img src={member.image} alt={member.name} />
                          </div>
                          <div className="expanded-basic-info">
                            <h2>{member.name.split(' (')[0]}</h2>
                            {member.name.includes('(') && (
                              <h3 className="nickname">
                                {member.name.split(' (')[1].replace(')', '')}
                              </h3>
                            )}
                            <p className="title">{member.title}</p>
                          </div>
                        </div>

                        <div className="info-tabs">
                          <button
                            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => handleTabChange(member.id, 'profile')}
                          >
                            Profile
                          </button>
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

                        <div className="tab-content-container">
                          {/* Profile Tab */}
                          <div className={`tab-content profile ${activeTab === 'profile' ? 'active' : ''}`}>
                            <h4>Professional Profile</h4>
                            <div className="profile-text">
                              {member.profile.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="profile-paragraph">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>

                          {/* Specialization Tab */}
                          <div className={`tab-content specialization ${activeTab === 'specialization' ? 'active' : ''}`}>
                            <h4>Areas of Expertise</h4>
                            <p className="specialization">{member.specialization}</p>
                          </div>

                          {/* Education Tab */}
                          <div className={`tab-content education ${activeTab === 'education' ? 'active' : ''}`}>
                            <h4>Education & Admission</h4>
                            <p className="education">{member.education}</p>
                            <p className="admission">{member.admission}</p>
                          </div>

                          {/* Contact Tab */}
                          <div className={`tab-content contact ${activeTab === 'contact' ? 'active' : ''}`}>
                            <h4>Contact Information</h4>
                            <div className="contact-info">
                              <div className="contact-item">
                                <span className="label">Office:</span>
                                <a href={`tel:${member.contact.office}`} className="value">
                                  {member.contact.office}
                                </a>
                              </div>
                              <div className="contact-item">
                                <span className="label">Mobile:</span>
                                <a href={`tel:${member.contact.mobile}`} className="value">
                                  {member.contact.mobile}
                                </a>
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

                        {/* Scroll Indicator */}
                        <div 
                          className="scroll-indicator"
                          ref={el => scrollIndicators.current[member.id] = el}
                        >
                          ▼
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