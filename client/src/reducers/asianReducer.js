/*
    ===================================
      REDUCER FOR ASIAN COUNTRIES 
    ===================================
*/

import { GET_ASIAN_COUNTRIES } from "../actions/types";

const initialState = {
  asianCountries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ASIAN_COUNTRIES:
      return {
        ...state,
        asianCountries: action.payload
      };
    default:
      return state;
  }
}
