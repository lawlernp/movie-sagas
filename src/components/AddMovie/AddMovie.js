import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
class AddMovie extends Component {
  state = {
    description: "",
    title: "",
    poster: "",
    genre_id: 1,
  };

  handleDescriptionChange = (event) => {
    event.preventDefault();
    this.setState({
      description: event.target.value,
    });
  };
  handleTitleChange = (event) => {
    event.preventDefault();
    this.setState({
      title: event.target.value,
    });
  };
  handlePosterChange = (event) => {
    event.preventDefault();
    this.setState({
      poster: event.target.value,
    });
  };

  handleGenreChange = (event) => {
    event.preventDefault();
    this.setState({
      genre_id: +event.target.value,
    });
  };

  handleSubmit = () => {
    axios
      .post("/api/movie", this.state)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.history.push("/home");
  };
  handleCancel = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="App">
        <h1>Add a Movie!</h1>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            className="text"
            onChange={this.handleTitleChange}
            id="title"
            type="text"
            placeholder="Title"
            required
          />
          <input
            className="text"
            onChange={this.handlePosterChange}
            id="poster"
            type="text"
            placeholder="Poster URL"
            required
          />
          <br />
          <br />
          <textarea
            className="text"
            onChange={this.handleDescriptionChange}
            id="description"
            name="description"
            placeholder="Description"
            rows="4"
            cols="50"
            required
          ></textarea>
          <br />
          <label for="genres">Choose a genre:</label>
          <select
            onChange={this.handleGenreChange}
            name="genres"
            id="genres"
            required
          >
            <option value="1">Adventure</option>
            <option value="2">Animated</option>
            <option value="3">Biographical</option>
            <option value="4">Comedy</option>
            <option value="5">Disaster</option>
            <option value="6">Drama</option>
            <option value="7">Epic</option>
            <option value="8">Fantasy</option>
            <option value="9">Musical</option>
            <option value="10">Romantic</option>
            <option value="11 Fiction">Science Fiction</option>
            <option value="12">Space-Opera</option>
            <option value="13">Superhero</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Submit"></input>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(AddMovie);
