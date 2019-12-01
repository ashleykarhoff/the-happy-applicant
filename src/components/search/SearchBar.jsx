import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <input type="text" placeholder="job title" />
        <input type="text" placeholder="location" />
        <button>Search</button>
      </div>
    );
  }
}

export default SearchBar;
