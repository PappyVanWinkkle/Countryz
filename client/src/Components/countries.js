/*
  =====================================
    COUNTRIES COMPONENT 
  =====================================
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Footer from "./footer";
import Continents from "./continents";
import getCountries from "../actions/countriesAction";

class Countries extends Component {
  componentWillMount() {
    this.props.getCountries();
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
          {this.props.countries.map(country => {
            // something here
            return (
              <tbody>
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

Countries.propTypes = {
  getCountries: PropTypes.func.isRequired,
  countries: PropTypes.array.isRequired
};

//=== CONNECTING TO THE STORE ===//

const mapStateToProps = state => ({
  countries: state.countries.countries
});

export default connect(
  mapStateToProps,
  { getCountries }
)(Countries);
