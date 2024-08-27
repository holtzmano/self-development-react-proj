import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function MainPage() {
	return (
		<div className="main-page">
			<ul className="menu" style={{ display: 'flex', color: 'green' }}> {/* Inline styles for testing */}
				<li><Link to="/authors">Authors</Link></li>
				<li><Link to="/quotes">Quotes</Link></li>
				<li><Link to="/practical-lessons">Practical Lessons</Link></li>
				<li><Link to="/stories">Stories</Link></li>
				<li><Link to="/favorites">Favorites</Link></li>
			</ul>
		</div>
	);
}


export default MainPage;