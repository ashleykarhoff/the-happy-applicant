import React, { Component } from "react";
import SearchResultCard from "../../components/search/SearchResultCard";

class SearchResultsContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        Search Results Container
        <SearchResultCard />
      </div>
    );
  }
}

export default SearchResultsContainer;
