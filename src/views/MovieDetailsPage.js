import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

const API_KEY = "3648f672b1c21855bded6f7b57b6e29a"

class MovieDetailsPage extends Component {
    state = {
        genres: [],
        poster_path: null,
        homepage: null,
        id: null,
        original_title: null,
        overview: null,
        popularity: null,
        release_date: null,
        tagline: null,
        title: null,
        vote_average: null,
    };

    async componentDidMount() {
        const { movieId } = this.props.match.params;

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        console.log(response.data);

        this.setState({...response.data})
    }
    render() {
        // console.log(this.props.match.params);
         const {title, poster_path, overview } = this.state;
        return (
        <>
                <h1>MovieDetailsPage-{this.props.match.params.movieId}</h1>
                <h2>{title}</h2>
                <img src={poster_path} alt=''/>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                {/* <p>{this.state.genres}</p> */}
                <ul>
                    <li>
                        <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
                    </li>
                </ul>
                <Route path="/movies/:movieId/cast" component={Cast} />
                <Route path="/movies/:movieId/reviews" component={Reviews} />
        </>)
       
    }
    
}

export default MovieDetailsPage;