/*
    ===================================
      ACTION TO GET ASIAN COUNTRIES
    ===================================
*/

import axios from "axios";
import { GET_ASIAN_COUNTRIES } from "./types";

export default function getAsianCountries() {
  const url = `https://restcountries.eu/rest/v2/region/Asia`;
  return function(dispatch) {
    axios
      .get(`${url}`)
      .then(response => {
        dispatch({
          type: GET_ASIAN_COUNTRIES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
