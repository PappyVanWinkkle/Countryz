/*
  ================================================
    ACTION CREATORS WILL CALL THE API FROM HERE
  ================================================
*/

import axios from "axios";
import { GET_ALL_COUNTRIES } from "./types";

const baseURL = `https://restcountries.eu/rest/v2/all`;

export default function getCountries() {
  return dispatch => {
    axios.get(`${baseURL}`).then(res => console.log(res.data));
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: res.response.data
    });
  };
}
