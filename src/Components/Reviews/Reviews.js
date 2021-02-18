import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Reviews.module.css';
import { getMovieReviewsAPI } from '../../services/MovieAPI';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    getMovieReviewsAPI(movieId)
      .then(response => {
        this.setState({ reviews: response.data.results });
      })
      .catch(error => this.setState({ error }));
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.length > 0 ? (
            reviews.map(review => {
              return (
                <li key={review.id}>
                  <h2>Author: {review.author}</h2>
                  <p>{review.content}</p>
                </li>
              );
            })
          ) : (
            <li>No reviews</li>
          )}
        </ul>
      </>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
