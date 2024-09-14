import React from 'react';
import './Card.css'; // Custom styling

function Card({ title, subtitle, children }) {
  return (
    <div className="card my-3 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {subtitle && <h4 className="card-subtitle mb-2 text-muted">{subtitle}</h4>}
        <div className="card-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;
