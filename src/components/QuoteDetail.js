import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';

const quotes = [
  { id: 1, text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { id: 2, text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { id: 3, text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { id: 4, text: "Get busy living or get busy dying.", author: "Stephen King" },
  { id: 5, text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" }
];

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