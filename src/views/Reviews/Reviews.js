import { useState, useEffect } from 'react';
import { fetchMovieReviewsById } from '../../services/themoviedb-api';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviewsById(movieId).then(request => setReviews(request.results));
  }, [movieId]);
  return (
    <div className={styles.Reviews}>
      {reviews.length > 0 ? (
        <ul className={styles.Reviews__list}>
          {reviews.map(el => (
            <li key={el.id}>
              <p className={styles.Reviews__author}>
                <span>Author: </span>
                {el.author}
              </p>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};
