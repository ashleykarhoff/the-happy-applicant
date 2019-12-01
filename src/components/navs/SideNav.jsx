import React, { Component } from "react";
import { Link } from "@reach/router";

class SideNav extends Component {
  state = {};
  render() {
    return (
      <div className="sidenav-container">
        <nav className="sidenav-links">
          <Link to="search">Search</Link>
          <Link to="/">Board</Link>
          <Link to="profile">Profile</Link>
        </nav>
      </div>
    );
  }
}

export default SideNav;
