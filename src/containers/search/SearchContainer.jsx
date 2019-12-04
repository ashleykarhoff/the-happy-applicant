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
    this.getJobs(this.state.jobTitle, this.state.location);
  };

  async componentDidMount() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://jobs.github.com/positions.json";
    const response = await fetch(proxyUrl + targetUrl);
    const json = await response.json();
    this.setState({ jobs: json });
  }

  async allJobs() {
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const targetUrl = `https://jobs.github.com/positions.json`;
    const response = await fetch(proxyUrl + targetUrl);
    const json = await response.json();
    this.setState({ jobs: json });
  }

  async getJobs(position, location) {
    const positionNoSpaces = this.removeSpaces(position);
    const locationNoSpaces = this.removeSpaces(location);

    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const targetUrl = `https://jobs.github.com/positions.json?description=${positionNoSpaces}&location=${locationNoSpaces}`;
    const response = await fetch(proxyUrl + targetUrl);
    const json = await response.json();
    this.setState({ jobs: json });
  }

  removeSpaces(string) {
    const splitString = string.split(" ");
    return splitString.join("+");
  }

  render() {
    return (
      <div className="search-container">
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
