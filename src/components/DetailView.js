import React from 'react';
import './DetailView.css'; // Custom styling

function DetailView({ title, subtitle, content }) {
  return (
    <div className="container my-4">
      <h1 className="detail-title display-4">{title}</h1>
      {subtitle && <h3 className="detail-subtitle text-muted">{subtitle}</h3>}
      <div className="detail-content mt-4">
        {content}
      </div>
    </div>
  );
}

export default DetailView;
