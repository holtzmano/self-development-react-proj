import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';

function AuthorDetail() {
    
    const { id } = useParams();
    const { addFavorite, removeFavorite, favoriteAuthors } = useContext(FavoritesContext);
    const authors = [
        { 
            id: 1, 
            name: 'Brian Tracy',
            bio: 'Brian Tracy is a Canadian-American motivational public speaker and self-development author. He is the author of over seventy books that have been translated into dozens of languages. His popular books are Earn What You’re Really Worth, Eat That Frog!, and The Psychology of Achievement.',
            image: '/images/brian_tracy_img.webp'
        },        
        { id: 2, name: 'Stephen Covey', bio: 'Stephen Covey was an American educator, author, businessman, and keynote speaker. His most popular book is The 7 Habits of Highly Effective People.', image: '/images/stephen_covey_img.webp' },
        { id: 3, name: 'Napoleon Hill', bio: 'Napoleon Hill was an American self-help author. He is well known for his book Think and Grow Rich.', image: '/images/napoleon_hill_img.webp' },
        { id: 4, name: 'Kop Kopmeyer', bio: 'Kop Kopmeyer was an American author. He is best known for his book series, 1000 Ways to Motivate Yourself and Others.', image: '/images/kop_kopmeyer_img.webp' },
        { id: 5, name: 'Buddha', bio: 'Buddha was a philosopher, mendicant, meditator, spiritual teacher, and religious leader who lived in Ancient India. He is the founder of Buddhism.', image: '/images/buddha_img.webp' },
        { id: 6, name: 'Winston Churchill', bio: 'Winston Churchill was a British statesman, army officer, and writer. He was the Prime Minister of the United Kingdom from 1940 to 1945, when he led the country to victory in the Second World War, and again from 1951 to 1955.', image: '/images/winston_churchill_img.webp' },
        { id: 7, name: 'Thomas Edison', bio: 'Thomas Edison was an American inventor and businessman who has been described as America\'s greatest inventor. He developed many devices in fields such as electric power generation, mass communication, sound recording, and motion pictures.' },
        { id: 8, name: 'Alan Turing', bio: 'Alan Turing was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general-purpose computer.' },
        { id: 9, name: 'Dalai Lama', bio: 'The 14th Dalai Lama is the current Dalai Lama. Dalai Lamas are important monks of the Gelug school, the newest school of Tibetan Buddhism, which was formally headed by the Ganden Tripas.' },
        { id: 10, name: 'Abraham Lincoln', bio: 'Abraham Lincoln was an American statesman and lawyer who served as the 16th president of the United States from 1861 until his assassination in 1865. Lincoln led the nation through the American Civil War, the country\'s greatest moral, cultural, constitutional, and political crisis.' }
    ];
    const author = authors.find(a => a.id === parseInt(id));

    if (!author) {
        return <div>Author not found</div>;
    }

    const isFavorite = favoriteAuthors.some(fav => fav.id === author.id);

    const toggleFavorite = () => {
        isFavorite ? removeFavorite('author', author) : addFavorite('author', author);
    };

    return (
        <div>
            <h1>{author.name}</h1>
            {author.image && <img src={author.image} alt={author.name} />}
            <p>{author.bio}</p>
            <button onClick={toggleFavorite}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
}

export default AuthorDetail;
