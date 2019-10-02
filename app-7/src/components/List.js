import React, { Component } from "react";
import Todo from './Todo'

export default class List extends Component {
    render(){
        let list = this.props.tasks.map((elem, index) => {
            return <Todo key={index} task={elem} />
          })
          return <div>{list}</div>
    }
}