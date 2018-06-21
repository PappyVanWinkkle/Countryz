/*
  ===========================================
    CONTINENT COMPONENT LISTING DIFFERENT MAPS
  ===========================================
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Continent extends Component {
  render() {
    return (
      <div className="tm-container-outer" id="tm-section-3">
        <ul className="nav nav-pills tm-tabs-links">
          <li className="tm-tab-link-li">
            <Link to="/americas" className="tm-tab-link">
              <img
                src="/countryz/img/north-america.png"
                alt=" north america"
                className="img-fluid"
              />{" "}
            </Link>
          </li>
          <li className="tm-tab-link-li">
            <Link to="/americas" className="tm-tab-link">
              <img
                src="/countryz/img/south-america.png"
                alt="south america"
                className="img-fluid"
              />{" "}
            </Link>
          </li>

          <li className="tm-tab-link-li">
            <Link to="/europe" className="tm-tab-link">
              <img
                src="/countryz/img/europe.png"
                className="img-fluid"
                alt=" europe"
              />{" "}
            </Link>
          </li>
          <li className="tm-tab-link-li">
            <Link
              to="/asia"
              className="tm-tab-link ls
            "
            >
              <img
                src="/countryz/img/asia.png"
                className="img-fluid"
                alt="asia"
              />{" "}
            </Link>
          </li>
          <li className="tm-tab-link-li">
            <Link to="/africa" className="tm-tab-link">
              <img
                src="/countryz/img/africa.png"
                className="img-fluid"
                alt="africa"
              />{" "}
            </Link>
          </li>
          <li className="tm-tab-link-li">
            <Link to="/oceania" className="tm-tab-link">
              <img
                src="/countryz/img/australia.png"
                className="img-fluid"
                alt="australia"
              />{" "}
            </Link>
          </li>
          <li className="tm-tab-link-li">
            <Link to="/oceania" className="tm-tab-link">
              <img
                src="/countryz/img/antartica.png"
                className="img-fluid"
                alt="antarctica"
              />{" "}
            </Link>
          </li>
        </ul>
        <div className="tab-content clearfix" />
      </div>
    );
  }
}

export default Continent;
