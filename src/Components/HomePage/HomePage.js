import { React, Component } from 'react';
import Loader from 'react-loader-spinner';
import Section from '../Section';
import Container from '../Container';
import MoviesList from '../MoviesList';
import getMovieTranding from '../../Services/getMovieTranding';

class HomePage extends Component {
  state = {
    movies: [],
    status: 'idle',
  };

  componentDidMount() {
    this.setState({ status: 'pending' });
    getMovieTranding()
      .then(response => {
        this.setState({ movies: response.data.results, status: 'resolved' });
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  }

  render() {
    const { movies, status } = this.state;
    const { location } = this.props;

    return (
      <div className="App">
        <Section title="Trending today">
          <Container>
            {status === 'pending' && (
              <Loader type="ThreeDots" color="#ca347f" height={80} width={80} />
            )}
            {status === 'resolved' && (
              <MoviesList movies={movies} location={location} />
            )}
          </Container>
        </Section>
      </div>
    );
  }
}

export default HomePage;
