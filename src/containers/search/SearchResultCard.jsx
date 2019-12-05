import React, { Component } from "react";

class SearchResultCard extends Component {
  state = {};
  render() {
    const job = this.props.job;
    //   Render job location, job title and company on each card
    return (
      <div className="search-result-card">
        <img
          src={job.company_logo}
          alt={job.company}
          className="company-logo"
        />
        <div className="card-details">
          <div className="search-result-location">{job.location}</div>
          <div className="search-result-title">
            {job.title} <span>@</span> {job.company}
          </div>
          <div className="search-result-skills">{job.type} </div>
        </div>
      </div>
    );
  }
}

export default SearchResultCard;
