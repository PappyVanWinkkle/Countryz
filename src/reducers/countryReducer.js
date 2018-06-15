// initial state for the countries will be here
import { GET_COUNTRIES } from "../actions/types";

const initialState = {
  list: [],
  countries: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
