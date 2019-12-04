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
    this.props.renderJobSearch(this.state.jobTitle, this.state.location);
  };

  componentDidMount() {
    this.props.renderAllJobs();
  }

  render() {
    return (
      <div className="search-container">
        {/* {this.props.children} */}
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          state={this.state}
        />
        <SearchResultsContainer jobs={this.props.jobs} />
        {/* <Router>
          <SearchResultPage path="/:id" jobs={this.state.jobs} />
        </Router> */}
      </div>
    );
  }
}

export default SearchContainer;
