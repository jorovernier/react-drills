import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: ''
    }
  }

handleChange(val){
  this.setState({ userInput: val });
}

  render() {
    let displayList = this.state.list.filter((elem, index) => {
      return elem.includes(this.state.userInput);
    }).map((elem, index) => {
      return <h2 key={index}>{elem}</h2>
    })

    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange(e.target.value) }/>
        {displayList}
      </div>
    );
  }
}

export default App;
