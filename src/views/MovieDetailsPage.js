import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import API from '../API';
import routes from '../routes';

import queryString from 'query-string';




// const API_KEY = "3648f672b1c21855bded6f7b57b6e29a"

class MovieDetailsPage extends Component {
    state = {
        genres: [],
        poster_path: null,
        overview: null,
        title: null,
        vote_average: null,
    };

    componentDidMount() {
        API.fetchMovieDetails(this.props.match.params.movieId).then(data => this.setState({ ...data }));
        // console.log(this.props.match.params.movieId);
        
        // const { movieId } = this.props.match.params;
        // const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        // console.log(response.data);
        // this.setState({...response.data})
    }
    
    // componentDidUpdate(prevProps) {
        
    //   const getCategoryFromProps = props => queryString.parse(props.location.search).category;

    //   const prevCategory = getCategoryFromProps(prevProps);
    //   const nextCategory = getCategoryFromProps(this.props);

    //   if (prevCategory !== nextCategory) {
    //     this.fetchMoviesWithSearchQuery(nextCategory);
    //   }
    // };

    // onCategoryChange = category => {
    //     console.log('onCategoryChange');
    //     this.props.history.push({
    //         pathname: this.props.location.pathname,
    //         search: `category=${category}`,
    //     });
    // };


    handleGoBack = () => {
    //    console.log('handleGoBack');
       const routes = {
           home: '/',
           movies: '/movies',
           detailsMovies: '/movies/:movieId',
           cast: '/movies/:movieId/cast',
           reviews: '/movies/:movieId/reviews'
};
        const { location, history } = this.props;

        // const queryParams = queryString.parse(this.props.location.search);
        //  console.log(queryParams);
        
        if (location.state && location.state.from) {
        
          return history.push(location.state.from);
        };

        history.push(`${routes.home}`)
                   
    };

    render() {
        // console.log(this.props.match.path);
        const IMG_URL = 'https://image.tmdb.org/t/p/w300';
        
        const { movieId } = this.props.match.params;
        // console.log(movieId);
        const { location } = this.props;
        // console.log(location);
        const {genres,poster_path,overview,title,vote_average } = this.state;
        // console.log(location.state.from);
        return (
            <>
                <button type="button" onClick={this.handleGoBack} className='back-button'>Go Back</button>
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
                        {/* <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink> */}
                        <NavLink to={{
                            pathname: `${routes.movies}/${movieId}/cast`,
                            state: { from: location.state.from }
                        }}>Cast</NavLink>
                    </li>
                    <li>
                        {/* <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink> */}
                        <NavLink to={{
                            pathname: `${routes.movies}/${movieId}/reviews`,
                            state: { from: location.state.from }
                        }}>Reviews</NavLink>
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