import axios from 'axios';

const API_KEY = '0a0376ef4c13e93707c57def3e9ac8ca';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovieAPI = id => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  return axios.get(url);
};

export const getMovieCreditsAPI = id => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
  return axios.get(url);
};

export const getMovieReviewsAPI = id => {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
  return axios.get(url);
};

export const getMovieTrendingAPI = () => {
  const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
  return axios.get(url);
};

export const SearchMovieAPI = value => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}`;
  return axios.get(url);
};
