import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from '../../services/themoviedb-api';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import Searchbar from '../../components/Searchbar/Searchbar';

export default function MoviesPage() {
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(
    new URLSearchParams(location.search).get('query') ?? '',
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery)
      fetchMoviesByQuery(searchQuery)
        .then(request => {
          setMovies(request.results);
        })
        .catch(error => setError(error.message));
  }, [searchQuery]);

  const onChangeQuery = query => {
    setMovies([]);
    setError(null);
    setSearchQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />

      {error && (
        <p style={{ color: 'red', textAlign: 'center', fontSize: '20px' }}>
          This is error: {error}
        </p>
      )}

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
