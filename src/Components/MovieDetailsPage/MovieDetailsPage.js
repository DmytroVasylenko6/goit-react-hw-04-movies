import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import image from '../images/unnamed.png';
import Cast from '../Cast';
import Reviews from '../Reviews';
import Button from '../Button';
import getMovieAPI from '../../Services/getMovieAPI';
import getMovieCreditsAPI from '../../Services/getMovieCreditsAPI';
import getMovieReviewsAPI from '../../Services/getMovieReviewsAPI';

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    genres: [],
    credits: [],
    reviews: [],
    error: '',
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    getMovieAPI(movieId)
      .then(response => {
        this.setState({ movie: response.data, genres: response.data.genres });
      })
      .catch(error => this.setState({ error }));

    getMovieCreditsAPI(movieId)
      .then(response => {
        this.setState({ credits: response.data.cast });
      })
      .catch(error => this.setState({ error }));

    getMovieReviewsAPI(movieId)
      .then(response => {
        this.setState({ reviews: response.data.results });
      })
      .catch(error => this.setState({ error }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    const { state } = location;

    if (state && state.from) {
      return history.push(state.from);
    }

    history.push('/');
  };

  render() {
    const { movie, genres, credits, reviews } = this.state;
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
              <Link to={`${url}/credits`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <Route
          path={`${path}/credits`}
          render={props => <Cast {...props} array={credits} />}
        />
        <Route
          path={`${path}/reviews`}
          render={props => <Reviews {...props} array={reviews} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
