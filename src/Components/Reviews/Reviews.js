import PropTypes from 'prop-types';
import s from './Reviews.module.css';

function Reviews({ array }) {
  return (
    <>
      <ul>
        {array.length > 0 ? (
          array.map(review => {
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

Reviews.propTypes = {
  array: PropTypes.array,
};

export default Reviews;
