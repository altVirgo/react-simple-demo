import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class DashboardIndex extends Component {
    render() {
        return (
            <div className="content">
                <div className="navUl">
                    <Link to="/About" className="navList">
                        <span className="bar1"></span>
                        关于我们
                    </Link>
                    <Link to="/News" className="navList">
                        <span className="bar2"></span>
                        家装新闻
                    </Link>
                    <Link to="/Anli" className="navList">
                        <span className="bar3"></span>
                        案例展示
                    </Link>
                    <Link to="/Team" className="navList">
                        <span className="bar4"></span>
                        设计团队
                    </Link>
                </div>
            </div>
        )
    }
}

export default DashboardIndex;