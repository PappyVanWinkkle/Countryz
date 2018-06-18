/*
  =================================================
   REDUCER FUNCTIONS TO HOLD THE STATE OF THE APP
  =================================================
*/
import { GET_ALL_COUNTRIES } from "../actions/types";

const initialState = {
  countries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    default:
      return state;
  }
}
