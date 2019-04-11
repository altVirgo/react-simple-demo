
import React from 'react';
import PropTypes from 'prop-types'
import Todo from "./Todo";

const TodoList = ({
    todos, onTodoClick
}) => {
    debugger;
    return (
        <ul>
            {/* <li>{todos11}</li> */}
            {
                todos.map(todo => {
                    debugger;
                    return (<Todo key={todo.id}{...todo} // key是一个对象，对象的id是一个唯一的标识，
                        onClick={() => onTodoClick(todo.id)} />)
                }
                )}
        </ul>
    )
}

// TodoList的参数校验 不会影响执行，如不符合校验，会在控制台抛出错误
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList