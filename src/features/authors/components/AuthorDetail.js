import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../../../contexts/FavoritesContext';
import '../styles/authors.css'; 
import authors from './AuthorsData';
import DetailView from '../../../components/DetailView';

function AuthorDetail() {
    const { id } = useParams();
    const { addFavorite, removeFavorite, favoriteAuthors } = useContext(FavoritesContext);
    
    const author = authors.find(a => a.id === parseInt(id));

    if (!author) {
        return <div>Author not found</div>;
    }

    const isFavorite = favoriteAuthors.some(fav => fav.id === author.id);

    const toggleFavorite = () => {
        isFavorite ? removeFavorite('author', author) : addFavorite('author', author);
    };

    // Generate image path dynamically
    const imagePath = `/images/${author.name.toLowerCase().replace(/ /g, '_')}_img.webp`;

    return (
        <DetailView
            title={author.name}
            subtitle={author.bio}
            content={
                <>
                    <img src={imagePath} alt={author.name} className="author-image" />
                    <button onClick={toggleFavorite}>
                        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </>
            }
        />
    );
}

export default AuthorDetail;