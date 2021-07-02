import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const API_KEY = "3648f672b1c21855bded6f7b57b6e29a"

class HomePage extends Component {
    state = {
        movies: [],
    }

    async componentDidMount() {
        
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
            // .then(response => this.setState({ movies: response.data.results }))
        // console.log(response.data.results);

        this.setState({movies: response.data.results})
    }

    render() {
        // console.log(this.props.match.url);
        
        return (
            <>
                <h1>HomePage</h1>

                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                {movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default HomePage;