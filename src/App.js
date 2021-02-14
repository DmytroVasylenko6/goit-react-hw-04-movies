import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Router from './Router';

const styleLink = {
  base: {
    color: '#000000',
  },
  active: {
    color: '#061de6',
  },
};

const App = () => (
  <>
    <Header>
      <NavLink
        exact
        to="/"
        style={styleLink.base}
        activeStyle={styleLink.active}
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        style={styleLink.base}
        activeStyle={styleLink.active}
        className="nav-link"
      >
        Movies
      </NavLink>
    </Header>
    <Router />
  </>
);

export default App;
