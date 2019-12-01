import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            onChange={this.props.handleInput}
            type="text"
            placeholder="job title"
            name="jobTitle"
            value={this.props.state.jobTitle}
          />
          <input
            onChange={this.props.handleInput}
            type="text"
            placeholder="location"
            name="location"
            value={this.props.state.location}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
