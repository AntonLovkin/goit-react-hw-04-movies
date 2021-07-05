import React, { Component } from 'react';
import API from '../API';

class Reviews extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        API.fetchMovieReviews(this.props.match.params.movieId).then(reviews => this.setState({ reviews: reviews }))
        // console.log(this.state.reviews);
        // console.log(this.props.match.params.movieId);
    }

    render() {       
        return (
            <>
                <h1>Reviews List</h1>
                {this.state.reviews.length > 0
                ? <ul>
                    {this.state.reviews.map(({id, author, content}) => (
                        <li key={id}>
                            <h3>{author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
                : <h1>Hello!! There is no reviews yet</h1>}
            </>
        )
    }
}

export default Reviews;