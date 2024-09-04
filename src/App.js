import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { FavoritesProvider } from './contexts/FavoritesContext';

import PageLayout from './features/shared/components/PageLayout'
const Authors = React.lazy(() => import('./features/authors/components/Authors'));
const AuthorDetail = React.lazy(() => import('./features/authors/components/AuthorDetail'));
const Quotes = React.lazy(() => import('./features/quotes/components/Quotes'));
const QuoteDetail = React.lazy(() => import('./features/quotes/components/QuoteDetail'));
const Stories = React.lazy(() => import('./features/stories/components/Stories'));
const StoryDetail = React.lazy(() => import('./features/stories/components/StoryDetail'));
const PracticalLessons = React.lazy(() => import('./features/lessons/components/PracticalLessons'));
const PracticalLessonDetail = React.lazy(() => import('./features/lessons/components/PracticalLessonDetail'));
const FavoriteQuotes = React.lazy(() => import('./features/quotes/components/FavoriteQuotes'));
const MainPage = React.lazy(() => import('./features/shared/components/MainPage'));
const NotFoundPage = React.lazy(() => import('./features/shared/components/NotFoundPage'));

function App() {
  return (
    <UserProvider>
      <FavoritesProvider>
        <Router>
          <PageLayout>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {/* Main landing page */}
                <Route path="/" element={<MainPage />} /> 
                
                {/* Author-related routes */}
                <Route path="/authors" element={<Authors />} />
                <Route path="/authors/:id" element={<AuthorDetail />} />
                
                {/* Quote-related routes */}
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/quotes/:id" element={<QuoteDetail />} />
                
                {/* Story-related routes */}
                <Route path="/stories" element={<Stories />} />
                <Route path="/stories/:id" element={<StoryDetail />} />
                
                {/* Practical Lessons-related routes */}
                <Route path="/practical-lessons" element={<PracticalLessons />} />
                <Route path="/practical-lessons/:id" element={<PracticalLessonDetail />} />
                
                {/* Favorites page */}
                <Route path="/favorites" element={<FavoriteQuotes />} />

                {/* Fallback Route for 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </PageLayout>
        </Router>
      </FavoritesProvider>
    </UserProvider>
  );
}

export default App;
