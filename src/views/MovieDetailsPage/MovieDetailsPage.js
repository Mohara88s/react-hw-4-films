import { useState, useEffect } from 'react';
import { fetchMovieById, IMAGE_URL } from '../../services/themoviedb-api';
import {
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

// import Reviews from "../Reviews/Reviews"
import Cast from '../Cast/Cast';

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMovieById(movieId).then(request => {
      setMovie(request);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={`${IMAGE_URL}${movie.poster_path}`}
            alt={movie.original_title}
          />
          <h2>{movie.original_title}</h2>
          <p>User score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          {movie.genres &&
            movie.genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
        </>
      )}
      <hr />
      <p>Additional information</p>

      <Link to={`${url}/cast`}>Cast</Link>

      <hr />

      <Switch>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        {/* <Route path="/movies/:movieId/reviews">
          <Reviews/>
        </Route> */}
      </Switch>
    </>
  );
}
