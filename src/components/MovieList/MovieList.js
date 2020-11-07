import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";


class MovieList extends Component {
  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    this.props.dispatch({ type: "GET_MOVIES" });
  };

  render() {
    return (
      <div className="App">
        <h1>Movie List!</h1>
        <ul className="moviesContainer">
        {this.props.reduxState.movies.map((movie) => {
          return (
            <li className="movie" id={movie.id}>
              <p>{movie.title}</p>
              <img alt={movie.title} src={movie.poster}/>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(MovieList);
