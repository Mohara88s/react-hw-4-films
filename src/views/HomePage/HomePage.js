import { useState, useEffect } from 'react';
import { fetchTrendingMoviesToday } from '../../services/themoviedb-api';
import { Link, useRouteMatch } from 'react-router-dom';

export default function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMoviesToday().then(request => {
      setMovies(request.results);
    });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
