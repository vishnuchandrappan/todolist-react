import React, { Component } from "react";

export default class LeftSlideMenu extends Component {
  navToggle = () => {
    document.querySelector(".burger").classList.toggle("burger-active");
    document.querySelector(".left-slide-menu").classList.toggle("active");
  };
  render() {
    return (
      <div className="left-slide-menu">
        <div className="burger" onClick={this.navToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="left-menu-contents">{this.props.children}</div>
      </div>
    );
  }
}
