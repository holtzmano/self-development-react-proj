import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../../../contexts/FavoritesContext';
import '../styles/authors.css'; 

function AuthorDetail() {
    const { id } = useParams();
    const { addFavorite, removeFavorite, favoriteAuthors } = useContext(FavoritesContext);
    const authors = [
        { 
            id: 1, 
            name: 'Brian Tracy',
            bio: 'Brian Tracy is a Canadian-American motivational public speaker and self-development author. He is the author of over seventy books that have been translated into dozens of languages. His popular books are Earn What You’re Really Worth, Eat That Frog!, and The Psychology of Achievement.'
        },        
        { id: 2, name: 'Stephen Covey', bio: 'Stephen Covey was an American educator, author, businessman, and keynote speaker. His most popular book is The 7 Habits of Highly Effective People.' },
        { id: 3, name: 'Napoleon Hill', bio: 'Napoleon Hill was an American self-help author. He is well known for his book Think and Grow Rich.' },
        { id: 4, name: 'Kop Kopmeyer', bio: 'Kop Kopmeyer was an American author. He is best known for his book series, 1000 Ways to Motivate Yourself and Others.' },
        { id: 5, name: 'Buddha', bio: 'Buddha was a philosopher, mendicant, meditator, spiritual teacher, and religious leader who lived in Ancient India. He is the founder of Buddhism.' },
        { id: 6, name: 'Winston Churchill', bio: 'Winston Churchill was a British statesman, army officer, and writer. He was the Prime Minister of the United Kingdom from 1940 to 1945, when he led the country to victory in the Second World War, and again from 1951 to 1955.' },
        { id: 7, name: 'Thomas Edison', bio: 'Thomas Edison was an American inventor and businessman who has been described as America\'s greatest inventor. He developed many devices in fields such as electric power generation, mass communication, sound recording, and motion pictures.' },
        { id: 8, name: 'Alan Turing', bio: 'Alan Turing was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general-purpose computer.' },
        { id: 9, name: 'Dalai Lama', bio: 'The 14th Dalai Lama is the current Dalai Lama. Dalai Lamas are important monks of the Gelug school, the newest school of Tibetan Buddhism, which was formally headed by the Ganden Tripas.' },
        { id: 10, name: 'Abraham Lincoln', bio: 'Abraham Lincoln was an American statesman and lawyer who served as the 16th president of the United States from 1861 until his assassination in 1865. Lincoln led the nation through the American Civil War, the country\'s greatest moral, cultural, constitutional, and political crisis.' },
        { id: 11, name: 'Franklin D. Roosevelt', bio: 'Franklin Delano Roosevelt, often referred to by his initials FDR, was an American politician who served as the 32nd president of the United States from 1933 until his death in 1945. A member of the Democratic Party, he won a record four presidential elections and became a central figure in world events during the first half of the 20th century.' },
        { id: 12, name: 'John Lennon', bio: 'John Winston                                   Lennon was an English singer, songwriter, and peace activist who gained worldwide fame as the founder, co-lead vocalist, and rhythm guitarist of the Beatles. His songwriting partnership with Paul McCartney remains the most successful in history.' },
        { id: 13, name: 'Steve Jobs', bio: 'Steven Paul Jobs was an American business magnate, industrial designer, investor, and media proprietor. He was the chairman, chief executive officer, and co-founder of Apple Inc., the chairman and majority shareholder of Pixar, a member of The Walt Disney Company\'s board of directors following its acquisition of Pixar, and the founder, chairman, and CEO of' },
        { id: 14, name: 'Chinese Proverb', bio: 'Chinese proverbs are popular sayings taken from literature, history, and famous people like philosophers, politicians, and writers. The phrases are often used colloquially as statements of wisdom or advice.' },
        { id: 15, name: 'Frank Sinatra', bio: 'Francis Albert Sinatra was an American singer, actor, and producer who was one of the most popular and influential musical artists of the 20th century. He is one of the best-selling music artists of all time, having sold more than 150 million records worldwide.' },
        { id: 16, name: 'Ralph Waldo Emerson', bio: 'Ralph Waldo Emerson was an American essayist, lecturer, philosopher, and poet who led the transcendentalist movement of the mid-19th century. He was seen as a champion of individualism and a prescient critic of the countervailing pressures of society, and he disseminated his thoughts through dozens of published essays and more than 1,500 public lectures across the United States.' },
        { id: 17, name: 'Peter Drucker', bio: 'Peter Ferdinand Drucker was an Austrian-born American management consultant, educator, and author, whose writings contributed to the philosophical and practical foundations of the modern business corporation. He was also a leader in the development of management education, he invented the concept known as management by objectives and self-control, and he has been described as "the founder of modern management".' },
        { id: 18, name: 'Jordan Belfort', bio: 'Jordan Ross Belfort is an American author, motivational speaker, and former stockbroker. In 1999, he pleaded guilty to fraud and related crimes in connection with stock-market manipulation and running a boiler room as part of a penny-stock scam. Belfort spent 22 months in prison as part of an agreement under which he gave testimony against numerous partners and subordinates in his fraud scheme.' },
        { id: 19, name: 'Audrey Hepburn', bio: 'Audrey Hepburn was a British actress and humanitarian. Recognized as a film and fashion icon, Hepburn was active during Hollywood\'s Golden Age. She was ranked by the American Film Institute as the third-greatest' },
        { id: 20, name: 'Helen Keller', bio: 'Helen Adams Keller was an American author, political activist, and lecturer. She was the first deaf-blind person to earn a Bachelor of Arts degree. The story of Keller and her teacher, Anne Sullivan, was made famous by Keller\'s autobiography, The Story of My Life, and its adaptations for film and stage, The Miracle Worker.' },
        { id: 21, name: 'Joel Brown', bio: 'Joel Brown is an Australian entrepreneur, motivational speaker, and coach. He is the founder of the website and podcast Addicted2Success.' },
        { id: 22, name: 'Calvin Coolidge', bio: 'John Calvin Coolidge Jr. was an American politician and lawyer who served as the 30th president of the United States from 1923 to 1929. A Republican lawyer from New England, born in Vermont, Coolidge worked his way up the ladder of Massachusetts state politics, eventually becoming governor of Massachusetts.' },
        { id: 23, name: 'Steve Jobs', bio: 'Steven Paul Jobs was an American business magnate, industrial designer, investor, and media proprietor. He was the chairman, chief executive officer, and co-founder of Apple Inc., the chairman and majority shareholder of Pixar, a member of The Walt Disney Company\'s board of directors following its acquisition of Pixar, and the founder, chairman, and CEO of' },
        { id: 24, name: 'Walt Disney', bio: 'Walter Elias Disney was an American entrepreneur, animator, writer, voice actor, and film producer. A pioneer of the American animation industry, he introduced several developments in the production of cartoons. As a film producer, Disney holds the record for most Academy Awards earned by an individual, having won 22 Oscars from 59 nominations.' },
        { id: 25, name: 'Paul Halmos', bio: 'Paul Richard Halmos was a Hungarian-born American mathematician who made fundamental advances in the areas of mathematical logic, probability theory, statistics, operator theory, ergodic theory, and functional analysis.' },
        { id: 26, name: 'Benjamin Franklin', bio: 'Benjamin Franklin was one of the Founding Fathers of the United States. A polymath, he was a leading writer, printer, political philosopher, politician, Freemason, postmaster, scientist, inventor, humorist, civic activist, statesman, and diplomat.' },
        { id: 27, name: 'Napoleon Bonaparte', bio: 'Napoleon Bonaparte was a French military and political leader who rose to prominence during the French Revolution and led several successful campaigns during the Revolutionary Wars. He was the de facto leader of the French Republic as First Consul from 1799 to 1804.' },
        { id: 28, name: 'Napoleon Hill', bio: 'Napoleon Hill was an American self-help author. He is well known for his book Think and Grow Rich.' },
        { id: 29, name: 'Elbert Hubbard', bio: 'Elbert Green Hubbard was an American writer, publisher, artist, and philosopher. Raised in Hudson, Illinois, he had early success as a traveling salesman for the Larkin Soap Company. Presently Hubbard is known best as the founder of the Roycroft artisan community in East Aurora, New York, an influential exponent of the Arts and Crafts Movement.' },
        { id: 30, name: 'Winston Churchill', bio: 'Winston Churchill was a British statesman, army officer, and writer. He was the Prime Minister of the United Kingdom from 1940 to 1945, when he led the country to victory in the Second World War, and again from 1951 to 1955.' },
        { id: 31, name: 'Albert Schweitzer', bio: 'Albert Schweitzer was an Alsatian polymath. He was a theologian, organist, writer, humanitarian, philosopher, and physician. A Lutheran, Schweitzer challenged both the secular view of Jesus as depicted by historical-critical methodology current at his time in certain academic circles, as well as the traditional Christian view.' },
        { id: 32, name: 'Theodor Herzl', bio: 'Theodor Herzl was an Austro-Hungarian journalist, playwright, political activist, and writer who was the father of modern political Zionism. Herzl formed the World Zionist Organization and promoted Jewish migration to ' }
    ];
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
        <div>
            <h1>{author.name}</h1>
            <img src={imagePath} alt={author.name} className="author-image" />
            <p>{author.bio}</p>
            <button onClick={toggleFavorite}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
}

export default AuthorDetail;