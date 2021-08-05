import React, { Component } from 'react';
import API from '../API';
import RenderMovies from './RenderMovies';
import SearchForm from './SearchForm';
import queryString from 'query-string';
import axios from 'axios';


class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const query = queryString.parse(this.props.location.search).query;
    console.log(query);
    if (query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=b0771150ba8a2e624afdbb8a92bbf802&query=${query}`,
        )
          .then(response => {
            console.log(response.data.results);
          this.setState({
            movies: response.data.results,
          });
        });
      };
    };

    componentDidUpdate(prevProps) {
    const getCategoryFromProps = props => queryString.parse(props.location.search).query;
    
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);
        
      if (prevCategory !== nextCategory) {
      this.onChangeQuery(nextCategory);
        };
    };
    
//     componentDidUpdate(prevProps) {
//         const getCategoryFromProps = props => queryString.parse(props.location.search).query;
        
//         const prevCategory = getCategoryFromProps(prevProps);
//         const nextCategory = getCategoryFromProps(this.props);
        
//   if (prevCategory !== nextCategory) {
//       this.onChangeQuery(nextCategory);
//         };
//     };

  onChangeQuery = query => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b0771150ba8a2e624afdbb8a92bbf802&query=${query}`,
      )
        .then(response => {
        //   console.log(response.data.results);
        this.setState({
          movies: response.data.results,
        });

        if (this.state.movies.length === 0) {
          alert('Sorry, movie not found');
        }
      });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `search=${query}`,
    });
  };

  render() {
    // console.log(this.props.match.url);
    return (
      <>
        <SearchForm onSubmit={this.onChangeQuery} />

        <RenderMovies movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;

// const API_KEY = "3648f672b1c21855bded6f7b57b6e29a"

// class MoviesPage extends Component {
//     state = {
//         movies: [],
//         value: '',
//     }

//     async componentDidMount() {
        
//         const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
//             // .then(response => this.setState({ movies: response.data.results }))
//         // console.log(response.data.results);

//         // console.log(this.state.movies);

//         this.setState({movies: response.data.results})
//     }

//     setValue = (e) => {
//         this.setState({ value: e.target.value });
//     };
    
//     render() {
//         const { value, movies } = this.state;
//         console.log(movies);
//         return (
//             <>
//                 <form onSubmit={this.renderMovies}>
//                     <input type="text" value={value} onChange={this.setValue} className='input'/>
//                     <button type='submit'>Search</button>
//                 </form>
//                 {/* {movies.length > 0 && <RenderMovies movies={movies} />} */}
//             </>
//         );
//     };
// }

