import React, { Component } from "react";
import JobSkill from "./JobSkill";

class SearchResultCard extends Component {
  state = {};
  render() {
    //   Render job location, job title and company on each card
    return (
      <div>
        <JobSkill />
      </div>
    );
  }
}

export default SearchResultCard;
