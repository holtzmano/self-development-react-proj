import React from 'react';
import { Link } from 'react-router-dom';

const stories = [
  { id: 1, title: "The Tortoise and the Hare", author: "Aesop" },
  { id: 2, title: "The Boy Who Cried Wolf", author: "Aesop" },
  { id: 3, title: "The Fox and the Grapes", author: "Aesop" },
  { id: 4, title: "The Lion and the Mouse", author: "Aesop" },
  { id: 5, title: "The Ant and the Grasshopper", author: "Aesop" }
];

function Stories() {
  return (
	<div>
	  <h1>Stories</h1>
	  <ul>
		{stories.map((story) => (
		  <li key={story.id}>
			<Link to={`/stories/${story.id}`}>{story.title} - {story.author}</Link>
		  </li>
		))}
	  </ul>
	</div>
  );
}

export default Stories;