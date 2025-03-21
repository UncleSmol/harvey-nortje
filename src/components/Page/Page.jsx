import React from 'react';
import './Page.css';

const Page = ({ title, description = "Coming soon..." }) => {
  return (
    <div className="page-placeholder">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Page;