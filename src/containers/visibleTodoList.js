// import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from "../actions/todo";
import TodoList from "../component/TodoList";

const getVisibleTodos = (todos, filter) => {
    debugger;
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed);
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
}

// mapStateToProps为固定写法，意为遍历state
// return 中可以又多个对象，对象名在作用的component中使用
const mapStateToProps = (state) => {
    debugger;
    return {
        todos11: 0,
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}
// mapDispatchToProps为固定写法，定义了需要使用到分发action的对象
// return 中可以又多个对象，对象名在作用的component中使用
const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}

// const mergeProps = (state, dispatch) => {
//     debugger;
//     console.log(arguments);
//     return state;
// }

// 将定义执行动作作为参数，传递到view层（TodoList：需要作用的component，或者对象（view片段））
const visibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default visibleTodoList;