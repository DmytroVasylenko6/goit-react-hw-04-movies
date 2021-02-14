import PropTypes from 'prop-types';
import s from './Cast.module.css';

function Cast({ array }) {
  return (
    <>
      <ul>
        {array.length > 0 ? (
          array.map(cast => {
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

Cast.propTypes = {
  array: PropTypes.array,
};

export default Cast;
