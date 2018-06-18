import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from "./Components/countries";
import store from "./store";
import { Provider } from "react-redux";
import Landing from "./Landing";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/countries" component={Countries} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
