import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from "./Components/countries";
import Africa from "./Components/AfricanNations";
import Asia from "./Components/Asia";
import store from "./store";
import Europe from "./Components/Europe";
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
            <Route exact path="/africa" component={Africa} />
            <Route exact path="/europe" component={Europe} />
            <Route exact path="/asia" component={Asia} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
