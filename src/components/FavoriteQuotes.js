import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

function FavoriteQuotes() {
  const { favoriteQuotes, favoriteAuthors, favoriteStories, favoriteLessons } = useContext(FavoritesContext);

  return (
	<div>
	  <h1>Favorite Items</h1>
	  
	  <h2>Quotes ({favoriteQuotes.length})</h2>
	  <ul>
		{favoriteQuotes.map((quote, index) => (
		  <li key={index}>
			<p>{quote.text}</p>
			<p><em>- {quote.author}</em></p>
		  </li>
		))}
	  </ul>
	  
	  <h2>Authors ({favoriteAuthors.length})</h2>
	  <ul>
		{favoriteAuthors.map((author, index) => (
		  <li key={index}>
			<p>{author.name}</p>
		  </li>
		))}
	  </ul>
	  
	  <h2>Stories ({favoriteStories.length})</h2>
	  <ul>
		{favoriteStories.map((story, index) => (
		  <li key={index}>
			<p>{story.title}</p>
			<p>{story.content}</p>
		  </li>
		))}
	  </ul>
	  
	  <h2>Practical Lessons ({favoriteLessons.length})</h2>
	  <ul>
		{favoriteLessons.map((lesson, index) => (
		  <li key={index}>
			<p>{lesson.title}</p>
			<p>{lesson.content}</p>
		  </li>
		))}
	  </ul>
	</div>
  );
}

export default FavoriteQuotes;