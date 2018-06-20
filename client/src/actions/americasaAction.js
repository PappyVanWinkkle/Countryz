/*
    ===================================
      ACTION TO GET AMERICAS COUNTRIES
    ===================================
*/

import axios from "axios";
import { GET_AMERICAS_COUNTRIES } from "./types";

export default function getAmericas() {
  const url = `https://restcountries.eu/rest/v2/region/americas`;
  return function(dispatch) {
    axios
      .get(`${url}`)
      .then(response => {
        dispatch({
          type: GET_AMERICAS_COUNTRIES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
