import React, { Component } from 'react';
import API from '../API';

class Cast extends Component {
    state = {
        cast: []
    }

    componentDidMount() {
        API.fetchMovieCast(this.props.match.params.movieId).then(cast => this.setState({ cast: cast }))
        console.log(this.state.cast);
        console.log(this.props.match.params.movieId);
    }

    render() {
        const IMG_URL = 'https://image.tmdb.org/t/p/w300';
        console.log(this.state.cast);
        return (
            <>
                <h1>Cast List</h1>
                <ul className='cast-list'>
                    {this.state.cast.map(({id, profile_path, name, character}) => (
                        <li key={id}>
                            <div className='cast-container'>
                                <img src={`${IMG_URL}/${profile_path}`} alt={name} className='cast-container_img'/>
                                <div>
                                    <h3>{name}</h3>
                                    <p>{character}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default Cast;