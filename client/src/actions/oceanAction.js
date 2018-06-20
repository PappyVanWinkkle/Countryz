/*
    ===================================
      ACTION TO GET OCEAnic  COUNTRIES
    ===================================
*/

import axios from "axios";
import { GET_OCEANIC_COUNTRIES } from "./types";

export default function getOceanCountries() {
  const url = `https://restcountries.eu/rest/v2/region/Oceania`;
  return function(dispatch) {
    axios
      .get(`${url}`)
      .then(response => {
        dispatch({
          type: GET_OCEANIC_COUNTRIES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
