/*
  =====================================
    COUNTRIES COMPONENT 
  =====================================
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./navbar";
import Continents from "./continents";
import Footer from "./footer";
import getCountries from "../actions/countriesAction";
import PropTypes from "prop-types";

class Countries extends Component {
  componentWillMount() {
    this.props.getCountries();
    //console.log(this.props.getCountries());
  }
  render() {
    //console.log(this.props.countries);
    return (
      <div>
        <Continents />

        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">Country</th>
              <th scope="col">Capital</th>
              <th scope="col">Demonym </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row" />
              <td>Name</td>
              <td>Name</td>
              <td>Name</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

//=== CONNECTING TO THE STORE ===//

const mapStateToProps = state => ({
  countries: state.countries
});

export default connect(
  mapStateToProps,
  { getCountries }
)(Countries);
