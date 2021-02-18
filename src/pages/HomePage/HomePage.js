import { React, Component } from 'react';
import Loader from 'react-loader-spinner';
import Section from '../../components/common/Section';
import Container from '../../components/common/Container';
import MoviesList from '../../components/MoviesList';
import { getMovieTrendingAPI } from '../../services/MovieAPI';

class HomePage extends Component {
  state = {
    movies: [],
    status: 'idle',
  };

  componentDidMount() {
    this.setState({ status: 'pending' });
    getMovieTrendingAPI()
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
            {status === 'resolved' && <MoviesList movies={movies} />}
          </Container>
        </Section>
      </div>
    );
  }
}

export default HomePage;
