import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  const styleLink = {
    base: {
      color: '#000000',
    },
    active: {
      color: '#061de6',
    },
  };
  return (
    <>
      <NavLink
        exact
        to="/"
        style={styleLink.base}
        activeStyle={styleLink.active}
        className={s.navLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        style={styleLink.base}
        activeStyle={styleLink.active}
        className={s.navLink}
      >
        Movies
      </NavLink>
    </>
  );
};

export default Navigation;
