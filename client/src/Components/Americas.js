/*
  ===================================
    COUNTRIES IN THE AMERICAS
  ===================================
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Footer from "./footer";
import Continents from "./continents";
import getAmericas from "../actions/americasaAction";


class America extends Component {
  componentWillMount() {
    this.props.getAmericas();
  }
  render() {
    //console.log(this.props.americasCountries);
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

          {this.props.americasCountries.map(function(country, index) {
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

America.propTypes = {
  getAmericas: PropTypes.func.isRequired,
  americasCountries: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  americasCountries: state.americasCountries.americasCountries
});

export default connect(
  mapStateToProps,
  { getAmericas }
)(America);
