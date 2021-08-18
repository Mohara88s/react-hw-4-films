import { useState, useEffect } from 'react';
import { fetchTrendingMoviesToday } from '../../services/themoviedb-api';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage() {
  const { url } = useRouteMatch();
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMoviesToday().then(request => {
      setMovies(request.results);
    });
  }, []);

  return (
    <div className={styles.HomePage}>
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id} className={styles.list__item}>
              <Link
                to={{
                  pathname: `${url}movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
