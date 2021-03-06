import React, { Component } from 'react';

class Square extends Component {
    constructor() {
        super();
        this.state = {
            value: null || 'O'
        }
    }
    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.state.value}
            </button>
        );
    }
}

export default Square;