import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import image from '../../components/images/unnamed.png';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import Button from '../../components/common/Button';
import { getMovieAPI } from '../../services/MovieAPI';

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    genres: [],
    error: '',
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    getMovieAPI(movieId)
      .then(response => {
        this.setState({ movie: response.data, genres: response.data.genres });
      })
      .catch(error => this.setState({ error }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || '/');
  };

  render() {
    const { movie, genres } = this.state;
    const { poster_path, title, vote_average, overview } = movie;
    const { url, path } = this.props.match;

    return (
      <>
        <Button text={'Go back'} listener={this.handleGoBack} type={'button'} />
        <div className={s.container}>
          <img
            className={s.imagePoster}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : image
            }
            alt={title}
          />
          <div>
            <h1 className={s.title}>{title}</h1>
            <p>Raiting: {vote_average}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul className={s.genersList}>
              {genres.map(genre => {
                return (
                  <li key={genre.id} className={s.genersItem}>
                    {genre.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${url}/credits`,
                  state: { from: this.props.location },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: this.props.location },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Route path={`${path}/credits`} component={Cast} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
