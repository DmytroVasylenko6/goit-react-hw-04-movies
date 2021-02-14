import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Container from '../Components/Container';

const HomePage = lazy(() =>
  import('../Components/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviePage = lazy(() =>
  import('../Components/MoviesPage' /* webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../Components/MovieDetailsPage' /* webpackChunkName: "movieDetails-page" */
  ),
);

export const paths = {
  MAIN: '/',
  MOVIES: '/movies',
  MOVIESDETAILS: '/movies/:movieId',
};

const Router = () => {
  return (
    <Suspense
      fallback={
        <Container>
          <Loader type="ThreeDots" color="#ca347f" height={80} width={80} />
        </Container>
      }
    >
      <Switch>
        <Route exact path={paths.MAIN} component={HomePage} />
        <Route path={paths.MOVIESDETAILS} component={MovieDetailsPage} />
        <Route path={paths.MOVIES} component={MoviePage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default Router;
