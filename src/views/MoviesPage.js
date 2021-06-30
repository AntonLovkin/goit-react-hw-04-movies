import React from 'react';
import { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const API_KEY = "3648f672b1c21855bded6f7b57b6e29a"

class MoviesPage extends Component {
    state = {
        movies: [],
    }

    async componentDidMount() {
        
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
            // .then(response => this.setState({ movies: response.data.results }))
        console.log(response.data.results);

        this.setState({movies: response.data.results})
    }

    render() {
        console.log(this.props.match.url);
        
        return (
            <>
                <h1>Movies Page</h1>

                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${this.props.match.url}/${movie.id}`}>
                                {movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default MoviesPage;

// const MoviesPage = () => {
//     return (<h1>Movies-Page</h1>)
// }

// export default MoviesPage;


/////////////////
// class MoviesPage extends Component {
//     state = { query: ' '}
    
//     handleChange = event => {
//         this.setState({query: event.currentTarget.value})
//     }

//     handleSubmit = event => {
//         event.preventDefault();

//         this.props.onSubmit(this.state.query);

//         this.setState({ query: ''})
//         // console.log(this.state);
//     }

//     render() {
//         return (
//           <header className="Searchbar">
//             <form onSubmit={this.handleSubmit} className="SearchForm">
//                 <button type="submit" className="SearchForm-button">
//                    <span className="SearchForm-button-label">Search</span>
//                 </button>
//                 <input
//                     className="SearchForm-input"
//                     type="text"
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Search images and photos"
//                     value={this.state.query}
//                     onChange={this.handleChange}
//                 />
//                 {/* <button type="submit" className="SearchForm-button">Search</button> */}
//             </form>
//           </header>
//         )
//     }
                

// }

// export default MoviesPage;