import PropTypes from 'prop-types';
import s from './MoviesList.module.css';
import { Link } from 'react-router-dom';

function MoviesList({ movies, location }) {
  return (
    <ul className={s.MoviesList}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.item}>
            <Link
              to={{ pathname: `movies/${movie.id}`, state: { from: location } }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
