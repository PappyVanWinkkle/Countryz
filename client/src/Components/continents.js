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
                alt="Image"
                class="img-fluid"
              />{" "}
              North America
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#2a" data-toggle="tab" className="tm-tab-link">
              <img
                src="/countryz/img/south-america.png"
                alt="Image"
                className="img-fluid"
              />{" "}
              South America
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#3a" data-toggle="tab" className="tm-tab-link">
              <img
                src="/countryz/img/europe.png"
                alt="Image"
                className="img-fluid"
              />{" "}
              Europe
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#4a" data-toggle="tab" className="tm-tab-link active">
              <img
                src="/countryz/img/asia.png"
                alt="Image"
                className="img-fluid"
              />{" "}
              Asia
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#5a" data-toggle="tab" className="tm-tab-link">
              <img
                src="/countryz/img/africa.png"
                alt="Image"
                className="img-fluid"
              />{" "}
              Africa
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#6a" data-toggle="tab" className="tm-tab-link">
              <img
                src="/countryz/img/australia.png"
                alt="Image"
                className="img-fluid"
              />{" "}
              Australia
            </a>
          </li>
          <li className="tm-tab-link-li">
            <a href="#7a" data-toggle="tab" className="tm-tab-link">
              <img
                src="/countryz/img/antartica.png"
                alt="Image"
                className="img-fluid"
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
