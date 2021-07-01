import React from 'react';
import { Component } from "react";
// import axios from 'axios';
// import {Link} from 'react-router-dom';

class Cast extends Component {
    state = {}

    componentDidMount() {
        console.log(Number(this.props.match.params.movieId));
        console.log(this.props.movies);
    }

    componentDidUpdate() {
        console.log(Number(this.props.match.params.movieId));
        console.log(this.props.movies);
    }

    render() {
               
        return (
            <>
                <h1>Cast List</h1>
            </>
        )
    }
}

export default Cast;