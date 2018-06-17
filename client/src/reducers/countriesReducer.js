import { GET_ALL_COUNTRIES } from "../actions/types";

/*
  =================================
    INITIAL STATE OF THE APPLICATION
  =================================
*/

import { GET_ALL_COUNTRIES } from "../actions/types";

const initialState = {
  list: [],
  countries: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
