import React, { Component } from 'react';
import API from '../API';
import RenderMovies from './RenderMovies';

class MoviesPage extends Component {
    state = {
        movies: JSON.parse(localStorage.getItem('movies')),
        // movies: [],
        value: '',
    }

     renderMovies = (e) => {
        e.preventDefault();
        API.fetchMoviesWithSearchQuery(this.state.value).then(movies => {
            this.setState({ movies: movies });
            localStorage.setItem('movies', JSON.stringify(movies));
            // console.log(this.state.movies);
            if (this.state.movies.length === 0) {
            alert('We could not find movies with this query')
            };
        });
    };

    setValue = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        const { value, movies } = this.state;
        // console.log(movies);
        return (
            <>
                <form onSubmit={this.renderMovies}>
                    <input type="text" value={value} onChange={this.setValue} className='input'/>
                    <button type='submit'>Search</button>
                </form>
                {movies.length > 0 && <RenderMovies movies={movies} />}
            </>
        );
    };
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

