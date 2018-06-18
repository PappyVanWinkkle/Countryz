import { GET_ALL_COUNTRIES } from "../actions/types";

/*
  =================================
    INITIAL STATE OF THE APPLICATION
  =================================
*/

const initialState = {
  countries: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}
