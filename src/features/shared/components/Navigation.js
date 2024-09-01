import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

function Navigation() {
  const { user, logout } = useContext(UserContext);

  return (
	<nav>
	  <ul>
		<li><Link to="/authors">Authors</Link></li>
		<li><Link to="/quotes">Quotes</Link></li>
		<li><Link to="/stories">Stories</Link></li>
		<li><Link to="/practical-lessons">Practical Lessons</Link></li>
		<li><Link to="/favorites">Favorites</Link></li> {/* Add this line */}
	  </ul>
	  {user ? (
		<div>
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