import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';

const stories = [
  { id: 1, title: "Story 1", content: "Content of story 1" },
  { id: 2, title: "Story 2", content: "Content of story 2" },
  { id: 3, title: "Story 3", content: "Content of story 3" },
  { id: 4, title: "Story 4", content: "Content of story 4" },
  { id: 5, title: "Story 5", content: "Content of story 5" }
];

function StoryDetail() {
  const { id } = useParams();
  const { addFavorite, removeFavorite, favoriteStories } = useContext(FavoritesContext);
  const story = stories.find(s => s.id === parseInt(id));
  const isFavorite = favoriteStories.includes(story);

  const toggleFavorite = () => {
    isFavorite ? removeFavorite('story', story) : addFavorite('story', story);
  };

  return (
    <div>
      <h1>{story.title}</h1>
      <p>{story.content}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default StoryDetail;