import axios from "axios";
import { GET_AFRICAN_COUNTRIES } from "./types";

/*
    ===================================
      ACTION TO GET AFRICAN COUNTRIES
    ===================================
*/

export default function getAfricanCountries() {
  const url = `https://restcountries.eu/rest/v2/region/Africa`;
  return function(dispatch) {
    axios
      .get(`${url}`)
      .then(response => {
        dispatch({
          type: GET_AFRICAN_COUNTRIES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
