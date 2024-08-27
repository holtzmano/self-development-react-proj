import React from 'react';
import { Link } from 'react-router-dom';

const quotes = [
  { id: 1, text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { id: 2, text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { id: 3, text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { id: 4, text: "Get busy living or get busy dying.", author: "Stephen King" },
  { id: 5, text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" }
];

function Quotes() {
  return (
	<div>
	  <h1>Quotes</h1>
	  <ul>
		{quotes.map((quote) => (
		  <li key={quote.id}>
			<Link to={`/quotes/${quote.id}`}>{quote.text} - {quote.author}</Link>
		  </li>
		))}
	  </ul>
	</div>
  );
}

export default Quotes;