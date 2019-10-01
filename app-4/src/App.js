import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: '',
      passInput: ''
    }
  }

  handleChange1(val){
    this.setState({ userInput: val });
  }

  handleChange2(val){
    this.setState({ passInput: val });
  }

  alert(){
    alert("Username: " + this.state.userInput + " Password: " + this.state.passInput)
  }

  render() {
    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange1(e.target.value) }/>
        <input onChange={ (e) => this.handleChange2(e.target.value) }/>
        <button onClick={ () => this.alert(this.state.userInput, this.state.passInput)} >Login</button>
      </div>
    );
  }
}

export default App;
