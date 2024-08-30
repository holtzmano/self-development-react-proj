import React from 'react';
import { Link } from 'react-router-dom';
import quotes from './QuotesData';

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