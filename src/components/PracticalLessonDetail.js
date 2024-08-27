import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';

const lessons = [
    { id: 1, title: "Lesson 1", content: "Content of lesson 1" },
    { id: 2, title: "Lesson 2", content: "Content of lesson 2" },
    { id: 3, title: "Lesson 3", content: "Content of lesson 3" },
    { id: 4, title: "Lesson 4", content: "Content of lesson 4" },
    { id: 5, title: "Lesson 5", content: "Content of lesson 5" }
];

function PracticalLessonDetail() {
    const { id } = useParams();
    const { addFavorite, removeFavorite, favoriteLessons } = useContext(FavoritesContext);
    const lesson = lessons.find(l => l.id === parseInt(id));
    const isFavorite = favoriteLessons.includes(lesson);

    const toggleFavorite = () => {
        isFavorite ? removeFavorite('lesson', lesson) : addFavorite('lesson', lesson);
    };

    return (
        <div>
            <h1>{lesson.title}</h1>
            <p>{lesson.content}</p>
            <button onClick={toggleFavorite}>
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    );
}

export default PracticalLessonDetail;