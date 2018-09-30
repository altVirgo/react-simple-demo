import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            value: null || 'O'
        }
    }
    render() {
        return (
            <div>message</div>
        );
    }
}

export default Message;