import React, { Component } from "react";
import { connect } from "react-redux";


class MovieList extends Component {


  componentDidMount() {
    this.getMovies();
  }
//   gets movies from database and sets them to the redux state
  getMovies = () => {
    this.props.dispatch({ type: "GET_MOVIES" });
  };
//   grabs ID from selected movie, sets it to the redux store and routes you to details view
  handleClick = (id) => {
    console.log("id", id);
    this.props.dispatch({ type: "SET_ID", payload: id });
    this.props.history.push("/details");
  };
// routes to the AddMovie component
  handleAdd = () => {
    this.props.history.push("/add");
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleAdd}>Add Movie</button>
        <h2>Movie List</h2>
        <p>Click on a poster for more information about that movie</p>
        <ul className="moviesContainer">
            {/* map through results from movie GET, display on DOM */}
          {this.props.reduxState.movies.map((movie) => {
            return (
              <li
                onClick={() => this.handleClick(movie.id)}
                className="movie"
                id={movie.id}
              >
                <h3>{movie.title}</h3>
                <img width="185" height="272" alt={movie.title} src={movie.poster} />
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
