const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '618d26280c3d16ba0e8ea1b5e615dd52';

async function fetchAPI(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not fond'));
}

export function fetchTrendingMoviesByDay() {
  return fetchAPI(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}
