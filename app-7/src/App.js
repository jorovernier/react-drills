import React, { Component } from "react";
import "./App.css";
//Components
import List from './components/List';
import NewTask from './components/NewTask';

class App extends Component {
  constructor(props){ 
    super(props)

    this.state = {
      list: []
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(task){
    this.setState({
      list: [...this.state.list, task]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <NewTask add={this.addItem} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
