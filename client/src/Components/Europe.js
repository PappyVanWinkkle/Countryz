/*
  ===================================
    EUROPEAN COUNTRIES 
  ===================================
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import getEuropeanCountries from "../actions/europeAction";
import Footer from "./footer";
import Continents from "./continents";

class Europe extends Component {
  componentWillMount() {
    this.props.getEuropeanCountries();
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

          {this.props.europeanCountries.map(function(country, index) {
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

Europe.propTypes = {
  getEuropeanCountries: PropTypes.func.isRequired,
  europeanCountries: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  europeanCountries: state.europeanCountries.europeanCountries
});

export default connect(
  mapStateToProps,
  { getEuropeanCountries }
)(Europe);
