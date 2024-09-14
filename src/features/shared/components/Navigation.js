import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import '../styles/shared.css';


function Navigation() {
  const { user, logout } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu open/close
  };

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/authors">Authors</Link></li>
        <li><Link to="/quotes">Quotes</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/practical-lessons">Practical Lessons</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
      {user ? (
        <div className="user-info">
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navigation;

