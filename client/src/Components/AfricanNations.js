/*
  ======================================
    AFRICAN COUNTRIES COMPONENT
  ======================================
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Footer from "./footer";
import Continents from "./continents";
import getAfricanCountries from "../actions/africanAction";

class Africa extends Component {
  componentWillMount() {
    this.props.getAfricanCountries();
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

          {this.props.africanCountries.map(function(country, index) {
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

Africa.propTypes = {
  getAfricanCountries: PropTypes.func.isRequired,
  africanCountries: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  africanCountries: state.africanCountries.africanCountries
});

export default connect(
  mapStateToProps,
  { getAfricanCountries }
)(Africa);
