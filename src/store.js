// Store creation here also the combination of reducers using middleware.
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import countryReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  countryReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
