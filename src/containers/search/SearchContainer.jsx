import React, { Component } from "react";
import SearchBar from "../../components/search/SearchBar";
import SearchResultsContainer from "./SearchResultsContainer";

class SearchContainer extends Component {
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
        Search Container
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          state={this.state}
        />
        <SearchResultsContainer />
      </div>
    );
  }
}

export default SearchContainer;
