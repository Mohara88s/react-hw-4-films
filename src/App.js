import { lazy, Suspense } from 'react';
import AppBar from './components/AppBar/AppBar';
import Loader from 'react-loader-spinner';
// import HomePage from './views/HomePage/HomePage';
// import MoviesPage from './views/MoviesPage/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import NotFoundView from './views/NotFoundView/NotFoundView';
import { Route, Switch } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.js' /* webpackChunkName:"HomePage" */),
);
const MoviesPage = lazy(() =>
  import(
    './views/MoviesPage/MoviesPage.js' /* webpackChunkName:"MoviesPage" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName:" MovieDetailsPage" */
  ),
);

export default function App() {
  return (
    <>
      <AppBar />

      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
