import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../Components/HomePage';
import MoviePage from '../Components/MoviesPage';
import MovieDetailsPage from '../Components/MovieDetailsPage';

export const paths = {
  MAIN: '/',
  MOVIES: '/movies',
  MOVIESDETAILS: '/movies/:movieId',
};

const Router = () => {
  return (
    <Switch>
      <Route exact path={paths.MAIN} component={HomePage} />
      <Route path={paths.MOVIESDETAILS} component={MovieDetailsPage} />
      <Route path={paths.MOVIES} component={MoviePage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
