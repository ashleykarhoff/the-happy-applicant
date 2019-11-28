import React, { Component } from "react";

class SideNav extends Component {
  state = {};
  render() {
    return (
      <div className="sidenav-container">
        <div className="sidenav-links-container">
          <div className="sidenav-link">Search</div>
          <div className="sidenav-link">Board</div>
          <div className="sidenav-link">Profile</div>
        </div>
      </div>
    );
  }
}

export default SideNav;
