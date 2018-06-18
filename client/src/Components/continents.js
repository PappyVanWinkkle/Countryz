import React, { Component } from "react";

/*
  ===========================================
    CONTINENT COMPONENT LISTING DIFFERENT MAPS
  ===========================================
*/

class Continent extends Component {
  render() {
    return (
      <div className="tm-container-outer" id="tm-section-3">
        <ul className="nav nav-pills tm-tabs-links">
          <li className="tm-tab-link-li">
            <a href="#1a" data-toggle="tab" className="tm-tab-link">
              <img
                src="/countryz/img/north-america.png"
                alt=" north america"
                className="img-fluid"
              />{" "}
              North America
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#2a" data-toggle="tab" className="tm-tab-link">
              <img
                src="/countryz/img/south-america.png"
                alt="south america"
                className="img-fluid"
              />{" "}
              South America
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#3a" data-toggle="tab" className="tm-tab-link">
              <img
                src="/countryz/img/europe.png"
                className="img-fluid"
                alt=" europe"
              />{" "}
              Europe
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#4a" data-toggle="tab" className="tm-tab-link active">
              <img
                src="/countryz/img/asia.png"
                className="img-fluid"
                alt="asia"
              />{" "}
              Asia
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#5a" data-toggle="tab" className="tm-tab-link">
              <img
                src="/countryz/img/africa.png"
                className="img-fluid"
                alt="africa"
              />{" "}
              Africa
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#6a" data-toggle="tab" className="tm-tab-link">
              <img
                src="/countryz/img/australia.png"
                className="img-fluid"
                alt="australia"
              />{" "}
              Australia
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#7a" data-toggle="tab" className="tm-tab-link">
              <img
                src="/countryz/img/antartica.png"
                className="img-fluid"
                alt="antarctica"
              />{" "}
              Antartica
            </a>
          </li>
        </ul>
        <div className="tab-content clearfix" />
      </div>
    );
  }
}

export default Continent;
