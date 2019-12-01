import React, { Component } from "react";

class SearchResultCard extends Component {
  state = {};
  render() {
    const job = this.props.job;
    //   Render job location, job title and company on each card
    return (
      <div className="search-result-card">
        <div>{job.location}</div>
        <div>
          {job.title} @ {job.company}
        </div>
        <div>{job.type} </div>
      </div>
    );
  }
}

export default SearchResultCard;
