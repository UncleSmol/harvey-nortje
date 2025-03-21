import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { articleId } = useParams();
  
  // Article data - in a real application, this would come from an API or CMS
  const articles = {
    'wills': {
      title: 'Wills',
      content: [
        {
          subtitle: 'What is a Will',
          text: 'A Will is a specialised document, which should preferably be drawn up by an expert like an attorney, which contains the Testator\'s/Testatrix\'s instructions and last wishes as to what must happen to his/her assets when he/she dies.'
        },
        {
          subtitle: 'Who is Competent to Make a Will',
          text: 'The person who signs a Will is called the Testator/Testatrix. Persons 16 years and older are competent to make a Will to determine how their estate should devolve after their death, unless they were mentally incapable of appreciating the consequence of their actions at the time of making the Will.'
        },
        {
          subtitle: 'Why You Should Have a Will',
          text: 'Having a valid Will ensures that your assets are distributed according to your wishes after your death. Without a Will, your estate will be distributed according to the laws of intestate succession, which may not align with your personal wishes. A Will also allows you to appoint an executor of your choice to administer your estate and, if applicable, appoint guardians for minor children.'
        },
        {
          subtitle: 'Requirements for a Valid Will',
          text: 'For a Will to be valid in South Africa, it must comply with the formalities set out in the Wills Act. These include that the Will must be in writing, signed by the testator/testatrix at the end of the document, and the signature must be made in the presence of at least two competent witnesses who must also sign the Will. The witnesses must be 14 years or older and must not be beneficiaries under the Will.'
        }
      ],
      relatedServices: [
        {
          title: 'Wills and Administration of Estates',
          link: '/services/wills-estates'
        },
        {
          title: 'Trusts',
          link: '/news/trusts'
        }
      ]
    },
    'vat-transfer-duty': {
      title: 'VAT and Transfer Duty',
      content: [
        {
          text: 'Property Law encompasses inter alia matters relating to Value Added Tax (VAT), Transfer Duty and Capital Gains Tax (CGT), which fall in the sphere of the South African Tax Law.'
        },
        {
          text: 'To explain the place of VAT and Transfer Duty in Property Law, we distinguish between what we call VAT and/or Transfer Duty transactions.'
        },
        {
          text: 'A VAT transaction is where the Seller is a registered VAT vendor. In this case, the Purchaser will not be liable to pay Transfer Duty to the Receiver of Revenue, because the Seller will ultimately pay VAT on the transaction to the Receiver, and therefore it is labeled a "VAT Transaction".'
        },
        {
          text: 'In a Transfer Duty transaction, the Seller is not a registered VAT vendor, and therefore the Purchaser will be liable to pay Transfer Duty to the Receiver of Revenue, and therefore it is labeled a "Transfer Duty Transaction".'
        },
        {
          text: 'The amount of Transfer Duty payable is calculated according to a sliding scale based on the purchase price of the property. The current Transfer Duty rates (as of 2023) are as follows:'
        },
        {
          list: [
            'R0 - R1,000,000: 0%',
            'R1,000,001 - R1,375,000: 3% of the value above R1,000,000',
            'R1,375,001 - R1,925,000: R11,250 + 6% of the value above R1,375,000',
            'R1,925,001 - R2,475,000: R44,250 + 8% of the value above R1,925,000',
            'R2,475,001 - R11,000,000: R88,250 + 11% of the value above R2,475,000',
            'R11,000,001 and above: R1,026,000 + 13% of the value above R11,000,000'
          ]
        }
      ],
      relatedServices: [
        {
          title: 'Property Law and Conveyancing',
          link: '/services/property-law'
        },
        {
          title: 'Commercial',
          link: '/services/commercial'
        }
      ]
    },
    'deceased-estate': {
      title: 'Administration of a Deceased Estate',
      content: [
        {
          text: 'The following is an explanation of the administration process of a deceased estate in a nutshell and can differ from estate to estate:'
        },
        {
          numbered: [
            'The first step is to report the estate to the Master of the High Court within 14 days of the date of death.',
            'The Master will then issue Letters of Executorship/Authority to the appointed Executor/Representative.',
            'The Executor/Representative must open a bank account in the name of the estate.',
            'All assets must be collected and liabilities settled.',
            'The Executor must advertise for creditors to lodge their claims against the estate.',
            'A Liquidation and Distribution Account must be prepared and lodged with the Master.',
            'The account must lie open for inspection for 21 days.',
            'If there are no objections, the Executor can distribute the assets according to the Will or intestate succession.',
            'Once all assets have been distributed, the Executor can apply for a discharge from the Master.'
          ]
        },
        {
          text: 'The entire process can take anywhere from 6 months to 2 years or more, depending on the complexity of the estate.'
        }
      ],
      relatedServices: [
        {
          title: 'Wills and Administration of Estates',
          link: '/services/wills-estates'
        },
        {
          title: 'Wills',
          link: '/news/wills'
        }
      ]
    },
    'trusts': {
      title: 'Trusts',
      content: [
        {
          text: 'Trusts are regulated by the provisions of the Trust Property Control Act, No 57 of 1988, which act defines a "trust" as follows:'
        },
        {
          text: '"trust" means the arrangement through which ownership in property of one person is by virtue of a trust instrument made over or bequeathed –'
        },
        {
          numbered: [
            'to another person, the trustee, in whole or in part, to be administered or disposed of according to the provisions of the trust instrument for the benefit of the person or class of persons designated in the trust instrument or for the achievement of the object stated in the trust instrument; or',
            'to the beneficiaries designated in the trust instrument, which property is placed under the control of another person, the trustee, to be administered or disposed of according to the provisions of the trust instrument for the benefit of the person or class of persons designated in the trust instrument or for the achievement of the object stated in the trust instrument,'
          ]
        },
        {
          subtitle: 'Types of Trusts',
          text: 'There are two main types of trusts in South Africa:'
        },
        {
          list: [
            'Inter-vivos Trust: Created during the lifetime of the founder',
            'Testamentary Trust: Created in terms of the Will of a person and comes into effect after their death'
          ]
        },
        {
          subtitle: 'Benefits of Trusts',
          text: 'Trusts offer several benefits, including:'
        },
        {
          list: [
            'Estate planning and reduction of estate duty',
            'Protection of assets from creditors',
            'Provision for minor children or family members with special needs',
            'Continuity in the administration of assets',
            'Tax planning opportunities'
          ]
        }
      ],
      relatedServices: [
        {
          title: 'Wills and Administration of Estates',
          link: '/services/wills-estates'
        },
        {
          title: 'Commercial',
          link: '/services/commercial'
        }
      ]
    }
  };
  
  // If article doesn't exist, redirect to news page
  if (!articles[articleId]) {
    return <Navigate to="/news" />;
  }
  
  const article = articles[articleId];
  
  return (
    <div className="article-detail-page">
      <div className="article-header">
        <div className="container">
          <h1>{article.title}</h1>
        </div>
      </div>

      <div className="article-content">
        <div className="container">
          <div className="article-body">
            {article.content.map((section, index) => (
              <div className="article-section" key={index}>
                {section.subtitle && <h2>{section.subtitle}</h2>}
                {section.text && <p>{section.text}</p>}
                
                {section.list && (
                  <ul className="article-list">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                
                {section.numbered && (
                  <ol className="article-numbered-list">
                    {section.numbered.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
            
            {article.relatedServices && (
              <div className="related-services">
                <h3>Related Services</h3>
                <ul>
                  {article.relatedServices.map((service, index) => (
                    <li key={index}>
                      <Link to={service.link}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="article-actions">
              <Link to="/news" className="back-button">
                Back to News
              </Link>
              <Link to="/contact" className="contact-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
