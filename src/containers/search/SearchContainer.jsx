import React, { Component } from "react";
import SearchBar from "../../components/search/SearchBar";
import SearchResultsContainer from "./SearchResultsContainer";

class SearchContainer extends Component {
  state = {
    jobTitle: "",
    location: "",
    jobs: []
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

  async componentDidMount() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://jobs.github.com/positions.json";
    const response = await fetch(proxyUrl + targetUrl);
    const json = await response.json();
    this.setState({ jobs: json });
  }

  render() {
    return (
      <div>
        Search Container
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          state={this.state}
        />
        <SearchResultsContainer jobs={this.state.jobs} />
      </div>
    );
  }
}

export default SearchContainer;
