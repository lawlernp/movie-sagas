import React, { Component } from "react";
import { connect } from "react-redux";


class MovieList extends Component {
  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    this.props.dispatch({ type: "GET_MOVIES" });
  };

  handleClick = (id) => {
    console.log("id", id);
    this.props.dispatch({ type: "SET_ID", payload: id });
    this.props.history.push("/details");
  };

  handleAdd = () => {
    this.props.history.push("/add");
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleAdd}>Add Movie</button>
        <h2>Movie List!</h2>
        <ul className="moviesContainer">
          {this.props.reduxState.movies.map((movie) => {
            return (
              <li
                onClick={() => this.handleClick(movie.id)}
                className="movie"
                id={movie.id}
              >
                <p>{movie.title}</p>
                <img alt={movie.title} src={movie.poster} />
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
