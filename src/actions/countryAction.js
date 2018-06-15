/* Action creators will be located in this file 
  === Initial call to the API is made here ===
*/
import axios from "axios";
import { GET_COUNTRIES } from "./types";

const baseURL = `https://restcountries.eu/rest/v2/all`;

export default function getCountries() {
  return dispatch => {
    axios.get(`${baseURL}`).then(res => console.log(res.data));
    dispatch({
      type: GET_COUNTRIES,
      payload: res.response.data
    });
  };
}
