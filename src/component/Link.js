import React from 'react';
// import { setVisibility } from "../actions/todo";

const Link = ({
    active, children, onClick
}) => {
    debugger;
    if (active) {
        return <span>{children}</span>
    } else {
        return (
            <a href="#"
                onClick={e => {
                    e.preventDefault();
                    onClick()
                }} >
                {children}
            </a>)
    }
}

export default Link;