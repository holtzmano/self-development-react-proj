import React from 'react';
import Navigation from './Navigation';

function PageLayout({ children }) {
  return (
    <div>
      <Navigation />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
