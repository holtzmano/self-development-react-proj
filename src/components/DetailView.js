import React from 'react';
import './DetailView.css'; // You can create a corresponding CSS file for styling

function DetailView({ title, subtitle, content }) {
  return (
    <div className="detail-view">
      <h1 className="detail-title">{title}</h1>
      {subtitle && <h3 className="detail-subtitle">{subtitle}</h3>}
      <div className="detail-content">
        {content}
      </div>
    </div>
  );
}

export default DetailView;
