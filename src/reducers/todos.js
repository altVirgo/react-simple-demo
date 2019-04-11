// 这是一个方法
const todo = (state, action) => {
    debugger;
    switch (action.type) {
        case "ADD_TODO":
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case "TOGGLE_TODO":
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            })
        default:
            return state;
    }
}

// 这是一个reducer 用于响应action，根据一个旧的state返回一个新的state
// reducer 必须是纯方法(只根据传入参数计算得到返回值，不能包含参数以外值参与计算，比如时间)；
// 此处的state是当前的reducer的state，区别于container中mapStateToProps的state(整个状态树)，
const todos = (state = [], action) => {
    debugger;
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                todo(state, action)
            ]
        case "TOGGLE_TODO":
            return state.map(t => todo(t, action));
        default:
            return state;
    }
}

export default todos;

