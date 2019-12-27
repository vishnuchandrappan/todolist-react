import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  navToggle = () => {
    document.querySelector(".burger").classList.toggle("burger-active");
    document.querySelector(".nav-links").classList.toggle("nav-active");
  };

  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="logo">
            <h1>My Todo List</h1>
          </div>
          <div className="burger" onClick={this.navToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
