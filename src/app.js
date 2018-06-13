// React app
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
