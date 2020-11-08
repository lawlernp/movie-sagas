import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  componentDidMount() {
    this.getDetails();
  }

  getDetails = () => {
    this.props.dispatch({ type: "GET_DETAILS" });
  };

  handleClick = () => {
      this.props.history.push('/home')
  }

  render() {
      const id = this.props.reduxState.id
    return (
      <div className="App">
        <button onClick={this.handleClick}>Home</button>
        <h2>Details!</h2>
        <h1>{this.props.reduxState.movies[id - 1].title}</h1>
        <img
          alt={this.props.reduxState.movies[id - 1].title}
          src={this.props.reduxState.movies[id - 1].poster}
        />
        <p>{this.props.reduxState.movies[id - 1].description}</p>
        {this.props.reduxState.details.map((movie) => {
          return <>{movie.movies_id === id ? <p>{movie.name}</p> : <></>}</>;
        })}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Details);
