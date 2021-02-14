import axios from 'axios';

const API_KEY = '0a0376ef4c13e93707c57def3e9ac8ca';
const BASE_URL = 'https://api.themoviedb.org/3';

export default function getMovieAPI(id) {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  return axios.get(url);
}
