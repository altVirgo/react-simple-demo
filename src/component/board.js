
import React, { Component } from 'react';
// import Square from './square';
import * as $ from 'jquery'

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {/* {props.value || 'O'} */}
            {props.other}
        </button>
    );
}

class Board extends Component {

    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null)
        };
        this.other = Array(9).fill(0);
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]} other={this.other[i]} onClick={() => this.handleClick(i)} />;
    }


    handleClick(i) {
        debugger;
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({ squares: squares });

        this.other[i] = this.other[i] + 1;
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
        this.serverRequest = $.get('../assets/data.json', (result) => {
            debugger;
        })
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
export default Board;