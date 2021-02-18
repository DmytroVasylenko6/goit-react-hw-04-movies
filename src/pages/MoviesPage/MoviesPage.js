import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../../components/common/Container';
import SearchForm from '../../components/Form';
import Section from '../../components/common/Section';
import MoviesList from '../../components/MoviesList';
import getQueryParams from '../../utils/get_query_params';
import { SearchMovieAPI } from '../../services/MovieAPI';

class MoviePage extends Component {
  state = {
    movies: [],
    status: 'idle',
    error: '',
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.getMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.getMovies(nextQuery);
    }
  }

  handleSubmitForm = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query.name}`,
    });
  };

  getMovies = query => {
    this.setState({ status: 'pending' });
    SearchMovieAPI(query)
      .then(response => {
        if (response.data.results.length === 0) {
          toast('Not found');
        }
        this.setState({ movies: response.data.results, status: 'resolved' });
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { movies, status, error } = this.state;
    const { location } = this.props;

    return (
      <>
        <Section>
          <ToastContainer autoClose={3000} />
          <SearchForm onSubmit={this.handleSubmitForm} />
          <Container>
            {status === 'pending' && (
              <Loader type="ThreeDots" color="#ca347f" height={80} width={80} />
            )}
            {status === 'resolved' &&
              (movies.length > 0 ? (
                <MoviesList movies={movies} />
              ) : (
                <div>Not found</div>
              ))}
          </Container>
          {status === 'rejected' && toast(error.message)}
        </Section>
      </>
    );
  }
}

export default MoviePage;
