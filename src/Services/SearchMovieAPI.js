import axios from 'axios';

const API_KEY = '0a0376ef4c13e93707c57def3e9ac8ca';
const BASE_URL = 'https://api.themoviedb.org/3';

export default function SearchMovieAPI(value) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}`;
  return axios.get(url);
}
