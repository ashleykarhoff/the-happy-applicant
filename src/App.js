import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import TopNav from "./components/navs/TopNav";
import SideNav from "./components/navs/SideNav";
import SearchContainer from "./containers/search/SearchContainer";
import BoardContainer from "./containers/board/BoardContainer";
import ProfileContainer from "./containers/users/ProfileContainer";

class App extends Component {
  state = {
    userData: []
  };

  componentDidMount = () => {
    this.fetch();
  };

  async fetch() {
    const user = await fetch("http://localhost:3000/api/v1/applicants/2");
    const data = await user.json();
    this.setState({ userData: data });
  }

  handleCardChange = newColumn => {
    // Update state from here
    const userData = this.state.userData;
    const currentColumn = userData.board_columns[newColumn.id - 2];
    userData.board_columns[currentColumn.id - 2] = newColumn;

    this.setState({ userData: userData });
  };

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="main-container">
          <SideNav />
          <Router>
            <SearchContainer path="search" />
            <BoardContainer
              path="/"
              board={this.state.userData.board_columns}
              handleCardChange={this.handleCardChange}
            />
            <ProfileContainer path="profile" />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
