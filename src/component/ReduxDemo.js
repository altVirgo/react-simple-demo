import React, { Component } from 'react';
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/visibleTodoList";
import Footer from "../component/Footer";

class ReduxDemo extends Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}

export default ReduxDemo;

