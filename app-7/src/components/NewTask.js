import React, { Component } from "react";

export default class NewTask extends Component {
    constructor(){
        super()

        this.state = {
            input: ''
        };
    }

    updateList(value){
        this.setState({ input: value })
    }

    addThing = () => {
        this.props.add(this.state.input)
        this.setState({ input: '' })
    }

    render(){
        return(
            <div>
             <input 
                value={this.state.input}
                placeholder='Enter new task'
                onChange={(event) => this.updateList(event.target.value)}
             />

             <button onClick={this.addThing} >Add</button>
            </div>
        );
    }

}