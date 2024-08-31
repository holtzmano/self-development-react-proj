import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import SearchBar component

const authors = [
  { id: 1, name: 'Brian Tracy' },
  { id: 2, name: 'Stephen Covey' },
  { id: 3, name: 'Napoleon Hill' },
  { id: 4, name: 'Kop Kopmeyer' },
  { id: 5, name: 'Buddha' },
  { id: 6, name: 'Winston Churchill' },
  { id: 7, name: 'Thomas Edison' },
  { id: 8, name: 'Alan Turing' },
  { id: 9, name: 'Dalai Lama' },
  { id: 10, name: 'Abraham Lincoln' },
  { id: 11, name: 'Albert Einstein' },
  { id: 12, name: 'Steve Jobs' },
  { id: 13, name: 'Henry Ford' },
  { id: 14, name: 'John F. Kennedy' },
  { id: 15, name: 'Martin Luther King Jr.' },
  { id: 16, name: 'Mahatma Gandhi' },
  { id: 17, name: 'Mother Teresa' },
  { id: 18, name: 'Nelson Mandela' },
  { id: 19, name: 'Oprah Winfrey' },
  { id: 20, name: 'Rosa Parks' },
  { id: 21, name: 'Walt Disney' },
  { id: 22, name: 'Warren Buffett' },
  { id: 23, name: 'Zig Ziglar' },
  { id: 24, name: 'Tony Robbins' },
  { id: 25, name: 'Jim Rohn' },
  { id: 26, name: 'Les Brown' },
  { id: 27, name: 'Earl Nightingale' },
  { id: 28, name: 'Robert Kiyosaki' },
  { id: 29, name: 'T. Harv Eker' },
  { id: 30, name: 'Grant Cardone' },
  { id: 31, name: 'Gary Vaynerchuk' },
  { id: 32, name: 'Eric Thomas' },
  { id: 33, name: 'Simon Sinek' },
  { id: 34, name: 'Brendon Burchard' },
  { id: 35, name: 'Mel Robbins' },
  { id: 36, name: 'Tim Ferriss' },
  { id: 37, name: 'Mark Cuban' },
  { id: 38, name: 'Elon Musk' },
  { id: 39, name: 'Jeff Bezos' },
  { id: 40, name: 'Bill Gates' },
  { id: 41, name: 'Warren Buffet' },
  { id: 42, name: 'Jack Ma' },
  { id: 43, name: 'Richard Branson' },
  { id: 44, name: 'Larry Page' },
  { id: 45, name: 'Sergey Brin' },
  { id: 46, name: 'Mark Zuckerberg' },
  { id: 47, name: 'Larry Ellison' },
  { id: 48, name: 'Michael Dell' },
  { id: 49, name: 'Steve Ballmer' },
  { id: 50, name: 'Satya Nadella' },
  { id: 51, name: 'Sundar Pichai' },
  { id: 52, name: 'Tim Cook' },
  { id: 53, name: 'Reed Hastings' },
  { id: 54, name: 'Brian Chesky' },
  { id: 55, name: 'Travis Kalanick' },
  { id: 56, name: 'Evan Spiegel' },
  { id: 57, name: 'Kevin Systrom' },
  { id: 58, name: 'Jeff Weiner' },
  { id: 59, name: 'Satya Nadella' },
  { id: 60, name: 'Susan Wojcicki' },
  { id: 61, name: 'Marissa Mayer' },
  { id: 62, name: 'Sheryl Sandberg' },
  { id: 63, name: 'Meg Whitman' },
  { id: 64, name: 'Ursula Burns' },
  { id: 65, name: 'Indra Nooyi' },
  { id: 66, name: 'Ginni Rometty' },
  { id: 67, name: 'Mary Barra' },
  { id: 68, name: 'Abigail Johnson' },
  { id: 69, name: 'Adena Friedman' },
  { id: 70, name: 'Safra Catz' },
  { id: 71, name: 'Ruth Porat' },
  { id: 72, name: 'Penny Pritzker' },
  { id: 73, name: 'Ivanka Trump' },
  { id: 74, name: 'Melania Trump' },
  { id: 75, name: 'Michelle Obama' },
  { id: 76, name: 'Hillary Clinton' },
  { id: 77, name: 'Nancy Pelosi' },
  { id: 78, name: 'Elizabeth Warren' },
  { id: 79, name: 'Kamala Harris' },
  { id: 80, name: 'Amy Klobuchar' },
  { id: 81, name: 'Cory Booker' },
  { id: 82, name: 'Bernie Sanders' },
  { id: 83, name: 'Joe Biden' },
  { id: 84, name: 'Donald Trump' },
  { id: 85, name: 'Barack Obama' },
  { id: 86, name: 'George W. Bush' },
  { id: 87, name: 'Bill Clinton' },
  { id: 88, name: 'George H. W. Bush' },
  { id: 89, name: 'Ronald Reagan' },
  { id: 90, name: 'Jimmy Carter' },
  { id: 91, name: 'Gerald Ford' },
  { id: 92, name: 'Richard Nixon' },
  { id: 93, name: 'Lyndon B. Johnson' },
  { id: 94, name: 'John F. Kennedy' },
  { id: 95, name: 'Dwight D. Eisenhower' },
  { id: 96, name: 'Harry S. Truman' },
  { id: 97, name: 'Franklin D. Roosevelt' },
  { id: 98, name: 'Herbert Hoover' },
  { id: 99, name: 'Calvin Coolidge' },
  { id: 100, name: 'Warren G. Harding' },
  { id: 101, name: 'Woodrow Wilson' },
  { id: 102, name: 'William Howard Taft' },
  { id: 103, name: 'Theodore Roosevelt' },
  { id: 104, name: 'William McKinley' },
  { id: 105, name: 'Grover Cleveland' },
  { id: 106, name: 'Benjamin Harrison' },
  { id: 107, name: 'Chester A. Arthur' },
  { id: 108, name: 'James A. Garfield' },
  { id: 109, name: 'Rutherford B. Hayes' },
  { id: 110, name: 'Ulysses S. Grant' },
  { id: 111, name: 'Andrew Johnson' },
  { id: 112, name: 'Abraham Lincoln' },
  { id: 113, name: 'James Buchanan' },
  { id: 114, name: 'Franklin Pierce' },
  { id: 115, name: 'Millard Fillmore' },
  { id: 116, name: 'Zachary Taylor' },
  { id: 117, name: 'James K. Polk' }

  
];

function Authors() {
  const [query, setQuery] = useState('');

  const filteredAuthors = authors.filter(author =>
	author.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Authors</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {filteredAuthors.length === 0 ? (
        <p>No authors found.</p>
      ) : (
        <ul>
          {filteredAuthors.map((author) => (
            <li key={author.id}>
              <Link to={`/authors/${author.id}`}>{author.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );  
}

export default Authors;