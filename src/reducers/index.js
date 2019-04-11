import todos from './todos';
import visibilityFilter from "./visibityFilter";
import { combineReducers } from "redux";

// 将分开书写的reducer合并，每次执行dispatch(action)后都会每个reducer执行一次
const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp;