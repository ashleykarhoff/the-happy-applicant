import React, { Component } from "react";
import SearchResultCard from "./SearchResultCard";

class SearchResultsContainer extends Component {
  state = {};
  render() {
    const jobs = this.props.jobs;
    return (
      <div className="search-results-container">
        {jobs.map(job => (
          <SearchResultCard key={job.id} job={job} />
        ))}
      </div>
    );
  }
}

export default SearchResultsContainer;
