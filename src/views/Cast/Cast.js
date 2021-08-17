import { useState, useEffect } from 'react';
import { fetchMovieCastbyId, IMAGE_URL } from '../../services/themoviedb-api';

export default function Cast({ movieId }) {
  console.log(movieId);
  const [cast, setCast] = useState([null]);

  useEffect(() => {
    fetchMovieCastbyId(movieId).then(request => setCast(request.cast));
  }, []);
  return (
    <>
      <h1>cast</h1>
      <ul className="Cast">
        {cast.map(el => (
          <li key={el.id} className="CastItem">
            <img
              src={IMAGE_URL + el.profile_path}
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
