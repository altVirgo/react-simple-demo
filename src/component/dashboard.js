import React, { Component } from 'react';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            value: null || 'O'
        }
    }
    render() {
        return (
            
            <div>Dashboard{this.props.children}</div>
        );
    }
}

export default Dashboard;