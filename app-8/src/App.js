import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pikachu: {}
    }
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon/25').then(response => {
      this.setState({
        pikachu: response.data
      })
    })
  }

  render() {
    const { pikachu } = this.state;
    return (
      <div className="App">
       <h1>Species: {pikachu.name}</h1>
       <h1>Dex #: {pikachu.id}</h1>
       <h1>Height: {pikachu.height}</h1>
       <h1>Weight: {pikachu.weight}</h1>
      </div>
    );
  }
}

export default App;
