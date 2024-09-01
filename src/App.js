import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { FavoritesProvider } from './contexts/FavoritesContext';

import PageLayout from './features/shared/components/PageLayout'
import Authors from './features/authors/components/Authors';
import AuthorDetail from './features/authors/components/AuthorDetail';
import Quotes from './features/quotes/components/Quotes';
import QuoteDetail from './features/quotes/components/QuoteDetail';
import Stories from './features/stories/components/Stories';
import StoryDetail from './features/stories/components/StoryDetail';
import PracticalLessons from './features/lessons/components/PracticalLessons';
import PracticalLessonDetail from './features/lessons/components/PracticalLessonDetail';
import FavoriteQuotes from './features/quotes/components/FavoriteQuotes';
import MainPage from './features/shared/components/MainPage';

function App() {
  return (
    <UserProvider>
      <FavoritesProvider>
        <Router>
          <PageLayout>
            <Routes>
              <Route path="/" element={<MainPage />} /> 
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
          </PageLayout>
        </Router>
      </FavoritesProvider>
    </UserProvider>
  );
}

export default App;
