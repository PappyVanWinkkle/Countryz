/*
  =========================================
  CALLING THE EXTERNAL API FROM THE ACTIONS
  =========================================
*/

import axios from "axios";
import { GET_ALL_COUNTRIES } from "./types";

export default function getCountries() {
  const baseURL = `https://restcountries.eu/rest/v2/all`;
  return function(dispatch) {
    axios
      .get(`${baseURL}`)
      .then(response => {
        dispatch({
          type: GET_ALL_COUNTRIES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
