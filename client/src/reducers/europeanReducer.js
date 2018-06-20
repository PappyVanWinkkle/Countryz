/*
  ===============================
   REDUCER FOR EUROPEAN COUNTRIES
  ===============================
*/

import { GET_EUROPEAN_COUNTRIES } from "../actions/types";

const initialState = {
  europeanCountries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EUROPEAN_COUNTRIES:
      return {
        ...state,
        europeanCountries: action.payload
      };
    default:
      return state;
  }
}
