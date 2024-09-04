import React from 'react';
import './Card.css'; // You can create a corresponding CSS file for styling

function Card({ title, subtitle, children }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;
