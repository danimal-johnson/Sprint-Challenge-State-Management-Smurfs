import React, { Component } from "react";
import Store from "../reducers/Store";
import Form from './Form';
import Village from './Village';
import "./App.css";
class App extends Component {
  render() {
    return (
      <Store>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>by Peyo(R)</div>
          <Form />
          <Village />
        </div>
      </Store>
    );
  }
}

export default App;
