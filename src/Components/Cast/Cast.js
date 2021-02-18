import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Cast.module.css';
import { getMovieCreditsAPI } from '../../services/MovieAPI';

class Cast extends Component {
  state = {
    credits: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    getMovieCreditsAPI(movieId)
      .then(response => {
        this.setState({ credits: response.data.cast });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { credits } = this.state;
    return (
      <>
        <ul>
          {credits.length > 0 ? (
            credits.map(cast => {
              return (
                <li key={cast.id}>
                  <p>{cast.name}</p>
                </li>
              );
            })
          ) : (
            <li>No cast</li>
          )}
        </ul>
      </>
    );
  }
}

Cast.propTypes = {
  credits: PropTypes.array,
};

export default Cast;
