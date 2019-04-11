import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';


// import {
//   Router,
//   Route,
//   IndexRoute,
//   hashHistory
// } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import Dashboard from './component/dashboard';
import About from './component/about';
import DashboardIndex from './component/dashboardIndex';
// import Inbox from './component/inbox';
import ReduxDemo from './component/ReduxDemo'
import Message from './component/message';

import addTodo from "./reducers/index";
import { Provider } from "react-redux";
import { createStore } from "redux";
let store = createStore(addTodo);
// let Link = require('react-router').Link;
const BasicExample = () => (
  <Router>
    <div>
      <ul id="top-menu">
        <li><Link to="/">App</Link></li>
        <li><Link to="/reduxDemo">reduxDemo</Link></li>
        <li><Link to="/dashboard">Dashboard</Link>
          <ul>
            <li><Link to="/dashboard/about">About</Link></li>
            <li><Link to="/dashboard/message">Message</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/message">Message</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={App} />
      <Route path="/reduxDemo" component={ReduxDemo} />
      <Route path="/dashboard" component={Dashboard}>

      </Route>
      <Route path="/about" component={About} />
      <Route path="/message" component={Message} />
    </div>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <BasicExample />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
