import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import PageLayout from './features/shared/components/PageLayout';

// Lazy-loaded components for optimization
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
            <Suspense fallback={<div className="text-center my-5">Loading...</div>}>
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
