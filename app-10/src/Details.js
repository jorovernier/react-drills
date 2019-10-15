import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            item: {}
        }
    }

    componentDidMount(){
        axios.get(`https://practiceapi.devmountain.com/products/${this.props.match.params.id}`).then(response => {
            this.setState({
                item: response.data
            })
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.item.title}</h2>
                <img width='200' src={this.state.item.image} />
                <h4>{`Price: $${this.state.item.price}.00`}</h4>

                <Link to='/'>
                    <button>Back</button>
                </Link>
            </div>
        )
    }

}