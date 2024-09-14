import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../shared/components/SearchBar'; 
import authors from './AuthorsData';
import Card from '../../../components/Card';  
import '../styles/authors.css';

function Authors() {
  const [query, setQuery] = useState('');

  const filteredAuthors = authors.filter(author =>
    author.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h1 className="text-center">Authors</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {filteredAuthors.length === 0 ? (
        <p className="text-center">No authors found.</p>
      ) : (
        <div className="row justify-content-center">
          {filteredAuthors.map((author) => {
            // Dynamically generate the image path
            const imagePath = `/images/${author.name.toLowerCase().replace(/ /g, '_')}_img.webp`;

            return (
              <div key={author.id} className="col-lg-2 col-md-3 col-sm-4 mb-4 text-center">
                <Card title={author.name}>
                  {/* Display the dynamically generated image as a small rounded thumbnail */}
                  <Link to={`/authors/${author.id}`} className="author-link">
                    <img 
                      src={imagePath} 
                      alt={author.name} 
                      className="author-thumbnail" // Apply thumbnail-specific class
                    />
                    <p className="author-name mt-2">{author.name}</p>
                  </Link>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Authors;
