import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
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

  return (
    <div className="news-page">
      <div className="news-header">
        <div className="container">
          <h1>News & Articles</h1>
          <p className="news-intro">
            Stay updated with the latest news and articles from Harvey Nortje Attorneys.
            Our legal experts regularly share insights on important legal topics.
          </p>
        </div>
      </div>

      <div className="news-content">
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
