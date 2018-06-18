/*
  =====================================
    COUNTRIES COMPONENT 
  =====================================
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import getCountries from "../actions/countriesAction";
import PropTypes from "prop-types";

class Countries extends Component {
  componentWillMount() {
    this.props.getCountries();
  }
  render() {
    return (
      <div>
        <h2>Welcome to Countries</h2>
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
