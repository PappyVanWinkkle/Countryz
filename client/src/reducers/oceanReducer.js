/*
    ===================================
      REDUCER FOR OCEANIC COUNTRIES 
    ===================================
*/

import { GET_OCEANIC_COUNTRIES } from "../actions/types";

const initialState = {
  oceanicCountries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OCEANIC_COUNTRIES:
      return {
        ...state,
        oceanicCountries: action.payload
      };
    default:
      return state;
  }
}
