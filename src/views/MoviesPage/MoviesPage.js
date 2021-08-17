import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from '../../services/themoviedb-api';
import { Link, useRouteMatch } from 'react-router-dom';
import Searchbar from '../../components/Searchbar/Searchbar';
import Loader from 'react-loader-spinner';

export default function MoviesPage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery)
      fetchMoviesByQuery(searchQuery)
        .then(request => {
          setMovies(request.results);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
  }, [searchQuery]);

  const onChangeQuery = query => {
    setMovies([]);
    setError(null);
    setSearchQuery(query);
    setIsLoading(true);
  };

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />

      {isLoading && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}

      {error && (
        <p style={{ color: 'red', textAlign: 'center', fontSize: '20px' }}>
          This is error: {error}
        </p>
      )}

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
