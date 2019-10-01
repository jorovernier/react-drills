import React, { Component } from "react";
import "./App.css";
import Todo from './Todo';

class App extends Component {
  constructor(props){ 
    super(props)
    this.state = {
      list: [],
      userInput: ''
    }
    this.addItem = this.addItem.bind(this);
  }

  updateList(value){
    this.setState({ userInput: value })
  }

  addItem(){
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ''
    })
  }

  render() {
    let list = this.state.list.map((elem, index) => {
      return <Todo key={index} task={elem} />
    })

    return (
      <div className="App">
        <h1>My To-Do List:</h1>

      <div>
        <input 
        value={this.state.userInput}
        placeholder='Enter new task'
        onChange={(event) => this.updateList(event.target.value)}
        />
        <button onClick={this.addItem} >Add</button>
      </div>

      {list}
      
      </div>
    );
  }
}

export default App;
