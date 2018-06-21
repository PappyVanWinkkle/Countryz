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
      <footer className="tm-container-outer">
        <Link to="/">
          <p className="mb-0">
            Copyright &copy;
            <span className="tm-current-year">2018</span> . Developed by Paul
            Chabz
          </p>
        </Link>
      </footer>
    );
  }
}

export default Footer;
