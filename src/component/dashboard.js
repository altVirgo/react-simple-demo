import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

import DashboardIndex from './dashboardIndex';
import About from './about';
import Message from './message';
class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            value: null || 'O'
        }
    }
    render() {
        return (
            <div>Dashboard{this.props.children}
                <Route exact path='/dashboard' component={DashboardIndex} />
                <Route path='/dashboard/dashboardIndex' component={DashboardIndex} />
                <Route path='/dashboard/about' component={About} />
                <Route path='/dashboard/message' component={Message} />
            </div>
        );
    }
}

export default Dashboard;