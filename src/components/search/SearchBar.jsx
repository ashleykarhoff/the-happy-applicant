import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    jobTitle: "",
    location: ""
  };

  handleInput = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.persist();
    event.preventDefault();
    // fetch search results using current search state
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput}
            type="text"
            placeholder="job title"
            name="jobTitle"
            value={this.state.jobTitle}
          />
          <input
            onChange={this.handleInput}
            type="text"
            placeholder="location"
            name="location"
            value={this.state.location}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
