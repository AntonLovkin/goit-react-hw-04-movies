import './App.css';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
// import Cast from './views/MoviesPage';
// import Reviews from './views/MoviesPage';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/">HomePage</Link>
      </li>
       <li>
        <Link to="/movies">MoviesPage</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
            
    </Switch>
  </>
)

export default App;

    //  <Route path="/movies/:movieId/cast" component={Cast} />
    //   <Route path="/movies/:movieId/reviews" component={Reviews} />
    //   <Route component={HomePage} />
    
    //  <li>
    //     <Link to="/movies/:movieId">MovieDetailsPage</Link>
    //   </li>