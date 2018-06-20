/*
    ===================================
      REDUCER FOR AFRICAN COUNTRIES 
    ===================================
*/

import { GET_AMERICAS_COUNTRIES } from "../actions/types";

const initialState = {
  americasCountries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AMERICAS_COUNTRIES:
      return {
        ...state,
        americasCountries: action.payload
      };
    default:
      return state;
  }
}
