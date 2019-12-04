import React, { Component } from "react";
import { Link } from "@reach/router";
import SvgSearch from "../../icons/search";
import SvgBoards from "../../icons/boards";
import SvgProfile from "../../icons/profile";

class SideNav extends Component {
  state = {};
  render() {
    return (
      <div className="sidenav-container">
        <nav className="sidenav-links">
          <Link to="search" className="sidebar-link">
            <SvgSearch />
          </Link>
          <Link to="/">
            <SvgBoards />
          </Link>
          <Link to="profile">
            <SvgProfile />
          </Link>
        </nav>
      </div>
    );
  }
}

export default SideNav;
