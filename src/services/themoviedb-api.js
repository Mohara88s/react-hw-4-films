const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '618d26280c3d16ba0e8ea1b5e615dd52';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchAPI(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not fond'));
}

export function fetchTrendingMoviesToday() {
  return fetchAPI(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}

export function fetchMoviesByQuery(query) {
  return fetchAPI(`${BASE_URL}search/movie?api_key=${KEY}&query=${query}`);
}

export function fetchMovieById(movieId) {
  return fetchAPI(`${BASE_URL}movie/${movieId}?api_key=${KEY}`);
}

export function fetchMovieCastById(movieId) {
  return fetchAPI(`${BASE_URL}movie/${movieId}/credits?api_key=${KEY}`);
}

export function fetchMovieReviewsById(movieId) {
  return fetchAPI(`${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}`);
}
