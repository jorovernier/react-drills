import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(event) => this.handleChange(event.target.value)} />
        <div>{this.state.userInput}</div>
      </div>
    );
  }
}

export default App;
