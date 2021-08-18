import { useState, useEffect } from 'react';
import { fetchMovieCastById, IMAGE_URL } from '../../services/themoviedb-api';
import PropTypes from 'prop-types';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCastById(movieId).then(request => setCast(request.cast));
  }, [movieId]);
  return (
    <>
      <ul className="Cast">
        {cast &&
          cast.map(el => (
            <li key={el.id} className="CastItem">
              <img
                src={
                  el.profile_path
                    ? `${IMAGE_URL}${el.profile_path}`
                    : 'https://www.meme-arsenal.com/memes/56560310e90c633f9239e83ea1523504.jpg'
                }
                alt={el.name}
                className="CastItem_img"
              />
              <p className="CastItem_text">{el.name}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};
