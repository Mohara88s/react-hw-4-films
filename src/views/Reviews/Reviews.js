import { useState, useEffect } from 'react';
import { fetchMovieReviewsById } from '../../services/themoviedb-api';
import PropTypes from 'prop-types';

export default function Cast({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviewsById(movieId).then(request => setReviews(request.results));
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(el => (
            <li key={el.id}>
              <p>
                <span>Author: </span>
                {el.author}
              </p>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>We don't have any reviews for this movie</h2>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};
