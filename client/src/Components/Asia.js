/*
  ===================================
    ASIAN  COUNTRIES
  ===================================
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Footer from "./footer";
import Continents from "./continents";
import getAsianCountries from "../actions/asianAction";

class Asia extends Component {
  componentWillMount() {
    this.props.getAsianCountries();
  }
  render() {
    return (
      <div>
        <Continents />
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">Country</th>
              <th scope="col">Capital</th>
              <th scope="col">Demonym </th>
            </tr>
          </thead>

          {this.props.asianCountries.map(function(country, index) {
            return (
              <tbody key={index}>
                <tr>
                  <th scope="row" />
                  <td>{country.name}</td>
                  <td>{country.capital}</td>
                  <td>{country.demonym}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <Footer />
      </div>
    );
  }
}

Asia.propTypes = {
  getAsianCountries: PropTypes.func.isRequired,
  asianCountries: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  asianCountries: state.asianCountries.asianCountries
});

export default connect(
  mapStateToProps,
  { getAsianCountries }
)(Asia);
