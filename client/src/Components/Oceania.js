/*
  ===================================
    OCEANIC COUNTRIES 
  ===================================
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Footer from "./footer";
import Continents from "./continents";
import getOceanCountries from "../actions/oceanAction";

class Oceania extends Component {
  componentDidMount() {
    this.props.getOceanCountries();
  }
  render() {
    //console.log(this.props.oceanicCountries);
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

          {this.props.oceanicCountries.map(function(country, index) {
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

Oceania.propTypes = {
  getOceanCountries: PropTypes.func.isRequired,
  oceanicCountries: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  oceanicCountries: state.oceanicCountries.oceanicCountries
});

export default connect(
  mapStateToProps,
  { getOceanCountries }
)(Oceania);
