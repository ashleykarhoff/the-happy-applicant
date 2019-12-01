import React, { Component } from "react";
import { Link } from "@reach/router";

class SideNav extends Component {
  state = {};
  render() {
    return (
      // <div className="sidenav-container">
      //   <div className="sidenav-links-container">
      //     <div className="sidenav-link">Search</div>
      //     <div className="sidenav-link">Board</div>
      //     <div className="sidenav-link">Profile</div>
      //   </div>
      // </div>
      <div>
        <nav>
          <Link to="search">Search</Link>
          <Link to="/">Board</Link>
          <Link to="profile">Profile</Link>
        </nav>
      </div>
    );
  }
}

export default SideNav;
