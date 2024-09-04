import React from 'react';
import { Link } from 'react-router-dom';
import quotes from './QuotesData';
import List from '../../../components/List';
import Card from '../../../components/Card';

function Quotes() {
  return (
	<div>
      <h1>Quotes</h1>
      <List
        items={quotes}
        renderItem={(quote) => (
          <Card 
            title={quote.text} 
            subtitle={`Author: ${quote.author}`}
          >
            <Link to={`/quotes/${quote.id}`}>Read more</Link>
          </Card>
        )}
      />
    </div>
  );
}

export default Quotes;