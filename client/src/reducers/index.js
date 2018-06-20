/*
  ===========================
   REDUCERS TO BE COMBINED HERE 
  ============================
*/

import { combineReducers } from "redux";
import countries from "./countriesReducer";

export default combineReducers({
  countries: countries
});
