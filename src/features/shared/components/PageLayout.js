import React from 'react';
import Navigation from './Navigation';
import '../styles/shared.css';

function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <Navigation />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
