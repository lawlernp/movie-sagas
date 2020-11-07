import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

class Details extends Component {
  componentDidMount() {
    this.getDetails();
  }

  getDetails = () => {
    this.props.dispatch({ type: "GET_DETAILS" });
  };

  render() {
    return (
      <div className="App">
        <h1>Details!</h1>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Details);
