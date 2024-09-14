import React from 'react';
import './Button.css'; // Custom button styles if needed

function Button({ variant = "primary", children, onClick }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
