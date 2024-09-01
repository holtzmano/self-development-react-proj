import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../../../contexts/FavoritesContext';
import quotes from './QuotesData';


function QuoteDetail() {
  const { id } = useParams();
  const { addFavorite, removeFavorite, favoriteQuotes } = useContext(FavoritesContext);
  const quote = quotes.find(q => q.id === parseInt(id));
  const isFavorite = favoriteQuotes.some(fav => fav.id === quote.id);

  const toggleFavorite = () => {
    isFavorite ? removeFavorite('quote', quote) : addFavorite('quote', quote);
  };

  return (
    <div>
      <h1>{quote.text}</h1>
      <p>Author: {quote.author}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default QuoteDetail;