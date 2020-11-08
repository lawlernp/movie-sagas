import React, { Component } from "react";

class AddMovie extends Component {
  state = {
    description: "",
    title: "",
    poster: "",
    genre: ""
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
      genre: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>AddMovie!</h1>
        <input
          onChange={this.handleTitleChange}
          id="title"
          type="text"
          placeholder="Title"
          required
        />
        <input
          onChange={this.handlePosterChange}
          id="poster"
          type="text"
          placeholder="Poster URL"
        />
        <textarea
          onChange={this.handleDescriptionChange}
          id="description"
          name="description"
          rows="4"
          cols="50"
          required
        ></textarea>
        <label for="genres">Choose a genre:</label>
        <select onChange={this.handleGenreChange} name="genres" id="genres">
          <option value="Adventure">Adventure</option>
          <option value="Animated">Animated</option>
          <option value="Biographical">Biographical</option>
          <option value="Comedy">Comedy</option>
          <option value="Disaster">Disaster</option>
          <option value="Drama">Drama</option>
          <option value="Epic">Epic</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Musical">Musical</option>
          <option value="Romantic">Romantic</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Space-Opera">Space-Opera</option>
          <option value="Superhero">Superhero</option>
        </select>
      </div>
    );
  }
}

export default AddMovie;
