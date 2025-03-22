import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './News.css';

const News = () => {
  // Simple refs for main elements
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  const articles = [
    {
      id: 'wills',
      title: 'Wills',
      excerpt: 'A Will is a specialised document, which should preferably be drawn up by an expert like an attorney, which contains the Testator\'s/Testatrix\'s instructions and last wishes as to what must happen to his/her assets when he/she dies.',
      link: '/news/wills'
    },
    {
      id: 'vat-transfer-duty',
      title: 'VAT and Transfer Duty',
      excerpt: 'Property Law encompasses inter alia matters relating to Value Added Tax (VAT), Transfer Duty and Capital Gains Tax (CGT), which fall in the sphere of the South African Tax Law.',
      link: '/news/vat-transfer-duty'
    },
    {
      id: 'deceased-estate',
      title: 'Administration of a Deceased Estate',
      excerpt: 'The following is an explanation of the administration process of a deceased estate in a nutshell and can differ from estate to estate.',
      link: '/news/deceased-estate'
    },
    {
      id: 'trusts',
      title: 'Trusts',
      excerpt: 'Trusts are regulated by the provisions of the Trust Property Control Act, No 57 of 1988, which act defines a "trust" as follows:',
      link: '/news/trusts'
    }
  ];

  useEffect(() => {
    // Simple fade-in animation for the entire page
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    
    // Simple animation for header
    gsap.fromTo(
      headerRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );
    
    // Simple animation for content
    gsap.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.4 }
    );
    
    // Simple animation for article cards
    gsap.fromTo(
      ".article-card",
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "power2.out",
        delay: 0.6
      }
    );
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-page" ref={pageRef}>
      <div className="news-header" ref={headerRef}>
        <div className="container">
          <h1>News & Articles</h1>
          <p className="news-intro">
            Stay updated with the latest news and articles from Harvey Nortje Attorneys.
            Our legal experts regularly share insights on important legal topics.
          </p>
        </div>
      </div>

      <div className="news-content" ref={contentRef}>
        <div className="container">
          <div className="articles-grid">
            {articles.map((article) => (
              <div className="article-card" key={article.id}>
                <h2>{article.title}</h2>
                <div className="article-excerpt">
                  <p>{article.excerpt}</p>
                </div>
                <Link to={article.link} className="read-more-button">
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
