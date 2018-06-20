/*
    ===================================
      ACTION TO GET EUROPEAN COUNTRIES
    ===================================
*/

import axios from "axios";
import { GET_EUROPEAN_COUNTRIES } from "./types";

export default function getEuropeanCountries() {
  const url = `https://restcountries.eu/rest/v2/region/Europe`;
  return function(dispatch) {
    axios
      .get(`${url}`)
      .then(response => {
        dispatch({
          type: GET_EUROPEAN_COUNTRIES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
