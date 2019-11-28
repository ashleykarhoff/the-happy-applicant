import React, { Component } from "react";
import "./App.css";
import TopNav from "./containers/navs/TopNav";
import SideNav from "./containers/navs/SideNav";

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
        <SideNav />
        {/* Configure routes here, add conditional logic for rendering of pages */}
      </React.Fragment>
    );
  }
}

export default App;
