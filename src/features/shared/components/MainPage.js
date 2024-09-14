import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/shared.css';  // Include custom styles if needed

function MainPage() {
  return (
    <div className="container text-center my-5">
      <h1 className="display-4">Welcome to the Self-Development Portal</h1>
      <p className="lead mt-4">Explore inspirational quotes, practical lessons, stories, and authors to fuel your personal growth.</p>
      <Link to="/quotes" className="btn btn-primary btn-lg mt-3">Start Exploring</Link>
    </div>
  );
}

export default MainPage;
