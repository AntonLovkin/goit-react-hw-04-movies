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
        overview: null,
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
        console.log(this.props.match.path);
        const IMG_URL = 'https://image.tmdb.org/t/p/w300';

         const {genres,
        poster_path,
        overview,
        title,
        vote_average } = this.state;
        return (
        <>
                <h1>MovieDetailsPage-{this.props.match.params.movieId}</h1>
                <h2>{title}</h2>
                <img src={`${IMG_URL}${poster_path}`} alt={title}/>
                <h2>Movie rating: {vote_average}</h2>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <ul>
                    {genres.map(({ id, name }) => 
                        <li key={id}>{name}</li>)}
                </ul>
                <ul>
                    <li>
                        <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
                    </li>
                </ul>
                
                <Route path={`${this.props.match.path}/cast`} render={props => {
                    return <Cast {...props} movies={this.state.movies} />
                }}
                />
                <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
        </>)
       
    }
    
}

export default MovieDetailsPage;