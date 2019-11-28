import React, { Component } from "react";
import SearchBar from "../../components/search/SearchBar";
import SearchResultsContainer from "./SearchResultsContainer";

class SearchContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        Search Container
        <SearchBar />
        <SearchResultsContainer />
      </div>
    );
  }
}

export default SearchContainer;
