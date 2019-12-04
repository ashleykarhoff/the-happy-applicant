import React, { Component } from "react";
import { Router, redirectTo } from "@reach/router";
import "./App.css";
import TopNav from "./components/navs/TopNav";
import SideNav from "./components/navs/SideNav";
import SearchContainer from "./containers/search/SearchContainer";
import BoardContainer from "./containers/board/BoardContainer";
import ProfileContainer from "./containers/users/ProfileContainer";
import LoginContainer from "./components/users/LoginContainer";
import SignupContainer from "./components/users/SignupContainer";
import SearchResultPage from "./containers/search/SearchResultPage";
import CardPage from "./containers/board/CardPage";

class App extends Component {
  state = {
    userData: [],
    jobs: []
  };

  componentDidMount = () => {
    this.fetch();
  };

  async fetch() {
    const user = await fetch("http://localhost:3000/api/v1/applicants/2");
    const data = await user.json();
    this.setState({ userData: data });
  }

  renderAllJobs = () => {
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const targetUrl = `https://jobs.github.com/positions.json`;
    fetch(proxyUrl + targetUrl)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ jobs: data });
      });
  };

  renderJobSearch = (position, location) => {
    const positionNoSpaces = this.removeSpaces(position);
    const locationNoSpaces = this.removeSpaces(location);

    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const targetUrl = `https://jobs.github.com/positions.json?description=${positionNoSpaces}&location=${locationNoSpaces}`;
    fetch(proxyUrl + targetUrl)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ jobs: data });
      });
  };

  removeSpaces(string) {
    const splitString = string.split(" ");
    return splitString.join("+");
  }

  handleCardChange = newColumn => {
    const userData = this.state.userData;
    const currentColumn = userData.board_columns[newColumn.id - 2];
    userData.board_columns[currentColumn.id - 2] = newColumn;

    this.setState({ userData: userData });
  };

  handleChangeBetweenColumns = obj => {
    this.setState({ userData: obj });
  };

  handleJobSave = job => {
    const saved_column_id = this.state.userData.board_columns[0].id;
    fetch(`http://localhost:3000/api/v1/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        board_column_id: `${saved_column_id}`,
        company: `${job.company}`,
        company_logo: `${job.company_logo}`,
        company_url: `${job.company_url}`,
        description: `${job.description}`,
        job_title: `${job.title}`,
        location: `${job.location}`,
        url: `${job.url}`
      })
    })
      .then(resp => resp.json())
      .catch(console.error);
  };

  handleDeleteCard = cardId => {
    // remove card for userData
    fetch(`http://localhost:3000/api/v1/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(resp => resp.json())
      .then(console.log);
    // Getting error, need to redirect to board page
  };

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="main-container">
          <SideNav />
          <Router>
            <SignupContainer path="signup" />
            <LoginContainer path="login" />
            <SearchContainer
              path="search"
              jobs={this.state.jobs}
              renderAllJobs={this.renderAllJobs}
              renderJobSearch={this.renderJobSearch}
            />
            <SearchResultPage
              path="search/:id"
              jobs={this.state.jobs}
              handleJobSave={this.handleJobSave}
            />
            <CardPage
              path="card/:id"
              userData={this.state.userData}
              handleDeleteCard={this.handleDeleteCard}
            />
            <BoardContainer
              path="/"
              board={this.state.userData.board_columns}
              userData={this.state.userData}
              handleCardChange={this.handleCardChange}
              handleChangeBetweenColumns={this.handleChangeBetweenColumns}
            />
            <ProfileContainer path="profile" />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
