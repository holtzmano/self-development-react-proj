import React from 'react';

function SearchBar({ query, setQuery }) {
	return (
		<input
			type="text"
			className="form-control"
			placeholder="Search..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		/>
	);
}

export default SearchBar;
