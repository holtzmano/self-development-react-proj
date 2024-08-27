import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const [favoriteAuthors, setFavoriteAuthors] = useState([]);
  const [favoriteStories, setFavoriteStories] = useState([]);
  const [favoriteLessons, setFavoriteLessons] = useState([]);

  const addFavorite = (type, item) => {
    switch (type) {
      case 'quote':
        setFavoriteQuotes([...favoriteQuotes, item]);
        break;
      case 'author':
        setFavoriteAuthors([...favoriteAuthors, item]);
        break;
      case 'story':
        setFavoriteStories([...favoriteStories, item]);
        break;
      case 'lesson':
        setFavoriteLessons([...favoriteLessons, item]);
        break;
      default:
        break;
    }
  };

  const removeFavorite = (type, item) => {
    switch (type) {
      case 'quote':
        setFavoriteQuotes(favoriteQuotes.filter(fav => fav.id !== item.id));
        break;
      case 'author':
        setFavoriteAuthors(favoriteAuthors.filter(fav => fav.id !== item.id));
        break;
      case 'story':
        setFavoriteStories(favoriteStories.filter(fav => fav.id !== item.id));
        break;
      case 'lesson':
        setFavoriteLessons(favoriteLessons.filter(fav => fav.id !== item.id));
        break;
      default:
        break;
    }
  };

  return (
    <FavoritesContext.Provider value={{ favoriteQuotes, favoriteAuthors, favoriteStories, favoriteLessons, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};