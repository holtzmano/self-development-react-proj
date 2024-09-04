import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../../../contexts/FavoritesContext';
import quotes from './QuotesData';
import DetailView from '../../../components/DetailView';


function QuoteDetail() {
  const { id } = useParams();
  const { addFavorite, removeFavorite, favoriteQuotes } = useContext(FavoritesContext);
  const quote = quotes.find(q => q.id === parseInt(id));
  const isFavorite = favoriteQuotes.some(fav => fav.id === quote.id);

  const toggleFavorite = () => {
    isFavorite ? removeFavorite('quote', quote) : addFavorite('quote', quote);
  };

  return (
    <DetailView
      title={quote.text}
      subtitle={`Author: ${quote.author}`}
      content={
        <button onClick={toggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      }
    />
  );
}

export default QuoteDetail;