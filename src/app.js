// React app
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
      </div>
    );
  }
}

export default App;
