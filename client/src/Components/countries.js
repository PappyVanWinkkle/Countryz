/*
  =====================================
    COUNTRIES COMPONENT 
  =====================================
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import countriesAction from "../actions/countriesAction";
import PropTypes from "prop-types";

class Countries extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Countries</h2>
      </div>
    );
  }
}

Countries.propTypes = {
  countriesAction: PropTypes.func.isRequired,
  countries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  countries: state.countries
});

export default connect(
  mapStateToProps,
  { countriesAction }
)(Countries);
