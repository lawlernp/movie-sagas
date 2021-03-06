import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  componentDidMount() {
    this.getDetails();
  }
// refreshes movie GET and hits junction GET and sets them to the redux store
  getDetails = () => {
    this.props.dispatch({ type: "GET_DETAILS" });
    this.props.dispatch({ type: "GET_MOVIES" });
  };
// routes back to homepage/MovieList
  handleClick = () => {
    this.props.history.push("/home");
  };

  render() {
    const id = this.props.reduxState.id;
    return (
      <div className="App">
        <button onClick={this.handleClick}>Back to List</button>
        <h1>{this.props.reduxState.movies[id - 1].title}</h1>
        <img
          width="185"
          height="272"
          alt={this.props.reduxState.movies[id - 1].title}
          src={this.props.reduxState.movies[id - 1].poster}
        />
        <h2>Details</h2>
        <p className="text">
          {this.props.reduxState.movies[id - 1].description}
        </p>
        <br />
        <p className="text">
          {this.props.reduxState.movies[id - 1].title} falls into these genres:
        </p>
        <ul>
          {this.props.reduxState.details.map((movie) => {
            return (
              <>
                {movie.movies_id === id ? (
                  <li className="text">{movie.name}</li>
                ) : (
                  <></>
                )}
              </>
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

export default connect(mapReduxStateToProps)(Details);
