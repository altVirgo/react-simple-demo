// 只定义action（用户操作的动作），不关注执行，响应动作在reducer中实现
// type最好为必填(未强制校验,但在多个reducer分开书写时，可能出现被错误的reducer响应);
// 其他对象为响应时需要的值
let nextTodoId = 0;
export const addTodo = (text) => {
    debugger;
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        text
    }
}

export const setVisibility = (filter) => {
    debugger;
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}