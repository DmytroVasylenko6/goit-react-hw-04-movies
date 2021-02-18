import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <NavLink
        exact
        to="/"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        Movies
      </NavLink>
    </>
  );
};

export default Navigation;
