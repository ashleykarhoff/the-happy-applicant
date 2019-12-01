import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import TopNav from "./components/navs/TopNav";
import SideNav from "./components/navs/SideNav";
import SearchContainer from "./containers/search/SearchContainer";
import BoardContainer from "./containers/board/BoardContainer";
import ProfileContainer from "./containers/users/ProfileContainer";

class App extends Component {
  componentDidMount = () => {
    fetch("http://localhost:4000/api/v1/applicants")
      .then(resp => resp.json())
      .then(console.log);
  };

  state = {};
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="main-container">
          <SideNav />
          <Router>
            <SearchContainer path="search" />
            <BoardContainer path="/" />
            <ProfileContainer path="profile" />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
