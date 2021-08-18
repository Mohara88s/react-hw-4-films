import { useState, useEffect } from 'react';
import { fetchMovieById, IMAGE_URL } from '../../services/themoviedb-api';
import {
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
} from 'react-router-dom';

import Reviews from '../Reviews/Reviews';
import Cast from '../Cast/Cast';
import styles from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMovieById(movieId).then(request => {
      setMovie(request);
    });
  }, [movieId]);
  const onGoBack = () => {
    history.push(location?.state?.from ?? '/movies');
  };

  return (
    <>
      <button type="button" onClick={onGoBack} className={styles.button}>
        &#8592; go back
      </button>
      <div className={styles.card}>
        {movie && (
          <>
            <img
              className={styles.card__pic}
              src={
                movie.poster_path
                  ? `${IMAGE_URL}${movie.poster_path}`
                  : 'https://www.meme-arsenal.com/memes/56560310e90c633f9239e83ea1523504.jpg'
              }
              alt={movie.original_title}
            />
            <div className={styles.card__info}>
              <h2>{movie.original_title}</h2>
              <p>User score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              {movie.genres &&
                movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
            </div>
          </>
        )}
      </div>
      <hr />
      <p>Additional information</p>

      <ul className={styles.list}>
        <li>
          <Link
            to={{
              pathname: `${url}/cast`,
              state: { from: location?.state?.from ?? '/movies' },
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `${url}/reviews`,
              state: { from: location?.state?.from ?? '/movies' },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}
