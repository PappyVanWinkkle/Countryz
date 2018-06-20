import React, { Component } from "react";
/*
  ==============================
    FOOTER COMPONENT 
  ==============================
*/
class Footer extends Component {
  render() {
    return (
      <footer className="tm-container-outer">
        <p className="mb-0">
          Copyright &copy;
          <span className="tm-current-year">2018</span> . Developed by Paul
          Chabz
        </p>
      </footer>
    );
  }
}

export default Footer;
