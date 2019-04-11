// import React from 'react';
import { connect } from "react-redux";
import Link from "../component/Link"
import { setVisibility } from "../actions/todo"

const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

// 等价于mapStateToProps
// const mapStateToProps = (state, ownProps) => ({
//     active: ownProps.filter === state.visibilityFilter
// })


const mapDispatchToProps = (dispatch, ownProps) => {
    debugger;
    return {
        onClick: () => {
            dispatch(setVisibility(ownProps.filter))
        }
    }
}



const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps)(Link)

export default FilterLink;