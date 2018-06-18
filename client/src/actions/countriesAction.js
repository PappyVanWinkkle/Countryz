import axios from "axios";
import { GET_ALL_COUNTRIES } from "./types";

export default function getCountries() {
  const baseURL = `http://countryapi.gear.host/v1/Country/getCountries`;
  return {
    type: GET_ALL_COUNTRIES,
    payload: new Promise((resolve, reject) => {
      axios.get(baseURL).then(response => resolve(response.data));
    })
  };
}
