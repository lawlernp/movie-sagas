import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  componentDidMount() {
    this.getDetails();
  }

  getDetails = () => {
    this.props.dispatch({ type: "GET_DETAILS" });
  };

  render() {
    //   const id = this.props.reduxState.id
    return (
      <div className="App">
        <h1>Details!</h1>
        {/* {JSON.stringify(
          this.props.reduxState.details
        )} */}
        {this.props.reduxState.details.map((movie) => {
           return <>{movie.movies_id === this.props.reduxState.id ?
            <div><p>{movie.title}</p><p>{movie.description}</p><img src={movie.poster}/></div>
            :
            <></>}
        </>
        })}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Details);
