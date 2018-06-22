/*
  ==============================
    FOOTER COMPONENT
  ==============================
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Link to="/">
        <footer className="tm-container-outer">
          <p className="mb-0">
            Copyright &copy;
            <span className="tm-current-year">2018</span> . Developed by Paul
            Chabz
          </p>
        </footer>
      </Link>
    );
  }
}

export default Footer;
