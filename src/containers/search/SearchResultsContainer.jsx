import React, { Component } from "react";
import { Link } from "@reach/router";
import SearchResultCard from "./SearchResultCard";

class SearchResultsContainer extends Component {
  render() {
    const jobs = this.props.jobs;
    return (
      <div className="search-results-container">
        {jobs.map(job => (
          <Link to={`${job.id}`} key={job.id}>
            <SearchResultCard job={job} />
          </Link>
        ))}
      </div>
    );
  }
}

export default SearchResultsContainer;
