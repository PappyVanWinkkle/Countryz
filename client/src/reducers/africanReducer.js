/*
    ===================================
      REDUCER FOR AFRICAN COUNTRIES 
    ===================================
*/
import { GET_AFRICAN_COUNTRIES } from "../actions/types";

const initialState = {
  africanCountries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AFRICAN_COUNTRIES:
      return {
        ...state,
        africanCountries: action.payload
      };
    default:
      return state;
  }
}
