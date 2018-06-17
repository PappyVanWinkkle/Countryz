import React, { Component } from "react";
/*
  ==================================
    NAVBAR COMPONENT OF THE APP
  ==================================
*/
class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg narbar-light">
        <a className="navbar-brand mr-auto" href="/">
          <img src="/countryz/img/logo.png" alt="Site logo" /> Countryz
        </a>
        <button
          type="button"
          id="nav-toggle"
          class="navbar-toggler collapsed"
          data-toggle="collapse"
          data-target="#mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="mainNav" class="collapse navbar-collapse tm-bg-white">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#top">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tm-section-2">
                Beautiful Earth
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tm-section-3">
                Places to Explore
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
