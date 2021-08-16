import { useState, useEffect } from 'react';
import * as serviceAPI from '../services/themoviedb-api';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    serviceAPI.fetchTrendingMoviesByDay().then(request => {
      setMovies(request.results);
      console.log(request);
    });
  }, []);

  return (
    <>
      <h2>HomePage</h2>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

// to={`${url}/${movie.id}`}
