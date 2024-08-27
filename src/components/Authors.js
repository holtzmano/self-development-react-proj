import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import SearchBar component

const authors = [
  { id: 1, name: 'Brian Tracy' },
  { id: 2, name: 'Stephen Covey' },
  { id: 3, name: 'Napoleon Hill' },
  { id: 4, name: 'Kop Kopmeyer' },
  { id: 5, name: 'Buddha' },
  { id: 6, name: 'Winston Churchill' },
  { id: 7, name: 'Thomas Edison' },
  { id: 8, name: 'Alan Turing' },
  { id: 9, name: 'Dalai Lama' },
  { id: 10, name: 'Abraham Lincoln' }
];

function Authors() {
  const [query, setQuery] = useState('');

  const filteredAuthors = authors.filter(author =>
	author.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
	<div>
	  <h1>Authors</h1>
	  <SearchBar query={query} setQuery={setQuery} /> {/* Add SearchBar */}
	  <ul>
		{filteredAuthors.map((author) => (
		  <li key={author.id}>
			<Link to={`/authors/${author.id}`}>{author.name}</Link>
		  </li>
		))}
	  </ul>
	</div>
  );
}

export default Authors;