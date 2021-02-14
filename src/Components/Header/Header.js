import PropTypes from 'prop-types';
import s from './Header.module.css';

function Header({ children }) {
  return <header className={s.Header}>{children}</header>;
}

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Header;
