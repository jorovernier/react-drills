import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  render() {
    return (
      <div className="App">
        <h2>{this.state.list[0]}</h2>
        <h2>{this.state.list[1]}</h2>
        <h2>{this.state.list[2]}</h2>
        <h2>{this.state.list[3]}</h2>
        <h2>{this.state.list[4]}</h2>
      </div>
    );
  }
}

export default App;
