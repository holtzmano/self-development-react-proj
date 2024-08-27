import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Navigation from './components/Navigation';
import Authors from './components/Authors';
import AuthorDetail from './components/AuthorDetail';
import Quotes from './components/Quotes';
import QuoteDetail from './components/QuoteDetail';
import Stories from './components/Stories';
import StoryDetail from './components/StoryDetail';
import PracticalLessons from './components/PracticalLessons';
import PracticalLessonDetail from './components/PracticalLessonDetail';
import FavoriteQuotes from './components/FavoriteQuotes';
import MainPage from './components/MainPage'; // Import MainPage component

function App() {
  return (
    <UserProvider>
      <FavoritesProvider>
        <Router>
          <div className="App">
            <Navigation />
            <Routes>
              <Route path="/" element={<MainPage />} /> {/* Add this line */}
              <Route path="/authors" element={<Authors />} />
              <Route path="/authors/:id" element={<AuthorDetail />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/quotes/:id" element={<QuoteDetail />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/stories/:id" element={<StoryDetail />} />
              <Route path="/practical-lessons" element={<PracticalLessons />} />
              <Route path="/practical-lessons/:id" element={<PracticalLessonDetail />} />
              <Route path="/favorites" element={<FavoriteQuotes />} />
            </Routes>
          </div>
        </Router>
      </FavoritesProvider>
    </UserProvider>
  );
}

export default App;
