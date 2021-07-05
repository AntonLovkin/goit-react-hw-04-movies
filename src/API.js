import axios from 'axios';

const API = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: "3648f672b1c21855bded6f7b57b6e29a",
    fetchTrendingMovies() {
        return axios.get(`${this.BASE_URL}/trending/all/day?api_key=${this.API_KEY}`).then(response => response.data.results);
    },

    fetchMoviesWithSearchQuery(query) {
        return axios.get(`${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${query}`).then(response => response.data.results);
    },

    fetchMovieDetails(id) {
        return axios.get(`${this.BASE_URL}/movie/${id}?api_key=${this.API_KEY}`).then(response => response.data);
    },

    fetchMovieReviews(id) {
        return axios.get(`${this.BASE_URL}/movie/${id}/reviews?api_key=${this.API_KEY}`).then(response => response.data.results);
    },

    fetchMovieCast(id) {
        return axios.get(`${this.BASE_URL}/movie/${id}/credits?api_key=${this.API_KEY}`).then(response => response.data.cast)
    }
};

export default API;