import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddMovie from "../AddMovie/AddMovie";
import Details from "../Details/Details";
import MovieList from "../MovieList/MovieList";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Movies!</h1>
          <AddMovie />
          <Route exact path="/details" component={Details} />
          <Route exact path="/" component={MovieList} />
        </div>
      </Router>
    );
  }
}

export default App;
