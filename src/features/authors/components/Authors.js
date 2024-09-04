import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../shared/components/SearchBar'; 
import authors from './AuthorsData';
import List from '../../../components/List';  
import Card from '../../../components/Card';  

function Authors() {
  const [query, setQuery] = useState('');

  const filteredAuthors = authors.filter(author =>
    author.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Authors</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {filteredAuthors.length === 0 ? (
        <p>No authors found.</p>
      ) : (
        <List
          items={filteredAuthors}
          renderItem={(author) => (
            <Card 
              title={author.name}
            >
              <Link to={`/authors/${author.id}`}>View Details</Link>
            </Card>
          )}
        />
      )}
    </div>
  );  
}

export default Authors;
