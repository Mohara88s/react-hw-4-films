import React from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = () => <h2>HomePage</h2>;
const MoviesPage = () => <h2>MoviesPage</h2>;
const App = () => (
  <Switch>
    <Route path="/">
      <HomePage />
    </Route>
    <Route path="/movies">
      <MoviesPage />
    </Route>
  </Switch>
);
export default App;

// https://api.themoviedb.org/3/movie/550?api_key=618d26280c3d16ba0e8ea1b5e615dd52
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import 'modern-normalize/modern-normalize.css';
// import styles from './App.module.css';
