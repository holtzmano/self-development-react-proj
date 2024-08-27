import React from 'react';
import { Link } from 'react-router-dom';

const lessons = [
  { id: 1, title: "Lesson 1: Introduction to React", description: "Learn the basics of React." },
  { id: 2, title: "Lesson 2: State and Props", description: "Understand state and props in React." },
  { id: 3, title: "Lesson 3: Component Lifecycle", description: "Learn about the component lifecycle in React." },
  { id: 4, title: "Lesson 4: Handling Events", description: "Learn how to handle events in React." },
  { id: 5, title: "Lesson 5: Conditional Rendering", description: "Understand conditional rendering in React." }
];

function PracticalLessons() {
  return (
	<div>
	  <h1>Practical Lessons</h1>
	  <ul>
		{lessons.map((lesson) => (
		  <li key={lesson.id}>
			<Link to={`/practical-lessons/${lesson.id}`}>{lesson.title}</Link>
		  </li>
		))}
	  </ul>
	</div>
  );
}

export default PracticalLessons;